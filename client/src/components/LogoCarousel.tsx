import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Building2, Building, Home, Landmark, Warehouse, Hotel, Castle } from 'lucide-react';

const LOGOS = [
  { name: 'Sun Hung Kai Properties', icon: Building2 },
  { name: 'CK Asset', icon: Building },
  { name: 'Henderson Land', icon: Home },
];

export function LogoCarousel() {
  const { t } = useLanguage();

  return (
    <div className="w-full py-12 bg-background border-y border-border/40 overflow-hidden">
      <div className="container mx-auto px-4 mb-8 text-center">
        <p className="text-sm font-medium text-muted-foreground tracking-widest uppercase">
          {t('home.trusted.title')}
        </p>
      </div>
      
      <div className="relative flex overflow-hidden group mask-gradient">
        <div className="flex animate-marquee whitespace-nowrap">
          {/* Robust Infinite Loop Structure */}
          {/* We create a single flex container with a gap, and duplicate the items enough times to fill the screen */}
          {/* The animation moves -50% of the width, so we need 2 identical sets of items */}
          <div className="flex items-center gap-16 md:gap-32 px-8 md:px-16 min-w-max">
            {/* Set 1 */}
            {LOGOS.map((logo, index) => (
              <div key={`set1-${index}`} className="flex items-center justify-center gap-3 h-16 w-auto min-w-[200px] opacity-60 hover:opacity-100 transition-all duration-300 shrink-0">
                <logo.icon className="w-8 h-8 md:w-10 md:h-10 text-primary" />
                <span className="text-sm md:text-base font-heading font-semibold text-foreground whitespace-nowrap">{logo.name}</span>
              </div>
            ))}
            
            {/* Set 2 */}
            {LOGOS.map((logo, index) => (
              <div key={`set2-${index}`} className="flex items-center justify-center gap-3 h-16 w-auto min-w-[200px] opacity-60 hover:opacity-100 transition-all duration-300 shrink-0">
                <logo.icon className="w-8 h-8 md:w-10 md:h-10 text-primary" />
                <span className="text-sm md:text-base font-heading font-semibold text-foreground whitespace-nowrap">{logo.name}</span>
              </div>
            ))}

            {/* Set 3 (Safety Buffer for ultra-wide screens) */}
            {LOGOS.map((logo, index) => (
              <div key={`set3-${index}`} className="flex items-center justify-center gap-3 h-16 w-auto min-w-[200px] opacity-60 hover:opacity-100 transition-all duration-300 shrink-0">
                <logo.icon className="w-8 h-8 md:w-10 md:h-10 text-primary" />
                <span className="text-sm md:text-base font-heading font-semibold text-foreground whitespace-nowrap">{logo.name}</span>
              </div>
            ))}
            
             {/* Set 4 (Extra Safety Buffer) */}
            {LOGOS.map((logo, index) => (
              <div key={`set4-${index}`} className="flex items-center justify-center gap-3 h-16 w-auto min-w-[200px] opacity-60 hover:opacity-100 transition-all duration-300 shrink-0">
                <logo.icon className="w-8 h-8 md:w-10 md:h-10 text-primary" />
                <span className="text-sm md:text-base font-heading font-semibold text-foreground whitespace-nowrap">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
