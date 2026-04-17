'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Shield, Database, Cpu, Leaf, AlertTriangle, CheckCircle, Terminal } from 'lucide-react';

const DOMAINS = [
  {
    id: 'ai',
    title: 'AI – Neural Defense Architect',
    icon: <Brain className="text-hack-green" size={24} />,
    problem: 'As automated cyber-threats evolve, traditional static security measures are becoming obsolete. Vulnerabilities are exploited in milliseconds, far faster than human operators can respond.',
    mission: 'Architect an Autonomous Security Agent (ASA) capable of real-time multi-vector threat analysis and self-deploying counter-measures. The system must not only patch but predict.',
    requirements: [
      'Real-time behavioral analysis engine',
      'Automated conflict resolution protocols',
      'Zero-day vulnerability prediction model',
      'Explainable AI (XAI) logs for human oversight'
    ],
    output: 'A live-monitoring dashboard demonstrating successful mitigation of simulated DDoS and SQL injection attacks via autonomous reconfiguration.'
  },
  {
    id: 'cyber',
    title: 'Cybersecurity – Sovereign Identity',
    icon: <Shield className="text-hack-green" size={24} />,
    problem: 'Centralized identity providers represent massive single points of failure. Data breaches at major tech firms expose millions of biometric and personal records annually.',
    mission: 'Build a Self-Sovereign Identity (SSI) framework using Zero-Knowledge Proofs (ZKP) that allows users to verify their identity without disclosing sensitive underlying data.',
    requirements: [
      'Decentralized Identifier (DID) implementation',
      'ZK-SNARKs for credential verification',
      'Encrypted mobile-wallet integration',
      'Biometric-hash based recovery system'
    ],
    output: 'A functional login protocol where users authenticate with "Over 18" or "Authorized Employee" status without revealing birthdates or names.'
  },
  {
    id: 'blockchain',
    title: 'Blockchain – Transparent Carbon Ledger',
    icon: <Database className="text-hack-green" size={24} />,
    problem: 'The carbon credit market is plagued by "double counting" and opaque verification cycles. Companies claim offsets that don\'t exist, undermining global climate goals.',
    mission: 'Develop a Hyper-Transparent Carbon Registry on a Layer-2 blockchain. Integrate IoT sensor data to automate credit minting based on actual, verifiable environmental impact.',
    requirements: [
      'IoT-to-Smart-Contract data pipeline',
      'Dynamic NFT representation of active carbon sinks',
      'Fractional credit trading marketplace',
      'Public audit-trail for every credit lifecycle'
    ],
    output: 'A dApp displaying a real-time heat-map of verified carbon sinks and a transparent ledger of all credit transactions.'
  },
  {
    id: 'dl',
    title: 'Deep Learning – Urban Flow Optimizer',
    icon: <Cpu className="text-hack-green" size={24} />,
    problem: 'Urban congestion costs billions in lost productivity and causes significant environmental damage. Current traffic systems are reactive and inefficient.',
    mission: 'Create a Multi-Agent Reinforcement Learning (MARL) model to optimize city-wide traffic flow. The model must balance vehicular speed with pedestrian safety and emergency vehicle priority.',
    requirements: [
      'YOLOv8-based multi-object detection',
      'Federated learning for edge-node processing',
      'Digital-twin simulator (SUMO or similar)',
      'Emergency vehicle preemption protocols'
    ],
    output: 'A simulation showing a minimum 25% reduction in wait times at busy intersections during peak hours.'
  },
  {
    id: 'sustainability',
    title: 'Sustainability – Quantum Energy Grid',
    icon: <Leaf className="text-hack-green" size={24} />,
    problem: 'Renewable energy sources like wind and solar are intermittent, making grid stability difficult. Energy is often wasted during surplus and scarce during peaks.',
    mission: 'Design a Decentralized Energy Management System (DEMS) that uses predictive analytics to balance local micro-grids. Implement "Vehicle-to-Grid" (V2G) protocols to use EVs as distributed batteries.',
    requirements: [
      'Time-series demand forecasting',
      'P2P energy trading smart-contracts',
      'NILM (Non-Intrusive Load Monitoring)',
      'Dynamic pricing algorithm based on load'
    ],
    output: 'A mobile interface allowing users to sell surplus home energy back to the community grid in real-time.'
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
