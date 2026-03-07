'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { registerTeam } from '@/lib/firebase/firestore';
import { Terminal, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import Link from 'next/link';

export default function Register() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const [formData, setFormData] = useState({
    teamName: '',
    leaderName: '',
    email: '',
    phone: '',
    collegeName: '',
    member2: '',
    member3: '',
    member4: '',
    projectIdea: '',
    domain: 'Artificial Intelligence'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    // Filter out empty members
    const members = [formData.leaderName, formData.member2, formData.member3, formData.member4].filter(m => m.trim() !== '');

    const dataToSubmit = {
      teamName: formData.teamName,
      leaderName: formData.leaderName,
      email: formData.email,
      phone: formData.phone,
      collegeName: formData.collegeName,
      members,
      projectIdea: formData.projectIdea,
      domain: formData.domain
    };

    const result = await registerTeam(dataToSubmit);

    if (result.success) {
      setSuccess(true);
    } else {
      setError('Registration failed. Please try again or contact support.');
    }
    
    setIsSubmitting(false);
  };

  if (success) {
    return (
      <Section className="min-h-screen flex items-center justify-center pt-32">
        <Card className="max-w-md text-center p-10 border-hack-neonCyan/50 bg-hack-neonCyan/5">
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="flex justify-center mb-6">
            <CheckCircle2 className="w-20 h-20 text-hack-neonCyan" />
          </motion.div>
          <h2 className="text-3xl font-bold text-white mb-4">Registration Successful!</h2>
          <p className="text-gray-300 mb-8">
            Your team <span className="text-hack-neonCyan font-semibold">{formData.teamName}</span> has been successfully registered for HACKINTYM 26. We will send further details to your email.
          </p>
          <Link href="/">
            <Button variant="outline" className="w-full">Return Home</Button>
          </Link>
        </Card>
      </Section>
    );
  }

  return (
    <Section className="pt-28 pb-20">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <motion.div 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-hack-neonPurple/30 text-hack-neonPurple text-sm font-medium mb-4"
          >
            <Terminal size={16} />
            <span>Join the Hackathon</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Team <span className="text-gradient">Registration</span>
          </motion.h1>
          <p className="text-gray-400">Fill out this form to secure your spot. Only one registration needed per team.</p>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <Card gradient className="p-6 md:p-10 border border-white/10 shadow-2xl">
            {error && (
              <div className="mb-6 p-4 rounded-lg bg-red-500/10 border border-red-500/50 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <p className="text-sm text-red-200">{error}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold border-b border-white/10 pb-2 flex items-center gap-2">
                  <span className="w-6 h-6 rounded bg-hack-neonCyan/20 text-hack-neonCyan flex items-center justify-center text-xs">1</span>
                  Team Information
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-gray-300">Team Name *</label>
                    <input required type="text" name="teamName" value={formData.teamName} onChange={handleChange} className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-hack-neonCyan focus:ring-1 focus:ring-hack-neonCyan transition-all" placeholder="Enter team name" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-gray-300">College/University *</label>
                    <input required type="text" name="collegeName" value={formData.collegeName} onChange={handleChange} className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-hack-neonCyan focus:ring-1 focus:ring-hack-neonCyan transition-all" placeholder="Where are you from?" />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold border-b border-white/10 pb-2 flex items-center gap-2 pt-4">
                  <span className="w-6 h-6 rounded bg-hack-neonPurple/20 text-hack-neonPurple flex items-center justify-center text-xs">2</span>
                  Team Members
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-gray-300">Leader Name *</label>
                    <input required type="text" name="leaderName" value={formData.leaderName} onChange={handleChange} className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-hack-neonPurple focus:ring-1 focus:ring-hack-neonPurple transition-all" placeholder="Team Leader" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-gray-300">Leader Email *</label>
                    <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-hack-neonPurple focus:ring-1 focus:ring-hack-neonPurple transition-all" placeholder="leader@email.com" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-gray-300">Leader Phone *</label>
                    <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-hack-neonPurple focus:ring-1 focus:ring-hack-neonPurple transition-all" placeholder="+91 9876543210" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-gray-300">Member 2 Name</label>
                    <input type="text" name="member2" value={formData.member2} onChange={handleChange} className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-hack-neonPurple focus:ring-1 focus:ring-hack-neonPurple transition-all" placeholder="Optional" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-gray-300">Member 3 Name</label>
                    <input type="text" name="member3" value={formData.member3} onChange={handleChange} className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-hack-neonPurple focus:ring-1 focus:ring-hack-neonPurple transition-all" placeholder="Optional" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-gray-300">Member 4 Name</label>
                    <input type="text" name="member4" value={formData.member4} onChange={handleChange} className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-hack-neonPurple focus:ring-1 focus:ring-hack-neonPurple transition-all" placeholder="Optional" />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold border-b border-white/10 pb-2 flex items-center gap-2 pt-4">
                  <span className="w-6 h-6 rounded bg-hack-neonBlue/20 text-hack-neonBlue flex items-center justify-center text-xs">3</span>
                  Project Details
                </h3>
                
                <div className="space-y-4">
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-gray-300">Select Track/Domain *</label>
                    <select required name="domain" value={formData.domain} onChange={handleChange} className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-hack-neonBlue focus:ring-1 focus:ring-hack-neonBlue transition-all appearance-none cursor-pointer">
                      <option value="Artificial Intelligence">Artificial Intelligence</option>
                      <option value="Cybersecurity">Cybersecurity</option>
                      <option value="Healthcare Tech">Healthcare Tech</option>
                      <option value="Social Impact">Social Impact</option>
                      <option value="Open Innovation">Open Innovation</option>
                    </select>
                  </div>
                  
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-gray-300">Brief Idea / Problem Statement *</label>
                    <textarea required name="projectIdea" value={formData.projectIdea} onChange={handleChange} rows={4} className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-hack-neonBlue focus:ring-1 focus:ring-hack-neonBlue transition-all resize-none" placeholder="Briefly describe what you plan to build..."></textarea>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 flex justify-end gap-4">
                <Link href="/">
                  <Button type="button" variant="ghost">Cancel</Button>
                </Link>
                <Button type="submit" variant="primary" className="min-w-[160px]" disabled={isSubmitting}>
                  {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : "Submit Registration"}
                </Button>
              </div>

            </form>
          </Card>
        </motion.div>
      </div>
    </Section>
  );
}
