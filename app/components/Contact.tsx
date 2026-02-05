import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white px-6 border-t border-black/5">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-600">
            Ready to transform your business with AI? Send us a message and we&apos;ll get back to you within 24 hours.
          </p>
        </div>

        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium text-gray-600">Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 bg-white border border-black/10 rounded-lg focus:outline-none focus:border-red-600 transition-colors text-black"
                placeholder="John Doe"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 bg-white border border-black/10 rounded-lg focus:outline-none focus:border-red-600 transition-colors text-black"
                placeholder="john@example.com"
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="block text-sm font-medium text-gray-600">Message</label>
            <textarea
              id="message"
              rows={5}
              className="w-full px-4 py-3 bg-white border border-black/10 rounded-lg focus:outline-none focus:border-red-600 transition-colors text-black resize-none"
              placeholder="Tell us about your project..."
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-4 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition-colors cursor-pointer"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}