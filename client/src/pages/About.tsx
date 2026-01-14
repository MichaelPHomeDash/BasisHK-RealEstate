import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <Layout>
      <div className="bg-background min-h-screen">
        {/* Hero */}
        <section className="py-20 bg-secondary/30 border-b border-border">
          <div className="container text-center max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-heading font-bold tracking-tight mb-6 text-foreground">
              {t('about.title')}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('about.desc')}
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="container py-24">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                <span className="text-foreground font-semibold">BasisHK</span> {t('about.mission.1').replace('BasisHK ', '')}
              </p>
              <p>
                {t('about.mission.2')}
              </p>
              <p>
                {t('about.mission.3')}
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-8 shadow-sm">
              <div className="grid grid-cols-2 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">100%</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wide">{t('about.stat.focus')}</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wide">{t('about.stat.uptime')}</div>
                </div>
                <div className="col-span-2 pt-8 border-t border-border">
                  <div className="text-lg font-medium text-foreground">{t('about.stat.growth')}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 bg-secondary/30 border-y border-border">
          <div className="container text-center max-w-5xl">
            <h2 className="text-3xl font-heading font-bold mb-12">{t('about.values.title')}</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: t('about.values.integrity'), desc: t('about.values.integrity.desc') },
                { title: t('about.values.innovation'), desc: t('about.values.innovation.desc') },
                { title: t('about.values.results'), desc: t('about.values.results.desc') }
              ].map((item, i) => (
                <div key={i} className="p-8 bg-background border border-border rounded-lg hover:border-primary/50 transition-colors">
                  <h3 className="text-xl font-heading font-bold text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 container text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8 text-foreground">
            {t('about.cta.title')}
          </h2>
          <Link href="/contact">
            <Button size="lg" className="font-heading font-semibold px-10 py-6 bg-primary text-primary-foreground hover:bg-primary/90">
              {t('about.cta.button')}
            </Button>
          </Link>
        </section>
      </div>
    </Layout>
  );
}
