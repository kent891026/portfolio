"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // 當頁面向下滾動超過 1 個螢幕高度 (100vh) 時，就顯示按鈕
      if (window.scrollY > window.innerHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={scrollToTop}
          // 稍微加深了背景的毛玻璃黑，讓它在粒子中更清晰可見
          className="fixed bottom-8 right-8 md:right-12 z-[100] font-mono text-[10px] tracking-widest text-gray-400 hover:text-white border border-gray-500/30 hover:border-white px-4 py-2 rounded-full transition-all duration-300 backdrop-blur-md bg-black/40 hover:bg-white/10"
        >
          [ ↑ TOP ]
        </motion.button>
      )}
    </AnimatePresence>
  );
}