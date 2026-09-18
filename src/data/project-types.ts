/** 單張作品圖片。src 是 public 目錄下、以 / 開頭的網址。 */
export interface GallerySlide {
  src: string;
  caption: string;
}

/** 詳情頁的一組圖片；同一作品可以有多個段落。 */
export interface GallerySection {
  sectionTitle: string;
  slides: GallerySlide[];
}

/** 作品的唯一資料模型；首頁卡片、彈窗、詳情頁共用同一份內容。 */
export interface Project {
  /** 永久網址與側欄定位依賴此 id；已上線作品請勿隨意更改。 */
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  techStack: string[];
  coverImage: string;
  collaborator?: string;
  advisor?: string;
  galleries?: GallerySection[];
  modelUrl?: string;
  paperUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
}
