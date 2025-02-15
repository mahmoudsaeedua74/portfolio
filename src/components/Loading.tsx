"use client";
import { useState, useEffect } from "react";
export default function Loading() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isHiding, setIsHiding] = useState(false);
  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setIsHiding(true);
          return 100;
        }
        return prev + 1;
      });
    }, 30);
    return () => clearInterval(progressInterval);
  }, []);
  useEffect(() => {
    if (isHiding) {
      const hideTimeout = setTimeout(() => {
        setIsLoading(false);
      }, 2000); 
      return () => clearTimeout(hideTimeout);
    }
  }, [isHiding]);
  if (!isLoading) return null;
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden loading">
    {/* Top split panel */}
    <div
      className={`absolute top-0 left-0 w-full h-1/2 bg-slate-950 transition-transform duration-1000 ease-in-out
        ${isHiding ? "-translate-y-full" : "translate-y-0"}`}
    />
    
    {/* Bottom split panel */}
    <div
      className={`absolute bottom-0 left-0 w-full h-1/2 bg-slate-950 transition-transform duration-1000 ease-in-out
        ${isHiding ? "translate-y-full" : "translate-y-0"}`}
    />
    
    {/* Loading content */}
    <div
      className={`relative z-10 flex flex-col items-center justify-center w-full px-4 sm:px-6 md:px-8
        ${isHiding ? "opacity-0" : "opacity-100"} transition-opacity duration-500`}
    >
      {/* Loader spinner */}
      <div className="loader mb-2 sm:mb-3 md:mb-4 text-2xl  md:text-6xl text-[#ec4899] scale-75 sm:scale-90 md:scale-100" />
      
      {/* Progress bar */}
      <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md h-1.5 sm:h-2 md:h-2.5 
        bg-gray-800 rounded-full overflow-hidden mb-2 sm:mb-3 md:mb-4">
        <div
          className="absolute left-0 top-0 h-full bg-gradient-to-t from-[#ec4899] rounded-full 
            transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      
      {/* Progress text */}
      <div className="text-[#fbe2e3] text-center text-sm sm:text-base md:text-lg font-mono">
        <span className="inline-block min-w-[4ch] text-right">
          {progress}
        </span>
        %
      </div>
    </div>
  </div>
);
};
