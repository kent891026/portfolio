
// 檔案位置：src/components/ProjectModel/index.tsx
// 此檔案由原本的 src/components/ProjectModel.tsx 修改而成
"use client"; 

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// 引入之前定義的噪點濾鏡
import { noiseSvg } from "@/components/Shared/NoiseOverlay";// 引入拆分出去的 WebGL Scene 組件
import Scene from "./Scene";

interface ProjectModelProps {
  modelPath: string; // .glb 檔案的路徑
  projectTitle: string;
}

// 主組件：負責 UI 佈局、狀態管理與噪點
export default function ProjectModel({ modelPath, projectTitle }: ProjectModelProps) {
  // 狀態管理：記錄是否開啟全螢幕檢視
  const [isExpanded, setIsExpanded] = useState(false);

  // 封裝一個包含 Scene 與噪點的 UI 視窗區塊
  const ModelWindow = () => (
    <div className="w-full h-full relative group bg-[#030712]">
      {/* 噪點層 */}
      <div className="absolute inset-0 z-10 opacity-[0.1] mix-blend-overlay pointer-events-none" style={{ backgroundImage: noiseSvg }} />
      
      {/* ⭐ 這裡是真正的 3D Scene */}
      <Scene modelPath={modelPath} />

      {/* 懸浮時顯示放大提示 */}
      {!isExpanded && (
        <div 
          onClick={() => setIsExpanded(true)}
          className="absolute bottom-4 right-4 z-20 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 cursor-zoom-in"
        >
          <span className="text-white text-xs font-mono tracking-widest whitespace-nowrap">EXPAND 3D VIEW ⤢</span>
        </div>
      )}
    </div>
  );

  return (
    <div className="relative mt-16 mb-16">
      <h3 className="text-gray-500 font-mono text-sm tracking-widest mb-8 uppercase border-b border-white/10 pb-4">
        Interactive 3D Model
      </h3>
      
      {/* 小尺寸的展示框 */}
      <div className="w-full aspect-video rounded-xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50">
        <ModelWindow />
      </div>

      {/* 🚀 全螢幕 3D 模型 Lightbox */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex flex-col bg-black/90 backdrop-blur-2xl p-6 cursor-zoom-out"
          >
            {/* 頂部控制列 */}
            <div className="w-full flex justify-between items-center mb-6 px-4 z-10">
              <h2 className="text-2xl font-serif text-white">{projectTitle} / <span className="text-[#4B88DF] font-mono text-lg">3D Viewer</span></h2>
              <button 
                onClick={() => setIsExpanded(false)} 
                className="text-white/50 hover:text-white text-3xl transition-colors"
              >
                ✕
              </button>
            </div>
            
            {/* 滿版大圖 */}
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="flex-grow w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/80"
              onClick={(e) => e.stopPropagation()} // 避免點到模型視窗就關閉
            >
              <ModelWindow />
            </motion.div>

            {/* 底部操作說明 */}
            <p className="fixed bottom-6 left-1/2 -translate-x-1/2 text-gray-500 font-mono text-xs tracking-widest bg-black/50 px-4 py-2 rounded-full border border-white/10 backdrop-blur-sm z-20 whitespace-nowrap">
              [ <span className="text-white">左鍵</span>: 旋轉 ] / [ <span className="text-white">右鍵 / 兩指拖曳</span>: 移動 ] / [ <span className="text-white">滾輪 / 雙指縮放</span>: 縮放 ] / [ <span className="text-white">✕</span>: 關閉 ]
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}