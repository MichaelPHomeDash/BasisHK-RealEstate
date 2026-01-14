import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function About() {
  return (
    <Layout>
      <div className="bg-background min-h-screen">
        {/* Hero */}
        <section className="py-20 bg-secondary/30 border-b border-border">
          <div className="container text-center max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-heading font-bold tracking-tight mb-6 text-foreground">
              About AuraRealtyHK
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We are a specialized marketing agency dedicated to empowering Hong Kong real estate professionals with modern digital tools.
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="container py-24">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                <span className="text-foreground font-semibold">AuraRealtyHK</span> was established to bridge the gap between traditional real estate practices and modern digital marketing.
              </p>
              <p>
                The Hong Kong property market is one of the most competitive in the world. We recognized that individual agents often lack the resources and technical expertise to compete with large agencies in the digital space.
              </p>
              <p>
                Our mission is to level the playing field by providing enterprise-grade marketing strategies, data analytics, and lead generation systems to individual professionals.
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-8 shadow-sm">
              <div className="grid grid-cols-2 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">100%</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wide">Real Estate Focus</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wide">System Uptime</div>
                </div>
                <div className="col-span-2 pt-8 border-t border-border">
                  <div className="text-lg font-medium text-foreground">Dedicated to Your Growth</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 bg-secondary/30 border-y border-border">
          <div className="container text-center max-w-5xl">
            <h2 className="text-3xl font-heading font-bold mb-12">Corporate Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Integrity", desc: "We operate with full transparency and adhere to the highest professional standards." },
                { title: "Innovation", desc: "We constantly adapt our strategies to leverage the latest digital trends." },
                { title: "Results", desc: "We are data-driven and focused on delivering measurable ROI for our clients." }
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
            Work With Us
          </h2>
          <Link href="/contact">
            <Button size="lg" className="font-heading font-semibold px-10 py-6 bg-primary text-primary-foreground hover:bg-primary/90">
              Get in Touch
            </Button>
          </Link>
        </section>
      </div>
    </Layout>
  );
}
