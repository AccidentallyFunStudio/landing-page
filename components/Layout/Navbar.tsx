import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../../constants';
import { Menu, X, Cat } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md border-b border-gray-100 py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative">
              <Cat className="w-8 h-8 text-brand-black group-hover:rotate-12 transition-transform duration-300" strokeWidth={1.5} />
              {/* Decorative "shock" lines */}
              <span className="absolute -top-1 -right-1 w-1 h-1 bg-brand-black rounded-full animate-ping opacity-75"></span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display font-bold text-lg tracking-tight text-brand-black">Accidentally Fun</span>
              <span className="font-sans text-[10px] tracking-widest uppercase text-gray-500">Studio</span>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium text-gray-500 hover:text-brand-black transition-colors relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-brand-black after:transition-all hover:after:w-full"
              >
                {link.name}
              </a>
            ))}
            <button className="px-5 py-2 rounded-full border border-gray-200 text-sm font-medium hover:bg-brand-black hover:text-white transition-all duration-300">
              Let's Talk
            </button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-brand-black"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white flex flex-col justify-center p-8 md:hidden animate-fade-in">
          <div className="flex flex-col gap-8 text-center">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-3xl font-display font-light text-brand-black hover:text-gray-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button 
              className="mt-4 bg-brand-black text-white w-full py-4 rounded-lg font-medium text-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Start Project
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;