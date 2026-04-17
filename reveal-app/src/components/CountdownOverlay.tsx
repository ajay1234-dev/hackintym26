'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CountdownOverlayProps {
  countdown: number;
}

export const CountdownOverlay: React.FC<CountdownOverlayProps> = ({ countdown }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-hack-dark/95 backdrop-blur-sm">
      {/* Background pulses */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 1, repeat: Infinity }}
          className="absolute inset-0 bg-hack-green rounded-full filter blur-[100px]"
        />
      </div>

      <div className="relative text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-8"
        >
          <p className="text-hack-green font-mono tracking-widest text-xl mb-2 animate-pulse">
            ARENA INITIALIZING...
          </p>
          <div className="h-1 w-48 bg-white/10 mx-auto rounded-full overflow-hidden">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 10, ease: "linear" }}
              className="h-full bg-hack-green shadow-[0_0_10px_rgba(74,222,128,1)]"
            />
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={countdown}
            initial={{ opacity: 0, scale: 2, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scale: 0.5, filter: 'blur(10px)' }}
            transition={{ duration: 0.5, type: "spring" }}
            className="text-[12rem] md:text-[20rem] font-black text-white leading-none text-glow-green"
          >
            {countdown}
          </motion.div>
        </AnimatePresence>

        <div className="mt-8">
          <p className="text-gray-500 font-mono text-sm tracking-tighter">
            INITIALIZING CORE DOMAIN PROTOCOLS
          </p>
        </div>
      </div>
    </div>
  );
};
