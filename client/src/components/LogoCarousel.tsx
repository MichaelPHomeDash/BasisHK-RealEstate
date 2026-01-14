import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Building2, Building, Home, Landmark, Warehouse, Hotel, Castle } from 'lucide-react';

const LOGOS = [
  { name: 'Sun Hung Kai Properties', icon: Building2 },
  { name: 'CK Asset', icon: Building },
  { name: 'Henderson Land', icon: Home },
  { name: 'New World Development', icon: Landmark },
  { name: 'Swire Properties', icon: Hotel },
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
          {/* First set of logos */}
          <div className="flex items-center space-x-8 md:space-x-16 px-4 md:px-8">
            {LOGOS.map((logo, index) => (
              <div key={index} className="flex items-center justify-center gap-2 h-12 w-40 md:w-48 opacity-50 hover:opacity-100 transition-all duration-300 shrink-0">
                <logo.icon className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                <span className="text-xs md:text-sm font-heading font-semibold text-foreground whitespace-normal text-center leading-tight">{logo.name}</span>
              </div>
            ))}
          </div>
          {/* Duplicate set for seamless loop */}
          <div className="flex items-center space-x-8 md:space-x-16 px-4 md:px-8">
            {LOGOS.map((logo, index) => (
              <div key={`dup-${index}`} className="flex items-center justify-center gap-2 h-12 w-40 md:w-48 opacity-50 hover:opacity-100 transition-all duration-300 shrink-0">
                <logo.icon className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                <span className="text-xs md:text-sm font-heading font-semibold text-foreground whitespace-normal text-center leading-tight">{logo.name}</span>
              </div>
            ))}
          </div>
          {/* Triplicate set for wide screens */}
          <div className="flex items-center space-x-8 md:space-x-16 px-4 md:px-8">
            {LOGOS.map((logo, index) => (
              <div key={`dup2-${index}`} className="flex items-center justify-center gap-2 h-12 w-40 md:w-48 opacity-50 hover:opacity-100 transition-all duration-300 shrink-0">
                <logo.icon className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                <span className="text-xs md:text-sm font-heading font-semibold text-foreground whitespace-normal text-center leading-tight">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
