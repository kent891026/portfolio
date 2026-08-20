
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ImageGallery({ images }: { images?: string[] }) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // 如果沒有圖片，就不渲染這個區塊
  if (!images || images.length === 0) return null;

  return (
    <div className="mt-16">
      <h3 className="text-gray-500 font-mono text-sm tracking-widest mb-8 uppercase border-b border-white/10 pb-4">
        Architecture & Visuals
      </h3>
      
      {/* 圖片網格 */}
      <div className="grid grid-cols-1 gap-12">
        {images.map((imgUrl, index) => (
          <div key={index} className="flex flex-col gap-4">
            <div 
              onClick={() => setSelectedImage(imgUrl)}
              className="relative w-full aspect-video rounded-xl overflow-hidden border border-white/10 group shadow-2xl shadow-black/50 cursor-zoom-in"
            >
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-[1.03]" style={{ backgroundImage: `url(${imgUrl})` }} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-white text-xs font-mono tracking-widest">CLICK TO EXPAND ⤢</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 圖片放大 Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            onClick={() => setSelectedImage(null)} 
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-10 bg-black/90 backdrop-blur-2xl cursor-zoom-out"
          >
            <button className="absolute top-8 right-8 text-white/50 hover:text-white text-2xl transition-colors z-10">✕</button>
            <motion.img 
              key={selectedImage} 
              src={selectedImage} 
              initial={{ scale: 0.9, y: 20 }} 
              animate={{ scale: 1, y: 0 }} 
              exit={{ scale: 0.9, y: 20 }} 
              transition={{ type: "spring", damping: 25, stiffness: 300 }} 
              className="max-w-full max-h-full rounded-lg shadow-2xl object-contain border border-white/10" 
              onClick={(e) => e.stopPropagation()} 
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}