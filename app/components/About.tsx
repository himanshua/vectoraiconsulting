import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-black px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Pioneering the AI Revolution</h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-6">
            Vectora AI Consulting was founded on the principle that artificial intelligence should be accessible, ethical, and results-driven. We bridge the gap between complex AI research and practical business application.
          </p>
          <p className="text-gray-400 text-lg leading-relaxed">
            Our team of data scientists and strategic consultants work closely with industry leaders to build custom solutions that don&apos;t just follow trends—they set them.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-8 bg-white/5 border border-white/10 rounded-2xl text-center">
            <div className="text-4xl font-bold text-blue-500 mb-2">50+</div>
            <div className="text-sm text-gray-500 uppercase tracking-widest">Projects Delivered</div>
          </div>
          <div className="p-8 bg-white/5 border border-white/10 rounded-2xl text-center">
            <div className="text-4xl font-bold text-purple-500 mb-2">99%</div>
            <div className="text-sm text-gray-500 uppercase tracking-widest">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
}