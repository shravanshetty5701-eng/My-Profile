import React from 'react';
import { motion } from 'motion/react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  yOffset?: number;
  scale?: number;
  duration?: number;
  key?: React.Key;
}

export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  yOffset = 20,
  scale = 1,
  duration = 0.5,
}: ScrollRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset, scale: scale !== 1 ? scale : 1 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1], // Custom smooth ease-out curve
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
