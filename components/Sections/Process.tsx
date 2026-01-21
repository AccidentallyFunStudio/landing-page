import React from 'react';
import { PROCESS_STEPS } from '../../constants';

const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-brand-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="font-display font-semibold text-3xl md:text-5xl mb-4">
            The Process
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto font-light">
            A disciplined series of happy accidents.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
           {/* Decorative Line */}
           <div className="hidden lg:block absolute top-8 left-0 right-0 h-px bg-gray-200 -z-0 mx-20 border-t border-dashed border-gray-300" />

          {PROCESS_STEPS.map((step, index) => (
            <div key={index} className="relative z-10 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center font-display font-bold text-xl border border-gray-200 mb-8 shadow-sm text-brand-black">
                {step.number}
              </div>
              <h3 className="font-display font-semibold text-lg mb-3">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-[200px]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;