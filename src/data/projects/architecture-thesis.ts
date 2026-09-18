import type { Project } from "../project-types";

/** 06-architecture-thesis 的內容；新增圖片與段落請只編輯此檔。 */
export const architectureThesis: Project = {
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
  };
