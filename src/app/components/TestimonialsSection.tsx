'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, CaretLeft, CaretRight } from '@phosphor-icons/react';
import ScrollAnimation from './ScrollAnimation';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Day Trader',
      avatar: 'SC',
      content: 'SynapseX has completely transformed my trading strategy. The AI insights are incredibly accurate, and I\'ve seen consistent profits since day one.',
      result: '+284% ROI in 6 months',
      rating: 5
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Portfolio Manager',
      avatar: 'MR',
      content: 'The automated risk management features saved my portfolio during the last market crash. SynapseX\'s AI is like having a professional trader working 24/7.',
      result: '+156% annual returns',
      rating: 5
    },
    {
      name: 'Emily Watson',
      role: 'Crypto Investor',
      avatar: 'EW',
      content: 'I was skeptical about AI trading, but SynapseX proved me wrong. The platform is intuitive, and the results speak for themselves.',
      result: '+92% profit in 3 months',
      rating: 5
    },
    {
      name: 'David Kim',
      role: 'DeFi Enthusiast',
      avatar: 'DK',
      content: 'SynapseX\'s integration with DeFi protocols is seamless. I can now automate complex yield farming strategies with confidence.',
      result: '+340% yield optimization',
      rating: 5
    },
    {
      name: 'Lisa Thompson',
      role: 'Financial Advisor',
      avatar: 'LT',
      content: 'I recommend SynapseX to all my clients interested in crypto. The security features and transparent reporting give me peace of mind.',
      result: '+198% client satisfaction',
      rating: 5
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <ScrollAnimation>
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-light mb-6">
              <span className="gradient-text">Success Stories</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Join thousands of traders who have transformed their crypto trading with SynapseX's AI-powered platform.
            </p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation delay={0.2}>
          <div className="relative max-w-4xl mx-auto">
            {/* Main testimonial */}
            <div className="glass-card p-8 md:p-12 text-center min-h-[400px] flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Stars */}
                  <div className="flex justify-center mb-6">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} size={24} weight="fill" className="text-yellow-400 mx-1" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                    "{testimonials[currentIndex].content}"
                  </blockquote>

                  {/* Result badge */}
                  <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 mb-8">
                    <span className="text-green-400 font-medium">
                      {testimonials[currentIndex].result}
                    </span>
                  </div>

                  {/* Author */}
                  <div className="flex items-center justify-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-medium mr-4">
                      {testimonials[currentIndex].avatar}
                    </div>
                    <div className="text-left">
                      <div className="text-white font-medium">
                        {testimonials[currentIndex].name}
                      </div>
                      <div className="text-white/60 text-sm">
                        {testimonials[currentIndex].role}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors duration-200"
            >
              <CaretLeft size={20} weight="light" className="text-white" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors duration-200"
            >
              <CaretRight size={20} weight="light" className="text-white" />
            </button>

            {/* Dots indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === currentIndex ? 'bg-indigo-400' : 'bg-white/20'
                  }`}
                />
              ))}
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default TestimonialsSection; 