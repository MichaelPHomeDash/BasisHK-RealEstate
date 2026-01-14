import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BarChart3, Target, Zap } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-city-night.jpg" 
            alt="Hong Kong Skyline Night" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        <div className="container relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold tracking-tighter mb-6 animate-in fade-in slide-in-from-bottom-10 duration-1000">
            DOMINATE THE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500 animate-pulse">DIGITAL SKYLINE</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-200">
            The Hong Kong property market never sleeps. Neither should your lead generation. 
            We architect digital dominance for the city's elite agents.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
            <Link href="/contact">
              <Button size="lg" className="font-heading font-bold uppercase tracking-widest text-lg px-8 py-6 rounded-none border-2 border-primary bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_40px_rgba(6,182,212,0.6)]">
                Unlock Access
              </Button>
            </Link>
            <Link href="/services">
              <Button variant="outline" size="lg" className="font-heading font-bold uppercase tracking-widest text-lg px-8 py-6 rounded-none border-2 hover:bg-foreground hover:text-background transition-all duration-300">
                View Case Studies
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-24 bg-background relative">
        <div className="container grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <div className="relative aspect-square md:aspect-[4/3] overflow-hidden border border-border/50 group">
              <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 group-hover:bg-transparent transition-all duration-500" />
              <img 
                src="/images/mobile-marketing.jpg" 
                alt="Mobile Marketing" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
              />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-foreground">
              THE OLD METHODS <br />
              <span className="text-destructive">ARE DEAD.</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Cold calls fade into the noise. Flyers end up in the trash. In a city of 7.4 million connected souls, traditional marketing is a ghost town.
            </p>
            <p className="text-lg text-foreground font-medium mb-8 border-l-4 border-primary pl-4">
              You're competing in the dark while your buyers are scrolling in the light.
            </p>
            <ul className="space-y-4">
              {["Low conversion rates", "Wasted ad spend", "Invisible brand presence"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-muted-foreground">
                  <div className="h-px w-8 bg-destructive" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* The Solution Section */}
      <section className="py-24 bg-card border-y border-border/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              ILLUMINATE YOUR <span className="text-primary">MARKET</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              We don't just "post." We deploy precision-engineered social media campaigns that cut through the static.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Precision Targeting",
                desc: "Stop casting nets. Start using laser sights. We target buyers by behavior, net worth, and intent.",
                color: "text-primary"
              },
              {
                icon: Zap,
                title: "Cinematic Authority",
                desc: "Your brand, elevated. Content that looks as expensive as the properties you sell.",
                color: "text-purple-500"
              },
              {
                icon: BarChart3,
                title: "Automated Velocity",
                desc: "Leads captured, qualified, and delivered while you sleep. Speed is the new currency.",
                color: "text-pink-500"
              }
            ].map((feature, i) => (
              <Card key={i} className="bg-background/50 border-border/50 hover:border-primary/50 transition-all duration-300 group hover:-translate-y-2">
                <CardHeader>
                  <feature.icon className={`w-12 h-12 ${feature.color} mb-4 group-hover:scale-110 transition-transform duration-300`} />
                  <CardTitle className="font-heading text-2xl uppercase tracking-wide">{feature.title}</CardTitle>
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

      {/* Visual Showcase */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/social-media-dashboard.jpg" 
            alt="Analytics Dashboard" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
        </div>
        
        <div className="container relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-8">
            DATA IS THE <br /> NEW <span className="text-primary">OIL</span>
          </h2>
          <Link href="/services">
            <Button size="lg" className="font-heading font-bold uppercase tracking-widest rounded-none border border-primary bg-transparent hover:bg-primary hover:text-primary-foreground">
              Explore Our Tech <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
