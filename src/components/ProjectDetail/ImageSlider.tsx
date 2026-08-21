"use client";
import React, { useCallback, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { motion, AnimatePresence } from 'framer-motion';

export interface SlideData {
  src: string;
  caption: string;
}

interface ImageSliderProps {
  slides: SlideData[];
}

export default function ImageSlider({ slides }: ImageSliderProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, dragFree: true });
  // 記錄目前被點擊放大的圖片路徑
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <>
      <div className="relative group w-full">
        {/* 移除所有圓角與外框限制，讓圖片自然延展 */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex touch-pan-y">
            {slides.map((slide, index) => (
              <div 
                key={index} 
                className="relative flex-[0_0_100%] min-w-0"
              >
                <motion.div 
                  whileTap={{ scale: 0.99 }} // 點擊時微縮暗示可互動
                  onClick={() => setSelectedImage(slide.src)}
                  // 加上放大鏡游標提示
                  className="relative w-full cursor-zoom-in"
                >
                  {/* 滿版圖片：w-full h-auto 讓圖片不受限於方形框，依據真實比例呈現 */}
                  <img 
                    src={slide.src} 
                    alt={slide.caption} 
                    className="w-full h-auto max-h-[80vh] object-cover md:object-contain"
                  />
                  
                  {/* 無框純白文字與漸層保護底 (確保文字不論底圖多白都看得見) */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent pt-12 pb-4 px-6 pointer-events-none">
                    <p className="text-sm md:text-base tracking-widest text-white font-light drop-shadow-md">
                      {slide.caption}
                    </p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* 左側透明箭頭 */}
        <button 
          onClick={scrollPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-black/20 hover:bg-black/60 text-white/80 hover:text-white transition-all backdrop-blur-sm opacity-100 md:opacity-0 md:group-hover:opacity-100 z-10"
          aria-label="上一張"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>

        {/* 右側透明箭頭 */}
        <button 
          onClick={scrollNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-black/20 hover:bg-black/60 text-white/80 hover:text-white transition-all backdrop-blur-sm opacity-100 md:opacity-0 md:group-hover:opacity-100 z-10"
          aria-label="下一張"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>

      {/* ✨ 全螢幕放大燈箱 (Lightbox) */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            // 點擊背景任一處皆可關閉
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-12 cursor-zoom-out backdrop-blur-md"
          >
            {/* 右上角關閉按鈕 */}
            <button 
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* 放大後的圖片 */}
            <motion.img
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              src={selectedImage}
              alt="Enlarged view"
              className="max-w-full max-h-full object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}