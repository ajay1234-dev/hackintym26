"use client";

import React, { useState, useEffect } from "react";
import { Button } from "../ui/Button";
import { Section } from "../ui/Section";
import { motion } from "framer-motion";
import Link from "next/link";
import { Terminal } from "lucide-react";

export function Hero() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set hackathon date to April 18, 2026, 10:00 AM
    const hackathonDate = new Date("2026-04-18T10:00:00");

    const timer = setInterval(() => {
      const now = new Date();
      const difference = hackathonDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Section
      id="home"
      className="min-h-[90vh] flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 z-[-1] bg-tech-grid opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-hack-neonPurple/20 rounded-full blur-[120px] z-[-1]" />
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-hack-neonCyan/20 rounded-full blur-[100px] z-[-1]" />

      <div className="text-center z-10 w-full max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-hack-neonCyan/30 text-hack-neonCyan text-sm font-medium">
            <Terminal size={16} />
            <span>Registrations Open Now</span>
          </div>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <span
            className="animate-gradient-x"
            style={{
              backgroundImage: "linear-gradient(90deg, #facc15, #3b82f6, #9ca3af, #facc15, #3b82f6)",
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              color: "transparent",
              display: "inline-block"
            }}
          >
            HACKINTYM
          </span>
          {" "}
          <span className="text-[#4ade80] drop-shadow-[0_0_15px_rgba(74,222,128,0.5)]">
            26
          </span>
        </motion.h1>

        {/* Club Logos */}
        <motion.div
          className="flex justify-center items-center gap-6 mb-8"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          {[1, 2, 3].map((num) => (
            <div
              key={num}
              className="w-20 h-20 md:w-24 md:h-24 rounded-full glass bg-white/5 flex items-center justify-center border border-hack-neonCyan/30 hover:border-hack-neonCyan shadow-[0_0_15px_rgba(74,222,128,0.2)] hover:shadow-[0_0_25px_rgba(74,222,128,0.6)] transition-all overflow-hidden relative group"
            >
              <img
                src={`/clubs/club${num}.png`}
                alt={`Club ${num}`}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity transform-gpu"
                loading="lazy"
              />
            </div>
          ))}
        </motion.div>

        <motion.p
          className="text-xl md:text-3xl text-gray-300 font-light mb-10 text-balance"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <span className="text-white font-medium">30 Hour Hackathon</span>
        </motion.p>
        {/* Countdown Timer */}
        <motion.div
          className="flex justify-center gap-4 md:gap-8 mb-12"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.25 }}
        >
          {[
            { label: "Days", value: timeLeft.days },
            { label: "Hours", value: timeLeft.hours },
            { label: "Mins", value: timeLeft.minutes },
            { label: "Secs", value: timeLeft.seconds },
          ].map((item) => (
            <div key={item.label} className="flex flex-col items-center">
              <div className="w-16 h-16 md:w-24 md:h-24 glass-card flex items-center justify-center rounded-xl md:rounded-2xl mb-2 border-white/20">
                <span className="text-2xl md:text-5xl font-bold font-mono text-white text-shadow-neon tabular-nums">
                  {item.value.toString().padStart(2, "0")}
                </span>
              </div>
              <span className="text-xs md:text-sm text-gray-400 uppercase tracking-wider">
                {item.label}
              </span>
            </div>
          ))}
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a
            href="https://forms.gle/6BsFMstYhmA4P7es7"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              variant="primary"
              className="w-full sm:w-auto min-w-[200px]"
            >
              Register Now
            </Button>
          </a>
          <Link href="#about">
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto min-w-[200px]"
            >
              Learn More
            </Button>
          </Link>
        </motion.div>
      </div>
    </Section>
  );
}
