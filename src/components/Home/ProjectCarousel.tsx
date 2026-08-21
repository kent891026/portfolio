"use client";
import { motion, MotionValue } from "framer-motion";
import { projectsData, Project } from "@/data/projects";
import { noiseSvg } from "@/components/Shared/NoiseOverlay";

interface CarouselProps {
  rotate: MotionValue<string>;
  setSelectedProject: (project: Project) => void;
}

export default function ProjectCarousel({ rotate, setSelectedProject }: CarouselProps) {
  const anglePerCard = 15;

  return (
    <>
      {/* =========================================
          ⭐ 電腦版：旋轉摩天輪 (加上 hidden md:block) 
          ========================================= */}
      <motion.div className="hidden md:block absolute left-1/2 top-[200vh] w-0 h-0 z-20 pointer-events-auto" style={{ rotate }}>
        {projectsData.map((project, index) => {
          const angle = index * anglePerCard;
          const radius = index % 2 === 0 ? "-135vh" : "-140vh";

          return (
            <div 
              key={project.id} 
              className="absolute left-0 top-0" 
              style={{ 
                transform: `rotate(${angle}deg) translateY(${radius}) translateX(-50%)`, 
                transformOrigin: "0 0" 
              }}
            >
              <div 
                onClick={() => setSelectedProject(project)}
                className="group w-[380px] h-[540px] border border-white/5 rounded-2xl p-8 flex flex-col justify-between cursor-pointer transition-all duration-700 ease-out backdrop-blur-md relative overflow-hidden opacity-30 hover:opacity-100 hover:scale-[1.03] hover:border-[#4B88DF]/40 hover:shadow-[0_0_40px_rgba(75,136,223,0.15)] hover:-translate-y-4"
              >
                <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-70 transition-opacity duration-700 bg-cover bg-center" style={{ backgroundImage: `url(${project.coverImage})` }} />
                <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#050505]/90 via-[#050505]/70 to-[#020a14]/95 group-hover:from-[#0a1f3a]/60 group-hover:to-[#030712]/90 transition-colors duration-700" />
                <div className="absolute inset-0 z-0 opacity-[0.15] mix-blend-overlay pointer-events-none" style={{ backgroundImage: noiseSvg }} />

                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <span className="text-gray-600 font-mono text-xl group-hover:text-blue-200 transition-colors duration-500">{String(index + 1).padStart(2, '0')}</span>
                      <span className="text-[9px] uppercase tracking-widest border border-white/10 px-2 py-1 rounded-full text-gray-500 group-hover:border-blue-400/30 group-hover:text-blue-200 transition-all duration-500 group-hover:bg-[#0B346E]/10">{project.tags[0]}</span>
                    </div>
                    <h2 className="text-3xl font-serif mb-2 leading-tight text-gray-400 group-hover:text-white transition-colors duration-500">{project.title}</h2>
                    <p className="text-xs text-gray-600 font-mono mb-4 group-hover:text-blue-200/70 transition-colors duration-500">{project.subtitle}</p>
                  </div>
                  <div className="border-t border-white/5 pt-4 mt-auto group-hover:border-white/20 transition-colors duration-500">
                    <p className="text-[10px] text-gray-600 font-mono leading-relaxed group-hover:text-gray-300 transition-colors duration-500">[ TECH ] {project.techStack.join(" + ")}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </motion.div>

      {/* =========================================
          ⭐ 手機版：直列式選單 
          ========================================= */}
      <div className="flex md:hidden flex-col gap-4 w-full px-8 mt-4 pb-32 relative z-50 pointer-events-auto">
        <h2 className="text-[10px] text-gray-500 font-mono tracking-[0.2em] uppercase mb-4 border-b border-white/10 pb-2">
          Selected Works
        </h2>
        
        {projectsData.map((project) => (
          <div 
            key={project.id} 
            onClick={() => setSelectedProject(project)}
            // ✨ 加上 relative 與 overflow-hidden，確保背景圖不會超出去
            className="group relative overflow-hidden flex flex-col gap-3 p-5 rounded-xl border border-white/5 active:scale-[0.98] transition-transform cursor-pointer"
          >
            {/* ✨ 卡片底圖：使用 20% 的微弱透明度 */}
            <div 
              className="absolute inset-0 z-0 opacity-20 bg-cover bg-center transition-opacity group-active:opacity-40" 
              style={{ backgroundImage: `url(${project.coverImage})` }} 
            />
            {/* ✨ 漸層保護層：確保圖片不會干擾到白色文字的閱讀 */}
            <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#030712]/90 via-[#030712]/60 to-[#030712]/80" />

            {/* ✨ 原本的文字：必須加上 relative z-10 才會浮在圖片上層 */}
            <div className="relative z-10 flex justify-between items-center">
              <span className="text-white/90 text-sm font-serif tracking-wider drop-shadow-md">
                {project.title}
              </span>
              <span className="text-gray-500 text-lg">→</span>
            </div>
            <span className="relative z-10 text-gray-400 text-[10px] font-mono uppercase tracking-widest">
              {project.tags?.[0]}
            </span>
          </div>
        ))}
      </div>
    </>
  );
}