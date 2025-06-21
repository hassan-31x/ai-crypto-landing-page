'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Play } from '@phosphor-icons/react';
import { useEffect, useRef } from 'react';
import ScrollAnimation from './ScrollAnimation';
import '../../types/unicorn-studio';

const HeroSection = () => {
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load Unicorn Studio script if not already loaded
    if (!window.UnicornStudio) {
      window.UnicornStudio = { isInitialized: false };
      
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.25/dist/unicornStudio.umd.js';
      script.onload = () => {
        if (!window.UnicornStudio.isInitialized && window.UnicornStudio.addScene) {
          // Initialize the specific scene for the background
          window.UnicornStudio.addScene({
            elementId: 'hero-background',
            projectId: 'dkdlkgocTREefl6xMTBl',
            fps: 60,
            scale: 1,
            dpi: 1.5,
            lazyLoad: false,
            fixed: true,
            interactivity: {
              mouse: {
                disableMobile: true,
              },
            },
          }).then((scene: any) => {
            console.log('Hero background scene loaded successfully', scene);
          }).catch((err: any) => {
            console.error('Failed to load hero background scene:', err);
          });
          
          window.UnicornStudio.isInitialized = true;
        }
      };
      
      (document.head || document.body).appendChild(script);
    } else if (window.UnicornStudio.addScene) {
      // If UnicornStudio is already loaded, directly add the scene
      window.UnicornStudio.addScene({
        elementId: 'hero-background',
        projectId: 'dkdlkgocTREefl6xMTBl',
        fps: 60,
        scale: 1,
        dpi: 1.5,
        lazyLoad: false,
        fixed: true,
        interactivity: {
          mouse: {
            disableMobile: true,
          },
        },
      }).then((scene: any) => {
        console.log('Hero background scene loaded successfully', scene);
      }).catch((err: any) => {
        console.error('Failed to load hero background scene:', err);
      });
    }

    // Cleanup function
    return () => {
      if (window.UnicornStudio && window.UnicornStudio.destroy) {
        window.UnicornStudio.destroy();
      }
    };
  }, []);

  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-28 relative">
      
        {/* Unicorn Studio Background */}
      <div 
        id="hero-background" 
        className="absolute inset-0 w-full h-full z-0 top-[0%]"
        style={{ width: '100%', height: '100%' }}
      />

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30 z-10" />   
      <div className="max-w-7xl mx-auto text-center z-20">
        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.21, 1.11, 0.81, 0.99] }}
          className="mb-16"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-white/10 mb-8"
          >
            <span className="text-sm font-light text-white/80">🚀 AI-Powered Trading Revolution</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-light mb-6 leading-tight"
          >
            <span className="gradient-text">Trade Smarter</span>
            <br />
            <span className="text-white">with AI Precision</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-2xl text-white/70 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            Experience the future of cryptocurrency trading with SynapseX's advanced AI assistant. 
            Automate your trades, maximize profits, and stay ahead of market trends with 
            institutional-grade technology.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <button className="neuro-button px-8 py-4 text-white font-medium flex items-center gap-3 group">
              Get Started Free
              <ArrowRight 
                size={20} 
                weight="light" 
                className="group-hover:translate-x-1 transition-transform duration-200" 
              />
            </button>
            
            <button className="flex items-center gap-3 text-white/80 hover:text-white transition-colors duration-200 group">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors duration-200">
                <Play size={16} weight="fill" />
              </div>
              <span className="font-light">Watch Demo</span>
            </button>
          </motion.div>
        </motion.div>

        {/* Product Mockup */}
        {/* <ScrollAnimation delay={0.9}>
          <div className="relative max-w-6xl mx-auto">
            <div className="glass-card p-8 rounded-3xl">
              <div className="aspect-[16/10] bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center border border-white/10">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-white/10 rounded-xl flex items-center justify-center">
                    <div className="w-8 h-8 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-lg"></div>
                  </div>
                  <p className="text-white/60 font-light">Product UI Mockup</p>
                  <p className="text-white/40 text-sm mt-2">Replace with your mockup image</p>
                </div>
              </div>
            </div>
            
            <motion.div
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 5, 0]
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-2xl opacity-20 blur-xl"
            />
            
            <motion.div
              animate={{ 
                y: [0, 15, 0],
                rotate: [0, -3, 0]
              }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
              className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl opacity-15 blur-xl"
            />
          </div>
        </ScrollAnimation> */}
      </div>
    </section>
  );
};

export default HeroSection; 