'use client';

import { motion } from 'framer-motion';
import ThemeToggle  from './ThemeToggle'
import Link from 'next/link';

export default function Navbar() {
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b"
    >
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl font-bold"
        >
          <Link href="/">GS</Link>
        </motion.div>
        
        <div className="flex items-center gap-8">
          <ul className="hidden md:flex items-center gap-6">
            {navItems.map((item, index) => (
              <motion.li
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <Link
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.name}
                </Link>
              </motion.li>
            ))}
          </ul>
          <ThemeToggle/>
        </div>
      </nav>
    </motion.header>
  );
}