'use client';

import { motion } from 'framer-motion';
import { EnvelopeSimple, Phone, MapPin, Clock } from '@phosphor-icons/react';
import Navigation from '../components/Navigation';
import ScrollAnimation from '../components/ScrollAnimation';
import Footer from '../components/Footer';

export default function Contact() {
  const contactInfo = [
    {
      icon: EnvelopeSimple,
      title: 'Email Us',
      details: 'support@lunexa.com',
      description: 'Get in touch with our support team'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+1 (555) 123-4567',
      description: 'Monday to Friday, 9AM - 6PM EST'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: '123 Crypto Street, San Francisco, CA 94105',
      description: 'Our headquarters in the heart of Silicon Valley'
    },
    {
      icon: Clock,
      title: 'Support Hours',
      details: '24/7 Live Chat',
      description: 'Round-the-clock assistance for all users'
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
              <span className="gradient-text">Contact Us</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/70 max-w-4xl mx-auto leading-relaxed">
              Have questions about Lunexa? We're here to help. Reach out to our team 
              and we'll get back to you as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <ScrollAnimation>
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              {contactInfo.map((info, index) => (
                <ScrollAnimation key={info.title} delay={index * 0.1}>
                  <div className="glass-card p-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center">
                      <info.icon size={24} weight="light" className="text-indigo-400" />
                    </div>
                    <h3 className="text-xl font-light text-white mb-2">{info.title}</h3>
                    <p className="text-indigo-400 mb-2">{info.details}</p>
                    <p className="text-white/60 text-sm">{info.description}</p>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Contact Form Section */}
      <ScrollAnimation>
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-light mb-6">
                <span className="gradient-text">Send us a Message</span>
              </h2>
              <p className="text-xl text-white/70">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
            </div>

            <div className="glass-card p-8 md:p-12">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-white mb-2">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-white mb-2">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-white mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-white mb-2">Subject</label>
                  <select
                    id="subject"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="billing">Billing Question</option>
                    <option value="partnership">Partnership</option>
                    <option value="press">Press Inquiry</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-white mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="newsletter"
                    className="w-4 h-4 text-indigo-500 bg-white/10 border-white/20 rounded focus:ring-indigo-500"
                  />
                  <label htmlFor="newsletter" className="ml-2 text-white/80 text-sm">
                    I'd like to receive updates about Lunexa's latest features and market insights
                  </label>
                </div>

                <button
                  type="submit"
                  className="neuro-button w-full py-4 text-white font-medium"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* FAQ Link Section */}
      <ScrollAnimation>
        <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-light text-white mb-4">
              Looking for quick answers?
            </h3>
            <p className="text-white/70 mb-8">
              Check out our FAQ section for immediate answers to common questions.
            </p>
            <button className="neuro-button px-8 py-3 text-white font-medium">
              View FAQ
            </button>
          </div>
        </section>
      </ScrollAnimation>

      <Footer />
    </motion.main>
  );
} 