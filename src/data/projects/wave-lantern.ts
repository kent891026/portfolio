import type { Project } from "../project-types";

/** 01-Wave-pendant-Lantern 的內容；新增圖片與段落請只編輯此檔。 */
export const waveLantern: Project = {
    id: "01-Wave-pendant-Lantern",
    title: "復古波浪吊燈",
    subtitle: "Vintage Wave Pendant Lantern",
    description: "復古波浪紋理，以傳統燈籠為設計靈感，創造輕盈卻有結構強度、厚薄控制來營造光線漫射的吊燈。",
    tags: ["COMPUTATIONAL", "DESIGN", "ALGORITHM"],
    techStack: ["Rhino", "Grasshopper", "3D Printing"],
    coverImage: "/images/projects/復古波浪吊燈/復古波浪吊燈.jpg",
    galleries: [
      {
        sectionTitle: "Gallery",
        slides:[
          { src: "/images/projects/復古波浪吊燈/復古波浪吊燈場景1.png", caption: "餐廳模擬渲染" },
          { src: "/images/projects/復古波浪吊燈/復古波浪吊燈場景2.png", caption: "住家模擬渲染" },
        ],
      },
      {
        sectionTitle: "Grasshopper Program",
        slides:[
          { src: "/images/projects/復古波浪吊燈/復古波浪吊燈GH.png", caption: "餐廳模擬渲染" },
        ],
      }
    ],
    modelUrl: "/models/復古波浪吊燈.glb"
  };
