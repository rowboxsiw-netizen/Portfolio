
import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <SectionWrapper id="services" className="bg-gray-50/50 dark:bg-darkLighter/50">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Services</h2>
        <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
          Tailored solutions designed to scale your business and elevate your digital presence.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {SERVICES.map((service, idx) => (
          <div 
            key={idx}
            className="p-10 rounded-3xl glass dark:border-white/5 hover:scale-[1.02] transition-all duration-500 group"
          >
            <div className="mb-6 p-4 bg-white dark:bg-white/5 rounded-2xl w-fit shadow-sm group-hover:bg-primary/10 transition-colors">
              {service.icon}
            </div>
            <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Services;
