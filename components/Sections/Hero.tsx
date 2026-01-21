import React from 'react';
import { HERO_CONTENT } from '../../constants';
import Button from '../UI/Button';
import Marquee from '../UI/Marquee';
import { Cat } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-brand-white pt-20">
      
      {/* Main Content Area - Expands to fill available space */}
      <div className="flex-1 flex flex-col justify-center items-center container mx-auto px-6 relative z-10 py-12">
        
        {/* Logo Construction */}
        <div className="mb-12 flex flex-col items-center group select-none">
           {/* Cat Illustration */}
           <div className="relative mb-6 transform group-hover:-translate-y-2 transition-transform duration-500 ease-out">
              <Cat size={100} strokeWidth={1.5} className="text-brand-black relative z-10" />
              
              {/* Decorative 'Shock' Elements mimicking the drawing */}
              <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="absolute -top-4 left-0 w-1 h-6 bg-brand-black rounded-full -rotate-45"></span>
                  <span className="absolute -top-6 left-1/2 w-1 h-8 bg-brand-black rounded-full -translate-x-1/2"></span>
                  <span className="absolute -top-4 right-0 w-1 h-6 bg-brand-black rounded-full rotate-45"></span>
              </div>
           </div>
           
           {/* Text Construction */}
           <h1 className="font-display font-black text-6xl md:text-8xl tracking-tighter text-brand-black leading-[0.85] flex flex-col items-center mb-4">
              <span className="block">ACCIDENTALLY</span>
              <span className="block">FUN</span>
           </h1>
           
           {/* Studio Badge */}
           <div className="bg-brand-black text-white px-10 py-2 rounded-full border-4 border-brand-black transform -rotate-2 hover:rotate-0 transition-transform duration-300 shadow-xl">
              <span className="font-display font-bold text-xl md:text-2xl tracking-[0.2em]">STUDIO</span>
           </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-4">
          <Button variant="primary" onClick={() => document.getElementById('contact')?.scrollIntoView()}>
            {HERO_CONTENT.ctaPrimary}
          </Button>
          <Button variant="outline" onClick={() => document.getElementById('work')?.scrollIntoView()}>
            {HERO_CONTENT.ctaSecondary}
          </Button>
        </div>
      </div>

      {/* Elegant Marquee - Positioned relatively at the bottom of flex container */}
      <div className="w-full py-6 border-t border-gray-100 bg-white z-20 relative">
        <Marquee direction="left" speed="slow">
          <span className="font-display font-medium text-xl uppercase mx-8 flex items-center gap-4 text-gray-400">
            Game Dev <Cat className="w-4 h-4 text-brand-black" />
          </span>
          <span className="font-display font-medium text-xl uppercase mx-8 flex items-center gap-4 text-gray-400">
            Gamification <Cat className="w-4 h-4 text-brand-black" />
          </span>
          <span className="font-display font-medium text-xl uppercase mx-8 flex items-center gap-4 text-gray-400">
            Motion Graphics <Cat className="w-4 h-4 text-brand-black" />
          </span>
          <span className="font-display font-medium text-xl uppercase mx-8 flex items-center gap-4 text-gray-400">
            Growth Hacking <Cat className="w-4 h-4 text-brand-black" />
          </span>
        </Marquee>
      </div>
      
      {/* Subtle Grain/Texture */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}>
      </div>
    </section>
  );
};

export default Hero;