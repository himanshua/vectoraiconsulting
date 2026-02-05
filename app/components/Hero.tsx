import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-6 pt-32 pb-20 overflow-hidden bg-white text-black">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/images/banner.JPG"
          alt="Vectora AI Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-white/90"></div>
      </div>

      {/* Background Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-6xl opacity-30 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-red-200 rounded-full blur-[120px] will-change-transform"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] bg-gray-200 rounded-full blur-[120px] will-change-transform"></div>
      </div>

      <div className="relative z-10 max-w-4xl text-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
          Building the Future of <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-500">
            AI Consulting
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          We help businesses navigate the complex landscape of artificial intelligence, 
          delivering bespoke solutions that drive innovation and measurable growth.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            href="#contact" 
            className="px-8 py-4 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700 transition-colors w-full sm:w-auto"
          >
            Get Started
          </Link>
          <Link 
            href="#services" 
            className="px-8 py-4 bg-transparent border border-black text-black font-semibold rounded-full hover:bg-gray-50 transition-colors w-full sm:w-auto"
          >
            Our Services
          </Link>
        </div>
      </div>
    </section>
  );
}