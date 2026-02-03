import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/50 border-b border-white/10" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-6">
        <div className="flex items-center">
          <Link href="/" aria-label="Vector Home" className="flex items-center gap-3">
            <Image
              src="/vector_ai_consulting.jpg"
              alt="Vector AI Consulting Logo"
              width={48}
              height={48}
              className="rounded-sm"
              priority
            />
            <span className="text-xl font-bold tracking-tighter">VECTORA</span>
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
          <Link href="#services" className="hover:text-white transition-colors">Services</Link>
          <Link href="#process" className="hover:text-white transition-colors">Process</Link>
          <Link href="#about" className="hover:text-white transition-colors">About</Link>
          <Link href="#contact" className="px-5 py-2 bg-white text-black rounded-full hover:bg-gray-200 transition-colors">
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
}