'use client';

import React from 'react';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import { Cpu, ShieldCheck, HeartPulse, Globe, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';

const tracks = [
  {
    id: "ai",
    title: "Artificial Intelligence",
    description: "Build intelligent systems, LLM applications, or predictive models to solve complex problems.",
    icon: <Cpu className="w-10 h-10 text-hack-neonCyan" />,
    color: "from-cyan-500/20 to-blue-500/20"
  },
  {
    id: "cyber",
    title: "Cybersecurity",
    description: "Develop tools for threat detection, cryptography, or securing digital infrastructure.",
    icon: <ShieldCheck className="w-10 h-10 text-hack-neonPurple" />,
    color: "from-purple-500/20 to-pink-500/20"
  },
  {
    id: "health",
    title: "Healthcare Tech",
    description: "Innovate hardware or software solutions to improve patient care and medical accessibility.",
    icon: <HeartPulse className="w-10 h-10 text-rose-400" />,
    color: "from-rose-500/20 to-red-500/20"
  },
  {
    id: "social",
    title: "Social Impact",
    description: "Create tech that drives sustainability, education equality, or community empowerment.",
    icon: <Globe className="w-10 h-10 text-emerald-400" />,
    color: "from-emerald-500/20 to-teal-500/20"
  },
  {
    id: "open",
    title: "Open Innovation",
    description: "Got an idea that doesn't fit the above? The open track is for any wild, disruptive concept.",
    icon: <Lightbulb className="w-10 h-10 text-amber-400" />,
    color: "from-amber-500/20 to-yellow-500/20"
  }
];

export function Tracks() {
  return (
    <Section id="tracks">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Hackathon <span className="text-gradient">Tracks</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-gray-400 max-w-2xl mx-auto"
        >
          Choose a domain that aligns with your passion. We have curated these specific tracks to inspire 
          solutions for some of the most pressing challenges of our time.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tracks.map((track, i) => (
          <motion.div
            key={track.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className={i === 4 ? "md:col-span-2 lg:col-span-1" : ""} // Center the 5th item on medium screens
          >
            <Card gradient className="h-full min-h-[250px] group cursor-default">
              <div className={`absolute inset-0 bg-gradient-to-br ${track.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-6 p-4 rounded-2xl bg-black/40 inline-flex self-start border border-white/10 group-hover:border-white/30 transition-colors">
                  {track.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{track.title}</h3>
                <p className="text-gray-400 leading-relaxed flex-grow">
                  {track.description}
                </p>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
