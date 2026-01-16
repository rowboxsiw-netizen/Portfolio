
import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import { PROJECTS } from '../constants';
import { ExternalLink } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <SectionWrapper id="projects">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Selected Work</h2>
          <p className="text-gray-500 dark:text-gray-400">A collection of projects built with passion and precision.</p>
        </div>
        <a href="#" className="font-bold text-primary flex items-center gap-2 hover:underline">
          View all projects <ExternalLink size={18} />
        </a>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project) => (
          <motion.div
            key={project.id}
            whileHover={{ y: -10 }}
            className="group relative bg-white dark:bg-darkLighter rounded-[2rem] overflow-hidden border border-gray-100 dark:border-white/10 shadow-xl shadow-black/5"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="p-8">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-gray-100 dark:bg-white/5 rounded-full text-[10px] font-bold tracking-wider uppercase opacity-70">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm line-clamp-2">
                {project.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Projects;
