'use client';

import { motion } from 'framer-motion';

export function BackgroundGrid() {
  return (
    <div className="fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-dot-pattern opacity-30" />
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />
    </div>
  );
}