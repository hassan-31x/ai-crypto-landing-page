'use client';

import { Wallet, Robot, ChartLineUp } from '@phosphor-icons/react';
import ScrollAnimation from './ScrollAnimation';

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Wallet,
      title: 'Connect Your Wallet',
      description: 'Securely link your crypto wallet to SynapseX. We support all major wallets including MetaMask, Coinbase Wallet, and WalletConnect.',
      step: '01'
    },
    {
      icon: Robot,
      title: 'Set Up Your AI Assistant',
      description: 'Configure your personalized AI trading assistant with your risk preferences, trading goals, and investment strategy.',
      step: '02'
    },
    {
      icon: ChartLineUp,
      title: 'Automate Your Trading',
      description: 'Let our AI execute trades 24/7 based on market analysis, technical indicators, and your predefined parameters.',
      step: '03'
    }
  ];

  return (
    <section id="how-it-works" className="py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <ScrollAnimation>
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-light mb-6">
              <span className="gradient-text">How It Works</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Get started with SynapseX in three simple steps and begin your journey to automated crypto trading success.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <ScrollAnimation key={step.title} delay={index * 0.2}>
              <div className="glass-card p-8 text-center relative group">
                {/* Step number */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-medium text-sm">
                  {step.step}
                </div>

                {/* Icon */}
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <step.icon size={32} weight="light" className="text-indigo-400" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-light mb-4 text-white">
                  {step.title}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {step.description}
                </p>

                {/* Connecting line (except for last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-6 lg:-right-12 w-6 lg:w-12 h-px bg-gradient-to-r from-indigo-500/50 to-transparent"></div>
                )}
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection; 