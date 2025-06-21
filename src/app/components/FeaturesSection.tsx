'use client';

import { Brain, Shield, Lightning, TrendUp } from '@phosphor-icons/react';
import ScrollAnimation from './ScrollAnimation';

const FeaturesSection = () => {
  const features = [
    {
      icon: Brain,
      title: 'Advanced AI Analysis',
      description: 'Our sophisticated AI algorithms analyze thousands of market indicators in real-time to identify profitable trading opportunities.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Shield,
      title: 'Bank-Grade Security',
      description: 'Enterprise-level security protocols protect your assets with multi-layer encryption and cold storage integration.',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Lightning,
      title: 'Lightning Fast Execution',
      description: 'Execute trades in milliseconds with our high-frequency trading infrastructure and direct exchange connections.',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      icon: TrendUp,
      title: 'Smart Risk Management',
      description: 'Automated stop-losses, position sizing, and portfolio rebalancing to protect and optimize your investments.',
      gradient: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section id="features" className="py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <ScrollAnimation>
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-light mb-6">
              <span className="gradient-text">Powerful Features</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Discover the cutting-edge features that make SynapseX the most advanced AI trading platform in the cryptocurrency market.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <ScrollAnimation key={feature.title} delay={index * 0.1}>
              <div className="glass-card p-8 group hover:scale-[1.02] transition-all duration-300">
                {/* Icon */}
                <div className={`w-16 h-16 mb-6 bg-gradient-to-br ${feature.gradient} bg-opacity-20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon size={28} weight="light" className={`bg-gradient-to-br ${feature.gradient} bg-clip-text text-transparent`} />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-light mb-4 text-white">
                  {feature.title}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover effect line */}
                <div className={`w-0 h-0.5 bg-gradient-to-r ${feature.gradient} mt-6 group-hover:w-full transition-all duration-500`}></div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection; 