'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export function ProjectPreview({ src }: { src: string }) {
  return (
    <div className="relative rounded-xl overflow-hidden bg-muted">
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
        className="relative aspect-[16/9] group"
      >
        <Image
          src={src}
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </motion.div>
    </div>
  );
}