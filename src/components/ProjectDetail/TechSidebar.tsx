import { Project } from "@/data/projects";
import { Code, Globe, FileText } from "lucide-react"; 

export default function TechSidebar({ project }: { project: Project }) {
  return (
    <div className="sticky top-32 p-8 border border-white/10 rounded-2xl bg-white/[0.02] backdrop-blur-xl shadow-2xl shadow-black/50">
      
      {/* 外部連結區：極簡 Icon 陣列 */}
      {(project.githubUrl || project.liveUrl || project.paperUrl) && (
        <div className="mb-12">
          <h3 className="text-gray-500 font-mono text-xs tracking-widest mb-6 uppercase">Resources</h3>
          <div className="flex flex-wrap gap-4">
            
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" title="Source Code"
                 className="p-3 border border-white/10 rounded-full text-gray-400 hover:text-white hover:border-[#4B88DF] hover:bg-[#4B88DF]/10 transition-all duration-300">
                <Code size={18} strokeWidth={1.5} />
              </a>
            )}
            
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" title="Live Demo"
                 className="p-3 border border-white/10 rounded-full text-gray-400 hover:text-white hover:border-[#4B88DF] hover:bg-[#4B88DF]/10 transition-all duration-300">
                <Globe size={18} strokeWidth={1.5} />
              </a>
            )}

            {project.paperUrl && (
              <a href={project.paperUrl} target="_blank" rel="noopener noreferrer" title="Research Paper"
                 className="p-3 border border-white/10 rounded-full text-gray-400 hover:text-white hover:border-emerald-500 hover:bg-emerald-500/10 transition-all duration-300">
                <FileText size={18} strokeWidth={1.5} />
              </a>
            )}
          </div>
        </div>
      )}

      {/* Tech Stack 標籤 */}
      <h3 className="text-gray-500 font-mono text-xs tracking-widest mb-6 uppercase">Tech Stack</h3>
      <div className="flex flex-wrap gap-2 mb-10">
        {project.techStack.map(tech => (
          <span key={tech} className="bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg text-gray-300 font-mono text-[11px]">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}