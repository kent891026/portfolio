// src/components/Shared/NoiseOverlay.tsx

// 獨立匯出這個 SVG 字串，讓需要它的地方都能直接 import
export const noiseSvg = `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.3'/%3E%3C/svg%3E")`;

interface NoiseOverlayProps {
  opacity?: string;
  className?: string;
}

// 建立一個可重複使用的噪點層組件
export default function NoiseOverlay({ opacity = "opacity-[0.03]", className = "" }: NoiseOverlayProps) {
  return (
    <div 
      className={`absolute inset-0 z-0 mix-blend-overlay pointer-events-none ${opacity} ${className}`} 
      style={{ backgroundImage: noiseSvg }} 
    />
  );
}