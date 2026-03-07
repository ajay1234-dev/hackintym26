import React from 'react';
import Link from 'next/link';
import { Terminal, Github, Twitter, Instagram, Linkedin, Mail, MapPin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-hack-darkBg pt-16 pb-8 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-px bg-gradient-to-r from-transparent via-hack-neonPurple to-transparent opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Terminal className="text-hack-neonCyan w-6 h-6" />
              <span className="font-bold text-xl tracking-wide text-white">
                HACK<span className="text-hack-neonCyan">IN</span>TYM 26
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              30 Hour Innovation Challenge for students to build solutions to real-world problems.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-hack-neonCyan transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-hack-neonPurple transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-hack-neonBlue transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Github size={20} /></a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/#about" className="text-gray-400 hover:text-white transition-colors text-sm">About Event</Link></li>
              <li><Link href="/#tracks" className="text-gray-400 hover:text-white transition-colors text-sm">Themes & Tracks</Link></li>
              <li><Link href="/#timeline" className="text-gray-400 hover:text-white transition-colors text-sm">Timeline</Link></li>
              <li><Link href="/#prizes" className="text-gray-400 hover:text-white transition-colors text-sm">Prize Pool</Link></li>
              <li><Link href="/#faq" className="text-gray-400 hover:text-white transition-colors text-sm">FAQs</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Code of Conduct</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Terms of Service</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-hack-neonCyan w-5 h-5 shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">University Campus, Tech Block, City, State 12345</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-hack-neonCyan w-5 h-5 shrink-0" />
                <a href="mailto:hello@hackintym.com" className="text-gray-400 hover:text-white transition-colors text-sm">hello@hackintym.com</a>
              </li>
            </ul>
          </div>
          
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} HACKINTYM 26. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm flex items-center gap-1">
            Built with <span className="text-hack-neonPurple">&hearts;</span> by the DevDynasty Club
          </p>
        </div>
      </div>
    </footer>
  );
}
