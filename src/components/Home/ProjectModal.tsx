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
          <div className="absolute inset-0 bg-black/60 backdrop-blur-xl cursor-pointer" onClick={() => setSelectedProject(null)} />
          <motion.div initial={{ y: 50, scale: 0.95, opacity: 0 }} animate={{ y: 0, scale: 1, opacity: 1 }} exit={{ y: 20, scale: 0.95, opacity: 0 }} transition={{ type: "spring", damping: 25, stiffness: 300 }} className="relative w-full max-w-5xl h-[80vh] bg-[#030712] border border-[#4B88DF]/20 rounded-3xl overflow-hidden shadow-2xl shadow-[#4B88DF]/10 flex flex-col md:flex-row">
            
            <div className="absolute inset-0 z-0 opacity-[0.1] mix-blend-overlay pointer-events-none" style={{ backgroundImage: noiseSvg }} />

            <div className="w-full md:w-1/2 h-64 md:h-full relative z-10">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${selectedProject.coverImage})` }} />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#030712] hidden md:block" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030712] to-transparent md:hidden" />
            </div>
            <div className="w-full md:w-1/2 h-full p-8 md:p-14 flex flex-col justify-center relative z-10">
              <button onClick={() => setSelectedProject(null)} className="absolute top-8 right-8 text-white/40 hover:text-white transition-colors">✕</button>
              <span className="text-[#0B346E] font-mono text-[10px] tracking-widest mb-4 uppercase">{selectedProject.tags.join(" / ")}</span>
              <h2 className="text-4xl md:text-5xl font-serif mb-4 leading-tight text-gray-100">{selectedProject.title}</h2>
              <p className="text-gray-400 font-mono text-sm mb-8">{selectedProject.subtitle}</p>
              <p className="text-gray-300 leading-relaxed mb-10 text-sm md:text-base line-clamp-4">{selectedProject.description}</p>
              <div className="mt-auto">
                <p className="text-[11px] text-gray-500 font-mono mb-6">[ TECH ] {selectedProject.techStack.join(" + ")}</p>
                <Link href={`/projects/${selectedProject.id}`}>
                  <button className="bg-transparent hover:bg-[#4B88DF]/10 border border-[#4B88DF]/40 text-white px-8 py-3 rounded-full font-mono text-xs tracking-widest transition-all duration-300 hover:shadow-[0_0_15px_rgba(75,136,223,0.3)]">
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