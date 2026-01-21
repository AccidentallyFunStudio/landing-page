import React from 'react';
import { SERVICES } from '../../constants';
import { ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-brand-white">
      <div className="container mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <span className="text-gray-400 font-sans text-xs tracking-widest uppercase mb-4 block">Our Expertise</span>
            <h2 className="font-display font-medium text-4xl md:text-6xl text-brand-black">
              We don't just build.<br/>
              <span className="font-serif italic text-gray-400">We entertain.</span>
            </h2>
          </div>
          <div className="h-px bg-gray-200 flex-1 mx-8 hidden md:block"></div>
          <p className="text-gray-500 max-w-xs text-sm">
            Full-cycle production from concept to launch. We handle the boring stuff so you can have the fun stuff.
          </p>
        </div>

        <div className="divide-y divide-gray-100 border-t border-b border-gray-100">
          {SERVICES.map((service, index) => (
            <div 
              key={service.id} 
              className="group py-16 flex flex-col md:flex-row gap-8 md:items-start transition-colors hover:bg-gray-50/50"
            >
              <span className="font-display text-lg text-gray-300 w-24 pt-1">0{index + 1}</span>
              
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <h3 className="font-display font-semibold text-3xl text-brand-black">{service.title}</h3>
                </div>
                <p className="text-gray-500 text-base max-w-xl mb-6 font-light">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                    {service.features.map((f, i) => (
                      <span key={i} className="px-3 py-1 rounded-full bg-gray-100 text-xs text-gray-600">
                        {f}
                      </span>
                    ))}
                  </div>
              </div>

              <div className="flex items-center justify-end md:w-32">
                <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-brand-black opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-brand-black hover:text-white transform group-hover:-translate-x-4">
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;