// 檔案位置：src/components/ProjectModel/Loader.tsx
"use client";

import { Html, useProgress } from "@react-three/drei";

// 自訂的 React 3D 載入指示器組件
export default function CanvasLoader() {
  const { progress } = useProgress(); // 取得 Drei 的載入進度
  return (
    <Html center>
      <div className="flex flex-col items-center justify-center p-4 rounded-xl bg-black/50 backdrop-blur-sm border border-white/10 font-mono">
        {/* 一個簡單的旋轉 spinner */}
        <div className="w-8 h-8 mb-3 border-4 border-t-[#4B88DF] border-white/20 rounded-full animate-spin" />
        <div className="text-white text-xs tracking-widest text-center whitespace-nowrap">
          {/* 顯示資工系風格的載入文字 */}
          &gt; LOADING_MODEL: {progress.toFixed(0)}%
        </div>
      </div>
    </Html>
  );
}