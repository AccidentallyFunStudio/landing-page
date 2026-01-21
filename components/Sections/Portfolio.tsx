import React from 'react';
import { PORTFOLIO_ITEMS } from '../../constants';
import Button from '../UI/Button';

const Portfolio: React.FC = () => {
  return (
    <section id="work" className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="font-display font-medium text-4xl md:text-6xl mb-2">
              Selected Works
            </h2>
            <p className="text-gray-400 font-light text-lg">
                Recent shenanigans and experiments.
            </p>
          </div>
          <Button variant="outline">View Archive</Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PORTFOLIO_ITEMS.map((item) => (
            <div key={item.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg aspect-[4/3] mb-6 bg-gray-100">
                <img 
                  src={item.image} 
                  alt={item.project} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 filter grayscale hover:grayscale-0"
                />
              </div>
              <div>
                <div className="flex justify-between items-baseline">
                    <h3 className="font-display font-medium text-xl text-brand-black group-hover:text-gray-600 transition-colors">
                    {item.project}
                    </h3>
                    <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">{item.category}</span>
                </div>
                <p className="text-gray-500 text-sm mt-1">{item.client}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;