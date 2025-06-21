'use client';

import { motion } from 'framer-motion';
import ScrollAnimation from './ScrollAnimation';

const FeaturedInSection = () => {
  const publications = [
    { name: 'TechCrunch', logo: 'TC' },
    { name: 'Forbes', logo: 'FORBES' },
    { name: 'CoinDesk', logo: 'COINDESK' },
    { name: 'Bloomberg', logo: 'BLOOMBERG' },
    { name: 'The Block', logo: 'THE BLOCK' },
    { name: 'Decrypt', logo: 'DECRYPT' },
    { name: 'Cointelegraph', logo: 'CT' },
    { name: 'Yahoo Finance', logo: 'YAHOO!' },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <p className="text-white/60 font-light text-lg">Featured in leading publications</p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation delay={0.2}>
          <div className="relative overflow-hidden">
            {/* Gradient overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10"></div>
            
            {/* Scrolling logos */}
            <motion.div
              animate={{ x: [0, -100 * publications.length] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
              className="flex items-center gap-16 whitespace-nowrap"
            >
              {[...publications, ...publications, ...publications].map((pub, index) => (
                <div
                  key={`${pub.name}-${index}`}
                  className="flex items-center justify-center min-w-[200px] h-16 opacity-40 hover:opacity-70 transition-opacity duration-300"
                >
                  <div className="text-white/60 font-light text-xl tracking-wider">
                    {pub.logo}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default FeaturedInSection; 