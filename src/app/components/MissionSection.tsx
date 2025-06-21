'use client';

import { Target } from '@phosphor-icons/react';
import ScrollAnimation from './ScrollAnimation';

const MissionSection = () => {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <div className="w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center">
              <Target size={32} weight="light" className="text-indigo-400" />
            </div>
            <h2 className="text-4xl md:text-6xl font-light mb-8">
              <span className="gradient-text">Our Mission</span>
            </h2>
          </div>
        </ScrollAnimation>

        <div className="max-w-5xl mx-auto">
          <ScrollAnimation delay={0.2}>
            <div className="glass-card p-8 md:p-12 text-center">
              <blockquote className="text-2xl md:text-3xl font-light text-white/90 mb-8 leading-relaxed">
                "To democratize sophisticated trading strategies and make institutional-grade AI accessible to every crypto trader, regardless of their experience level."
              </blockquote>
              
              <div className="grid md:grid-cols-2 gap-8 mt-12">
                <div className="text-left">
                  <h3 className="text-xl font-light text-white mb-4">Why We Built Lunexa</h3>
                  <p className="text-white/70 leading-relaxed">
                    We witnessed too many talented traders lose money due to emotional decisions, market manipulation, and lack of access to professional tools. The crypto market never sleeps, but humans need rest. We built Lunexa to level the playing field.
                  </p>
                </div>
                
                <div className="text-left">
                  <h3 className="text-xl font-light text-white mb-4">Our Vision</h3>
                  <p className="text-white/70 leading-relaxed">
                    A future where every individual has access to the same sophisticated trading algorithms used by hedge funds and institutional investors. Where success in crypto trading is determined by strategy and discipline, not by who has the most resources.
                  </p>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-white/10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                  <div>
                    <div className="text-3xl font-light text-indigo-400 mb-2">50K+</div>
                    <div className="text-white/60">Active Traders</div>
                  </div>
                  <div>
                    <div className="text-3xl font-light text-indigo-400 mb-2">$2.1B+</div>
                    <div className="text-white/60">Trading Volume</div>
                  </div>
                  <div>
                    <div className="text-3xl font-light text-indigo-400 mb-2">94%</div>
                    <div className="text-white/60">Success Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default MissionSection; 