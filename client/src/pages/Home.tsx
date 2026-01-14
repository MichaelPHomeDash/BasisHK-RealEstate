import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BarChart3, Target, Users } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-background">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-daylight-hk.jpg" 
            alt="Hong Kong Skyline Day" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white/60 mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent" />
        </div>

        <div className="container relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tight mb-6 text-foreground animate-in fade-in slide-in-from-bottom-10 duration-1000">
              Data-Driven Marketing for <br />
              <span className="text-primary">Hong Kong Real Estate</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-200">
              We help individual agents identify high-intent buyers and build scalable lead generation systems using advanced social media strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
              <Link href="/contact">
                <Button size="lg" className="font-heading font-semibold text-base px-8 py-6 bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm">
                  Get Started
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" size="lg" className="font-heading font-semibold text-base px-8 py-6 bg-white/80 backdrop-blur-sm hover:bg-white">
                  View Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics / Problem Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { label: "Active Users in HK", value: "5.8M+", desc: "Social media penetration" },
              { label: "Avg. Daily Usage", value: "2h 30m", desc: "Time spent on platforms" },
              { label: "Lead Conversion", value: "3x", desc: "Higher than traditional ads" }
            ].map((stat, i) => (
              <div key={i} className="bg-card p-8 rounded-lg border border-border shadow-sm text-center">
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="font-semibold text-foreground mb-1">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.desc}</div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-foreground">
                Precision Targeting in a Crowded Market
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Traditional marketing methods are becoming less effective and more expensive. To succeed in today's market, agents need to leverage data to reach the right audience at the right time.
              </p>
              <ul className="space-y-4">
                {[
                  "Identify high-net-worth individuals",
                  "Target specific property interests",
                  "Retarget engaged prospects automatically"
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-foreground">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg border border-border">
              <img 
                src="/images/social-growth-plant.jpg" 
                alt="Growth Analytics" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Comprehensive Marketing Solutions
            </h2>
            <p className="text-lg text-muted-foreground">
              End-to-end strategies designed to maximize ROI and minimize wasted ad spend.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Lead Generation",
                desc: "Algorithmic campaigns on Facebook and Instagram designed to capture high-intent buyer leads."
              },
              {
                icon: Users,
                title: "Personal Branding",
                desc: "Position yourself as a market authority with professionally curated content and thought leadership."
              },
              {
                icon: BarChart3,
                title: "Performance Analytics",
                desc: "Real-time dashboards and reporting to track campaign performance and optimize results."
              }
            ].map((feature, i) => (
              <Card key={i} className="bg-card border border-border shadow-sm hover:shadow-md transition-all duration-200">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="font-heading text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-secondary/30 border-t border-border">
        <div className="container text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-foreground">
            Ready to Scale Your Business?
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Partner with PropelHK to implement a proven marketing system that delivers consistent results.
          </p>
          <Link href="/contact">
            <Button size="lg" className="font-heading font-semibold text-base px-10 py-6 bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm">
              Schedule Consultation <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
