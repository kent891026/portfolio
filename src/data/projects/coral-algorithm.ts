import type { Project } from "../project-types";

/** 02-algorithm-design 的內容；新增圖片與段落請只編輯此檔。 */
export const coralAlgorithm: Project = {
    id: "02-algorithm-design",
    title: "珊瑚生長演算法設計與資料結構實作",
    subtitle: "Algorithmic Design & Data Structure Implementation",
    description: "探討珊瑚的生長演算法可能性與資料結構的實作，應用於 Grasshopper 設計生成的各種問題的模擬與解決，並建構出適合用於製造合理化的具資料之模型",
    tags: ["ALGORITHM", "DATA STRUCTURE", "COMPUTATIONAL"],
    techStack: ["C#", "Python", "Rhino", "Grasshopper"],
    coverImage: "/images/projects/珊瑚演算法改進.png",
    galleries: [
      {
        sectionTitle: "Grasshopper Construction",
        slides:[
          { src: "/images/projects/珊瑚演算法建構.png", caption: "珊瑚演算法建構過程" },
        ],
      },
      {
        sectionTitle: "C# Script",
        slides:[
          { src: "/images/projects/carbon.png", caption: "C# 程式碼" }
        ],
      }
    ],
  };
