'use client';

import { motion } from 'framer-motion';
import { Users, Target, Trophy, TrendUp } from '@phosphor-icons/react';
import Navigation from '../components/Navigation';
import ScrollAnimation from '../components/ScrollAnimation';
import Footer from '../components/Footer';

export default function About() {
  const stats = [
    { icon: Users, label: 'Active Users', value: '50,000+' },
    { icon: TrendUp, label: 'Trading Volume', value: '$2.1B+' },
    { icon: Trophy, label: 'Success Rate', value: '94%' },
    { icon: Target, label: 'Markets Covered', value: '150+' },
  ];

  const team = [
    {
      name: 'Alex Chen',
      role: 'CEO & Co-founder',
      bio: 'Former Goldman Sachs quantitative trader with 15+ years in algorithmic trading.',
      avatar: 'AC'
    },
    {
      name: 'Sarah Williams',
      role: 'CTO & Co-founder',
      bio: 'Ex-Google AI researcher specializing in machine learning and financial markets.',
      avatar: 'SW'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Head of AI',
      bio: 'PhD in Computer Science from MIT, expert in deep learning and market prediction.',
      avatar: 'MR'
    },
    {
      name: 'Emily Thompson',
      role: 'Head of Security',
      bio: 'Former cybersecurity lead at Coinbase, ensuring enterprise-grade protection.',
      avatar: 'ET'
    }
  ];

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen"
    >
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl md:text-7xl font-light mb-6">
              <span className="gradient-text">About SynapseX</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/70 max-w-4xl mx-auto leading-relaxed">
              We're on a mission to democratize sophisticated trading strategies and make 
              institutional-grade AI accessible to every crypto trader.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <ScrollAnimation>
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center">
                    <stat.icon size={24} weight="light" className="text-indigo-400" />
                  </div>
                  <div className="text-3xl font-light text-white mb-2">{stat.value}</div>
                  <div className="text-white/60">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Story Section */}
      <ScrollAnimation>
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="glass-card p-8 md:p-12">
              <h2 className="text-4xl font-light mb-8 text-center">
                <span className="gradient-text">Our Story</span>
              </h2>
              <div className="space-y-6 text-white/80 leading-relaxed">
                <p>
                SynapseX was born from a simple observation: the cryptocurrency market operates 24/7, 
                  but human traders need sleep. While institutional investors leverage sophisticated 
                  algorithms and AI systems, individual traders were left with basic tools and emotional decision-making.
                </p>
                <p>
                  Our founders, coming from backgrounds at Goldman Sachs and Google, witnessed firsthand 
                  how advanced technology could transform trading outcomes. They saw talented traders 
                  lose money not due to lack of skill, but due to human limitations - fatigue, emotions, 
                  and the inability to process vast amounts of market data in real-time.
                </p>
                <p>
                  In 2021, we set out to level the playing field. We assembled a world-class team of 
                  AI researchers, quantitative traders, and security experts to build something unprecedented: 
                  an AI trading platform that brings institutional-grade technology to everyone.
                </p>
                <p>
                  Today, SynapseX serves over 50,000 traders worldwide, managing over $2.1 billion in 
                  trading volume. Our AI has evolved through millions of trades, continuously learning 
                  and adapting to market conditions while maintaining a 94% success rate.
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Team Section */}
      <ScrollAnimation>
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-light mb-6">
                <span className="gradient-text">Meet Our Team</span>
              </h2>
              <p className="text-xl text-white/70">
                The brilliant minds behind SynapseX's revolutionary AI trading technology.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <ScrollAnimation key={member.name} delay={index * 0.1}>
                  <div className="glass-card p-6 text-center">
                    <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {member.avatar}
                    </div>
                    <h3 className="text-xl font-light text-white mb-2">{member.name}</h3>
                    <p className="text-indigo-400 mb-4">{member.role}</p>
                    <p className="text-white/70 text-sm leading-relaxed">{member.bio}</p>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Values Section */}
      <ScrollAnimation>
        <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-light mb-6">
                <span className="gradient-text">Our Values</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="glass-card p-8 text-center">
                <h3 className="text-2xl font-light text-white mb-4">Transparency</h3>
                <p className="text-white/70">
                  We believe in complete transparency. Every trade, every algorithm decision, 
                  and every performance metric is available to our users in real-time.
                </p>
              </div>
              <div className="glass-card p-8 text-center">
                <h3 className="text-2xl font-light text-white mb-4">Innovation</h3>
                <p className="text-white/70">
                  We continuously push the boundaries of what's possible in AI trading, 
                  investing heavily in research and development to stay ahead of the curve.
                </p>
              </div>
              <div className="glass-card p-8 text-center">
                <h3 className="text-2xl font-light text-white mb-4">Security</h3>
                <p className="text-white/70">
                  Your assets and data are protected by military-grade encryption and 
                  security protocols that exceed industry standards.
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      <Footer />
    </motion.main>
  );
} 