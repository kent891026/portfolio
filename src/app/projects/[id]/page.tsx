import { projectsData } from "@/data/projects";
// 引入我們做好的所有模組積木
import NoiseOverlay from "@/components/Shared/NoiseOverlay";
import BackNav from "@/components/shared/BackNav";
import DetailHero from "@/components/ProjectDetail/DetailHero";
import TechSidebar from "@/components/ProjectDetail/TechSidebar";
import ImageGallery from "@/components/ProjectDetail/ImageGallery";
import ProjectModel from "@/components/ProjectModel";

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProjectDetail({ params }: ProjectPageProps) {
  // 伺服器端直接 await 解開參數
  const resolvedParams = await params;
  const project = projectsData.find((p) => p.id === resolvedParams.id);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#050505] text-white flex items-center justify-center font-mono p-8">
        <h1 className="text-3xl text-red-500">Oops! 專案匹配失敗</h1>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#030712] text-white font-sans relative selection:bg-[#4B88DF] selection:text-white overflow-x-hidden">
      
      {/* 1. 復古科技顆粒感濾鏡 */}
      <NoiseOverlay opacity="opacity-[0.12]" />

      {/* 2. 頂部返回導覽列 */}
      <BackNav />

      {/* 3. 專案 Hero 大圖與標題 */}
      <DetailHero project={project} />

      {/* 4. 主要內文與細節區塊 */}
      <section className="relative z-10 max-w-5xl mx-auto px-8 py-20 flex flex-col md:flex-row gap-20">
        
        {/* 左側內容區 */}
        <div className="w-full md:w-2/3">
          <h3 className="text-gray-500 font-mono text-sm tracking-widest mb-8 uppercase border-b border-white/10 pb-4">
            System Overview
          </h3>
          <p className="text-gray-300 text-lg leading-relaxed mb-16 tracking-wide text-justify">
            {project.description}
          </p>
          
          {/* 3D 模型互動展示塊 (有設定 url 才會出現) */}
          {project.modelUrl && (
            <ProjectModel modelPath={project.modelUrl} projectTitle={project.title} />
          )}

          {/* 靜態多圖相簿塊 */}
          <ImageGallery images={project.galleryImages} />
        </div>

        {/* 右側邊欄區 (連結與技術棧) */}
        <div className="w-full md:w-1/3">
          <TechSidebar project={project} />
        </div>

      </section>
    </main>
  );
}