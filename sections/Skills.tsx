
import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <SectionWrapper id="skills" className="bg-gray-50/50 dark:bg-darkLighter/50">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Expertise</h2>
        <p className="text-gray-500 dark:text-gray-400">The tools and frameworks I use to bring ideas to life.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {SKILLS.map((skill, idx) => (
          <div 
            key={idx}
            className="p-6 bg-white dark:bg-darkLighter rounded-2xl border border-gray-100 dark:border-white/5 flex flex-col items-center gap-4 hover:border-primary/50 transition-all duration-300 shadow-sm"
          >
            <div className="p-3 bg-gray-50 dark:bg-white/5 rounded-xl text-primary">
              {skill.icon}
            </div>
            <span className="font-bold text-sm tracking-tight">{skill.name}</span>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Skills;
