"use client";

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

export default function Nav({
  navItems = [
    { name: 'Home', path: '/', isSection: false },
    { name: 'About', path: '/about', isSection: false },
    { name: 'Services', path: '/services', isSection: false },
    { name: 'Projects', path: '/#projects', isSection: true },
    { name: 'Skills', path: '/#skills', isSection: true },
    { name: 'Contact', path: '/#contact', isSection: true },
  ],
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Navigation Toggle */}
      <button
        className="md:hidden fixed top-4 right-4 z-50 p-2 bg-white/10 rounded-lg"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black/95 z-40 flex flex-col items-center justify-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              onClick={() => item.isSection && scrollToSection(item.name)}
              className="text-2xl font-semibold tracking-widest uppercase hover:text-blue-400 transition-all duration-300"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}

      {/* Desktop Navigation */}
      <nav className="hidden md:block fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-sm py-6 px-8">
        <div className="max-w-7xl mx-auto flex flex-row items-center justify-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              onClick={() => item.isSection && scrollToSection(item.name)}
              className="text-sm font-semibold tracking-widest uppercase text-gray-200 hover:text-blue-400 transition-all duration-300 relative group"
            >
              {item.name}
              <span className="absolute left-0 bottom-0 w-0 h-px bg-blue-400 group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
}