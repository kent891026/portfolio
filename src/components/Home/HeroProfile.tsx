"use client";
import { motion } from "framer-motion";
import { siteConfig } from "@/data/siteConfig";

// 🔥 專屬的「訊號干擾 (Glitch)」文字組件
const GlitchText = ({ text, className }: { text: string; className?: string }) => {
  return (
    <div className={`relative inline-block ${className}`}>
      {/* 主要顯示的乾淨文字 */}
      <span className="relative z-10">{text}</span>
      
      {/* 藍色色散干擾層 */}
      <motion.span
        aria-hidden="true"
        className="absolute top-0 left-0 z-0 text-[#0B346E] opacity-70 mix-blend-screen"
        animate={{
          x: [0, -3, 0, 2, 0, -2, 0],
          y: [0, 1, 0, -1, 0, 1, 0],
          clipPath: [
            "inset(20% 0 80% 0)",
            "inset(60% 0 10% 0)",
            "inset(10% 0 60% 0)",
            "inset(80% 0 5% 0)",
            "inset(40% 0 50% 0)",
            "inset(0% 0 0% 0)"
          ]
        }}
        // repeatDelay: 3 代表每安靜 3 秒，才閃爍一次 (0.8秒)，營造高級的克制感
        transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 3 }}
      >
        {text}
      </motion.span>

      {/* 紅色色散干擾層 */}
      <motion.span
        aria-hidden="true"
        className="absolute top-0 left-0 z-0 text-red-500 opacity-60 mix-blend-screen"
        animate={{
          x: [0, 3, 0, -2, 0, 2, 0],
          clipPath: [
            "inset(80% 0 5% 0)",
            "inset(10% 0 60% 0)",
            "inset(50% 0 30% 0)",
            "inset(20% 0 80% 0)",
            "inset(60% 0 10% 0)",
            "inset(0% 0 0% 0)"
          ]
        }}
        transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 3.2 }}
      >
        {text}
      </motion.span>
    </div>
  );
};

export default function HeroProfile() {
  return (
    // ✨ 將手機版改為 relative 並加上內距 (pt, px, pb)，電腦版保持 absolute
    <div className="relative md:absolute pt-[15vh] md:pt-0 md:top-[15vh] px-8 md:px-0 md:left-[12vw] z-10 pointer-events-auto max-w-3xl pb-12 md:pb-0">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }}>
        {/* ⭐ 標題升級：手機縮小為 text-2xl，並稍微縮小字距防止爆框 */}
        <h1 
          className="text-2xl md:text-7xl mb-4 tracking-wider md:tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500 drop-shadow-sm pb-1 whitespace-nowrap"
          style={{ fontFamily: 'var(--font-noto-serif-tc), serif', fontWeight: 500 }}
        >
          陳致穎 Kent Chen.
        </h1>
        
        {/* ⭐ 副標題升級：手機縮小為 text-[9px] */}
        <div className="mb-8">
          <GlitchText 
            text={siteConfig.profile.tagline} 
            className="text-gray-400 font-mono text-[9px] md:text-sm tracking-[0.1em] md:tracking-[0.2em] uppercase"
          />
        </div>
        
        {/* 簡介文字 */}
        <div className="text-gray-300 leading-relaxed space-y-4 text-sm mb-10">
          {siteConfig.aboutText.map((text, i) => (
            <p key={i} className={i === siteConfig.aboutText.length - 1 ? "text-gray-500 font-mono text-xs mt-6" : ""}>
              {text}
            </p>
          ))}
        </div>

        {/* Capabilities & Journey 資訊儀表板 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10 border-t border-white/10 pt-8">
          
          {/* 左側：Capabilities */}
          <div>
            <h3 className="text-gray-500 font-mono text-[10px] tracking-widest mb-4 uppercase">Capabilities</h3>
            {/* ✨ 把 text-[10px] 改成 text-[9px] md:text-[10px] */}
            <div className="flex flex-col gap-2 font-mono text-[9px] md:text-[10px] tracking-wide md:tracking-wider">
              {/* ... 中間的 Software, Hardware 等維持不變 ... */}
              <div className="flex gap-2">
                <span className="text-[#0B346E] whitespace-nowrap">[ Software ]</span>
                <span className="text-gray-400">Python, C, C++, C#, Adobe, Rhino GH</span>
              </div>
              <div className="flex gap-2">
                <span className="text-[#0B346E] whitespace-nowrap">[ Hardware ]</span>
                <span className="text-gray-400">KUKA iiwa, FDM 3D Printer</span>
              </div>
              <div className="flex gap-2">
                <span className="text-[#0B346E] whitespace-nowrap">[ AI ]</span>
                <span className="text-gray-400">PyTorch, YOLOv8, OpenCV, ByteTrack, MiDaS</span>
              </div>
            </div>
          </div>

          {/* 右側：Journey */}
          <div>
            <h3 className="text-gray-500 font-mono text-[10px] tracking-widest mb-4 uppercase">Journey</h3>
            {/* ✨ 同樣把 text-[10px] 改成 text-[9px] md:text-[10px] */}
            <div className="flex flex-col gap-2 font-mono text-[9px] md:text-[10px] tracking-wide md:tracking-wider relative border-l border-white/10 pl-3">
              {/* ... 中間的 2026, 2025 年份內容維持不變 ... */}
              <div className="relative">
                <span className="absolute -left-[15px] top-1.5 w-1.5 h-1.5 rounded-full bg-[#0B346E] shadow-[0_0_8px_rgba(75,136,223,0.8)]"></span>
                <span className="text-[#0B346E] mr-2">2026</span>
                <span className="text-gray-300">AI Deep Learning & Web Development</span>
              </div>
              <div className="relative">
                <span className="absolute -left-[15px] top-1.5 w-1.5 h-1.5 rounded-full bg-white/20"></span>
                <span className="text-white/40 mr-2">2025</span>
                <span className="text-gray-500">parametric Design & Digital Fabrication</span>
              </div>
              <div className="relative">
                <span className="absolute -left-[15px] top-1.5 w-1.5 h-1.5 rounded-full bg-white/20"></span>
                <span className="text-white/40 mr-2">2024</span>
                <span className="text-gray-500">Architecture & Interior Design</span>
              </div>
            </div>
          </div>

        </div>

        {/* 下載 CV 按鈕 */}
        <a 
          href={siteConfig.profile.cvDownloadUrl} 
          download 
          className="inline-block border-b border-[#5e6573]/50 hover:border-[#0B346E] pb-1 transition-colors cursor-pointer text-xs font-mono tracking-widest text-[#0B346E] hover:text-white"
        >
          DOWNLOAD CV
        </a>
      </motion.div>
    </div>
  );
}