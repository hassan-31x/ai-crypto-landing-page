'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from '@phosphor-icons/react';
import Navigation from '../components/Navigation';
import ScrollAnimation from '../components/ScrollAnimation';
import Footer from '../components/Footer';

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI-Powered Cryptocurrency Trading',
      excerpt: 'Explore how artificial intelligence is revolutionizing the cryptocurrency trading landscape and what it means for retail investors.',
      content: 'The cryptocurrency market has evolved dramatically since Bitcoin\'s inception in 2009. Today, we\'re witnessing a new revolution powered by artificial intelligence that\'s changing how we approach trading...',
      author: 'Alex Chen',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'AI Technology',
      featured: true
    },
    {
      id: 2,
      title: 'Risk Management in Automated Trading: A Complete Guide',
      excerpt: 'Learn the essential risk management strategies that protect your portfolio while maximizing returns in automated cryptocurrency trading.',
      content: 'Risk management is the cornerstone of successful trading, especially in the volatile cryptocurrency market. When implementing automated trading strategies...',
      author: 'Sarah Williams',
      date: '2024-01-10',
      readTime: '12 min read',
      category: 'Trading Strategy',
      featured: false
    },
    {
      id: 3,
      title: 'Market Analysis: Why DeFi Tokens Are Outperforming Bitcoin',
      excerpt: 'An in-depth analysis of the DeFi market surge and how AI algorithms are capitalizing on this trend for superior returns.',
      content: 'The decentralized finance (DeFi) sector has been one of the most exciting developments in the cryptocurrency space. Our AI algorithms have identified...',
      author: 'Marcus Rodriguez',
      date: '2024-01-05',
      readTime: '6 min read',
      category: 'Market Analysis',
      featured: false
    },
    {
      id: 4,
      title: 'Security Best Practices for Crypto Trading Platforms',
      excerpt: 'Understanding the security measures that protect your assets and data when using AI-powered trading platforms.',
      content: 'Security is paramount in the cryptocurrency world. With billions of dollars at stake, trading platforms must implement robust security measures...',
      author: 'Emily Thompson',
      date: '2024-01-01',
      readTime: '10 min read',
      category: 'Security',
      featured: false
    }
  ];

  const categories = ['All', 'AI Technology', 'Trading Strategy', 'Market Analysis', 'Security'];

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
              <span className="gradient-text">Lunexa Blog</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/70 max-w-4xl mx-auto leading-relaxed">
              Insights, strategies, and the latest developments in AI-powered cryptocurrency trading.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <ScrollAnimation>
        <section className="pb-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-6 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition-colors duration-200 border border-white/20 hover:border-white/40"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Featured Post */}
      <ScrollAnimation>
        <section className="pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {blogPosts.filter(post => post.featured).map((post) => (
              <div key={post.id} className="glass-card p-8 md:p-12 mb-12">
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <span className="px-3 py-1 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 text-indigo-400 text-sm">
                    Featured
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/10 text-white/80 text-sm">
                    {post.category}
                  </span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-light text-white mb-4">
                  {post.title}
                </h2>
                
                <p className="text-white/70 text-lg mb-6 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6 text-white/60 text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} weight="light" />
                      <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={16} weight="light" />
                      <span>{post.readTime}</span>
                    </div>
                    <span>By {post.author}</span>
                  </div>
                  
                  <button className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors duration-200 group">
                    Read More
                    <ArrowRight size={16} weight="light" className="group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </ScrollAnimation>

      {/* Blog Posts Grid */}
      <ScrollAnimation>
        <section className="pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.filter(post => !post.featured).map((post, index) => (
                <ScrollAnimation key={post.id} delay={index * 0.1}>
                  <article className="glass-card p-6 group hover:scale-[1.02] transition-all duration-300">
                    <div className="mb-4">
                      <span className="px-3 py-1 rounded-full bg-white/10 text-white/80 text-sm">
                        {post.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-light text-white mb-3 group-hover:text-indigo-400 transition-colors duration-200">
                      {post.title}
                    </h3>
                    
                    <p className="text-white/70 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-white/60 text-sm mb-4">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Calendar size={14} weight="light" />
                          <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock size={14} weight="light" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-white/60 text-sm">By {post.author}</span>
                      <button className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors duration-200 group">
                        Read
                        <ArrowRight size={14} weight="light" className="group-hover:translate-x-1 transition-transform duration-200" />
                      </button>
                    </div>
                  </article>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Newsletter Signup */}
      <ScrollAnimation>
        <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <div className="glass-card p-8 md:p-12">
              <h3 className="text-3xl font-light text-white mb-4">
                Stay Updated with <span className="gradient-text">Lunexa Insights</span>
              </h3>
              <p className="text-white/70 mb-8">
                Get the latest market analysis, trading strategies, and AI developments delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
                <button className="neuro-button px-6 py-3 text-white font-medium whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      <Footer />
    </motion.main>
  );
} 