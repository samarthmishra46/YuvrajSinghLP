import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play } from "lucide-react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

// --------------------
// Correct interface for YOUR data
// --------------------
interface VideoCardProps {
  image: string; 
  video?: string; // Optional video URL
  amount: string;
  roas: string;
}

// --------------------
// VIDEO CARD COMPONENT
// --------------------
const VideoCard: React.FC<
  VideoCardProps & { isPlaying: boolean; onPlay: () => void }
> = ({ image, video, amount, roas, isPlaying, onPlay }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  const handleUnmute = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      setMuted(false);
    }
  };

  const handleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      setMuted(true);
    }
  };

  return (
    <motion.div
      className="w-full max-w-[320px] md:max-w-[360px] lg:max-w-[400px] mx-auto 
      rounded-2xl shadow-2xl bg-white overflow-hidden border border-gray-200"
      initial={{ opacity: 0, scale: 0.9, x: 100 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      exit={{ opacity: 0, scale: 0.9, x: -100 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >

      {/* STAT BOX */}
      <div className="p-4 bg-gray-50">
        <div className="grid grid-cols-2 gap-4">
          
          <div>
            <p className="font-semibold text-gray-600 text-sm mb-1">Amount spent</p>
            <p className="text-xl font-bold text-gray-900">{amount}</p>
          </div>

          <div>
            <p className="font-semibold text-gray-600 text-sm mb-1">ROAS</p>
            <p className="text-xl font-bold text-green-600">{roas}</p>
          </div>

        </div>
      </div> 
      
      {/* VIDEO / THUMBNAIL */}
      <div className="w-full aspect-[9/16] relative bg-black">
        
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          src={video || image}
          autoPlay
          loop
          muted={muted}
          playsInline
        />

        {muted && (
          <button
            onClick={handleUnmute}
            className="absolute inset-0 flex items-center justify-center bg-black/40 text-white text-sm px-4 py-2"
          >
            Tap to Unmute 🔊
          </button>
        )}
        {!muted && (
          <button
            onClick={handleMute}
            className="absolute bottom-4 right-4 bg-black/60 text-white text-xs px-3 py-1.5 rounded-lg hover:bg-black/80 transition-colors"
          >
            🔇 Mute
          </button>
        )}
      </div>

      

    </motion.div>
  );
};

// --------------------
// MAIN CAROUSEL
// --------------------
interface CarouselProps {
  items: VideoCardProps[];
}

export const VideoCarousel: React.FC<CarouselProps> = ({ items }) => {
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  // -------- AUTO SLIDE (STOPS when playing) --------
  useEffect(() => {
    if (isPlaying) return;

    const timer = setInterval(goToNext, 20000);
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

  const goToSlide = (i: number) => {
    setDirection(i > currentIndex ? 1 : -1);
    setCurrentIndex(i);
  };

  return (
    <div className="relative w-full py-10 flex flex-col items-center justify-center">

      {/* CARD */}
      <div className="relative overflow-hidden w-full flex justify-center">
        <AnimatePresence mode="wait" custom={direction}>
          
          <VideoCard
            key={currentIndex}
            image={items[currentIndex].image}
            video={items[currentIndex].video}
            amount={items[currentIndex].amount}
            roas={items[currentIndex].roas}
            isPlaying={isPlaying}
            onPlay={() => setIsPlaying(true)}
          />

        </AnimatePresence>
      </div>

      {/* ARROWS */}
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

      {/* DOTS */}
      <div className="flex justify-center gap-2 mt-6">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className={`h-2 rounded-full transition-all ${
              i === currentIndex ? "w-8 bg-purple-600" : "w-2 bg-gray-300"
            }`}
          />
        ))}
      </div>

    </div>
  );
};

export default VideoCarousel;
