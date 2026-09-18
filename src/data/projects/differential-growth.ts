import type { Project } from "../project-types";

/** 02-differential-growth 的內容；新增圖片與段落請只編輯此檔。 */
export const differentialGrowth: Project = {
    id: "02-differential-growth",
    title: "微分生長的仿生拓樸演算",
    subtitle: "Geometric Experiments in Differential Growth Algorithms",
    description: "探討在自然界中分裂與生長的有機過程，以 Dynamic Remeshing, Laplacian Smoothing 轉譯為可受控的幾何形態。讓網格在空間中因應內部拉力與邊界碰撞，自然推擠出連續皺褶的具象軌跡。\n",
    tags: ["ALGORITHM", "DATA STRUCTURE", "COMPUTATIONAL"],
    techStack: ["C#", "Rhino", "Grasshopper"],
    coverImage: "/images/projects/微分生長/微分生長.png",
    galleries: [
      {
        sectionTitle: "Gallery",
        slides:[
          { src: "/images/projects/微分生長/微分生長模型.png", caption: "珊瑚演算法建構過程" },
        ],
      },
      {
        sectionTitle: "Grasshopper Construction",
        slides:[
          { src: "/images/projects/微分生長/微分生長GH.png", caption: "珊瑚演算法建構過程" },
        ],
      },
      {
        sectionTitle: "C# Script",
        slides:[
          { src: "/images/projects/微分生長/微分生長代碼.png", caption: "珊瑚演算法建構過程" },
        ],
      }
    ],
  };
