"use client";
import { useRef, useState, useEffect, useMemo } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

// 這個組件負責生成二進位數字的粒子背景
function BinaryParticles() {
  const ref0 = useRef<any>();
  const ref1 = useRef<any>();
  const mousePosition = useRef({ x: 0, y: 0 });

  // 使用 useMemo 來創建二進位數字的紋理，避免每次渲染都重新生成
  const texture0 = useMemo(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 32; canvas.height = 32;
    const ctx = canvas.getContext("2d")!;
    ctx.fillStyle = "transparent"; ctx.fillRect(0, 0, 32, 32);
    ctx.font = "bold 20px monospace"; ctx.fillStyle = "rgba(78, 79, 151, 0.25)"; ctx.textAlign = "center"; ctx.textBaseline = "middle";
    ctx.fillText("0", 16, 16);
    return new THREE.CanvasTexture(canvas);
  }, []);

  // 使用 useMemo 來創建二進位數字的紋理，避免每次渲染都重新生成
  const texture1 = useMemo(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 32; canvas.height = 32;
    const ctx = canvas.getContext("2d")!;
    ctx.fillStyle = "transparent"; ctx.fillRect(0, 0, 32, 32);
    ctx.font = "bold 20px monospace"; ctx.fillStyle = "rgba(75, 136, 223, 0.25)"; ctx.textAlign = "center"; ctx.textBaseline = "middle";
    ctx.fillText("1", 16, 16);
    return new THREE.CanvasTexture(canvas);
  }, []);

  // 使用 useState 來生成兩個球形的點陣，並確保它們只生成一次
  const [sphere0] = useState(() => random.inSphere(new Float32Array(8000), { radius: 1.5 }) as Float32Array);
  const [sphere1] = useState(() => random.inSphere(new Float32Array(8000), { radius: 1.5 }) as Float32Array);

  // 使用 useEffect 來監聽滑鼠移動事件，並更新 mousePosition
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mousePosition.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // 使用 useFrame 來在每一幀更新粒子的旋轉，並根據滑鼠位置調整旋轉角度
  useFrame((state, delta) => {
    const targetX = mousePosition.current.x * 0.3;
    const targetY = mousePosition.current.y * 0.3;
    
    // 旋轉邏輯是讓兩個球形的點陣以不同的速度旋轉，並且根據滑鼠位置微調旋轉角度，營造出動態的視覺效果
    if (ref0.current) {
      ref0.current.rotation.x -= delta / 15;
      ref0.current.rotation.y -= delta / 20;
      ref0.current.rotation.y += (targetX - ref0.current.rotation.y) * 0.05;
      ref0.current.rotation.x += (-targetY - ref0.current.rotation.x) * 0.05;
    }
    if (ref1.current) {
      ref1.current.rotation.x += delta / 18;
      ref1.current.rotation.y -= delta / 25;
      ref1.current.rotation.y += (targetX - ref1.current.rotation.y) * 0.05;
      ref1.current.rotation.x += (-targetY - ref1.current.rotation.x) * 0.05;
    }
  });

  // 返回兩個球形的點陣，分別使用不同的紋理和顏色
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref0} positions={sphere0} stride={3} frustumCulled={false}>
        <PointMaterial transparent map={texture0} size={0.03} sizeAttenuation={true} depthWrite={false} opacity={0.6} alphaTest={0.01} />
      </Points>
      <Points ref={ref1} positions={sphere1} stride={3} frustumCulled={false}>
        <PointMaterial transparent map={texture1} size={0.03} sizeAttenuation={true} depthWrite={false} opacity={0.6} alphaTest={0.01} />
      </Points>
    </group>
  );
}

// 這個組件負責渲染整個二進位數字的背景，並使用 Canvas 來渲染 Three.js 的場景
export default function BinaryBackground() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <BinaryParticles />
      </Canvas>
    </div>
  );
}