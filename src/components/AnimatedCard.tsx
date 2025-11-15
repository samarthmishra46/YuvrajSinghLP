import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play } from "lucide-react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

interface VideoCardProps {
  videoId: string;
  thumbnail: string;
  amount: string;
  roas: string;
}

const VideoCard: React.FC<
  VideoCardProps & { isPlaying: boolean; onPlay: () => void }
> = ({ videoId, thumbnail, amount, roas, isPlaying, onPlay }) => {
  return (
    <motion.div
      className="w-full max-w-[320px] md:max-w-[360px] lg:max-w-[400px] 
        mx-auto rounded-2xl shadow-2xl bg-white overflow-hidden border border-gray-200"
      initial={{ opacity: 0, scale: 0.9, x: 100 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      exit={{ opacity: 0, scale: 0.9, x: -100 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {/* Video / Thumbnail */}
      <div className="w-full aspect-[9/16] relative bg-black">
        {!isPlaying ? (
          <div
            className="relative w-full h-full cursor-pointer"
            onClick={onPlay}
          >
            <img src={thumbnail} className="w-full h-full object-cover" />

            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/70 w-20 h-20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Play size={40} className="text-black ml-1" />
              </div>
            </div>
          </div>
        ) : (
          <iframe
            src={`https://player.vimeo.com/video/${videoId}?autoplay=1`}
            className="w-full h-full"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </div>

      {/* Stats */}
      <div className="p-4 bg-gray-50">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="font-semibold text-gray-600 text-sm mb-1">
              Amount spent
            </p>
            <p className="text-xl font-bold text-gray-900">{amount}</p>
          </div>
          <div>
            <p className="font-semibold text-gray-600 text-sm mb-1">ROAS</p>
            <p className="text-xl font-bold text-green-600">{roas}</p>
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
  const [isPlaying, setIsPlaying] = useState(false);

  // Auto play 20 seconds — only when NOT playing video
  useEffect(() => {
    if (isPlaying) return;

    const timer = setInterval(() => {
      goToNext();
    }, 20000);

    return () => clearInterval(timer);
  }, [currentIndex, isPlaying]);

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
    <div className="relative w-full py-10 flex flex-col items-center justify-center">
      {/* Card */}
      <div className="relative overflow-hidden w-full flex justify-center">
        <AnimatePresence mode="wait" custom={direction}>
          <VideoCard
            key={currentIndex}
            videoId={items[currentIndex].videoId}
            thumbnail={items[currentIndex].thumbnail}
            amount={items[currentIndex].amount}
            roas={items[currentIndex].roas}
            isPlaying={isPlaying}
            onPlay={() => setIsPlaying(true)}
          />
        </AnimatePresence>
      </div>

      {/* Arrows */}
      {!isPlaying && (
        <>
          <button
            onClick={goToPrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg"
          >
            <FaChevronLeft />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg"
          >
            <FaChevronRight />
          </button>
        </>
      )}

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className={`h-2 rounded-full transition-all ${
              i === currentIndex ? "w-8 bg-purple-600" : "w-2 bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default VideoCarousel;
