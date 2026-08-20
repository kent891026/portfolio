

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  techStack: string[];
  modelUrl?: string;
  
  // 擴充：封面圖與內頁多圖陣列
  coverImage: string; 
  galleryImages?: string[]; 
  
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
    galleryImages: [
      "/images/projects/珊瑚燈渲染.png", 
      "/images/projects/珊瑚燈建構.png"
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
    galleryImages: [
      "/images/projects/網格燈渲染.png", 
      "/images/projects/網格燈建模.png",
      "/images/projects/網格燈建構.png"
    ],
    modelUrl: "/models/網格燈.glb"
  },
  {
    id: "02-algorithm-design",
    title: "演算法設計與資料結構實作",
    subtitle: "Algorithmic Design & Data Structure Implementation",
    description: "探討珊瑚的生長演算法可能性與資料結構的實作，應用於 Grasshopper 設計生成的各種問題的模擬與解決，並建構出適合用於製造合理化的具資料之模型",
    tags: ["ALGORITHM", "DATA STRUCTURE", "COMPUTATIONAL"],
    techStack: ["C#", "Python", "Rhino", "Grasshopper"],
    coverImage: "/images/projects/珊瑚演算法改進.png",
    galleryImages: [
      "/images/projects/珊瑚演算法建構.png",
      "/images/projects/carbon.png"
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
    id: "06-architecture-thesis",
    title: "山海城五感商行",
    subtitle: "Sensory Architecture & Environmental Analysis",
    description: "將空間行為分析融入建築設計的提案。深入探討了風、光、雨、水、霧、浪等自然元素與人體感官的互動關係，將抽象的環境數據轉化為具備深刻體驗的空間尺度。",
    tags: ["ARCHITECTURE", "SPATIAL ANALYSIS"],
    techStack: ["Rhino", "Feeling Sense", "Architecture Design"],
    coverImage: "/images/projects/五感商行.png",
    galleryImages: ["/images/projects/抱抱.png",
                    "/images/projects/西立面圖.png"
    ],
    liveUrl: "https://online.fliphtml5.com/otkus/aqhh/#p=1",
    githubUrl: "https://artogo.co/zh-TW/exhibition/2025yuntechaidloading/work/dc90a25c53c4"
  },
];