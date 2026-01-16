
import React from 'react';
import { Github, Twitter, Linkedin, Instagram, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 px-6 md:px-24 border-t dark:border-white/5 bg-white dark:bg-dark">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="font-extrabold text-2xl tracking-tighter">BHARAT.S</div>
          <p className="text-gray-500 dark:text-gray-400 text-sm">© 2026 Bharat Singh. All Rights Reserved.</p>
        </div>

        <div className="flex gap-6">
          <a href="#" className="p-3 rounded-full border border-gray-100 dark:border-white/10 hover:border-primary transition-colors">
            <Github size={20} />
          </a>
          <a href="#" className="p-3 rounded-full border border-gray-100 dark:border-white/10 hover:border-primary transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="#" className="p-3 rounded-full border border-gray-100 dark:border-white/10 hover:border-primary transition-colors">
            <Twitter size={20} />
          </a>
        </div>

        <button 
          onClick={scrollToTop}
          className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary"
        >
          Back to top
          <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
