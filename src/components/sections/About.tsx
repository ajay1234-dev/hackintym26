'use client';

import React from 'react';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import { Clock, Users, Zap, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';

const highlights = [
  {
    icon: <Clock className="w-8 h-8 text-hack-neonCyan" />,
    title: "30 Hours",
    description: "Non-stop coding and innovation challenge to build something extraordinary."
  },
  {
    icon: <Users className="w-8 h-8 text-hack-neonPurple" />,
    title: "Networking",
    description: "Meet like-minded peers, industry experts, and potential co-founders."
  },
  {
    icon: <Zap className="w-8 h-8 text-hack-neonBlue" />,
    title: "Mentorship",
    description: "Get guidance from experienced professionals throughout the event."
  },
  {
    icon: <Trophy className="w-8 h-8 text-[#ffcc00]" />,
    title: "Huge Prizes",
    description: "Compete for cash prizes, swag, and exclusive internship opportunities."
  }
];

export function About() {
  return (
    <Section id="about" className="bg-white/[0.02]">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          About <span className="text-gradient">HACKINTYM 26</span>
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="w-24 h-1 bg-gradient-to-r from-hack-neonCyan to-hack-neonPurple mx-auto rounded-full"
        />
      </div>

      <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:w-1/2 space-y-6 text-lg text-gray-300 leading-relaxed"
        >
          <p>
            Welcome to <strong className="text-white">HACKINTYM 26</strong>, the exhilarating hackathon event where innovation meets creativity! Over the course of this high-energy competition, teams will tackle real-world challenges across diverse domains, from healthcare and education to sustainability and AI. Participants will have the opportunity to develop groundbreaking solutions, connect with industry experts, and showcase their skills in a collaborative and competitive environment. With a focus on pushing boundaries and creating impactful technologies, Hackintym promises an unforgettable experience full of learning, networking, and groundbreaking ideas. Join us to turn your vision into reality and make a difference!
          </p>
          <p>
            It&apos;s not just about writing code; it&apos;s about building solutions that can truly <span className="text-hack-neonCyan font-semibold">transform</span> the future.
          </p>
        </motion.div>

        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, boxShadow: "0 0 35px rgba(34,197,94,0.6)" }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-lg rounded-[30px] p-2 bg-white/5 border border-hack-neonCyan/40 shadow-[0_0_25px_rgba(34,197,94,0.4)] backdrop-blur-md flex items-center justify-center shrink-0"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/posters/hackintym-poster.jpeg" alt="Hackintym 26 Poster" className="w-full h-auto rounded-2xl block" />
          </motion.div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {highlights.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full hover:-translate-y-2 transition-transform duration-300 group">
              <div className="mb-4 p-3 inline-flex rounded-lg bg-white/5 border border-white/10 group-hover:border-hack-neonCyan/50 transition-colors">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-gray-400">{item.description}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
