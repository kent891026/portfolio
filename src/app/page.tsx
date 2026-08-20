
"use client";

import { useRef, useState, useEffect } from "react";
import { useScroll, useTransform, useSpring } from "framer-motion";
import { projectsData, Project } from "@/data/projects";

// 📦 引入我們剛剛建立的所有「樂高積木」組件
import NoiseOverlay from "@/components/Shared/NoiseOverlay";
import BackToTop from "@/components/Shared/BackToTop";
import BinaryBackground from "@/components/Home/BinaryBackground";
import ScrollIndicator from "@/components/Home/ScrollIndicator";
import TopHeader from "@/components/Home/TopHeader";
import Sidebar from "@/components/Home/Sidebar";
import HeroProfile from "@/components/Home/HeroProfile";
import ProjectCarousel from "@/components/Home/ProjectCarousel";
import ProjectModal from "@/components/Home/ProjectModal";

export default function Home() {
  // 1. 取得 DOM 節點參考，用來計算滾動深度
  const targetRef = useRef<HTMLDivElement>(null);
  
  // 2. 核心狀態：滾動進度與目前選中的專案
  const { scrollYProgress } = useScroll({ target: targetRef });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // 3. 處理底層摩天輪的旋轉數學邏輯
  const anglePerCard = 15;
  const totalAngle = (projectsData.length - 1) * anglePerCard;
  const rawRotate = useTransform(scrollYProgress, [0, 1], [0, -totalAngle]);
  const rotate = useSpring(rawRotate, { stiffness: 60, damping: 20 });

  // 4. 鎖定背景滾動：當開啟毛玻璃彈窗時，禁止背景滑動
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    // Cleanup 函數：離開組件時解鎖
    return () => { document.body.style.overflow = "auto"; };
  }, [selectedProject]);

  // 5. 極致乾淨的 UI 渲染區塊
  return (
    <main ref={targetRef} className="h-[400vh] bg-[#050505] text-white overflow-clip font-sans relative">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        
        {/* --- Layer 1: 底層背景與特效 --- */}
        <NoiseOverlay />
        <BinaryBackground />
        
        {/* --- Layer 2: 滾動提示與進度條 --- */}
        <TopHeader />
        <BackToTop />
        <ScrollIndicator />

        {/* --- Layer 3: 靜態資訊區塊 --- */}
        <Sidebar />
        <HeroProfile />

        {/* --- Layer 4: 動態互動區塊 --- */}
        <ProjectCarousel rotate={rotate} setSelectedProject={setSelectedProject} />
        <ProjectModal selectedProject={selectedProject} setSelectedProject={setSelectedProject} />

      </div>
    </main>
  );
}