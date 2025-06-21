'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface ScrollAnimationProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const ScrollAnimation = ({ children, className = '', delay = 0 }: ScrollAnimationProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
      animate={isInView ? { 
        opacity: 1, 
        y: 0, 
        filter: 'blur(0px)' 
      } : { 
        opacity: 0, 
        y: 50, 
        filter: 'blur(10px)' 
      }}
      transition={{ 
        duration: 0.8, 
        delay,
        ease: [0.21, 1.11, 0.81, 0.99]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation; 