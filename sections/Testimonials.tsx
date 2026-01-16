
import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <SectionWrapper id="testimonials">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Client Love</h2>
        <p className="text-gray-500 dark:text-gray-400">Trust is earned through delivery and consistency.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {TESTIMONIALS.map((t, idx) => (
          <div 
            key={idx}
            className="p-10 rounded-[2.5rem] bg-white dark:bg-darkLighter border border-gray-100 dark:border-white/10 relative"
          >
            <Quote className="absolute top-8 right-8 text-gray-200 dark:text-white/5" size={48} />
            <p className="text-xl italic text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              "{t.content}"
            </p>
            <div className="flex items-center gap-4">
              <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full border-2 border-primary" />
              <div>
                <h4 className="font-bold">{t.name}</h4>
                <p className="text-xs text-gray-500">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Testimonials;
