"use client";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Project } from "@/data/projects";
import { noiseSvg } from "@/components/Shared/NoiseOverlay";

interface ModalProps {
  selectedProject: Project | null;
  setSelectedProject: (project: Project | null) => void;
}

export default function ProjectModal({ selectedProject, setSelectedProject }: ModalProps) {
  return (
    <AnimatePresence>
      {selectedProject && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 pointer-events-auto">
          
          {/* 背景遮罩 */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-xl cursor-pointer" onClick={() => setSelectedProject(null)} />
          
          <motion.div 
            initial={{ y: 50, scale: 0.95, opacity: 0 }} 
            animate={{ y: 0, scale: 1, opacity: 1 }} 
            exit={{ y: 20, scale: 0.95, opacity: 0 }} 
            transition={{ type: "spring", damping: 25, stiffness: 300 }} 
            // ✨ 修改 1: 高度自適應 max-h-[85vh]，讓內容有喘息空間
            className="relative w-full max-w-5xl h-[85vh] md:h-[80vh] bg-[#030712] border border-[#4B88DF]/20 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl shadow-[#4B88DF]/10 flex flex-col md:flex-row"
          >
            <div className="absolute inset-0 z-0 opacity-[0.1] mix-blend-overlay pointer-events-none" style={{ backgroundImage: noiseSvg }} />

            {/* ✨ 修改 2: 強制保留手機版圖片高度 (h-48 shrink-0)，不讓它被底下的文字擠扁 */}
            <div className="w-full md:w-1/2 h-48 md:h-full shrink-0 relative z-10">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${selectedProject.coverImage})` }} />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#030712] hidden md:block" />
              {/* 微調手機版底部漸層，讓圖片與下方文字區融合得更自然 */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/60 to-transparent md:hidden" />
              
              {/* ✨ 修改 3: 把關閉按鈕移到圖片右上角，並加上半透明黑底防誤觸 */}
              <button 
                onClick={() => setSelectedProject(null)} 
                className="absolute top-4 right-4 md:top-8 md:right-8 w-8 h-8 flex items-center justify-center bg-black/40 md:bg-transparent rounded-full text-white/60 hover:text-white transition-colors backdrop-blur-sm md:backdrop-blur-none"
              >
                ✕
              </button>
            </div>

            {/* ✨ 修改 4: 文字區塊改為可滑動 (overflow-y-auto)，並縮小 Padding (p-6) */}
            <div className="w-full md:w-1/2 flex-1 p-6 md:p-14 flex flex-col relative z-10 overflow-y-auto">
              
              <span className="text-[#4B88DF] font-mono text-[9px] md:text-[10px] tracking-widest mb-3 uppercase">
                {selectedProject.tags.join(" / ")}
              </span>
              
              {/* ✨ 修改 5: 標題與副標題縮小 (text-2xl) */}
              <h2 className="text-2xl md:text-5xl font-serif mb-2 md:mb-4 leading-tight text-gray-100">
                {selectedProject.title}
              </h2>
              <p className="text-gray-400 font-mono text-[10px] md:text-sm mb-6 md:mb-8">
                {selectedProject.subtitle}
              </p>
              
              {/* ✨ 修改 6: 內文縮小為 text-xs */}
              <p className="text-gray-300 leading-relaxed mb-8 md:mb-10 text-xs md:text-base text-justify">
                {selectedProject.description}
              </p>
              
              <div className="mt-auto">
                <p className="text-[9px] md:text-[11px] text-gray-500 font-mono mb-4 md:mb-6 leading-relaxed">
                  [ TECH ] <br className="md:hidden" /> 
                  <span className="text-gray-400">{selectedProject.techStack.join(" + ")}</span>
                </p>
                
                {/* ✨ 修改 7: 按鈕在手機版改為寬度滿版 (w-full)，並縮小高度與圓角 */}
                <Link href={`/projects/${selectedProject.id}`} className="block w-full">
                  <button className="w-full md:w-auto bg-transparent hover:bg-[#4B88DF]/10 border border-[#4B88DF]/40 text-white px-6 py-3 md:px-8 md:py-3 rounded-xl md:rounded-full font-mono text-[10px] md:text-xs tracking-widest transition-all duration-300 hover:shadow-[0_0_15px_rgba(75,136,223,0.3)]">
                    VIEW FULL PROJECT ➝
                  </button>
                </Link>
              </div>
              
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}