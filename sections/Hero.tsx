
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, PlayCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-20">
         <div className="absolute top-[10%] left-[20%] w-72 h-72 bg-primary/40 rounded-full blur-[120px] animate-pulse"></div>
         <div className="absolute bottom-[20%] right-[20%] w-96 h-96 bg-accent/30 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-xs font-semibold mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          Available for new opportunities
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-8 leading-[1.1]"
        >
          Building Digital <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            Experiences
          </span> that Matter.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          I am Bharat Singh, a Full-Stack Engineer specializing in high-performance web systems and premium UI/UX design for global brands.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a 
            href="#projects" 
            className="group flex items-center gap-2 px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full font-bold transition-transform hover:scale-105"
          >
            View Projects
            <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
          <a 
            href="#services" 
            className="flex items-center gap-2 px-8 py-4 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full font-bold hover:bg-gray-50 dark:hover:bg-white/10 transition-colors"
          >
            Our Services
            <PlayCircle size={18} />
          </a>
        </motion.div>
      </div>

      {/* Decorative Grid */}
      <div className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`, backgroundSize: '40px 40px' }}></div>
    </section>
  );
};

export default Hero;
