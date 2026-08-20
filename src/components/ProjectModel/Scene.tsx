// 檔案位置：src/components/ProjectModel/Scene.tsx
"use client";

import { Suspense } from "react";
// 引入 React Three Fiber 核心庫
import { Canvas } from "@react-three/fiber";
// 引入 Drei 提供的環境與控制器
import { Environment, OrbitControls, Lightformer } from "@react-three/drei";
import * as THREE from "three";

// 引入我們拆分出去的子組件
import CanvasLoader from "./Loader";
import ModelLoader from "./ModelLoader";

interface SceneProps {
  modelPath: string;
}

export default function Scene({ modelPath }: SceneProps) {
  return (
    // R3F Canvas：3D 世界的入口
    <Canvas
      // ⭐ 修復：配合模型居中，微調初始相機視角 [x, y, z]
      camera={{ position: [4, 2, 6], fov: 45 }} 
      gl={{ 
        toneMapping: THREE.ACESFilmicToneMapping, // 讓光影更寫實
        antialias: true 
      }} 
      // ⭐ ⭐ 這裡遵照你的指示，刪除了 shadows 屬性與柔化陰影設定
      className="relative z-0 w-full h-full"
    >
      {/* 背景純黑色，讓模型更立體 */}
      <color attach="background" args={["#030712"]} />
      
      {/* 🎬 環境光與棚拍佈光設定 */}
      <Environment resolution={256} >
        {/* 在黑色空間中，加上一個頂部聚光燈 */}
        <Lightformer form="rect" intensity={4} position={[0, 4, 0]} scale={[10, 1]} target={[0, 0, 0]} />
        {/* 加入一些環境的反光和微弱光暈 */}
        <Lightformer form="ring" color="white" intensity={0.5} onUpdate={(self) => self.lookAt(0, 0, 0)} position={[-1, 1, 3]} scale={2} />
      </Environment>

      {/* 💡 基本場景光 */}
      <ambientLight intensity={0.1} /> 
      {/* 聚光燈，用於勾勒模型 */}
      <spotLight position={[5, 8, 5]} intensity={2} penumbra={1} color="#6E75A4" />
      
      {/* ⭐ 使用 Suspense 處理非同步載入 */}
      <Suspense fallback={<CanvasLoader />}>
        {/* 載入模型主體 (已在 ModelLoader 中居中) */}
        <ModelLoader path={modelPath} />
        
        {/* ⭐ 這裡已經遵照你的指示，刪除了下方的陰影平面 */}
      </Suspense>

      {/* 滑鼠旋轉控制器 (OrbitControls) */}
      <OrbitControls 
        enableZoom={true} // 允許縮放
        enablePan={true}  // 允許自由移動
        minDistance={1}   // 縮放最小距離
        maxDistance={20}   // 縮放最大距離
        enableDamping={true} // 物理阻尼感
        autoRotate={true} // 自動緩慢旋轉
        autoRotateSpeed={0.3} // 自動旋轉速度 
      />
    </Canvas>
  );
}