import React from 'react';
import { VALUE_PROPS } from '../../constants';

const ValueProp: React.FC = () => {
  return (
    <section className="py-24 bg-brand-light">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto mb-20 text-center">
          <h2 className="font-display font-semibold text-3xl md:text-5xl mb-6">
            Why It's Always a "Win"
          </h2>
          <p className="text-gray-500 text-lg font-light">
            We don't rely on luck. We rely on obsessive engineering and creative chaos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {VALUE_PROPS.map((prop, index) => (
            <div 
              key={index}
              className="p-8 bg-white rounded-xl border border-gray-100 hover:border-gray-300 transition-all duration-300 hover:shadow-sm"
            >
              <div className="mb-6 text-brand-black">
                {/* Clone element to override color prop if necessary or just render */}
                <div className="w-10 h-10 flex items-center justify-center bg-gray-50 rounded-lg">
                    {React.cloneElement(prop.icon as React.ReactElement, { className: "w-5 h-5 text-brand-black" })}
                </div>
              </div>
              <h3 className="font-display font-semibold text-xl mb-3 text-brand-black">
                {prop.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {prop.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProp;