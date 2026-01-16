
import React, { useState, useEffect, Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import { Theme } from './types';

// Lazy load sections for better initial performance
const About = lazy(() => import('./sections/About'));
const Services = lazy(() => import('./sections/Services'));
const Projects = lazy(() => import('./sections/Projects'));
const Skills = lazy(() => import('./sections/Skills'));
const Testimonials = lazy(() => import('./sections/Testimonials'));
const Contact = lazy(() => import('./sections/Contact'));
const Footer = lazy(() => import('./sections/Footer'));

const LoadingFallback = () => (
  <div className="h-[400px] w-full flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const App: React.FC = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      return (saved as Theme) || 'dark';
    }
    return 'dark';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="min-h-screen">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      
      <main>
        <Hero />
        
        <Suspense fallback={<LoadingFallback />}>
          <About />
        </Suspense>

        <Suspense fallback={<LoadingFallback />}>
          <Services />
        </Suspense>

        <Suspense fallback={<LoadingFallback />}>
          <Projects />
        </Suspense>

        <Suspense fallback={<LoadingFallback />}>
          <Skills />
        </Suspense>

        <Suspense fallback={<LoadingFallback />}>
          <Testimonials />
        </Suspense>

        <Suspense fallback={<LoadingFallback />}>
          <Contact />
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>

      {/* Persistent Floating WhatsApp for Mobile convenience */}
      <a 
        href="https://wa.me/9779826048177?text=Hello"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 p-3 bg-[#25D366] rounded-full shadow-2xl md:hidden hover:scale-110 active:scale-95 transition-all"
      >
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/WhatsApp_icon.png/662px-WhatsApp_icon.png" 
          alt="WhatsApp" 
          className="w-8 h-8"
        />
      </a>
    </div>
  );
};

export default App;
