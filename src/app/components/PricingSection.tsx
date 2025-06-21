'use client';

import { Check, Crown, Sparkle } from '@phosphor-icons/react';
import ScrollAnimation from './ScrollAnimation';

const PricingSection = () => {
  const plans = [
    {
      name: 'Free',
      price: '$0',
      period: 'forever',
      description: 'Perfect for beginners to explore AI trading',
      features: [
        'Basic AI trading signals',
        'Up to 3 active trades',
        'Standard market analysis',
        'Email support',
        'Mobile app access'
      ],
      buttonText: 'Get Started Free',
      popular: false,
      icon: Sparkle
    },
    {
      name: 'Pro',
      price: '$49',
      period: 'per month',
      description: 'Advanced features for serious traders',
      features: [
        'Advanced AI algorithms',
        'Unlimited active trades',
        'Real-time market analysis',
        'Priority support',
        'Advanced risk management',
        'Portfolio optimization',
        'Custom trading strategies',
        'API access'
      ],
      buttonText: 'Start Pro Trial',
      popular: true,
      icon: Crown
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'pricing',
      description: 'Tailored solutions for institutions',
      features: [
        'Everything in Pro',
        'Dedicated account manager',
        'White-label solutions',
        'Custom integrations',
        'Advanced analytics',
        'Multi-user accounts',
        'SLA guarantee',
        'On-premise deployment'
      ],
      buttonText: 'Contact Sales',
      popular: false,
      icon: Crown
    }
  ];

  return (
    <section id="pricing" className="py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <ScrollAnimation>
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-light mb-6">
              <span className="gradient-text">Simple Pricing</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Choose the plan that fits your trading needs. Start free and upgrade as you grow.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <ScrollAnimation key={plan.name} delay={index * 0.1}>
              <div className={`glass-card p-8 relative ${plan.popular ? 'ring-2 ring-indigo-500/50 scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-2 rounded-full text-sm font-medium">
                    Recommended
                  </div>
                )}

                {/* Plan header */}
                <div className="text-center mb-8">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center">
                    <plan.icon size={24} weight="light" className="text-indigo-400" />
                  </div>
                  <h3 className="text-2xl font-light text-white mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-light text-white">{plan.price}</span>
                    <span className="text-white/60 ml-2">/{plan.period}</span>
                  </div>
                  <p className="text-white/70 text-sm">{plan.description}</p>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-white/80">
                        <Check size={16} weight="bold" className="text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <button className={`w-full py-3 px-6 rounded-xl font-medium transition-all duration-300 ${
                  plan.popular 
                    ? 'neuro-button text-white' 
                    : 'bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/40'
                }`}>
                  {plan.buttonText}
                </button>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation delay={0.4}>
          <div className="text-center mt-12">
            <p className="text-white/60 text-sm">
              All plans include 14-day money-back guarantee • No setup fees • Cancel anytime
            </p>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default PricingSection; 