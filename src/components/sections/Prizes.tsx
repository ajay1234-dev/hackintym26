'use client';

import React from 'react';
import { Section } from '../ui/Section';
import { Trophy, Medal, Award, Star, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card } from '../ui/Card';

const prizes = [
  {
    title: "First Runner Up",
    amount: "₹5,000",
    icon: <Medal className="w-16 h-16 text-[#cd7f32] drop-shadow-[0_0_15px_rgba(205,127,50,0.5)]" />,
    color: "from-[#cd7f32]/20 to-[#a05a2c]/5",
    border: "border-[#cd7f32]/30",
    delay: 0.3,
    style: "mt-12"
  },
  {
    title: "Grand Prize Winner",
    amount: "₹7,500",
    icon: <Trophy className="w-24 h-24 text-[#ffd700] drop-shadow-[0_0_20px_rgba(255,215,0,0.6)]" />,
    color: "from-[#ffd700]/20 to-[#c5a000]/5",
    border: "border-[#ffd700]/50",
    delay: 0.1,
    style: "scale-110 z-10 relative"
  },
  {
    title: "Second Runner Up",
    amount: "₹3,000",
    icon: <Award className="w-16 h-16 text-[#c0c0c0] drop-shadow-[0_0_15px_rgba(192,192,192,0.5)]" />,
    color: "from-[#c0c0c0]/20 to-[#a0a0a0]/5",
    border: "border-[#c0c0c0]/30",
    delay: 0.2,
    style: "mt-12"
  }
];

const specialPrizes: any[] = [
  
];

export function Prizes() {
  return (
    <Section id="prizes">
      <div className="text-center mb-20 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Prize <span className="text-gradient">Pool</span>
        </motion.h2>

      </div>

      {/* Massive Prize Pool Hero Card */}
      <div className="flex justify-center mb-24 max-w-5xl mx-auto px-4">
        <motion.div
           initial={{ opacity: 0, scale: 0.8 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
           className="w-full relative group"
        >

          <div className="relative glass-card border-hack-neonCyan/30 p-6 sm:p-10 md:p-16 rounded-[2rem] bg-hack-darkBg/80 overflow-hidden flex flex-col items-center justify-center text-center">
            
            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-hack-neonCyan/10 rounded-br-[100px] blur-2xl"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-hack-neonPurple/10 rounded-tl-[100px] blur-2xl"></div>
            
            {/* Dynamic Geometric Rings Animation */}
            <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none overflow-hidden">
               <div
                  className="w-[800px] h-[800px] border-dashed border-2 border-hack-neonCyan/40 rounded-full absolute animate-[spin_30s_linear_infinite]"
               />
               <div
                  className="w-[600px] h-[600px] border border-hack-neonPurple/30 rounded-full absolute animate-[spin_40s_linear_infinite_reverse]"
               />
               <div
                  className="w-[400px] h-[400px] border border-hack-neonBlue/50 rounded-full absolute animate-pulse"
               />
            </div>

            <span className="text-hack-neonCyan font-mono tracking-[0.2em] font-bold text-sm md:text-base uppercase mb-4 relative z-10">Total Prize Pool</span>
            
            <div className="relative z-10 flex items-start justify-center gap-2">
              <span className="text-3xl md:text-6xl font-bold text-gray-300 mt-2">₹</span>
              <h2 className="text-6xl sm:text-7xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-hack-neonCyan via-white to-hack-neonPurple tracking-tighter drop-shadow-[0_0_35px_rgba(0,240,255,0.8)] px-2">
                15,000
              </h2>
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-shimmer" />
          </div>
        </motion.div>
      </div>

      {/* Top 3 Podium */}
      <div className="flex flex-col md:flex-row justify-center items-center md:items-stretch gap-6 md:gap-4 lg:gap-8 mb-20 max-w-5xl mx-auto h-auto md:h-[400px]">
        {prizes.map((prize) => (
          <motion.div
            key={prize.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: prize.delay, type: "spring" }}
            className={`w-full md:w-1/3 flex flex-col items-center group ${prize.style}`}
          >
            <div className={`w-full h-full glass-card p-8 flex flex-col items-center justify-center text-center relative overflow-hidden transition-all duration-500 hover:scale-105 ${prize.border} bg-gradient-to-b ${prize.color}`}>
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-500">
                {prize.icon}
              </div>
              <h3 className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tight">{prize.amount}</h3>
              <p className="text-sm md:text-base font-semibold text-gray-300 uppercase tracking-widest">{prize.title}</p>
              
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Special Category Prizes */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {specialPrizes.map((prize, i) => (
          <motion.div
            key={prize.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 + 0.5 }}
          >
            <Card className="flex items-center gap-4 p-5 py-6 group hover:border-hack-neonCyan/40 transition-colors">
              <div className="p-3 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors">
                {prize.icon}
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Special Category</p>
                <h4 className="font-bold text-white text-lg">{prize.title}</h4>
                <p className="text-hack-neonCyan font-mono font-bold mt-1">{prize.amount}</p>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
