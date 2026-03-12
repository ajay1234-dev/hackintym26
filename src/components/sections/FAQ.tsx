'use client';

import React, { useState } from 'react';
import { Section } from '../ui/Section';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "Who can participate?",
    answer: "HACKINTYM 26 is open to all MSEC students (undergraduates) from any background. You must be at least 18 years old or have parental consent to participate."
  },
  {
    question: "What is the team size?",
    answer: "You can form a team of 4 members. We highly encourage cross-disciplinary teams (e.g., ECE,IT,AIDS,CIVIL,....)."
  },
  {
    question: "Is it online or offline?",
    answer: "HACKINTYM 26 is a hybrid event. The initial idea submission and shortlisting will be online. The final 30-hour hackathon will be completely offline at our university campus venue."
  },
  {
    question: "Is there any registration fee?",
    answer: "Registration is free for the First online Round,Shortlised Teams Should pay 250 Rs as Registration fees."
  },
  {
    question: "What should we bring?",
    answer: "Bring your laptop, chargers, any necessary hardware for your project, a valid student ID, and your enthusiasm!."
  },
  {
    question: "Do I need to have a project idea right now?",
    answer: "While Registering in the Form you need to submit a PPT of your Previous Project or a New problem statement with the respective idea."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section id="faq">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Frequently Asked <span className="text-gradient">Questions</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-gray-400 max-w-2xl mx-auto"
        >
          Got some doubts? We&apos;ve got you covered.
        </motion.p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card overflow-hidden border border-white/10 hover:border-hack-neonCyan/30 transition-colors"
            >
              <button
                className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
                onClick={() => toggleOpen(index)}
              >
                <span className={`font-semibold text-lg transition-colors ${isOpen ? 'text-hack-neonCyan' : 'text-white'}`}>
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-hack-neonCyan' : ''}`} 
                />
              </button>
              
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5 pt-0 text-gray-300 leading-relaxed border-t border-white/5 mt-2 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
