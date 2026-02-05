import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/70 border-b border-black/5" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-6">
        <div className="flex items-center">
          <Link href="/" aria-label="Vectora Home" className="flex items-center gap-3">
            <Image
              src="/vector_ai_consulting.jpg"
              alt="Vectora AI Consulting Logo"
              width={80}
              height={80}
              className="rounded-sm"
              priority
            />
            <span className="text-xl font-bold tracking-tighter">VECTORA</span>
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <Link href="#services" className="hover:text-red-600 transition-colors">Services</Link>
          <Link href="#process" className="hover:text-red-600 transition-colors">Process</Link>
          <Link href="#about" className="hover:text-red-600 transition-colors">About</Link>
          <Link href="#contact" className="px-5 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors">
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
}