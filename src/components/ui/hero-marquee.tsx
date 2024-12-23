'use client';

import { motion } from 'framer-motion';

const skills = [
  'React', 'Next.js', 'TypeScript', 'Node.js', 'JavaScript', 
  'Python', 'MongoDB'
];

export function HeroMarquee() {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden opacity-10">
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="relative w-[800px] h-[800px]"
      >
        {skills.map((skill, i) => (
          <motion.div
            key={skill}
            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{
              top: '50%',
              transform: `rotate(${i * (360 / skills.length)}deg) translateY(-300px)`,
            }}
          >
            <span className="text-4xl font-bold">{skill}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}