
import React from 'react';
import { 
  Code2, Layout, Database, Smartphone, Palette, ShieldCheck, 
  Figma, Github, Globe, Layers, Zap, Terminal 
} from 'lucide-react';
import { Project, Skill, Service, Testimonial } from './types';

export const NAV_ITEMS: { name: string; href: string }[] = [
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

export const SKILLS: Skill[] = [
  { name: 'React / Next.js', category: 'frontend', icon: <Code2 size={20} /> },
  { name: 'TypeScript', category: 'frontend', icon: <Terminal size={20} /> },
  { name: 'Tailwind CSS', category: 'frontend', icon: <Palette size={20} /> },
  { name: 'Node.js', category: 'backend', icon: <Database size={20} /> },
  { name: 'GraphQL', category: 'backend', icon: <Layers size={20} /> },
  { name: 'System Design', category: 'backend', icon: <ShieldCheck size={20} /> },
  { name: 'UI/UX Design', category: 'design', icon: <Figma size={20} /> },
  { name: 'Framer Motion', category: 'design', icon: <Zap size={20} /> },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "NexGen Finance Platform",
    description: "A premium fintech dashboard with real-time analytics and web3 integration.",
    image: "https://picsum.photos/seed/fintech/800/600",
    tags: ["React", "TypeScript", "D3.js"],
    link: "#"
  },
  {
    id: 2,
    title: "EcoSphere AI",
    description: "An environmental tracking system powered by machine learning and spatial data.",
    image: "https://picsum.photos/seed/eco/800/600",
    tags: ["Next.js", "Python", "Tailwind"],
    link: "#"
  },
  {
    id: 3,
    title: "Lumina Creative Studio",
    description: "A high-performance portfolio for a world-class digital agency.",
    image: "https://picsum.photos/seed/studio/800/600",
    tags: ["Framer", "React", "Three.js"],
    link: "#"
  }
];

export const SERVICES: Service[] = [
  {
    title: "Full-Stack Development",
    description: "End-to-end scalable solutions built with the latest modern frameworks.",
    icon: <Code2 className="text-primary" size={32} />
  },
  {
    title: "UI/UX Architecture",
    description: "Premium user interfaces that follow the Apple and Stripe design philosophies.",
    icon: <Layout className="text-accent" size={32} />
  },
  {
    title: "System Design",
    description: "High-performance architecture focused on scalability and 99.9% uptime.",
    icon: <ShieldCheck className="text-blue-500" size={32} />
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Sarah Johnson",
    role: "CTO, TechFlow",
    content: "Bharat delivered a platform that exceeded our expectations in both speed and design. A true Silicon Valley standard developer.",
    avatar: "https://i.pravatar.cc/150?u=sarah"
  },
  {
    name: "Marcus Chen",
    role: "Founder, Zenith AI",
    content: "Working with Bharat was a breeze. His attention to detail in the UI and clean TypeScript code made our handover seamless.",
    avatar: "https://i.pravatar.cc/150?u=marcus"
  }
];
