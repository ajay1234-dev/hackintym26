'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const FlashEffect = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: [0, 1, 0],
        scale: [1, 1.5, 1],
      }}
      transition={{ 
        duration: 1, 
        ease: "easeInOut",
      }}
      className="fixed inset-0 z-[60] bg-white pointer-events-none"
    />
  );
};
