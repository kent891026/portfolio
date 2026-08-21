import ModelLoader from "@/components/ProjectModel/ModelLoader";
import { section } from "framer-motion/client";
import { Sliders } from "lucide-react";
import { Architects_Daughter } from "next/font/google";

// ✨ 新增一個定義「畫廊區塊」的結構
export interface GallerySection {
  sectionTitle: string;
  slides: { src: string; caption: string }[];
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  techStack: string[];

  // ✨ 新增共同作者欄位 (加上 ? 代表不是每個專案都有)
  collaborator?: string;
  advisor?: string;

  modelUrl?: string;
  // 擴充：封面圖與內頁多圖陣列
  coverImage: string; 
  galleries?: GallerySection[];
  
  // 擴充：相關連結
  githubUrl?: string; // 程式碼連結
  liveUrl?: string;   // 實體網站或影片展示連結
}

export const projectsData: Project[] = [
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
    id: "02-differential-growth",
    title: "微分生長的仿生拓樸演算",
    subtitle: "Geometric Experiments in Differential Growth Algorithms",
    description: "探討在自然界中分裂與生長的有機過程，以 Dynamic Remeshing, Laplacian Smoothing 轉譯為可受控的幾何形態。讓網格在空間中因應內部拉力與邊界碰撞，自然推擠出連續皺褶的具象軌跡。\n",
    tags: ["ALGORITHM", "DATA STRUCTURE", "COMPUTATIONAL"],
    techStack: ["C#", , "Rhino", "Grasshopper"],
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
  },
  {
    id: "03-bee-tracking-ai",
    title: "蜜蜂行為 AI 追蹤模擬",
    subtitle: "Machine Vision & Behavior Tracking",
    description: "專注於機器視覺與行為模擬的人工智慧專案。透過建立影像識別模型來克服小型目標特徵捕捉的困難，精準追蹤蜜蜂的移動軌跡，為空間行為分析與複雜系統模擬提供數據基礎。",
    tags: ["AI", "COMPUTER VISION"],
    techStack: ["Python", "TensorFlow", "Keras", "OpenCV"],
    coverImage: "/images/projects/bee.jpg",
    paperUrl: "/files/Simulation_of_Apis_mellifera_Flight_Trajectories_for_Architecture_and_Landscape_Co_Design.pdf",
    githubUrl: "https://github.com/kent891026/Bee-Architecture-AI",
    liveUrl: "https://youtu.be/fSoEVQC5Dcs?si=D8xS1UfFNll2vuZl"
  },
  {
    id: "04-stijl-generator",
    title: "Stijl 風格派產生器",
    subtitle: "De Stijl Web Generator",
    description: "結合藝術風格與前端互動邏輯的演算法網頁。將蒙德里安的幾何構成法則轉化為可即時互動的程式碼，展現了將視覺設計規則抽象化為軟體邏輯的運算思維。",
    tags: ["WEB", "INTERACTIVE"],
    techStack: ["JavaScript", "HTML5 Canvas", "CSS"],
    coverImage: "/images/projects/mondriaan.png",
    githubUrl: "https://github.com/kent891026/destijl-design",
    liveUrl: "https://destijl-design.vercel.app/",
  },
  {
    id: "04-dispatch-system",
    title: "聯結車派車系統與薪資結算系統",
    subtitle: "Fleet Dispatch & Payroll Web System",
    description: "處理真實世界商業邏輯的實用型全端系統。建構了高穩定性的資料庫架構以應對複雜的派車排程與自動化薪資結算，展現了扎實的網頁架構規劃與軟體工程實戰能力。",
    tags: ["SOFTWARE", "FULLSTACK"],
    techStack: ["Next.js", "Node.js", "SQL", "Tailwind"],
    coverImage: "/images/projects/聯結車.png",
    githubUrl: "https://github.com/kent891026/truck_dispatch_system",
    liveUrl: "https://truckdispatchsystem-guaiguai.streamlit.app/"
  },
  {
    id: "05-temp-sensor",
    title: "空氣檢測機",
    subtitle: "Hardware Control & Circuit Design",
    description: "從底層的電路設計、感測器信號處理到外殼硬體製造的完整 IoT 實作。透過 C++ 撰寫微控制器邏輯，展現了對硬體元件控制與軟體數據串接的跨領域整合能力。",
    tags: ["HARDWARE", "IoT"],
    techStack: ["Arduino C++", "Circuit Design", "Microcontroller"],
    coverImage: "/images/projects/sensor.jpg",
  },
  {
    id: "05-mini-robotic-arm",
    title: "小型伺服馬達機械手臂(未完成)",
    subtitle: "Hardware Control & Circuit Design",
    description: "從底層的電路設計、感測器信號處理到外殼硬體製造的完整 IoT 實作。透過 C++ 撰寫微控制器邏輯，展現了對硬體元件控制與軟體數據串接的跨領域整合能力。",
    tags: ["HARDWARE", "IoT"],
    techStack: ["Arduino C++", "Circuit Design", "Microcontroller"],
    coverImage: "/images/projects/sensor.jpg",
  },
  {
    id: "06-architecture-thesis",
    title: "山海城五感商行",
    subtitle: "Sensory Architecture & Environmental Revitalization",
    // ✨ 讓 description 回歸純粹的專案介紹
    description: "將空間行為分析融入建築設計的提案。深入探討了風、光、雨、水、霧、浪等自然元素與人體感官的互動關係，將抽象的環境數據轉化為具備深刻體驗的空間尺度。",
    // ✨ 獨立出專屬的共同創作者欄位
    collaborator: "陳怡諠 (Yi-Xuan Chen)",
    advisor: "李京翰 (Ching-Han Lee)",
    tags: ["ARCHITECTURE", "SPATIAL ANALYSIS"],
    techStack: ["Rhino", "Feeling Sense", "Architecture Design"],
    coverImage: "/images/projects/山海城五感商行/五感商行.png",
    // 動態畫廊陣列：要幾格就加幾個大括號
    galleries: [
      {
        sectionTitle: "Architecture Drawings",
        slides:[
          { src: "/images/projects/山海城五感商行/爆炸圖.png", caption: "崁仔頂改建後爆炸圖" },
          { src: "/images/projects/山海城五感商行/西立面圖.png", caption: "西立面圖" },
          { src: "/images/projects/山海城五感商行/東立面圖.png", caption: "東立面圖" },
          { src: "/images/projects/山海城五感商行/剖面圖1.png", caption: "觸覺、視覺、聽覺 | 風、雨、霧"},
          { src: "/images/projects/山海城五感商行/剖面圖2.png", caption: "視覺、嗅覺 | 風、光、雨" },
          { src: "/images/projects/山海城五感商行/剖面圖3.png", caption: "視覺、聽覺 | 風、雨、水、浪" },
          { src: "/images/projects/山海城五感商行/剖面圖4.png", caption: "五感與自然的串聯與層次" },
          { src: "/images/projects/山海城五感商行/崁仔頂最終平面圖.png", caption: "崁仔頂改建後平面圖" },
        ]
      },
      {
        sectionTitle: "Gallery",
        slides:[
          { src: "/images/projects/山海城五感商行/場景2.png", caption: "01" },
          { src: "/images/projects/山海城五感商行/場景3.png", caption: "02" },
          { src: "/images/projects/山海城五感商行/場景5.png", caption: "03" },
          { src: "/images/projects/山海城五感商行/場景6.png", caption: "04" },
          { src: "/images/projects/山海城五感商行/場景7.png", caption: "05" },
          { src: "/images/projects/山海城五感商行/場景9.png", caption: "06" },
          { src: "/images/projects/山海城五感商行/場景17.png", caption: "07" },
          { src: "/images/projects/山海城五感商行/場景22.png", caption: "08" },
          { src: "/images/projects/山海城五感商行/場景23.png", caption: "09" },
          { src: "/images/projects/山海城五感商行/場景26.png", caption: "10" },
          { src: "/images/projects/山海城五感商行/場景28.png", caption: "11" },
          { src: "/images/projects/山海城五感商行/場景37.png", caption: "12" },
          { src: "/images/projects/山海城五感商行/場景38.png", caption: "13" },
          { src: "/images/projects/山海城五感商行/場景39.png", caption: "14" },
          { src: "/images/projects/山海城五感商行/場景41.png", caption: "15" },
          { src: "/images/projects/山海城五感商行/場景42.png", caption: "16" },
          { src: "/images/projects/山海城五感商行/場景43.png", caption: "17" },
          { src: "/images/projects/山海城五感商行/場景45.png", caption: "18" },
        ]
      },
      {
        sectionTitle: "Model",
        slides:[
          { src: "/images/projects/山海城五感商行/模型1.jpg", caption: "-" },
          { src: "/images/projects/山海城五感商行/模型2.jpg", caption: "-" },
          { src: "/images/projects/山海城五感商行/模型3.jpg", caption: "-" },
          { src: "/images/projects/山海城五感商行/模型4.jpg", caption: "-" },
          { src: "/images/projects/山海城五感商行/模型5.jpg", caption: "-" },
          { src: "/images/projects/山海城五感商行/模型6.jpg", caption: "-" },
        ]
      }
    ],
    liveUrl: "https://online.fliphtml5.com/otkus/aqhh/#p=1",
    githubUrl: "https://artogo.co/zh-TW/exhibition/2025yuntechaidloading/work/dc90a25c53c4"
  },
];