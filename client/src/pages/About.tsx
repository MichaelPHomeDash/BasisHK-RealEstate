import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function About() {
  return (
    <Layout>
      <div className="bg-background min-h-screen">
        {/* Hero */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="container relative z-10">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold tracking-tighter mb-8 leading-none">
              ARCHITECTS OF <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">ATTENTION</span>
            </h1>
          </div>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
        </section>

        {/* Story */}
        <section className="container pb-24">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-8 text-lg md:text-xl text-muted-foreground leading-relaxed">
              <p>
                <span className="text-foreground font-bold">PropelHK</span> wasn't born in a boardroom. It was forged in the fast-paced, high-stakes environment of Hong Kong's digital underground.
              </p>
              <p>
                We saw a gap between the luxury of HK real estate and the mediocrity of agent marketing. While properties were selling for millions, the marketing strategies were stuck in the 90s.
              </p>
              <p>
                We exist to close that gap. We are data scientists, creative directors, and strategists dedicated to one mission: <span className="text-primary font-bold">making you the only option.</span>
              </p>
            </div>
            <div className="relative h-full min-h-[400px] border border-border/50 bg-card/50 p-8 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="text-6xl font-heading font-bold text-primary">100%</div>
                <div className="text-xl font-heading uppercase tracking-widest text-muted-foreground">Focus on Real Estate</div>
                <div className="w-12 h-1 bg-border mx-auto my-8" />
                <div className="text-6xl font-heading font-bold text-purple-500">24/7</div>
                <div className="text-xl font-heading uppercase tracking-widest text-muted-foreground">Lead Generation</div>
              </div>
            </div>
          </div>
        </section>

        {/* Manifesto */}
        <section className="py-24 bg-card border-y border-border">
          <div className="container text-center max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12 uppercase tracking-widest">The Propel Manifesto</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Speed", desc: "The market waits for no one. We move faster." },
                { title: "Precision", desc: "Data beats opinion. Every time." },
                { title: "Dominance", desc: "Don't compete. Dominate." }
              ].map((item, i) => (
                <div key={i} className="p-6 border border-border/50 bg-background/50 hover:border-primary/50 transition-colors">
                  <h3 className="text-xl font-heading font-bold text-primary mb-4">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 container text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8">
            JOIN THE <span className="text-primary">VANGUARD</span>
          </h2>
          <Link href="/contact">
            <Button size="lg" className="font-heading font-bold uppercase tracking-widest rounded-none px-12 py-6 text-lg">
              Initiate Sequence
            </Button>
          </Link>
        </section>
      </div>
    </Layout>
  );
}
