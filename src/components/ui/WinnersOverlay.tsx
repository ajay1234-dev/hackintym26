'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Sparkles, Star } from 'lucide-react';

export function WinnersOverlay() {
  const [isVisible, setIsVisible] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 8000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
          transition={{ duration: 1 }}
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-hack-darkBg overflow-hidden"
        >
          {/* Animated Background Particles / Confetti */}
          <div className="absolute inset-0 pointer-events-none">
            {mounted && [...Array(60)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ 
                  opacity: 0,
                  x: "50%",
                  y: "50%",
                  scale: 0
                }}
                animate={{ 
                  opacity: [0, 1, 1, 0],
                  x: `${50 + (Math.random() - 0.5) * 120}%`,
                  y: `${50 + (Math.random() - 0.5) * 120}%`,
                  rotate: Math.random() * 1000,
                  scale: [0, 1.5, 0.5]
                }}
                transition={{ 
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  delay: Math.random() * 0.5,
                  ease: "easeOut"
                }}
                className={`absolute w-3 h-3 rounded-sm ${
                  i % 4 === 0 ? 'bg-hack-neonCyan' : 
                  i % 4 === 1 ? 'bg-hack-neonPurple' : 
                  i % 4 === 2 ? 'bg-yellow-400' : 'bg-white'
                } shadow-[0_0_10px_currentColor]`}
              />
            ))}
            
            {/* Rapid fireworks-like bursts */}
            {mounted && [...Array(5)].map((_, groupIdx) => 
              [...Array(15)].map((_, i) => (
                <motion.div
                  key={`burst-${groupIdx}-${i}`}
                  initial={{ opacity: 0, scale: 0, x: "50%", y: "40%" }}
                  animate={{ 
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                    x: `${50 + (Math.cos(i * 24 * Math.PI / 180) * (groupIdx + 1) * 15)}%`,
                    y: `${40 + (Math.sin(i * 24 * Math.PI / 180) * (groupIdx + 1) * 15)}%`
                  }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: Infinity, 
                    delay: groupIdx * 1.2,
                    ease: "easeOut"
                  }}
                  className="absolute w-1 h-1 bg-hack-neonCyan rounded-full blur-[1px]"
                />
              ))
            )}

            {mounted && [...Array(15)].map((_, i) => (
              <motion.div
                key={`star-${i}`}
                initial={{ 
                  opacity: 0,
                  x: Math.random() * 100 + "%",
                  y: Math.random() * 100 + "%" 
                }}
                animate={{ 
                  opacity: [0, 0.8, 0],
                  scale: [0.5, 1.5, 0.5],
                  rotate: 180
                }}
                transition={{ 
                  duration: Math.random() * 2 + 1,
                  repeat: Infinity,
                  delay: Math.random() * 2
                }}
                className="absolute"
              >
                <Star className="text-white opacity-60 shadow-[0_0_15px_white]" size={Math.random() * 20 + 5} />
              </motion.div>
            ))}
          </div>

          <div className="relative z-10 text-center px-4">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ 
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.2
              }}
              className="inline-block mb-8 relative"
            >
              <div className="absolute inset-0 bg-hack-neonCyan/20 blur-3xl rounded-full animate-pulse" />
              <Trophy size={120} className="text-white drop-shadow-[0_0_30px_rgba(74,222,128,0.8)] relative z-10" />
            </motion.div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-8xl font-black text-white mb-6 uppercase tracking-tighter italic">
                The Champions Are <span className="text-hack-neonCyan text-glow-green">Revealed</span>
              </h1>
              
              <div className="h-1 w-64 bg-gradient-to-r from-transparent via-hack-neonCyan to-transparent mx-auto mb-8" />
              
              <p className="text-xl md:text-2xl text-gray-400 font-mono tracking-widest uppercase">
                Hackintym'26 EVO Final Results
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="mt-12 flex items-center justify-center gap-4 text-hack-neonCyan/60 font-mono text-sm"
            >
              <Sparkles size={16} />
              <span>Initializing Hall of Fame...</span>
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                _
              </motion.span>
            </motion.div>
          </div>

          {/* Light Sweeps */}
          <motion.div
            initial={{ x: '-100%', skewX: -20 }}
            animate={{ x: '200%' }}
            transition={{ duration: 2, delay: 0.8, repeat: Infinity, repeatDelay: 3 }}
            className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
