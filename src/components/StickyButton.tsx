import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';
import { useNavigate } from "react-router-dom";

const StickyButton: React.FC = () => {
   const navigate = useNavigate();
  
    const handleButtonClick = () => {
      navigate("https://rzp.io/rzp/M4TBjei"); //  actual route
    };
  
 

  return (
    <div className="fixed bottom-2  md:bottom-0  left-0 right-0 z-50 p-4 bg-gradient-to-t from-transparent via-white to-transparent pointer-events-none">
      <div className="max-w-md mx-auto pointer-events-auto">
        <button
          onClick={handleButtonClick}
          className="w-full  bg-primary hover:bg-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-bold py-4 px-8 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 group"
        >
          <span className="text-lg md:text-xl">Work With Me</span>
          <FaArrowRight className="w-5 h-5 md:w-6 md:h-6 animate-shake group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};

export default StickyButton;
