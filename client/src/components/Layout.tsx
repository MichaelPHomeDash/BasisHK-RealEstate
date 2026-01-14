import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-body selection:bg-primary selection:text-primary-foreground flex flex-col">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="container flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <a className="text-2xl font-heading font-bold tracking-tight text-foreground hover:opacity-80 transition-opacity flex items-center gap-2">
              <span className="text-primary">●</span> BASISHK
            </a>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <a
                  className={cn(
                    "text-sm font-medium tracking-wide transition-colors hover:text-primary",
                    location === item.href
                      ? "text-primary font-bold"
                      : "text-muted-foreground"
                  )}
                >
                  {item.label}
                </a>
              </Link>
            ))}
            <Link href="/contact">
              <Button variant="default" className="font-heading font-bold tracking-wide rounded-full px-6">
                Get Started
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-background border-b border-border p-4 flex flex-col gap-4 animate-in slide-in-from-top-5">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <a
                  className={cn(
                    "text-lg font-heading font-bold uppercase tracking-wider py-2 border-b border-border/20",
                    location === item.href
                      ? "text-primary"
                      : "text-muted-foreground"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              </Link>
            ))}
            <Link href="/contact">
              <Button className="w-full font-heading font-bold uppercase tracking-wider rounded-none mt-4" onClick={() => setIsMobileMenuOpen(false)}>
                Get Access
              </Button>
            </Link>
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
              Cultivating meaningful connections for Hong Kong's real estate professionals. 
              Authentic strategies. Sustainable growth. Human-centric marketing.
            </p>
          </div>
          <div>
            <h4 className="font-heading font-bold tracking-wide mb-4 text-foreground">Explore</h4>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>
                    <a className="text-muted-foreground hover:text-primary transition-colors">
                      {item.label}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-bold uppercase tracking-wider mb-4">Connect</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Instagram</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">LinkedIn</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">WhatsApp</a></li>
            </ul>
          </div>
        </div>
        <div className="container mt-12 pt-8 border-t border-border/20 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} BasisHK. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
