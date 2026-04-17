'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Shield, Database, Cpu, Leaf, AlertTriangle, CheckCircle, Terminal } from 'lucide-react';

const DOMAINS = [
  {
    id: 'ai',
    title: 'AI – Self-Healing Network System',
    icon: <Brain className="text-hack-green" size={24} />,
    problem: 'Modern network infrastructures depend heavily on manual monitoring and recovery. Failures lead to downtime, inefficiency, and delayed responses, making systems unreliable and hard to scale.',
    mission: 'Design an intelligent system that can automatically detect failures, reroute traffic, and adapt the network without human intervention.',
    requirements: [
      'Simulate network nodes and connections',
      'Detect failures or disruptions in the network',
      'Implement automatic rerouting logic',
      'Apply intelligent decision-making (rule-based or AI)',
      'Optional: Visual representation of network state'
    ],
    output: 'A working prototype demonstrating automatic failure detection and traffic rerouting in a simulated network environment.'
  },
  {
    id: 'cyber',
    title: 'Cybersecurity – Threat Intelligence System',
    icon: <Shield className="text-hack-green" size={24} />,
    problem: 'Organizations face massive volumes of vulnerability data from CVE feeds and logs. This leads to alert fatigue and difficulty in identifying critical threats in real time.',
    mission: 'Build a system that analyzes and prioritizes cybersecurity threats based on contextual risk and relevance.',
    requirements: [
      'Integrate or simulate CVE / vulnerability data',
      'Implement risk-based prioritization logic',
      'Create a scoring system for threats',
      'Provide explanation or reasoning for prioritization',
      'Display results in a dashboard'
    ],
    output: 'A dashboard that highlights prioritized threats with clear reasoning and risk levels.'
  },
  {
    id: 'blockchain',
    title: 'Blockchain – Carbon Credit Registry',
    icon: <Database className="text-hack-green" size={24} />,
    problem: 'Carbon credit systems lack transparency and trust, with risks of double counting and unverifiable claims affecting environmental initiatives.',
    mission: 'Develop a blockchain-based system to securely track, verify, and manage carbon credit data.',
    requirements: [
      'Implement basic smart contract logic',
      'Store records immutably',
      'Simulate carbon credit generation',
      'Provide a user interface for tracking',
      'Ensure transparency of transactions'
    ],
    output: 'A working blockchain prototype that records and displays carbon credit transactions transparently.'
  },
  {
    id: 'dl',
    title: 'Deep Learning – Urban Intelligence Platform',
    icon: <Cpu className="text-hack-green" size={24} />,
    problem: 'Urban data is fragmented across multiple sources like traffic systems and social platforms, making real-time decision-making inefficient and reactive.',
    mission: 'Create an AI-powered system that integrates multiple data sources and generates meaningful insights in real time.',
    requirements: [
      'Simulate or fetch multiple data sources',
      'Process data using AI/ML techniques',
      'Detect patterns, trends, or anomalies',
      'Build a visualization dashboard',
      'Provide near real-time insights'
    ],
    output: 'A dashboard that shows integrated data insights, trends, or anomaly detection results.'
  },
  {
    id: 'sustainability',
    title: 'Sustainability – Energy Monitoring System',
    icon: <Leaf className="text-hack-green" size={24} />,
    problem: 'Energy systems often suffer from inefficiencies and undetected anomalies, leading to increased costs and reduced reliability.',
    mission: 'Design a system that monitors energy usage and detects abnormal patterns in real time.',
    requirements: [
      'Analyze energy consumption data (real or simulated)',
      'Implement anomaly detection logic',
      'Generate alerts for abnormal behavior',
      'Provide a visual dashboard',
      'Ensure system clarity and usability'
    ],
    output: 'A monitoring system that detects anomalies and provides alerts with clear visual insights.'
  }
];

export const ProblemStatements = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {DOMAINS.map((domain, idx) => (
          <motion.div
            key={domain.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1 }}
            className="glass p-8 rounded-3xl flex flex-col hover:neon-border-green transition-all group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-hack-green/5 blur-2xl rounded-full -mr-16 -mt-16 pointer-events-none" />

            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-hack-green/10 rounded-2xl border border-hack-green/20 group-hover:bg-hack-green/30 transition-all shadow-[0_0_20px_rgba(74,222,128,0.1)]">
                {domain.icon}
              </div>
              <h3 className="text-xl font-black text-white group-hover:text-hack-green transition-colors leading-tight">
                {domain.title}
              </h3>
            </div>

            <div className="space-y-6 flex-grow">
              <div className="relative pl-4 border-l-2 border-hack-green/20">
                <p className="text-[10px] text-hack-green uppercase font-black tracking-[0.2em] mb-2 opacity-70">The Challenge</p>
                <p className="text-sm text-gray-400 leading-relaxed italic">"{domain.problem}"</p>
              </div>

              <div>
                <p className="text-[10px] text-white uppercase font-black tracking-[0.2em] mb-2">Primary Objective</p>
                <p className="text-sm text-gray-300 font-medium leading-relaxed">{domain.mission}</p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <p className="text-[10px] text-gray-500 uppercase font-black tracking-[0.2em]">Technical Scope</p>
                  <div className="h-px flex-grow bg-white/5" />
                </div>
                <ul className="grid grid-cols-1 gap-2">
                  {domain.requirements.map((req, i) => (
                    <li key={i} className="text-[11px] text-gray-400 flex items-center gap-3 bg-white/5 p-2 rounded-lg border border-white/5 hover:border-hack-green/20 transition-all">
                      <div className="w-1 h-1 bg-hack-green rounded-full shadow-[0_0_5px_rgba(74,222,128,1)]" />
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 relative">
              <p className="text-[10px] text-gray-500 uppercase font-black tracking-[0.2em] mb-3 text-center">Protocol Output Requirements</p>
              <div className="text-xs text-white font-mono bg-black/40 p-4 rounded-xl border border-hack-green/10 flex items-center gap-3">
                <Terminal size={14} className="text-hack-green shrink-0" />
                <span className="leading-relaxed opacity-90">{domain.output}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="glass p-10 rounded-[2rem] border-hack-green/20 bg-hack-green/5 relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-hack-green/5 to-transparent pointer-events-none" />

          <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
            <div className="bg-hack-green/10 p-5 rounded-3xl border border-hack-green/20 animate-pulse">
              <AlertTriangle className="text-hack-green" size={40} />
            </div>

            <div className="flex-grow text-center md:text-left">
              <h2 className="text-3xl font-black text-white mb-2 tracking-tight uppercase italic">Global Directive & Ethics</h2>
              <p className="text-gray-400 text-sm max-w-2xl mb-6">
                All hackers must adhere to the core principles of HACKINTYM EVO.
                Innovation without accountability is forbidden.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
                {[
                  'Full Source Transparency (GitHub Mandatory)',
                  'Scalability & Edge Deployment',
                  'Bias-free Architectural Logic',
                  'Sustainability & Carbon-Neutral Computing',
                  'Rigorous Performance Benchmarks'
                ].map((rule, i) => (
                  <div key={i} className="flex items-center gap-3 text-gray-300 text-xs font-bold leading-none bg-black/20 p-3 rounded-xl border border-white/5">
                    <CheckCircle className="text-hack-green shrink-0" size={16} />
                    {rule}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
