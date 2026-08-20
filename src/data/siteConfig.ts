

export const siteConfig = {
  // 1. 個人基本資訊
  profile: {
    name: "陳致穎 Kent Chen.",
    tagline: "Multidisciplinary Developer",
    cvDownloadUrl: "/files/履歷.pdf", // 把履歷 PDF 放在 public/files/ 即可
  },
  
  // 2. CV 介紹段落 (分段陣列，方便未來自由增減段落)
  aboutText: [
    "專注於人工智慧、數位製造與參數化設計的跨領域開發者。畢業於雲林科技大學建築系，致力於將純粹的資料結構與空間幾何演算法，轉化為具備感官體驗的數位製造工藝與實體空間。",
    "[ 探索運算與空間的交集，為未來的智能製造尋找解答。 ]"
  ],

  // 3. 外部社群與專案連結
  socialLinks: [
    { label: "GITHUB", url: "https://github.com/kent891026" },
    { label: "MakerWorld", url: "https://makerworld.com/zh/@orion_aoi" },
    { label: "Aevior.Official", url: "https://www.instagram.com/aevior.official/" },
  ],

  // 4. 右側邊欄的作品分類 (用來對應 projects.ts 的卡片)
  sidebarCategories: [
    { 
      label: "01 / Parametric Design", 
      targetProjectId: "01-coral-algorithm" // 綁定珊瑚生長專案的 ID
    },
    { 
      label: "02 / Algorithmic Design", 
      
      targetProjectId: "02-algorithm-design" // 綁定演算法設計專案的 ID
    },
    { 
      label: "03 / Artficial Intelligence", 
      targetProjectId: "03-bee-tracking-ai" // 綁定蜜蜂追蹤專案的 ID
    },
    
    { 
      label: "04 / Web Development", 
      targetProjectId: "04-stijl-generator" // 綁定網站設計專案的 ID
    },
    {
      label: "05 / Hardware & IoT",
      targetProjectId: "05-temp-sensor" // 綁定空氣檢測機專案的 ID
    },
    { 
      label: "06 / Architecture Design", 
      targetProjectId: "06-architecture-thesis" // 綁定山海城畢設專案的 ID
    },
    
  ]
};