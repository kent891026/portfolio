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
    <motion.div className="absolute left-1/2 top-[200vh] w-0 h-0 z-20 pointer-events-auto" style={{ rotate }}>
      {projectsData.map((project, index) => {
        const angle = index * anglePerCard;
        
        // ⭐ 破壞僵硬感的關鍵：交錯的高度 (Staggered Radius)
        // 偶數卡片高度為 -135vh，奇數卡片高度為 -140vh，產生高低錯落的視覺
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
              // ⭐ 稍微修飾比例：將寬度從 400px 微調至 380px，讓它顯得更修長優雅
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
  );
}