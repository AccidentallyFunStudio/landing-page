import React from 'react';
import { Cat } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-white border-t border-gray-100 py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          <div className="flex items-center gap-3">
             <div className="p-2 bg-brand-black rounded-lg text-white">
                <Cat size={20} />
             </div>
             <span className="font-display font-semibold text-brand-black">Accidentally Fun Studio</span>
          </div>

          <div className="flex gap-8">
            <a href="https://instagram.com/accidentallyfun.id" className="text-gray-400 hover:text-brand-black transition-colors text-sm font-medium">Twitter</a>
            <a href="https://instagram.com/accidentallyfun.id" className="text-gray-400 hover:text-brand-black transition-colors text-sm font-medium">LinkedIn</a>
            <a href="https://instagram.com/accidentallyfun.id" className="text-gray-400 hover:text-brand-black transition-colors text-sm font-medium">Instagram</a>
          </div>

          <div className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Accidentally Fun.
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
