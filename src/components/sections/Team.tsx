"use client";

import React from "react";
import { Section } from "../ui/Section";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import { Card } from "../ui/Card";

const devDynastyTeam = [
  {
    name: "Ajay Singh I",
    role: "President",
    image: "/photos/ajay.jpeg",
    socials: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Aswin VK",
    role: "Vice President",
    image: "/photos/aswin.jpeg",
    socials: { linkedin: "https://www.linkedin.com/in/vk-aswin-0922462a2?utm_source=share_via&utm_content=profile&utm_medium=member_android", github: "#", twitter: "#" },
  },
  {
    name: "Shreya ",
    role: "Secretary",
    image: "/photos/shreya.jpeg",
    socials: { linkedin: "https://www.linkedin.com/in/shreya-sonpavane-2b2b152a1/", github: "#" },
  },
  {
    name: "Dharun Kumar SK",
    role: "Treasurer",
    image: "/photos/dharun.jpeg",
    socials: { linkedin: "https://www.linkedin.com/in/dharun-kumar-sh?utm_source=share_via&utm_content=profile&utm_medium=member_android", twitter: "#" },
  },
];

const adyantCodingTeam = [
  {
    name: "Ilakiya Emily Joseph Ignatius ",
    role: "President",
    image: "/photos/emily.jpeg",
    socials: { linkedin: "https://www.linkedin.com/in/ilakiya-emily-joseph-ignatius-46ab21291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app", github: "#" },
  },
  {
    name: "Lakshwin Krishna Reddy ",
    role: "Vice President",
    image: "/photos/Lak.PNG",
    socials: { linkedin: "https://www.linkedin.com/in/lakshwinkrishna?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app", github: "#" },
  },
  {
    name: "Nishanth N",
    role: "Secretary",
    image: "/photos/nish.jpeg",
    socials: { linkedin: "https://www.linkedin.com/in/varshikha-ponnambalam-b256662a2", github: "#" },
  },
  {
    name: "Dhiviyashree S",
    role: "Treasurer",
    image: "/photos/dhivya.jpeg",
    socials: { linkedin: " https://www.linkedin.com/in/dhiviyashree-saravanan-117b202a1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app", github: "#" },
  },
];

const aiEpochTeam = [
  {
    name: "Saidharan Y ",
    role: "President",
    image: "/photos/sai.jpeg",
    socials: { linkedin: "https://www.linkedin.com/in/saidharan17?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", github: "#" },
  },
  {
    name: "Dakshineshwar A",
    role: "Vice President",
    image: "/photos/dakshin.jpeg",
    socials: { linkedin: "https://www.linkedin.com/in/dakshin-a-616b112a1/", github: "#" },
  },
  {
   name: "Varshikha P",
    role: "Secretary",
    image: "/photos/varshi.jpeg",
    socials: { linkedin: "https://www.linkedin.com/in/varshikha-ponnambalam-b256662a2", github: "#" },
  },
  {
    name: "Nithya Sri S",
    role: "Treasurer",
    image: "/photos/nithiya.jpeg",
    socials: { linkedin: "https://www.linkedin.com/in/nithyasri11", github: "#" },
  },
];

function TeamSection({
  title,
  description,
  members,
}: {
  title: string;
  description: string;
  members: typeof devDynastyTeam;
}) {
  return (
    <div className="mb-16 last:mb-0">
      <div className="text-center mb-12">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          {title}
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-gray-400 max-w-2xl mx-auto"
        >
          {description}
        </motion.p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {members.map((member, i) => (
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
              <h3 className="text-xl font-bold text-white mb-1">
                {member.name}
              </h3>
              <p className="text-hack-neonCyan text-sm font-medium mb-4">
                {member.role}
              </p>

              <div className="flex items-center gap-3">
                {member.socials.linkedin && (
                  <a
                    href={member.socials.linkedin}
                    target={member.socials.linkedin !== "#" ? "_blank" : undefined}
                    rel={member.socials.linkedin !== "#" ? "noopener noreferrer" : undefined}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <Linkedin size={18} />
                  </a>
                )}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

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
          Meet the <span className="text-gradient">Teams</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-gray-400 max-w-2xl mx-auto"
        >
          The dedicated teams working together to make HACKINTYM 26 a reality.
        </motion.p>
      </div>

      <TeamSection
        title="Dev Dynasty Team"
        description="Building robust applications and scalable solutions."
        members={devDynastyTeam}
      />

      <TeamSection
        title="Adyant Coding Team"
        description="Mastering algorithms and competitive programming challenges."
        members={adyantCodingTeam}
      />

      <TeamSection
        title="AI Epoch Team"
        description="Pioneering artificial intelligence and machine learning innovations."
        members={aiEpochTeam}
      />
    </Section>
  );
}
