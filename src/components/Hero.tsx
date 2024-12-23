'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { HeroMarquee } from '@/components/ui/hero-marquee';

const skills = [
  { name: "Next.js", icon: "⚡" },
  { name: "MongoDB", icon: "🍃" },
  { name: "Node.js", icon: "💻" },
  { name: "React", icon: "⚛️" },
  { name: "Python", icon: "🐍" }
];

export default function Hero() {
  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
      <HeroMarquee />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
           

          <motion.h1 
            className="text-6xl md:text-8xl font-bold mb-8 mt-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Crafting Digital
            <br />
            Experiences
          </motion.h1>

          <motion.p
            className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            Hi,I'm Gaurav Singh, a passionate developer with a knack for crafting captivating digital experiences.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="bg-background/50 backdrop-blur-sm border border-border px-4 py-2 rounded-full flex items-center gap-2"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <span>{skill.icon}</span>
                <span className="font-medium">{skill.name}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Button size="lg" className="text-lg px-8" asChild>
              <a href="#projects">View Projects</a>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8" asChild>
              <a href="#about">About Me</a>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="fixed left-8 bottom-12 hidden lg:flex flex-col gap-6 items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        {[
          { icon: Github, href: 'https://github.com/GauRav-sINGh123' },
          { icon: Linkedin, href: 'https://www.linkedin.com/in/gaurav-singh-746916238' },
          
        ].map(({ icon: Icon, href }, index) => (
          <motion.a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            whileHover={{ y: -2, scale: 1.1 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 + index * 0.1 }}
          >
            <Icon className="w-5 h-5" />
          </motion.a>
        ))}
        <div className="w-px h-24 bg-border mt-4" />
      </motion.div>
    </section>
  );
}