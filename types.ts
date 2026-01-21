import { ReactNode } from 'react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: ReactNode;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface PortfolioItem {
  id: string;
  client: string;
  project: string;
  category: string;
  image: string;
}

export interface ValuePropItem {
  title: string;
  description: string;
  icon: ReactNode;
}