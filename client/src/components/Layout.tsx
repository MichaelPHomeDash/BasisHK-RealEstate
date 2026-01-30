import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X, Globe } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { label: t('nav.home'), href: "/" },
    { label: t('nav.services'), href: "/services" },
    { label: t('nav.caseStudies'), href: "/case-studies" },
    { label: t('nav.about'), href: "/about" },
    { label: t('nav.contact'), href: "/contact" },
    { label: t('nav.blog'), href: "/blog" },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'zh' : 'en');
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-body selection:bg-primary selection:text-primary-foreground flex flex-col">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="container flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-heading font-bold tracking-tight text-foreground hover:opacity-80 transition-opacity flex items-center gap-2">
            <span className="text-primary">●</span> BASISHK
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link 
                key={item.href} 
                href={item.href}
                className={cn(
                  "text-sm font-medium tracking-wide transition-colors hover:text-primary",
                  location === item.href
                    ? "text-primary font-bold"
                    : "text-muted-foreground"
                )}
              >
                {item.label}
              </Link>
            ))}
            
            {/* Language Switcher */}
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary transition-colors px-2 py-1 rounded-md hover:bg-secondary/50"
            >
              <Globe className="w-4 h-4" />
              <span>{language === 'en' ? '繁' : 'EN'}</span>
            </button>

            <Link href="/contact">
              <Button variant="default" className="font-heading font-bold tracking-wide rounded-full px-6">
                {t('nav.getStarted')}
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-4 md:hidden">
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              <Globe className="w-4 h-4" />
              <span>{language === 'en' ? '繁' : 'EN'}</span>
            </button>
            <button
              className="text-foreground p-2 hover:bg-secondary/50 rounded-md transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-0 top-20 bg-background/95 backdrop-blur-lg z-40 p-6 flex flex-col gap-6 animate-in slide-in-from-top-5 overflow-y-auto">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link 
                  key={item.href} 
                  href={item.href}
                  className={cn(
                    "text-2xl font-heading font-medium py-4 border-b border-border/10 transition-colors",
                    location === item.href
                      ? "text-primary"
                      : "text-foreground/80 hover:text-foreground"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="mt-auto pb-8">
              <Link href="/contact">
                <Button size="lg" className="w-full font-heading font-bold rounded-full h-14 text-lg shadow-lg shadow-primary/20" onClick={() => setIsMobileMenuOpen(false)}>
                  {t('nav.getStarted')}
                </Button>
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1 pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-secondary/30 py-16">
        <div className="container grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <h3 className="text-2xl font-heading font-bold text-foreground mb-4 flex items-center gap-2">
              <span className="text-primary">●</span> BASISHK
            </h3>
            <p className="text-muted-foreground max-w-md font-light leading-relaxed">
              {t('footer.desc')}
            </p>
          </div>
          <div>
            <h4 className="font-heading font-bold tracking-wide mb-4 text-foreground">{t('footer.explore')}</h4>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link 
                    href={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-bold uppercase tracking-wider mb-4">{t('footer.connect')}</h4>
            <ul className="space-y-2">
              <li><a href="https://www.linkedin.com/company/basis-hk/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="container mt-12 pt-8 border-t border-border/20 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} BasisHK. {t('footer.rights')}
        </div>
      </footer>
    </div>
  );
}
