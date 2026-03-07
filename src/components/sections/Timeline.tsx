'use client';

import React from 'react';
import { Section } from '../ui/Section';
import { motion } from 'framer-motion';

const timelineEvents = [
  { time: "April 15, 2026", title: "Registration Opens", description: "Start forming your teams and registering for the hackathon.", status: "completed" },
  { time: "May 10, 2026", title: "Idea Submission Deadline", description: "Submit your team's project idea for shortlisting.", status: "upcoming" },
  { time: "May 15, 2026", title: "Team Shortlisting", description: "Announcement of selected teams invited to the hackathon.", status: "upcoming" },
  { time: "June 05, 2026 - 10:00 AM", title: "Hackathon Starts", description: "Opening ceremony and coding begins! 30 hours on the clock.", status: "upcoming" },
  { time: "June 05, 2026 - 8:00 PM", title: "First Mentoring Session", description: "Mentors review progress and provide feedback.", status: "upcoming" },
  { time: "June 06, 2026 - 2:00 PM", title: "Coding Freeze", description: "Stop coding! Finalize your presentations.", status: "upcoming" },
  { time: "June 06, 2026 - 3:00 PM", title: "Final Presentations", description: "Pitch your product to the judges.", status: "upcoming" },
  { time: "June 06, 2026 - 6:00 PM", title: "Winners Announced", description: "Closing ceremony and prize distribution.", status: "upcoming" }
];

export function Timeline() {
  return (
    <Section id="timeline" className="bg-hack-darkBg relative">
      <div className="absolute top-0 right-0 w-1/3 h-[500px] bg-hack-neonBlue/10 rounded-full blur-[150px] z-0 pointer-events-none" />
      
      <div className="text-center mb-16 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Event <span className="text-gradient">Timeline</span>
        </motion.h2>
      </div>

      <div className="relative max-w-4xl mx-auto z-10">
        {/* Vertical Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/20 md:-translate-x-1/2" />

        <div className="space-y-12">
          {timelineEvents.map((event, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                className={`relative flex items-center justify-between md:justify-normal w-full group
                  ${isEven ? "md:flex-row-reverse" : ""}`
                }
              >
                {/* Center Node */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-hack-darkBg border-2 border-hack-neonCyan transform -translate-x-[7px] md:-translate-x-1/2 group-hover:bg-hack-neonCyan group-hover:scale-125 transition-all duration-300 shadow-[0_0_10px_rgba(0,240,255,0.8)] z-10" />

                {/* Content Card container */}
                <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${isEven ? "md:text-left" : "md:text-right"}`}>
                  <div className={`p-6 glass-card border border-white/5 group-hover:border-hack-neonCyan/30 transition-colors
                    ${isEven ? "mr-0" : "ml-0"}`}
                  >
                    <span className="text-hack-neonCyan font-mono text-sm font-semibold mb-2 block tracking-wider">
                      {event.time}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{event.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
