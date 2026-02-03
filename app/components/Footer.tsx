'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const [year, setYear] = useState<number>(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-black border-t border-white/10 py-16 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <Link href="/" className="flex items-center gap-3 mb-4">
            <Image
              src="/vector_ai_consulting.jpg"
              alt="Vector AI Consulting Logo"
              width={48}
              height={48}
              className="rounded-sm"
            />
            <span className="text-2xl font-bold tracking-tighter">VECTORA</span>
          </Link>
          <p className="mt-4 text-gray-400 max-w-sm leading-relaxed">
            Building the future of AI consulting. We help businesses navigate the complex landscape of artificial intelligence with bespoke, scalable solutions.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-6 text-white">Platform</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li><Link href="#services" className="hover:text-white transition-colors">Services</Link></li>
            <li><Link href="#services" className="hover:text-white transition-colors">Expertise</Link></li>
            <li><Link href="#about" className="hover:text-white transition-colors">About Us</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-6 text-white">Connect</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li><a href="https://linkedin.com" className="hover:text-white transition-colors">LinkedIn</a></li>
            <li><a href="https://twitter.com" className="hover:text-white transition-colors">Twitter</a></li>
            <li><Link href="#contact" className="hover:text-white transition-colors">Contact Us</Link></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-xs">
        <p>© {year} Vector AI Consulting. All rights reserved.</p>
        <div className="flex gap-6">
          <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}