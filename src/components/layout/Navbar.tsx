"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Terminal } from "lucide-react";
import { Button } from "../ui/Button";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#about" },
  { name: "Tracks", href: "/#tracks" },
  { name: "Timeline", href: "/#timeline" },
  { name: "Prizes", href: "/#prizes" },
  { name: "FAQ", href: "/#faq" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "glass py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 group">
            <Terminal className="text-hack-neonCyan w-8 h-8 group-hover:animate-pulse" />
            <span className="font-bold text-2xl tracking-tighter sm:tracking-normal text-white">
              HACK<span className="text-hack-neonCyan">IN</span>TYM 26
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-white hover:text-shadow-neon transition-colors"
              >
                {link.name}
              </a>
            ))}

            <a href="/#winners">
              <Button variant="primary" size="sm">
                View Winners
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#02120a] border-t border-white/10 absolute top-full left-0 w-full animate-in slide-in-from-top-2">
          <div className="px-4 pt-2 pb-6 space-y-1 flex flex-col">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}

            {pathname !== "/register" && (
              <div className="px-3 pt-4">
                <a
                  href="/#winners"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block"
                >
                  <Button variant="primary" className="w-full">
                    View Winners
                  </Button>
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
