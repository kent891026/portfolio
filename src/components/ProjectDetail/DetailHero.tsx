
import { Project } from "@/data/projects";

export default function DetailHero({ project }: { project: Project }) {
  return (
    <header className="relative w-full h-[60vh] md:h-[70vh] flex flex-col justify-end p-8 md:p-20 overflow-hidden">
      {/* 滿版背景大圖 */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-40 scale-105" 
        style={{ backgroundImage: `url(${project.coverImage})` }} 
      />
      {/* 漸層遮罩 */}
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#030712] via-[#030712]/60 to-transparent" />
      
      {/* 文字內容區塊 */}
      <div className="relative z-10 max-w-5xl w-full mx-auto">
        <div className="flex gap-4 mb-6">
          {project.tags.map((tag) => (
            <span key={tag} className="text-[#4B88DF] border border-[#4B88DF]/30 bg-[#4B88DF]/10 px-3 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase">
              {tag}
            </span>
          ))}
        </div>
        <h1 className="text-5xl md:text-7xl font-serif mb-4 leading-tight drop-shadow-lg">
          {project.title}
        </h1>
        <p className="text-xl md:text-2xl text-[#4B88DF] font-mono opacity-80">
          {project.subtitle}
        </p>
      </div>
    </header>
  );
}