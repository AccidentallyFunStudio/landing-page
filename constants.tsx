import React from 'react';
import { ServiceItem, ProcessStep, PortfolioItem, ValuePropItem } from './types';
import { 
  Gamepad2, 
  Rocket, 
  Megaphone, 
  Clapperboard, 
  Zap, 
  Heart, 
  BrainCircuit, 
  Users 
} from 'lucide-react';

export const NAV_LINKS = [
  { name: 'Services', href: '#services' },
  { name: 'Work', href: '#work' },
  { name: 'Contact', href: '#contact' },
];

export const HERO_CONTENT = {
  badge: "Creative Tech Agency",
  headline: "Hardcore Tech. \nAccidentally Fun.",
  subheadline: "We bridge the gap between complex engineering and pure joy. Whether it's a game, a brand activation, or a viral campaign—we deliver professional results that feel like a happy accident of creativity and precision.",
  ctaPrimary: "Start Your Project",
  ctaSecondary: "View Our Work"
};

export const VALUE_PROPS: ValuePropItem[] = [
  {
    title: "Serious Play",
    description: "We take 'fun' seriously. Our rigorous engineering standards ensure your gamification isn't just a gimmick—it's a growth engine.",
    icon: <Gamepad2 className="w-8 h-8 text-brand-purple" />
  },
  {
    title: "Data-Driven Creativity",
    description: "We don't guess; we test. Every pixel and line of code is backed by analytics to ensure maximum engagement and ROI.",
    icon: <BrainCircuit className="w-8 h-8 text-brand-pink" />
  },
  {
    title: "Seamless Integration",
    description: "Your brand voice, amplified. We blend into your ecosystem so perfectly, users won't know where you end and the fun begins.",
    icon: <Zap className="w-8 h-8 text-brand-lime" />
  },
  {
    title: "Human-First Tech",
    description: "Technology is cold. We make it warm. We focus on the emotional connection your users feel when they interact with your product.",
    icon: <Heart className="w-8 h-8 text-white" />
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'game-dev',
    title: "Game Development",
    icon: <Gamepad2 className="w-10 h-10 mb-4 text-brand-lime" />,
    description: "Full-cycle development for Mobile & PC that keeps players glued to the screen.",
    features: ["Unity & Unreal Engine", "Multiplayer Architecture", "Rapid Prototyping", "Cross-Platform Launch"]
  },
  {
    id: 'game-services',
    title: "Game Services",
    icon: <Users className="w-10 h-10 mb-4 text-brand-purple" />,
    description: "Gamification and backend magic to turn casual users into loyal superfans.",
    features: ["Brand Gamification", "Live Ops & Events", "Porting & Optimization", "Economy Design"]
  },
  {
    id: 'marketing',
    title: "Digital Marketing",
    icon: <Megaphone className="w-10 h-10 mb-4 text-brand-pink" />,
    description: "Strategic guidance tailored to you. From personal consultations to full-scale 360° marketing execution.",
    features: ["1-on-1 Consultation", "Corporate Training", "360° Marketing Needs", "Growth Strategy"]
  },
  {
    id: 'motion',
    title: "Video & Motion",
    icon: <Clapperboard className="w-10 h-10 mb-4 text-blue-400" />,
    description: "Cinematic story-telling that explains, entertains, and converts.",
    features: ["2D/3D Animation", "Cinematic Trailers", "Explainer Videos", "VFX & Compositing"]
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "The 'What If?'",
    description: "We kick off with a 'No Bad Ideas' brainstorming session. We challenge your brief, explore the impossible, and find that spark of 'Accidental Fun'."
  },
  {
    number: "02",
    title: "The Deep Dive",
    description: "Our engineers and artists retreat to the lab. We scope, we prototype, and we validate technical feasibility before writing a single line of production code."
  },
  {
    number: "03",
    title: "The Magic Mix",
    description: "This is where the grind happens. Sprints, milestones, and coffee. We build with precision, keeping you in the loop with transparent updates."
  },
  {
    number: "04",
    title: "The Mic Drop",
    description: "Launch day isn't the finish line; it's the party. We deploy, monitor stability, and high-five. Then, we look at the data and optimize."
  }
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: '1',
    client: "Neon Nexus",
    project: "Cyberpunk Racer",
    category: "Game Dev",
    image: "https://picsum.photos/600/400?random=1"
  },
  {
    id: '2',
    client: "GreenLife",
    project: "Eco-Habit Gamification",
    category: "Game Services",
    image: "https://picsum.photos/600/400?random=2"
  },
  {
    id: '3',
    client: "TechFlow",
    project: "Series A Announcement",
    category: "Video & Motion",
    image: "https://picsum.photos/600/400?random=3"
  }
];