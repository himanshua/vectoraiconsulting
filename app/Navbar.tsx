import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/50 border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-6">
        <div className="text-xl font-bold tracking-tighter">
          <Link href="/">VECTORA</Link>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
          <Link href="/services" className="hover:text-white transition-colors">Services</Link>
          <Link href="/expertise" className="hover:text-white transition-colors">Expertise</Link>
          <Link href="/about" className="hover:text-white transition-colors">About</Link>
          <Link href="/contact" className="px-5 py-2 bg-white text-black rounded-full hover:bg-gray-200 transition-colors">
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
}