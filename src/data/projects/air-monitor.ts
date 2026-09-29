import type { Project } from "../project-types";

/** 05-temp-sensor */
export const airMonitor: Project = {
    id: "05-temp-sensor",
    title: "空氣檢測機",
    subtitle: "Double-layer Smart Environment Monitor",
    description: "從電路設計、感測器整合到外殼 3D 列印的環境檢測機。以 Wemos D1 Mini 為核心，結合 SSD1306 顯示器、BME280、BH1750 與 MQ-135；程式透過動態 I2C 偵測讀取感測器，並結合 OpenWeather API 顯示戶外天氣。顯示畫面每 2 秒更新，天氣資料每 5 分鐘更新。原型階段的 MQ-135 數值為相對 ADC 評估，尚未完成精確 PPM 校正。",
    tags: ["HARDWARE", "IoT"],
    techStack: ["ESP8266 / Wemos D1 Mini", "Arduino C++", "BME280", "BH1750", "MQ-135", "SSD1306", "3D Printing"],
    coverImage: "/images/projects/空氣檢測機.png",
    modelUrl: "/models/空氣檢測機.glb",
    galleries: [
      {
        sectionTitle: "Model Design",
        slides: [
          { src: "/images/projects/空氣檢測機.png", caption: "空氣檢測機模型爆炸圖" },
          { src: "/images/projects/空氣檢測機接線.jpg", caption: "空氣檢測機接線測試成果圖" },
        ],
      },
      {
        sectionTitle: "Circuit Design",
        slides: [
          { src: "/images/projects/空氣檢測機.svg", caption: "空氣檢測機電路設計圖" },
        ],
      },
      {
        sectionTitle: "Arduino C++ Design",
        slides: [
          { src: "/images/projects/空氣檢測機程式碼.png", caption: "空氣檢測機硬體編碼設計圖" },
        ],
      },
    ],
  };
