import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import SEO from "@/components/SEO";
import { Building2, Users, LineChart, Award, HeartHandshake, Lightbulb } from "lucide-react";

export default function About() {
  const { t } = useLanguage();

  return (
    <Layout>
      <SEO 
        title={t('about.title')}
        description={t('about.desc')}
        url="/about"
      />
      <div className="bg-background min-h-screen">
        {/* Hero - Creative Professional */}
        <section className="relative py-32 overflow-hidden">
          <div className="absolute inset-0 mesh-bg opacity-50 -z-20" />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/20 rounded-full blur-[120px] -z-10" />
          
          <div className="container text-center max-w-4xl relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-white/40 shadow-sm text-primary text-[11px] font-bold uppercase tracking-widest mb-6">
              <Users className="w-3 h-3" />
              <span>{t('about.stat.focus')}</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-heading font-medium mb-8 text-foreground leading-tight">
              {t('about.title')}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed">
              {t('about.desc')}
            </p>
          </div>
        </section>

        {/* Origin Story - Editorial Layout */}
        <section className="container py-24">
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-[2rem] blur-2xl -z-10" />
              <img 
                src="/images/hero-city-night.jpg" 
                alt="Hong Kong Skyline" 
                className="rounded-[2rem] shadow-2xl border border-white/50 w-full aspect-[4/5] object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-2xl shadow-xl max-w-xs border border-border/50 hidden md:block">
                <div className="text-4xl font-heading font-medium text-primary mb-2">10+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide font-medium">Years of Combined Real Estate Experience</div>
              </div>
            </div>
            
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-heading font-medium text-foreground">
                From the Frontlines to <br />
                <span className="text-primary italic">Digital Infrastructure</span>
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground font-light leading-relaxed">
                <p>
                  <span className="text-foreground font-medium">BasisHK</span> {t('about.mission.1').replace('BasisHK ', '')}
                </p>
                <p className="pl-4 border-l-2 border-accent">
                  {t('about.mission.2')}
                </p>
                <p>
                  {t('about.mission.3')}
                </p>
              </div>
              
              <div className="pt-8 grid grid-cols-2 gap-8">
                <div>
                  <div className="text-3xl font-heading font-medium text-foreground mb-1">100%</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-widest">{t('about.stat.focus')}</div>
                </div>
                <div>
                  <div className="text-3xl font-heading font-medium text-foreground mb-1">24/7</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-widest">{t('about.stat.uptime')}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values - Grid */}
        <section className="py-24 bg-secondary/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03]" />
          <div className="container relative z-10 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-heading font-medium mb-4">{t('about.values.title')}</h2>
              <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { 
                  icon: HeartHandshake,
                  title: t('about.values.integrity'), 
                  desc: t('about.values.integrity.desc') 
                },
                { 
                  icon: Lightbulb,
                  title: t('about.values.innovation'), 
                  desc: t('about.values.innovation.desc') 
                },
                { 
                  icon: Award,
                  title: t('about.values.results'), 
                  desc: t('about.values.results.desc') 
                }
              ].map((item, i) => (
                <div key={i} className="p-10 bg-white/80 backdrop-blur-sm border border-white/60 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group">
                  <div className="w-14 h-14 bg-primary/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-heading font-medium text-foreground mb-4">{item.title}</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Slogan - In Content We Trust */}
        <section className="py-20 container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/10 to-primary/5 rounded-[2rem] blur-xl -z-10" />
              <div className="bg-white/60 backdrop-blur-sm border border-white/60 rounded-[2rem] p-12 md:p-16 shadow-lg">
                <h2 className="text-4xl md:text-6xl font-heading font-medium text-foreground mb-6 tracking-tight">
                  {t('about.slogan.title')}
                </h2>
                <div className="w-16 h-1 bg-accent mx-auto rounded-full mb-8" />
                <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto">
                  {t('about.slogan.desc')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 container">
          <div className="bg-primary rounded-[2rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-heading font-medium mb-8 text-white">
                {t('about.cta.title')}
              </h2>
              <Link href="/contact">
                <Button size="lg" className="rounded-full px-12 h-14 text-lg font-medium bg-white text-primary hover:bg-accent hover:text-primary-foreground transition-all shadow-lg hover:scale-105">
                  {t('about.cta.button')}
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
