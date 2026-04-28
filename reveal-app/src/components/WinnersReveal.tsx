'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Medal, Award, Terminal, Star } from 'lucide-react';

const WINNERS = [
  {
    rank: 1,
    title: "Grand Prize Winner",
    team: "INNOVISION (EEE)",
    prize: "₹7,500",
    icon: <Trophy className="text-[#ffd700]" size={48} />,
    color: "from-[#ffd700]/20 to-transparent",
    border: "border-[#ffd700]/50"
  },
  {
    rank: 2,
    title: "First Runner Up",
    team: "QUANTUM CODERS (CSE)",
    prize: "₹5,000",
    icon: <Medal className="text-[#cd7f32]" size={40} />,
    color: "from-[#cd7f32]/20 to-transparent",
    border: "border-[#cd7f32]/30"
  },
  {
    rank: 3,
    title: "Second Runner Up",
    team: "THE GRIX (AIDS)",
    prize: "₹2,500",
    icon: <Award className="text-[#c0c0c0]" size={40} />,
    color: "from-[#c0c0c0]/20 to-transparent",
    border: "border-[#c0c0c0]/30"
  }
];

export const WinnersReveal = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
        {/* Render rank 2, then 1, then 3 for podium effect */}
        {[WINNERS[1], WINNERS[0], WINNERS[2]].map((winner, idx) => (
          <motion.div
            key={winner.rank}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: idx * 0.5 + 1, 
              type: "spring", 
              stiffness: 100,
              damping: 15
            }}
            className={`glass p-8 rounded-3xl flex flex-col items-center text-center relative overflow-hidden group 
              ${winner.rank === 1 ? 'md:pb-20 border-hack-green/50 shadow-[0_0_50px_rgba(74,222,128,0.2)]' : 'h-auto'}
              bg-gradient-to-b ${winner.color} ${winner.border}
            `}
          >
            {winner.rank === 1 && (
              <div className="absolute top-0 inset-x-0 h-1 bg-hack-green animate-pulse" />
            )}
            
            <div className="mb-6 relative">
              <div className="absolute inset-0 blur-xl opacity-50 bg-current" />
              {winner.icon}
            </div>

            <p className="text-[10px] text-hack-green font-black tracking-[0.3em] uppercase mb-2">
              Rank {winner.rank}
            </p>
            
            <h3 className="text-xl font-black text-white mb-4 uppercase italic">
              {winner.title}
            </h3>

            <div className="w-full bg-black/40 p-6 rounded-2xl border border-white/5 mb-6 group-hover:border-hack-green/30 transition-all">
              <p className="text-xs text-gray-500 uppercase font-bold tracking-widest mb-2">Winning Squad</p>
              <h4 className="text-3xl font-black text-white tracking-tighter drop-shadow-sm">
                {winner.team}
              </h4>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-hack-green font-mono text-2xl font-black">{winner.prize}</span>
            </div>

            {winner.rank === 1 && (
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 opacity-20 pointer-events-none">
                <Trophy size={200} className="text-hack-green" />
              </div>
            )}
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5 }}
        className="mt-16 text-center"
      >
        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-hack-green/10 border border-hack-green/20">
          <Terminal size={16} className="text-hack-green" />
          <p className="text-sm font-mono text-gray-400">
            ALL PROTOCOLS SECURED. CONGRATULATIONS TO THE VICTORS.
          </p>
        </div>
      </motion.div>
    </div>
  );
};
