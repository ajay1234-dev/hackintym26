'use client';

import React from 'react';
import { Section } from '../ui/Section';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { Card } from '../ui/Card';

const teamMembers = [
  {
    name: "Ajay Singh I",
    role: "President",
    image: "https://i.pravatar.cc/300?img=11",
    socials: { linkedin: "#", twitter: "#" }
  },
  {
    name: "Aswin VK",
    role: "Vice President",
    image: "https://i.pravatar.cc/300?img=5",
    socials: { linkedin: "#", github: "#", twitter: "#" }
  },
  {
    name: "Shreya ",
    role: "Secretary",
    image: "https://i.pravatar.cc/300?img=9",
    socials: { linkedin: "#", github: "#" }
  },
  {
    name: "Dharun Kumar SK",
    role: "Treasurer",
    image: "https://i.pravatar.cc/300?img=15",
    socials: { linkedin: "#", twitter: "#" }
  }
];

export function Team() {
  return (
    <Section id="team" className="bg-white/[0.02]">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Meet the <span className="text-gradient">Team</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-gray-400 max-w-2xl mx-auto"
        >
          The dedicated individuals working tirelessly behind the scenes to make HACKINTYM 26 a reality.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {teamMembers.map((member, i) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <Card className="flex flex-col items-center text-center p-6 group hover:border-hack-neonPurple/50">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-6 relative p-1 bg-gradient-to-br from-hack-neonCyan to-hack-neonPurple">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-hack-darkBg relative z-10">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
              <p className="text-hack-neonCyan text-sm font-medium mb-4">{member.role}</p>
              
              <div className="flex items-center gap-3">
                {member.socials.linkedin && (
                  <a href={member.socials.linkedin} className="text-gray-400 hover:text-white transition-colors">
                    <Linkedin size={18} />
                  </a>
                )}
                {member.socials.github && (
                  <a href={member.socials.github} className="text-gray-400 hover:text-white transition-colors">
                    <Github size={18} />
                  </a>
                )}
                {member.socials.twitter && (
                  <a href={member.socials.twitter} className="text-gray-400 hover:text-white transition-colors">
                    <Twitter size={18} />
                  </a>
                )}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
