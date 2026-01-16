
import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionWrapperProps {
  children: ReactNode;
  id?: string;
  className?: string;
  delay?: number;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ children, id, className = '', delay = 0 }) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`py-20 px-6 md:px-12 lg:px-24 ${className}`}
    >
      {children}
    </motion.section>
  );
};

export default SectionWrapper;
