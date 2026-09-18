"use client";
import { motion } from "framer-motion";
import VisitorCount from "./VisitorCount";

export default function TopHeader() {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 1, delay: 0.5 }}
      // 手機版 flex-col (垂直)，電腦版 md:flex-row (水平)
      className="absolute top-6 left-[5vw] md:left-12 z-50 flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-6 font-mono text-[10px] tracking-widest text-gray-500 uppercase"
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
        <VisitorCount />
      </div>
    </motion.header>
  );
}
