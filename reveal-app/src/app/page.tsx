'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CountdownOverlay } from '@/components/CountdownOverlay';
import { FlashEffect } from '@/components/FlashEffect';
import { WinnersReveal } from '@/components/WinnersReveal';
import { Sparkles, Terminal, ShieldCheck, Trophy } from 'lucide-react';

type AppState = 'IDLE' | 'COUNTDOWN' | 'REVEALING' | 'ANNOUNCING' | 'UNLOCKED';

export default function RevealPage() {
  const [state, setState] = useState<AppState>('IDLE');
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (state === 'COUNTDOWN' && countdown > 0) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    } else if (state === 'COUNTDOWN' && countdown === 0) {
      setState('REVEALING');
      setTimeout(() => setState('ANNOUNCING'), 1000);
    } else if (state === 'ANNOUNCING') {
      timer = setTimeout(() => setState('UNLOCKED'), 8000);
    }
    return () => clearTimeout(timer);
  }, [state, countdown]);

  const handleStartReveal = () => {
    if (state === 'IDLE') {
      setState('COUNTDOWN');
    }
  };

  return (
    <main className="min-h-screen bg-hack-dark text-white selection:bg-hack-green selection:text-black">
      {/* Background Decor */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-hack-green/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-hack-green/5 blur-[120px] rounded-full" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03]" />
      </div>

      <AnimatePresence>
        {state === 'COUNTDOWN' && (
          <CountdownOverlay countdown={countdown} />
        )}
        {state === 'REVEALING' && (
          <FlashEffect />
        )}
        {state === 'ANNOUNCING' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-hack-dark text-center px-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <Trophy size={100} className="text-hack-green drop-shadow-[0_0_20px_rgba(74,222,128,0.5)]" />
            </motion.div>
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl font-black text-white italic uppercase tracking-tighter"
            >
              The moment you've <br /> been waiting for...
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-hack-green mt-6 font-mono tracking-widest uppercase text-sm animate-pulse"
            >
              Finalizing global verification protocols
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content Area */}
      <div className="relative pt-20 pb-20 px-4">
        {state === 'IDLE' && (
          <div className="min-h-[80vh] flex flex-col items-center justify-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-hack-green/10 border border-hack-green/20 text-hack-green text-xs font-bold tracking-[0.2em] mb-6"
            >
              <ShieldCheck size={14} /> AUTHORIZATION GRANTED
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-8xl font-black mb-4 tracking-tighter"
            >
              HACKINTYM'26 <span className="text-hack-green font-outline-2">EVO</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 text-xl md:text-2xl max-w-2xl font-light mb-12"
            >
              The Arena is Ready. All core systems initialized.
              Waiting for final results deployment.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              onClick={handleStartReveal}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group outline-none"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-hack-green to-emerald-600 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-hack-dark px-12 py-6 rounded-2xl border border-white/10 flex items-center gap-4 text-xl font-bold">
                <Sparkles className="text-hack-green group-hover:animate-spin" />
                INITIATE WINNERS REVEAL
              </div>
            </motion.button>
          </div>
        )}

        {state === 'UNLOCKED' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="w-full"
          >
            <div className="text-center mb-16">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="inline-block relative"
              >
                <h1 className="text-5xl md:text-7xl font-black mb-4 tracking-tight uppercase italic flex items-center justify-center gap-4">
                  <Trophy className="text-hack-green" size={48} />
                  THE HALL OF <span className="text-hack-green text-glow-green">VICTORS</span>
                </h1>
                <div className="h-1 w-full bg-gradient-to-r from-transparent via-hack-green to-transparent opacity-50" />
              </motion.div>
              <p className="text-gray-400 mt-6 max-w-2xl mx-auto uppercase tracking-widest font-mono text-xs">
                HACKINTYM'26 EVO Winners have been declassified.
              </p>
            </div>

            <WinnersReveal />
          </motion.div>
        )}
      </div>

      {state === 'UNLOCKED' && (
        <footer className="py-12 border-t border-white/5 bg-black/20 text-center">
          <p className="text-gray-600 font-mono text-xs tracking-widest uppercase">
            &copy; 2026 HACKINTYM EVO // SECURED BY QUANTUM-GATE v4.2
          </p>
        </footer>
      )}
    </main>
  );
}
