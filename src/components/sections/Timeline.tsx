'use client';

import React, { useState, useEffect } from 'react';
import { Section } from '../ui/Section';
import { motion } from 'framer-motion';

const timelineEvents = [
  { time: "March 14, 2026", title: "Registration Opens", description: "Start forming your teams and registering for the hackathon." },
  { time: "April 1, 2026", title: "Idea Submission Deadline", description: "Submit your team's project idea for shortlisting." },
  { time: "April 9, 2026", title: "Team Shortlisting", description: "Announcement of selected teams invited to the hackathon." },
  { time: "April 18, 2026 - 10:00 AM", title: "Hackathon Starts", description: "Opening ceremony and coding begins! 30 hours on the clock." },
  { time: "April 18, 2026 - 6:00 PM", title: "First review Session", description: "Problem understanding & idea validation" },
  { time: "April 19, 2026 - 12:00 AM", title: "Second review Session", description: "Prototype & technical progress" },
  { time: "April 19, 2026 - 4:00 AM", title: "Final review Session", description: "Final Product & impact" },
  { time: "April 19, 2026 - 8:00 AM", title: "Filteration of teams", description: "Top 10 Selected teams are annouced" },
  { time: "April 19, 2026 - 10:00 AM", title: "Winners Announced", description: "Closing ceremony and prize distribution." },
];

const parseDateString = (dateStr: string) => {
  return new Date(dateStr.replace(" - ", " "));
};

export function Timeline() {
  const [mounted, setMounted] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  const now = mounted ? currentTime : new Date('2026-03-01T00:00:00'); // Default to before event if SSR

  let currentIndex = -1;
  for (let i = 0; i < timelineEvents.length; i++) {
    if (now.getTime() >= parseDateString(timelineEvents[i].time).getTime()) {
      currentIndex = i;
    } else {
      break;
    }
  }

  // Calculate progress percentage for the vertical line to reach the current index
  const progressPercentage = timelineEvents.length > 0 && currentIndex >= 0
    ? Math.min(100, Math.max(0, ((currentIndex + 0.5) / timelineEvents.length) * 100))
    : 0;

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
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/20 md:-translate-x-1/2">
          {mounted && (
            <div 
              className="absolute top-0 left-0 w-full bg-hack-neonCyan transition-all duration-1000 ease-out shadow-[0_0_10px_rgba(0,240,255,0.8)]" 
              style={{ height: `${progressPercentage}%` }}
            />
          )}
        </div>

        <div className="space-y-12">
          {timelineEvents.map((event, index) => {
            const isEven = index % 2 === 0;
            const isPast = index < currentIndex;
            const isCurrent = index === currentIndex;
            const isUpcoming = index > currentIndex;

            return (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                className={`relative flex items-center justify-between md:justify-normal w-full group
                  ${isEven ? "md:flex-row-reverse" : ""}
                  ${mounted && isPast ? "opacity-50 grayscale" : mounted && isUpcoming ? "opacity-90" : "opacity-100"}`
                }
              >
                {/* Center Node */}
                <div className={`absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-hack-darkBg border-2 transform -translate-x-[7px] md:-translate-x-1/2 z-10 transition-all duration-500
                  ${!mounted ? "border-hack-neonCyan shadow-[0_0_10px_rgba(0,240,255,0.8)] group-hover:bg-hack-neonCyan group-hover:scale-125" : 
                    isPast ? "border-hack-neonCyan bg-hack-neonCyan/50 scale-90" : 
                    isCurrent ? "border-hack-neonCyan bg-hack-neonCyan scale-150 shadow-[0_0_20px_rgba(0,240,255,1)] animate-pulse" : 
                    "border-white/30 group-hover:border-hack-neonCyan group-hover:scale-125"}
                `} />

                {/* Content Card container */}
                <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${isEven ? "md:text-left" : "md:text-right"}`}>
                  <div className={`p-6 glass-card border transition-colors duration-500
                    ${isEven ? "mr-0" : "ml-0"}
                    ${!mounted ? "border-white/5 group-hover:border-hack-neonCyan/30" :
                      isPast ? "border-white/5 bg-white/5" :
                      isCurrent ? "border-hack-neonCyan/80 bg-hack-neonCyan/10 shadow-[0_0_15px_rgba(0,240,255,0.15)]" :
                      "border-white/5 hover:border-hack-neonCyan/30"}
                  `}>
                    <span className={`font-mono text-sm font-semibold mb-2 block tracking-wider transition-colors
                      ${!mounted || isCurrent ? "text-hack-neonCyan" : isPast ? "text-gray-500" : "text-gray-400"}
                    `}>
                      {event.time}
                    </span>
                    <h3 className={`text-xl font-bold mb-2 transition-colors ${isCurrent ? "text-white drop-shadow-md" : "text-gray-200"}`}>
                      {event.title}
                    </h3>
                    <p className={`text-sm leading-relaxed transition-colors ${isCurrent ? "text-gray-200" : "text-gray-400"}`}>
                      {event.description}
                    </p>
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
