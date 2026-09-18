import type { Project } from "../project-types";

/** 01-Dispatch-mesh-Lantern 的內容；新增圖片與段落請只編輯此檔。 */
export const meshLantern: Project = {
    id: "01-Dispatch-mesh-Lantern",
    title: "網格燈罩設計",
    subtitle: "Mesh Lantern Design",
    description: "以網格結構為基礎的燈罩設計，探索非平面3D列印與結構美學的結合。",
    tags: ["COMPUTATIONAL", "DESIGN", "ALGORITHM"],
    techStack: ["Rhino", "Grasshopper", "3D Printing"],
    coverImage: "/images/projects/網格燈.png",
    galleries: [
      {
        sectionTitle: "Gallery",
        slides:[
          { src: "/images/projects/網格燈渲染.png", caption: "網格燈罩渲染圖" },
          { src: "/images/projects/網格燈建模.png", caption: "Rhino 網格拓撲建模" },
          { src: "/images/projects/網格燈建構.png", caption: "3D 列印路徑生成與建構" },
        ],
      }
    ],
    modelUrl: "/models/網格燈.glb"
  };
