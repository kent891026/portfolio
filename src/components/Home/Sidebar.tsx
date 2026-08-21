"use client";
import { siteConfig } from "@/data/siteConfig";
import { projectsData } from "@/data/projects";

export default function Sidebar() {
  // 將滾動邏輯封裝在邊欄自己裡面
  const handleScrollToId = (projectId: string) => {
    const targetIndex = projectsData.findIndex(p => p.id === projectId);
    if (targetIndex === -1) return; 
    const maxIndex = projectsData.length - 1;
    const targetProgress = maxIndex === 0 ? 0 : targetIndex / maxIndex; 
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    const targetY = scrollableHeight * targetProgress;
    window.scrollTo({ top: targetY, behavior: "smooth" });
  };

  return (
    <nav className="hidden md:block absolute right-8 md:right-12 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-10 font-mono text-[10px] tracking-[0.2em] text-gray-500">
      <div className="flex flex-col gap-5 relative">
        <div className="absolute right-[-12px] top-0 bottom-0 w-[1px] bg-white/10"></div>
        {siteConfig.sidebarCategories.map((category) => (
          <button key={category.label} onClick={() => handleScrollToId(category.targetProjectId)} className="hover:text-white transition-colors text-right pr-4 border-r-2 border-transparent hover:border-white">
            {category.label}
          </button>
        ))}
      </div>
      <div className="flex flex-col gap-5 pt-8 border-t border-white/10">
        {siteConfig.socialLinks.map((link) => (
          <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors text-right pr-4">{link.label}</a>
        ))}
      </div>
    </nav>
  );
}