import React from 'react';

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "We analyze your current workflows and data infrastructure to identify AI opportunities."
  },
  {
    number: "02",
    title: "Strategy",
    description: "Our team develops a custom roadmap and selects the right models for your specific needs."
  },
  {
    number: "03",
    title: "Development",
    description: "We build, fine-tune, and integrate AI solutions directly into your existing ecosystem."
  },
  {
    number: "04",
    title: "Optimization",
    description: "Continuous monitoring and refinement to ensure your AI scales with your business."
  }
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-gray-50 px-6 border-t border-black/5">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Process</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A streamlined approach to transforming your business with artificial intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-5xl font-black text-gray-200 absolute -top-8 -left-2 select-none">
                {step.number}
              </div>
              <h3 className="text-xl font-bold mb-4 relative z-10">{step.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}