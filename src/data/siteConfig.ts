

export const siteConfig = {
  // 1. 個人基本資訊
  profile: {
    name: "陳致穎 Kent Chen.",
    tagline: "Multidisciplinary Developer",
    cvDownloadUrl: "/files/履歷.pdf", // 把履歷 PDF 放在 public/files/ 即可
  },
  
  // 2. CV 介紹段落 (分段陣列，方便未來自由增減段落)
  aboutText: [
    "游走於藝術美學與數位邏輯之間。深信最純粹的資料結構中，蘊含著空間與行為的解答。透過參數化運算到機器視覺、AI 模型與數位製造，我嘗試將冰冷的幾何，透過軟硬體的深度整合，轉化為能與人體感官產生共鳴的實體工藝。",
    "[ 在運算與實體的交界，以運算刻劃未來的製造與空間 ]"
  ],

  // 3. 外部社群與專案連結
  socialLinks: [
    { label: "GitHub", url: "https://github.com/kent891026" },
    { label: "MakerWorld", url: "https://makerworld.com/zh/@orion_aoi" },
    { label: "Aevior.Official", url: "https://www.instagram.com/aevior.official/" },
  ],

  // 4. 右側邊欄的作品分類 (用來對應 projects.ts 的卡片)
  sidebarCategories: [
    { 
      label: "I / Parametric Design", 
      targetProjectId: "01-coral-algorithm" // 綁定珊瑚生長專案的 ID
    },
    { 
      label: "II / Algorithmic Design", 
      
      targetProjectId: "02-algorithm-design" // 綁定演算法設計專案的 ID
    },
    { 
      label: "III / Artficial Intelligence", 
      targetProjectId: "03-bee-tracking-ai" // 綁定蜜蜂追蹤專案的 ID
    },
    
    { 
      label: "IV / Web Development", 
      targetProjectId: "04-stijl-generator" // 綁定網站設計專案的 ID
    },
    {
      label: "V / Hardware & IoT",
      targetProjectId: "05-temp-sensor" // 綁定空氣檢測機專案的 ID
    },
    { 
      label: "VI / Architecture Design", 
      targetProjectId: "06-architecture-thesis" // 綁定山海城畢設專案的 ID
    },
    
  ]
};