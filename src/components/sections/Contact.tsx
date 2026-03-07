'use client';

import React from 'react';
import { Section } from '../ui/Section';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, ExternalLink } from 'lucide-react';
import { Card } from '../ui/Card';

export function Contact() {
  return (
    <Section id="contact" className="bg-hack-darkBg">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Get in <span className="text-gradient">Touch</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-gray-400 max-w-2xl mx-auto"
        >
          Have questions we didn&apos;t cover in the FAQ? Reach out to us.
        </motion.p>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.1 }}
        >
          <Card className="flex flex-col items-center text-center group hover:border-hack-neonCyan/40">
            <div className="p-4 rounded-full bg-white/5 group-hover:bg-hack-neonCyan/10 transition-colors mb-4">
              <Mail className="w-8 h-8 text-hack-neonCyan" />
            </div>
            <h3 className="text-white font-bold text-lg mb-2">Email Us</h3>
            <p className="text-gray-400 text-sm mb-4">For general queries.</p>
            <a href="mailto:hello@hackintym.com" className="text-hack-neonCyan font-medium hover:underline flex items-center gap-1">
              hello@hackintym.com <ExternalLink size={14} />
            </a>
          </Card>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.2 }}
        >
          <Card className="flex flex-col items-center text-center group hover:border-hack-neonPurple/40">
            <div className="p-4 rounded-full bg-white/5 group-hover:bg-hack-neonPurple/10 transition-colors mb-4">
              <Phone className="w-8 h-8 text-hack-neonPurple" />
            </div>
            <h3 className="text-white font-bold text-lg mb-2">Call Us</h3>
            <p className="text-gray-400 text-sm mb-4">Mon-Fri from 9am to 6pm.</p>
            <a href="tel:+919876543210" className="text-hack-neonPurple font-medium hover:underline">
              +91 98765 43210
            </a>
          </Card>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.3 }}
        >
          <Card className="flex flex-col items-center text-center group hover:border-hack-neonBlue/40">
            <div className="p-4 rounded-full bg-white/5 group-hover:bg-hack-neonBlue/10 transition-colors mb-4">
              <MapPin className="w-8 h-8 text-hack-neonBlue" />
            </div>
            <h3 className="text-white font-bold text-lg mb-2">Venue</h3>
            <p className="text-gray-400 text-sm mb-4">Comman Computer Centre 1,3rd Floor,Main Campus.</p>
            <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="text-hack-neonBlue font-medium hover:underline flex items-center gap-1">
              View on Map <ExternalLink size={14} />
            </a>
          </Card>
        </motion.div>
      </div>
    </Section>
  );
}
