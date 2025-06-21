'use client';

import { motion } from 'framer-motion';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import FeaturedInSection from './components/FeaturedInSection';
import HowItWorksSection from './components/HowItWorksSection';
import FeaturesSection from './components/FeaturesSection';
import TestimonialsSection from './components/TestimonialsSection';
import MissionSection from './components/MissionSection';
import PricingSection from './components/PricingSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen"
    >
      <Navigation />
      <HeroSection />
      <FeaturedInSection />
      <HowItWorksSection />
      <FeaturesSection />
      <TestimonialsSection />
      <MissionSection />
      <PricingSection />
      <FAQSection />
      <Footer />
    </motion.main>
  );
}
