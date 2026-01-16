import React from 'react';

export interface NavItem {
  name: string;
  href: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'design' | 'tools';
  // Fix: Added React import to resolve the missing React namespace
  icon: React.ReactNode;
}

export interface Service {
  title: string;
  description: string;
  // Fix: Added React import to resolve the missing React namespace
  icon: React.ReactNode;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export type Theme = 'light' | 'dark';