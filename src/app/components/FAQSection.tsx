'use client';

import { useState } from 'react';
import { Plus, Minus } from '@phosphor-icons/react';
import ScrollAnimation from './ScrollAnimation';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'How does Lunexa\'s AI trading technology work?',
      answer: 'Lunexa uses advanced machine learning algorithms that analyze thousands of market indicators, news sentiment, technical patterns, and historical data in real-time. Our AI continuously learns from market movements and adapts its strategies to optimize trading performance while managing risk according to your preferences.'
    },
    {
      question: 'Is my cryptocurrency safe with Lunexa?',
      answer: 'Absolutely. We never hold your cryptocurrency directly. Lunexa connects to your existing exchange accounts through secure API keys with trading-only permissions. Your funds remain in your exchange accounts, and we use bank-grade encryption and security protocols to protect your data and trading activities.'
    },
    {
      question: 'What exchanges does Lunexa support?',
      answer: 'Lunexa currently supports major exchanges including Binance, Coinbase Pro, Kraken, Bitfinex, and many others. We\'re continuously adding support for new exchanges based on user demand. You can check our full list of supported exchanges in your dashboard.'
    },
    {
      question: 'Can I customize my trading strategy?',
      answer: 'Yes! While our AI provides intelligent default strategies, you have full control over your trading parameters. You can set risk levels, choose which cryptocurrencies to trade, define stop-loss and take-profit levels, and even create custom trading rules that the AI will follow.'
    },
    {
      question: 'What happens if the market crashes?',
      answer: 'Lunexa\'s AI includes sophisticated risk management features designed to protect your portfolio during market downturns. This includes automatic stop-losses, position sizing based on volatility, and the ability to switch to defensive strategies during high-risk periods. You can also set maximum daily loss limits.'
    },
    {
      question: 'How much money do I need to start?',
      answer: 'You can start with as little as $100, though we recommend starting with at least $500 to allow for proper diversification and risk management. The Free plan allows you to test our strategies with smaller amounts before upgrading to access more advanced features.'
    },
    {
      question: 'Can I stop the AI trading at any time?',
      answer: 'Absolutely. You have complete control over your account and can pause, modify, or stop AI trading at any time through your dashboard. You can also manually override any trades or withdraw your funds whenever you want. There are no lock-in periods or penalties for stopping.'
    },
    {
      question: 'What kind of returns can I expect?',
      answer: 'While past performance doesn\'t guarantee future results, our users have historically seen significant improvements in their trading performance. Returns vary based on market conditions, risk settings, and investment amount. We provide transparent reporting so you can track your performance in real-time.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <ScrollAnimation>
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-light mb-6">
              <span className="gradient-text">Frequently Asked Questions</span>
            </h2>
            <p className="text-xl text-white/70">
              Everything you need to know about Lunexa's AI trading platform.
            </p>
          </div>
        </ScrollAnimation>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <ScrollAnimation key={index} delay={index * 0.1}>
              <div className="glass-card overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-200"
                >
                  <span className="text-lg font-light text-white pr-8">
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <Minus size={20} weight="light" className="text-indigo-400" />
                    ) : (
                      <Plus size={20} weight="light" className="text-indigo-400" />
                    )}
                  </div>
                </button>
                
                {openIndex === index && (
                  <div className="px-8 pb-6">
                    <div className="pt-4 border-t border-white/10">
                      <p className="text-white/70 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation delay={0.8}>
          <div className="text-center mt-16">
            <p className="text-white/60 mb-6">
              Still have questions? We're here to help.
            </p>
            <button className="neuro-button px-8 py-3 text-white font-medium">
              Contact Support
            </button>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default FAQSection; 