"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function IntroVideo() {
  const [stage, setStage] = useState<"image" | "video" | "done">("image");
  const [isMounted, setIsMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleStartVideo = () => {
    setStage("video");
  };

  const handleVideoEnd = () => {
    setStage("done");
  };

  if (!isMounted || stage === "done") return null;

  return (
    <AnimatePresence>
      {(stage === "image" || stage === "video") && (
        <motion.div
          key="intro-container"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black overflow-hidden"
        >
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
                transition={{ duration: 0.5 }}
                src="/video/intro.mp4"
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                playsInline
                muted={false}
                onEnded={handleVideoEnd}
              />
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
