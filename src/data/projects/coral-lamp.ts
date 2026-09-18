import type { Project } from "../project-types";

/** 01-coral-algorithm 的內容；新增圖片與段落請只編輯此檔。 */
export const coralLamp: Project = {
    id: "01-coral-algorithm",
    title: "模擬珊瑚生長參數化設計燈罩",
    subtitle: "Parametric Coral Lamp Design",
    description: "純演算法與資料結構生成的複雜空間結構",
    tags: ["COMPUTATIONAL", "DESIGN", "ALGORITHM"],
    techStack: ["Rhino", "Grasshopper", "3D Printing"],
    coverImage: "/images/projects/珊瑚燈.jpg",
    galleries: [
      {
        sectionTitle: "Project Gallery",
        slides: [
          { src: "/images/projects/珊瑚燈渲染.png", caption: "參數化生成的珊瑚燈渲染效果" },
          { src: "/images/projects/珊瑚燈建構.png", caption: "Grasshopper 邏輯建構過程" }
        ]
      }
    ],
    liveUrl: "https://makerworld.com/zh/models/1764760-parametric-coral-lampshade-for-ikea-tarnaby?from=search#profileId-1877891",
    modelUrl: "/models/珊瑚燈.glb"
  };
