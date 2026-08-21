import { projectsData } from "@/data/projects";
// 引入我們做好的所有模組積木
import NoiseOverlay from "@/components/Shared/NoiseOverlay";
import BackNav from "@/components/Shared/BackNav";
import DetailHero from "@/components/ProjectDetail/DetailHero";
import TechSidebar from "@/components/ProjectDetail/TechSidebar";
import ImageSlider from "@/components/ProjectDetail/ImageSlider";
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

          {/* ✨ 修改 text-lg 為 text-xs md:text-lg，並調整手機版行距 */}
          <p className="whitespace-pre-wrap text-gray-300 text-xs md:text-lg leading-loose md:leading-relaxed mb-16 tracking-wide text-justify">
            {project.description}
          </p>
          
          {/* 3D 模型互動展示塊 (有設定 url 才會出現) */}
          {project.modelUrl && (
            <ProjectModel modelPath={project.modelUrl} projectTitle={project.title} />
          )}

          {/* ✨ 動態渲染：根據資料庫的 galleries 自動長出畫廊區塊 */}
          {project.galleries && project.galleries.length > 0 && (
            <div className="mt-12 flex flex-col gap-16">
              
              {project.galleries.map((gallery, index) => (
                <div key={index} className="w-full">
                  <h3 className="text-gray-500 font-mono text-sm tracking-widest mb-6 uppercase border-b border-white/10 pb-4">
                    {/* 印出每個區塊的自訂標題，例如 Architecture Drawings 或 Model */}
                    {gallery.sectionTitle}
                  </h3>
                  
                  {/* 將這一個區塊專屬的 slides 傳給幻燈片 */}
                  <ImageSlider slides={gallery.slides} />
                </div>
              ))}

            </div>
          )}
        </div>

        {/* 右側邊欄區 (連結與技術棧) */}
        <div className="w-full md:w-1/3">
          <TechSidebar project={project} />
        </div>

      </section>
    </main>
  );
}