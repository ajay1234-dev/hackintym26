'use client';

import React from 'react';
import { Section } from '../ui/Section';
import { motion } from 'framer-motion';

export function AboutMSIIC() {
  return (
    <Section id="about-msiic" className="bg-transparent">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-4 uppercase"
        >
          About <span className="text-gradient">MSIIC</span>
        </motion.h2>
        <motion.p
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.1 }}
           className="text-gray-400 max-w-2xl mx-auto text-lg"
        >
           Meenakshi Sundararajan Innovation and Incubation Centre
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="w-24 h-1 bg-gradient-to-r from-hack-neonCyan to-hack-neonPurple mx-auto rounded-full mt-4"
        />
      </div>

      <div className="flex flex-col lg:flex-row gap-12 items-center">
        <div className="lg:w-1/2 flex justify-center lg:justify-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, boxShadow: "0 0 35px rgba(34,197,94,0.6)" }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-lg rounded-[30px] p-2 bg-white/5 border border-hack-neonCyan/40 shadow-[0_0_25px_rgba(34,197,94,0.4)] backdrop-blur-md flex items-center justify-center shrink-0"
          >
            <img src="/posters/msiic.png" alt="MSIIC Poster" className="w-full h-auto rounded-2xl block" />
          </motion.div>
        </div>

        {/* Text Description */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:w-1/2 space-y-6 text-lg text-gray-300 leading-relaxed"
        >
          <p>
            MSIIC is a student-driven innovation and incubation center that encourages creativity, entrepreneurship, and technology-driven solutions.
          </p>
          <p>
            It provides a collaborative environment where students work on impactful projects, research initiatives, and hackathons that solve real-world challenges. From ideation to execution, MSIIC enables participants to tap into a robust ecosystem of mentors, resources, and industry networks.
          </p>
        </motion.div>
      </div>
    </Section>
  );
}
