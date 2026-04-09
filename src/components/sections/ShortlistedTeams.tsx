'use client';

import React, { useState, useEffect } from 'react';
import { Section } from '../ui/Section';
import { motion, AnimatePresence } from 'framer-motion';

type TeamInfo = {
  name: string;
  department: string;
  members: string[];
};

// Placeholder data - replace with actual team names, departments, and members later
const shortlistedTeams: TeamInfo[] = [
  { name: "Datadazzlers", department: "AI & DS", members: ["Miruthula S G - AIDS 2yr", "Jaya T S - AIDS 2yr", "Kanimozhi N - AIDS 2yr", "Vishali - AIDS 2yr"] },
  { name: "The Grix", department: "AI & DS", members: ["Prince R - AIDS 2yr", "Rohith S - AIDS 2yr", "Umaiyaswaran - AIDS 2yr", "Prasanna venkat - AIDS 2yr"] },
  { name: "Team hopeless", department: "AI & DS", members: ["Karthikeyan K R - AIDS 3yr", "Pandeeswaran B - AIDS 3yr", "Kumaraguru P - AIDS 3yr", "Veebika V S - AIDS 3yr"] },
  { name: "Hyper Nova", department: "ECE", members: ["Aditya lakshmi A - ECE 3yr", "Keerthana R - ECE 3yr", "Purushothaman S - ECE 3yr", "Harish E - AIDS 3yr"] },
  { name: "Connect", department: "ECE", members: ["Deeshitha N - ECE 1yr", "Ananyaa B K - ECE 1yr", "Aathi Shree - ECE 1yr", "Keerthana S S - ECE 1yr"] },
  { name: "Sparkles", department: "IT", members: ["Renukadevi K - IT 3yr", "Thejasvini M - IT 3yr", "Sandhiya S - IT 3yr", "Darsni TS - IT 3yr"] },
  { name: "Elite", department: "CSE", members: ["Nifa Fathima O A - CSE 2yr", "Varshini S  - CSE 2yr", "Shahana S - CSE 2yr", "Tamilarasi  - CSE 2yr"] },
  { name: "Nova Four ", department: "IT", members: ["Aswini V - IT 1yr", "Aparajitha J - IT 1yr", "Angellina Joyce Paul - IT 1yr", "Preethi S - IT 1yr"] },
  { name: "SheEnergy", department: "CSE", members: ["P.Sai Dharshini  - CSE 2yr", "Nithya Devi  - CSE 2yr", "S.Rupika - CSE 2yr", "B.K.Shanmuga Priya  - CSE 2yr"] },
  { name: "INNOVISION", department: "EEE", members: ["Aarthi Sasi - EEE 3yr", "Rakshitha.V.S - EEE 3yr", "Harsini.M - EEE 3yr", "Mahalakshmi.T - EEE 3yr"] },
  { name: "PlaySync", department: "IT", members: ["Shweta .V - IT 1yr", "Siva sorna sudharshon. K - IT 1yr", "Sujithra .k - IT 1yr", "Nivetha.S - ECE 1yr"] },
  { name: "MS VISIONARY", department: "CSE", members: ["Mari Sakthi.M - CSE 1yr", "Madhumittha.S - CSE 1yr", "Aisshwarya.A - CSE 1yr", "Yuvashree Krisshnna.G - Civil 1yr"] },
  { name: "Cybersquard", department: "CSE", members: ["Praveen G - CSE 3yr", "Dev Vikram Joshi - CSE 3yr", "Naveenraj R - CSE 3yr", "Nagarajan J - CSE 3yr"] },
  { name: "Veldora", department: "AI & DS", members: ["Jain Christo J K - AI & DS 1yr", "Madhumitha S K - AI & DS 1yr", "Mohamad Zubair SMB - AI & DS 1yr", "Farah Fathima D - AI & DS 1yr"] },
  { name: "GridGuardians", department: "CSE", members: ["Saravana Nageswar B - CSE 2yr", "Pranav H - CSE 2yr", "Nikesh Kumar B - CSE 2yr", "Tharun M U - CSE 2yr"] },
  { name: "Low batery legends ", department: "ECE", members: ["Karthikhaa MM - ECE 2yr", "Harshini B - ECE 2yr", "Agalya S - ECE 2yr", "Reha sree - IT 2yr"] },
  { name: "Tech Talkies", department: "IT", members: ["Harshita - IT 1yr", "Loyen sylvia - IT 1yr", "Janani - IT 1yr", "Khushee - IT 1yr"] },
  { name: "Petrova", department: "CSE", members: ["Valarmathi Chezhiyan - CSE 1yr", "Sri Muthukumar Sami - CSE 1yr", "Vanishree - CSE 1yr", "Pratheeba - CSE 1yr"] },
  { name: "Codewaves", department: "AI & DS", members: ["Sandhya Krishnamari P - AI & DS 2yr", "Rahul Kumar - AI & DS 2yr", "Sakthivel - AI & DS 2yr", "shamini priya NJ - AI & DS 2yr"] },
  { name: "Astra", department: "AI & DS", members: ["Divya Dharshini R - AI & DS 1yr", "A. Afrah - AI & DS 1yr", "H. Heji - AI & DS 1yr", "Kalaiselvi E - AI & DS 1yr"] },
  { name: "Scammers", department: "IT", members: ["Kirubakaran H - IT 2yr", "B.Lingeshwar - IT 2yr", "Amritha shree L - IT 2yr", "DIVYA DHARSHINI S - IT 2yr"] },
  { name: "Ctrl Alt Elite", department: "CSE", members: ["Rakkesh S A - CSE 3yr", "Guru Govindh M - CSE 3yr", "Krishna Priya S - CSE 3yr", "Swetha S - CSE 3yr "] },
  { name: "Quantum Coders", department: "CSE", members: ["Gopika K - CSE 3yr", "Mary Kanakam oommen - CSE 3yr", "Monika K.R - CSE 3yr", "Prathik E - CSE 3yr"] },
  { name: "ZENITH", department: "AI & DS", members: ["Raveendhar K - AI & DS 2yr", "Venkatesan R - AI & DS 2yr", "Eraianbu D - AI & DS 2yr", "Rohith Devavradhan G - 2yr"] },
  { name: "SIGMA FUSION", department: "IT", members: ["Pratiksha Shree S - IT 2yr", "Krithika.M - ECE 2yr", "Harini V - ECE  2yr", "Lakshya S - ECE 2yr"] }
];

const waitlistedTeams: TeamInfo[] = [
  { name: "SheNnovators", department: "AI & DS", members: ["Moshika.S - AI & DS 2yr", "Kaviya.S - AI & DS 2yr", "Divya Dharshini.J - AI & DS 2yr", "Akshaya.A - AI & DS 2yr"] },
  { name: "GridX Innovators", department: "ECE", members: ["Omesh Kaarthik S U - ECE 2yr", "Tammu Vedesh Kumar - ECE 2yr", "Shubham Kumar - ECE 2yr", "K.Monishwaran - Mech 2yr"] },
  { name: "SparkX", department: "CSE", members: ["Srimathi R - CSE 1yr", "Santhosree S - CSE 1yr", "Shree K.N - CSE 1yr", "Yuvan Nithish N.S - CSE 1yr"] },
  { name: "Avenix ", department: "ECE", members: ["Arul Prakash S - ECE 2yr", "Kaviya JK - ECE 2yr", "Aravindhan R - ECE 2yr", "Charubala - ECE 2yr"] },
  { name: "Ctrl Freaks", department: "AI & DS", members: ["Thanooja S - AI & DS 2yr", "Ponveil N- AI & DS 2yr", "Sindhuja S - AI & DS 2yr", "Sivasri K - AI & DS 2yr"] }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 24 } }
};

export function ShortlistedTeams() {
  const [hasSeenReveal, setHasSeenReveal] = useState(true);
  const [isTriggered, setIsTriggered] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const seen = localStorage.getItem('hasSeenShortlistReveal');
    if (!seen) {
      setHasSeenReveal(false);
    }
  }, []);

  const handleRevealTrigger = (force = false) => {
    if ((hasSeenReveal && !force) || isTriggered) return;
    
    setIsTriggered(true);

    // Play Sound
    try {
      const audio = new Audio('/sounds/reveal.mp3');
      audio.volume = 0.6;
      audio.play().catch(e => console.log('Audio playback prevented or missing:', e));
    } catch (error) {
      console.log('Audio error:', error);
    }

    // Pre-animation step before showing modal
    setTimeout(() => {
      setIsTriggered(false);
      setShowModal(true);
      localStorage.setItem('hasSeenShortlistReveal', 'true');
    }, 400);
  };

  const closeReveal = () => {
    setShowModal(false);
    setHasSeenReveal(true);
  };

  return (
    <Section id="shortlisted" className="bg-hack-darkerBg relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-0 w-1/3 h-[500px] bg-hack-neonCyan/10 rounded-full blur-[150px] z-0 pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-1/3 h-[500px] bg-hack-neonPurple/10 rounded-full blur-[150px] z-0 pointer-events-none" />

      {/* Pre-animation dim overlay */}
      {isTriggered && !showModal && (
        <div className="absolute inset-0 z-40 bg-black/60 backdrop-blur-[2px] animate-pulse pointer-events-none" />
      )}

      {/* Main Modal Reveal */}
      <AnimatePresence>
        {showModal && (
          <motion.div 
            className="fixed inset-0 z-[100] flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" onClick={closeReveal} />
            
            {/* Particle / Light Effect Behind Popup */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-hack-neonCyan/20 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-hack-neonPurple/30 rounded-full blur-[90px] pointer-events-none" />

            {/* Modal Content */}
            <motion.div 
              className="relative glass-card border border-hack-neonCyan/50 bg-hack-darkBg/95 p-8 sm:p-12 rounded-2xl max-w-lg w-full text-center shadow-[0_0_50px_rgba(74,222,128,0.2)] overflow-hidden"
              initial={{ scale: 0.7, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              {/* Inner subtle glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-hack-neonCyan/10 to-transparent opacity-50 pointer-events-none" />
              
              <h3 className="text-2xl sm:text-3xl font-black text-hack-neonCyan mb-6 tracking-wider uppercase drop-shadow-[0_0_15px_rgba(74,222,128,0.5)]">
                🚨 Phase 1 Completed!
              </h3>
              
              <div className="space-y-4 text-gray-300 text-sm md:text-base font-mono relative z-10 leading-relaxed">
                <p>Shortlisted teams have been revealed.</p>
                <p className="mt-4">But this is just the beginning...</p>
                <div className="text-white mt-4 font-bold tracking-wide">
                  <span className="text-hack-neonCyan">⚡ Something new is coming.</span><br/>
                  Not your usual hackathon.<br/>
                  A hidden twist awaits.
                </div>
                <p className="text-hack-neonPurple font-black mt-8 text-xl tracking-[0.3em] uppercase animate-pulse drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]">
                  Be ready.
                </p>
              </div>

              <button 
                onClick={closeReveal}
                className="mt-10 px-10 py-3 rounded-full bg-hack-neonCyan/10 border border-hack-neonCyan/50 text-hack-neonCyan font-mono hover:bg-hack-neonCyan hover:text-black hover:shadow-[0_0_25px_rgba(74,222,128,0.6)] transition-all z-10 relative cursor-pointer font-bold tracking-wider"
              >
                ACKNOWLEDGE
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div 
        onClick={() => handleRevealTrigger(false)}
        className={`relative z-10 transition-all duration-[400ms] ease-in-out ${
          isTriggered ? 'scale-[1.03] brightness-75 blur-sm' : 'scale-100'
        } ${!hasSeenReveal && !isTriggered ? 'cursor-pointer hover:shadow-[0_0_40px_rgba(74,222,128,0.1)] rounded-[3rem]' : ''}`}
      >
        <div className={`text-center mb-16 relative z-10 px-4 ${!hasSeenReveal ? 'pt-10' : 'pt-4'}`}>
          {!hasSeenReveal && !isTriggered ? (
            <div className="inline-block mb-8 bg-hack-neonCyan/10 border border-hack-neonCyan/40 text-hack-neonCyan px-8 py-3 rounded-full font-mono text-sm shadow-[0_0_20px_rgba(74,222,128,0.2)] animate-pulse hover:bg-hack-neonCyan/20 transition-colors">
              <span className="mr-2">✨</span>Tap anywhere to reveal
            </div>
          ) : (
            hasSeenReveal && !isTriggered && (
              <div 
                onClick={(e) => { e.stopPropagation(); handleRevealTrigger(true); }}
                className="mx-auto flex items-center justify-center w-max mb-6 px-4 py-1.5 rounded-full border border-hack-neonPurple/30 text-hack-neonPurple/60 font-mono text-[10px] sm:text-xs cursor-pointer transition-all duration-300 hover:border-hack-neonPurple hover:text-hack-neonPurple hover:bg-hack-neonPurple/10 hover:shadow-[0_0_15px_rgba(168,85,247,0.4)] group"
              >
                <span className="group-hover:animate-ping opacity-80 mr-2">🤫</span> 
                <span className="tracking-widest uppercase">Secret Message</span>
              </div>
            )
          )}
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-hack-neonCyan font-mono tracking-widest text-sm uppercase mb-3"
        >
          Phase 1 Complete
        </motion.p>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          The <span className="text-gradient">Chosen Few</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 max-w-2xl mx-auto"
        >
          Out of hundreds of submissions, these elite squads have proven their worth and secured their spot in the Hackintym.
        </motion.p>
      </div>

      <div className="relative max-w-7xl mx-auto z-10 px-4">
        {/* Shortlisted Teams Section (25) */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <h3 className="text-2xl font-bold border-l-4 border-hack-neonCyan pl-4 text-white">Verified Contenders</h3>
            <span className="bg-hack-neonCyan/20 text-hack-neonCyan px-3 py-1 rounded-full text-xs font-mono border border-hack-neonCyan/30">
              25 TEAMS
            </span>
            <div className="flex-1 h-px bg-gradient-to-r from-hack-neonCyan/30 to-transparent"></div>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
          >
            {shortlistedTeams.map((team, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className="group relative"
              >
                <div className="absolute inset-0 bg-hack-neonCyan/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                <div className="glass-card relative h-full min-h-[160px] p-6 border border-white/5 bg-white/5 rounded-xl hover:border-hack-neonCyan/50 transition-all duration-300 overflow-hidden flex flex-col items-center justify-center text-center gap-3 group-hover:bg-hack-darkBg/80 group-hover:-translate-y-1">
                  {/* Decorative corner accents */}
                  <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-hack-neonCyan opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-hack-neonCyan opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-hack-neonCyan opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-hack-neonCyan opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="text-hack-neonCyan/80 text-sm font-mono font-bold mb-2 tracking-widest uppercase transition-opacity duration-300 group-hover:opacity-0">
                    {team.department}
                  </div>
                  <h4 className="text-xl md:text-2xl font-bold text-gray-200 transition-opacity duration-300 group-hover:opacity-0">
                    {team.name}
                  </h4>
                  <div className="w-12 h-px bg-white/10 mt-auto transition-opacity duration-300 group-hover:opacity-0" />

                  {/* Members Hover Overlay */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 z-10 p-4 bg-hack-darkBg/95 backdrop-blur-md">
                    <span className="text-hack-neonCyan text-xs sm:text-sm font-mono mb-2 tracking-widest uppercase border-b border-hack-neonCyan/30 pb-1 px-4 inline-block translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">Squad</span>
                    <ul className="space-y-1.5 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                      {team.members.map((member, mIdx) => (
                        <li key={mIdx} className="text-xs sm:text-sm text-gray-300 truncate">{member}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Waitlisted Teams Section (5) */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <h3 className="text-2xl font-bold border-l-4 border-amber-500 pl-4 text-white opacity-80">Standby Sequence</h3>
            <span className="bg-amber-500/20 text-amber-500 px-3 py-1 rounded-full text-xs font-mono border border-amber-500/30">
              5 TEAMS
            </span>
            <div className="flex-1 h-px bg-gradient-to-r from-amber-500/30 to-transparent"></div>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
          >
            {waitlistedTeams.map((team, index) => (
              <motion.div 
                key={`waitlist-${index}`} 
                variants={itemVariants}
                className="group relative"
              >
                <div className="absolute inset-0 bg-amber-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                <div className="glass-card relative h-full min-h-[160px] p-6 border border-white/5 bg-white/5 rounded-xl hover:border-amber-500/50 transition-all duration-300 overflow-hidden flex flex-col items-center justify-center text-center gap-3 opacity-70 hover:opacity-100 group-hover:bg-hack-darkBg/80">
                  {/* Decorative corner accents (amber) */}
                  <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-amber-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-amber-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="text-amber-500/80 text-sm font-mono font-bold mb-2 tracking-widest uppercase transition-opacity duration-300 group-hover:opacity-0">
                    {team.department}
                  </div>
                  <h4 className="text-xl md:text-2xl font-bold text-gray-300 transition-opacity duration-300 group-hover:opacity-0">
                    {team.name}
                  </h4>

                  {/* Members Hover Overlay */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 z-10 p-4 bg-hack-darkBg/95 backdrop-blur-md">
                    <span className="text-amber-500 text-xs sm:text-sm font-mono mb-2 tracking-widest uppercase border-b border-amber-500/30 pb-1 px-4 inline-block translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">Squad</span>
                    <ul className="space-y-1.5 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                      {team.members.map((member, mIdx) => (
                        <li key={mIdx} className="text-xs sm:text-sm text-gray-300 truncate">{member}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      </div>
    </Section>
  );
}
