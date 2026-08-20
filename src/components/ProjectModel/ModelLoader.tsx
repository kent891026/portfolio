
// 檔案位置：src/components/ProjectModel/ModelLoader.tsx
"use client";

import { useMemo } from "react";
// 引入 Zwei 載入器工具與 Center 對齊組件
import { useGLTF, Center } from "@react-three/drei";
import * as THREE from "three";

interface ModelLoaderProps {
  path: string;
}

export default function ModelLoader({ path }: ModelLoaderProps) {
  // 使用 useGLTF 載入模型
  const { scene } = useGLTF(path);
  
  // 使用 useMemo 確保遍歷材質的操作只在場景改變時執行一次，最佳化效能
  useMemo(() => {
    // 安全檢查：將模型所有材質設為雙面渲染
    scene.traverse((child: any) => {
      if (child.isMesh) {
        child.material.side = THREE.DoubleSide; // 使用預設的 DoubleSide 值
        // ⭐ 這裡已經遵照你的指示，刪除了投影與陰影接收設定
      }
    });
  }, [scene]);

  return (
    // ⭐ ⭐ 核心修正：使用預設的 <Center> 
    // 它會計算模型的幾何邊框，並將「真實幾何中心」對齊到 (0,0,0)
    // 解決你提到的旋轉中心卡在底部的問題
    <Center>
      <primitive object={scene} />
    </Center>
  );
}