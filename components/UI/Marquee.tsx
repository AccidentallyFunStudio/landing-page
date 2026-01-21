import React from 'react';

interface MarqueeProps {
  children: React.ReactNode;
  direction?: 'left' | 'right';
  className?: string;
  speed?: 'slow' | 'normal' | 'fast';
}

const Marquee: React.FC<MarqueeProps> = ({ 
  children, 
  direction = 'left', 
  className = '',
  speed = 'normal'
}) => {
  const animationClass = direction === 'left' ? 'animate-marquee' : 'animate-marquee-reverse';
  
  return (
    <div className={`flex overflow-hidden whitespace-nowrap ${className}`}>
      <div className={`flex shrink-0 ${animationClass} items-center gap-8 py-3`}>
        {children}
        {children}
        {children}
        {children}
      </div>
      <div className={`flex shrink-0 ${animationClass} items-center gap-8 py-3`} aria-hidden="true">
        {children}
        {children}
        {children}
        {children}
      </div>
    </div>
  );
};

export default Marquee;