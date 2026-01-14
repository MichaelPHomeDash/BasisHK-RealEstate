import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Building2, Building, Home, Landmark, Warehouse, Hotel, Castle } from 'lucide-react';

const LOGOS = [
  { name: 'Sun Hung Kai Properties', icon: Building2 },
  { name: 'CK Asset', icon: Building },
  { name: 'Henderson Land', icon: Home },
  { name: 'New World Development', icon: Landmark },
  { name: 'Sino Group', icon: Warehouse },
  { name: 'Swire Properties', icon: Hotel },
  { name: 'Wheelock Properties', icon: Castle },
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
      
      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee whitespace-nowrap flex items-center space-x-16 px-8">
          {LOGOS.map((logo, index) => (
            <div key={index} className="flex items-center justify-center gap-2 h-12 w-48 opacity-50 hover:opacity-100 transition-all duration-300">
              <logo.icon className="w-8 h-8 text-primary" />
              <span className="text-sm font-heading font-semibold text-foreground">{logo.name}</span>
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {LOGOS.map((logo, index) => (
            <div key={`dup-${index}`} className="flex items-center justify-center gap-2 h-12 w-48 opacity-50 hover:opacity-100 transition-all duration-300">
              <logo.icon className="w-8 h-8 text-primary" />
              <span className="text-sm font-heading font-semibold text-foreground">{logo.name}</span>
            </div>
          ))}
        </div>

        <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center space-x-16 px-8">
          {LOGOS.map((logo, index) => (
            <div key={`dup2-${index}`} className="flex items-center justify-center gap-2 h-12 w-48 opacity-50 hover:opacity-100 transition-all duration-300">
              <logo.icon className="w-8 h-8 text-primary" />
              <span className="text-sm font-heading font-semibold text-foreground">{logo.name}</span>
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {LOGOS.map((logo, index) => (
            <div key={`dup3-${index}`} className="flex items-center justify-center gap-2 h-12 w-48 opacity-50 hover:opacity-100 transition-all duration-300">
              <logo.icon className="w-8 h-8 text-primary" />
              <span className="text-sm font-heading font-semibold text-foreground">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
