
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Zap } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import { Theme } from '../types';

interface NavbarProps {
  theme: Theme;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'py-4 glass border-b dark:border-white/10' : 'py-6 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 font-bold text-xl tracking-tight"
        >
          <div className="bg-primary p-1.5 rounded-lg text-white">
            <Zap size={20} fill="currentColor" />
          </div>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-500 dark:from-white dark:to-gray-400">
            BHARAT.S
          </span>
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item, idx) => (
            <motion.a
              key={item.name}
              href={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-white transition-colors"
            >
              {item.name}
            </motion.a>
          ))}
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/5 transition-colors"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <a 
            href="#contact"
            className="px-5 py-2.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full text-sm font-semibold hover:opacity-90 transition-all shadow-lg shadow-black/10 dark:shadow-white/5"
          >
            Work with me
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button onClick={toggleTheme} className="p-2">
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="p-2">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-dark border-b dark:border-white/10 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium"
                >
                  {item.name}
                </a>
              ))}
              <a 
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="w-full py-4 bg-primary text-white text-center rounded-xl font-bold"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
