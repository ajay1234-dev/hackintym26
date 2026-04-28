"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function IntroVideo() {
  const [stage, setStage] = useState<"image" | "video" | "done" | "notification">("image");
  const [isMounted, setIsMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (stage === "notification") {
      try {
        // Attempt to play a notification sound
        const audio = new Audio('/audio/notification.mp3');
        audio.play().catch(e => console.log('Audio play blocked by browser:', e));
      } catch (e) {
        console.log('Audio functionality not supported:', e);
      }

      const timer = setTimeout(() => {
        setStage("done");
      }, 10000); // Changed to 10 seconds
      return () => clearTimeout(timer);
    }
  }, [stage]);

  const handleStartVideo = () => {
    setStage("video");
  };

  const handleVideoEnd = () => {
    setStage("notification");
  };

  const handleGoToTeams = () => {
    setStage("done");
    document.getElementById("winners")?.scrollIntoView({ behavior: "smooth" });
  };

  if (!isMounted || stage === "done") return null;

  return (
    <AnimatePresence mode="wait">
      {(stage === "image" || stage === "video") && (
        <motion.div
          key="intro-container"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black overflow-hidden"
        >
          {/* Preload Video Hidden */}
          {stage === "image" && (
            <video
              src="/video/intro.mp4"
              preload="auto"
              muted
              style={{ display: 'none' }}
            />
          )}

          {stage === "image" && (
            <motion.div
              key="intro-image"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex flex-col items-center justify-center bg-black"
            >
              <img
                src="/photos/intro.jpeg"
                alt="Hackintym Intro"
                className="absolute inset-0 w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-black/40" />
              <button
                onClick={handleStartVideo}
                className="relative z-10 px-8 py-4 bg-hack-neonCyan/20 hover:bg-hack-neonCyan/40 text-white font-bold text-xl rounded-full border border-hack-neonCyan backdrop-blur-md shadow-[0_0_20px_rgba(74,222,128,0.4)] hover:shadow-[0_0_40px_rgba(74,222,128,0.8)] transition-all duration-300 transform hover:scale-105 uppercase tracking-widest"
              >
                Enter Hackintym 26
              </button>
            </motion.div>
          )}

          {stage === "video" && (
            <div className="absolute inset-0 flex items-center justify-center bg-black">
              <motion.video
                key="intro-video"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                src="/video/intro.mp4"
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                playsInline
                preload="auto"
                muted={false}
                onEnded={handleVideoEnd}
              />
            </div>
          )}
        </motion.div>
      )}

      {stage === "notification" && (
        <motion.div
          key="intro-notification"
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 200, damping: 20 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 pointer-events-none"
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm pointer-events-auto" onClick={() => setStage("done")} />
          <div className="relative glass-card border border-hack-neonCyan/50 bg-hack-darkBg/95 p-8 md:p-12 rounded-2xl max-w-2xl w-full text-center shadow-[0_0_50px_rgba(74,222,128,0.3)] pointer-events-auto overflow-hidden">
            {/* Confetti Burst for Banner */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(30)].map((_, i) => (
                <motion.div
                  key={`confetti-${i}`}
                  initial={{ opacity: 0, scale: 0, x: "50%", y: "50%" }}
                  animate={{ 
                    opacity: [0, 1, 1, 0],
                    scale: [0, 1.2, 0.8],
                    x: `${50 + (Math.random() - 0.5) * 100}%`,
                    y: `${50 + (Math.random() - 0.5) * 100}%`,
                    rotate: Math.random() * 360
                  }}
                  transition={{ 
                    duration: Math.random() * 2 + 2, 
                    repeat: Infinity,
                    repeatDelay: 1
                  }}
                  className={`absolute w-2 h-2 ${i % 2 === 0 ? 'bg-hack-neonCyan' : 'bg-yellow-400'} rounded-sm`}
                />
              ))}
            </div>
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-hack-neonCyan rounded-full opacity-20 blur-2xl"></div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
              The <span className="text-hack-neonCyan text-gradient">Hackathon Winners</span><br/>Have Been Revealed!
            </h2>
            
            <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto">
              The battle is over. The elite squads who have conquered the Hackintym'26 EVO arena have been declassified.
            </p>
            
            <button
              onClick={handleGoToTeams}
              className="px-8 py-4 bg-hack-neonCyan/20 hover:bg-hack-neonCyan/40 text-hack-neonCyan font-bold text-lg rounded-full border border-hack-neonCyan backdrop-blur-md shadow-[0_0_20px_rgba(74,222,128,0.3)] hover:shadow-[0_0_40px_rgba(74,222,128,0.6)] transition-all duration-300 transform hover:scale-105 uppercase tracking-widest"
            >
              View Winners
            </button>
            
            <button 
              onClick={() => setStage("done")}
              className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
