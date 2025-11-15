import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

interface VideoCardProps {
  image: string;
  amount: string;
  roas: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ image, amount, roas }) => {
  return (
    <motion.div
      className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-[400px] rounded-2xl shadow-2xl bg-white overflow-hidden border border-gray-200 mx-auto"
      initial={{ opacity: 0, scale: 0.9, x: 100 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      exit={{ opacity: 0, scale: 0.9, x: -100 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {/* TOP: Thumbnail - 9:16 aspect ratio (portrait video) */}
      <div className="w-full aspect-[9/16] relative">
        <img src={image} alt="Ad preview" className="w-full h-full object-cover" />
      </div>

      {/* BOTTOM: Stats */}
      <div className="p-4 md:p-5 bg-gray-50">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="font-semibold text-gray-600 text-xs md:text-sm mb-1">Amount spent</p>
            <p className="text-lg md:text-xl font-bold text-gray-900">{amount}</p>
          </div>
          <div>
            <p className="font-semibold text-gray-600 text-xs md:text-sm mb-1">ROAS</p>
            <p className="text-lg md:text-xl font-bold text-green-600">{roas}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

interface CarouselProps {
  items: VideoCardProps[];
}

export const VideoCarousel: React.FC<CarouselProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Auto-play: change slide every 2 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      goToNext();
    }, 2000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  const goToNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const goToPrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full py-8 md:py-12 px-4">
      {/* Main Card Display */}
      <div className="relative overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <VideoCard
            key={currentIndex}
            image={items[currentIndex].image}
            amount={items[currentIndex].amount}
            roas={items[currentIndex].roas}
          />
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrev}
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 md:p-4 rounded-full shadow-lg transition-all hover:scale-110 z-10"
        aria-label="Previous ad"
      >
        <FaChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 md:p-4 rounded-full shadow-lg transition-all hover:scale-110 z-10"
        aria-label="Next ad"
      >
        <FaChevronRight className="w-4 h-4 md:w-5 md:h-5" />
      </button>

      {/* Dot Indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentIndex
                ? "w-8 md:w-10 h-2 md:h-2.5 bg-purple-600"
                : "w-2 md:w-2.5 h-2 md:h-2.5 bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to ad ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default VideoCarousel;
