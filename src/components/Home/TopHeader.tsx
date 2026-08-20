"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function TopHeader() {
  // 狀態：儲存純粹的六位數字 (預設先顯示虛線，等待 API 載入)
  const [viewCount, setViewCount] = useState<string>("------");

  useEffect(() => {
    // 呼叫免費的開源計數 API，namespace 使用你的專案名稱
    fetch("https://api.counterapi.dev/v1/kent-portfolio/homepage/up")
      .then((res) => res.json())
      .then((data) => {
        // 將數字轉為字串，並在前面補 0 直到滿 6 位數 (例如 42 變成 000042)
        setViewCount(String(data.count).padStart(6, "0"));
      })
      .catch(() => {
        // 萬一 API 斷線的備用顯示
        setViewCount("000000");
      });
  }, []);

  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 1, delay: 0.5 }}
      className="absolute top-8 left-8 md:left-12 z-50 flex flex-wrap items-center gap-4 md:gap-6 font-mono text-[10px] tracking-widest text-gray-500 uppercase"
    >
      <a href="mailto:kent891026@gmail.com" className="hover:text-[#4B88DF] transition-colors border-b border-transparent hover:border-[#4B88DF] pb-1">
        kent891026@gmail.com
      </a>
      
      <span className="opacity-30 hidden md:inline">|</span>
      <span className="hidden md:inline">Keelung, Taiwan</span>
      
      <span className="opacity-30 hidden md:inline">|</span>
      <span className="text-gray-400">Available for 2026/2027</span>
      
      {/* ⭐ 復古科技感的純粹數字計數器 */}
      <span className="opacity-30 hidden md:inline">|</span>
      <div className="flex items-center gap-2 group cursor-default">
        <span className="w-1.5 h-1.5 rounded-full bg-[#4B88DF]/50 group-hover:bg-[#4B88DF] group-hover:shadow-[0_0_8px_rgba(75,136,223,0.8)] transition-all"></span>
        <span className="text-gray-400 group-hover:text-white transition-colors">
          {viewCount}
        </span>
      </div>
    </motion.header>
  );
}