
"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function ScrollIndicator() {
  // 取得全域的滾動進度 (0 到 1)
  const { scrollYProgress } = useScroll();

  // 當滾動超過 5% 時，隱藏「向下滾動」的文字提示
  const opacity = useTransform(scrollYProgress, [0, 0.02], [1, 0]);

  return (
    <>
      {/* 1. 螢幕底部的「向下滾動」動態提示 */}
      <motion.div 
        style={{ opacity }}
        className="fixed bottom-12 left-8 md:left-12 flex flex-col items-start gap-3 z-40 pointer-events-none"
      >
        <div className="w-[1px] h-12 bg-white/10 relative overflow-hidden ml-1">
          <motion.div 
            className="w-full h-1/2 bg-[#0B346E]"
            animate={{ top: ["-50%", "150%"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            style={{ position: "absolute" }}
          />
        </div>
        <span className="text-gray-500 font-mono text-[9px] tracking-[0.3em] uppercase rotated-text" style={{ writingMode: 'vertical-rl' }}>
          Scroll Down
        </span>
      </motion.div>

      {/* 2. 螢幕左側的極細滾動進度條 (資工感細節) */}
      <div className="fixed top-0 left-0 w-[2px] h-screen bg-white/5 z-50">
        <motion.div 
          className="w-full bg-[#0B346E]"
          style={{ 
            height: "100vh",
            scaleY: scrollYProgress,
            transformOrigin: "top"
          }} 
        />
      </div>
    </>
  );
}