
import React from 'react';
import SectionWrapper from '../components/SectionWrapper';

const About: React.FC = () => {
  return (
    <SectionWrapper id="about">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-700">
            <img 
              src="https://picsum.photos/seed/bharat/800/1000" 
              alt="Bharat Singh" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 p-8 glass dark:border-white/10 rounded-2xl hidden lg:block">
            <p className="text-3xl font-bold mb-1">5+</p>
            <p className="text-gray-500 dark:text-gray-400 text-sm">Years Experience</p>
          </div>
        </div>

        <div>
          <h4 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">About Me</h4>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">
            Design-Driven Engineering for the <span className="text-accent">Next Generation.</span>
          </h2>
          <div className="space-y-6 text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
            <p>
              I believe that technology should be as beautiful as it is functional. My mission is to bridge the gap between complex backend systems and delightful user experiences.
            </p>
            <p>
              Based out of a fast-paced tech environment, I've spent years honing my skills in high-level architectural patterns, TypeScript robustness, and motion-driven design.
            </p>
            <div className="pt-6 grid grid-cols-2 gap-8">
              <div>
                <h5 className="font-bold text-gray-900 dark:text-white mb-2">Location</h5>
                <p>Global / Remote</p>
              </div>
              <div>
                <h5 className="font-bold text-gray-900 dark:text-white mb-2">Philosophy</h5>
                <p>Minimalist & Robust</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
