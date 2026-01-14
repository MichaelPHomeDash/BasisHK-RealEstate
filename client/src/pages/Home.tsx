import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BarChart3, Bot, BrainCircuit, Check, Globe, Sparkles, Target, TrendingUp, Video, Zap } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section - Creative Professional */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        {/* Mesh Gradient Background */}
        <div className="absolute inset-0 mesh-bg -z-20" />
        
        {/* Organic Orb Animations */}
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-secondary/30 rounded-full blur-[100px] animate-pulse -z-10" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-accent/20 rounded-full blur-[120px] -z-10" />
        
        <div className="container text-center max-w-4xl relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-white/40 shadow-sm text-primary text-[11px] font-bold uppercase tracking-widest mb-6 animate-in fade-in slide-in-from-bottom-5 duration-700">
            <Sparkles className="w-3 h-3 text-accent-foreground" />
            <span>Next-Gen Intelligent Marketing Infrastructure</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-heading font-medium mb-6 text-foreground leading-[1.1] tracking-tight">
            Automated Growth <br />
            <span className="italic font-light text-primary">
              for Elite Real Estate Agents
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto font-light">
            We leverage <span className="font-medium animate-shimmer">generative video</span>, <span className="font-medium animate-shimmer">autonomous agents</span>, and <span className="font-medium animate-shimmer">predictive algorithms</span> to find premium buyers before your competitors do.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/services">
              <Button size="lg" className="rounded-full px-10 h-12 text-base font-medium shadow-xl shadow-primary/10 hover:shadow-primary/20 transition-all hover:-translate-y-1 bg-primary text-white border-none">
                Explore Infrastructure
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="rounded-full px-10 h-12 text-base font-medium bg-white/50 backdrop-blur-sm hover:bg-white border-primary/10 text-primary">
                Book Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Floating UI Showcase - Creative Depth */}
      <section className="pb-20 container">
        <div className="relative max-w-5xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/50 bg-white aspect-[16/9] group">
            <img 
              src="/images/hero-city-night.jpg" 
              alt="Hong Kong Real Estate Analytics" 
              className="w-full h-full object-cover opacity-95 group-hover:scale-105 transition-transform duration-[1.5s] ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent mix-blend-multiply" />
            
            {/* Floating Glass Cards - 3D Effect */}
            <div className="absolute top-8 right-8 glass-card p-4 rounded-2xl animate-in fade-in slide-in-from-right-10 duration-1000 delay-300 max-w-[200px] hover:scale-105 transition-transform cursor-default">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-green-50 rounded-full flex items-center justify-center border border-green-100">
                  <TrendingUp className="w-4 h-4 text-green-600" />
                </div>
                <span className="text-xs font-bold text-foreground tracking-wide">Campaign ROI</span>
              </div>
              <div className="text-3xl font-heading font-medium text-foreground italic">+312%</div>
              <div className="text-[10px] text-muted-foreground uppercase tracking-wider font-medium mt-1">vs. industry avg.</div>
            </div>

            <div className="absolute bottom-8 left-8 glass-card p-4 rounded-2xl animate-in fade-in slide-in-from-left-10 duration-1000 delay-500 flex items-center gap-4 max-w-[260px] hover:scale-105 transition-transform cursor-default">
              <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center shrink-0 border border-blue-100">
                <Bot className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <div className="text-sm font-bold text-foreground">New Lead Qualified</div>
                <div className="text-[11px] text-muted-foreground mt-0.5">Budget: <span className="font-medium text-primary">HK$25M</span> • Mid-Levels</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Pillars - Editorial Grid */}
      <section className="py-20 bg-secondary/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03]" />
        <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-medium mb-4 text-foreground">
              The <span className="italic text-primary">Intelligent</span> Advantage
            </h2>
            <p className="text-base text-muted-foreground font-light max-w-xl mx-auto">
              Traditional marketing is manual and reactive. Our infrastructure is automated, predictive, and designed for the modern era.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: Video,
                title: "Generative Video",
                desc: "We turn static photos into cinematic video tours automatically, capturing 400% more engagement.",
                color: "text-purple-600",
                bg: "bg-purple-50"
              },
              {
                icon: Bot,
                title: "Autonomous Agents",
                desc: "Our chatbots engage leads instantly, 24/7, qualifying budget and intent before you wake up.",
                color: "text-blue-600",
                bg: "bg-blue-50"
              },
              {
                icon: Target,
                title: "Predictive Targeting",
                desc: "Algorithms analyze thousands of data points to identify high-net-worth buyers ready to transact.",
                color: "text-indigo-600",
                bg: "bg-indigo-50"
              }
            ].map((feature, i) => (
              <Card key={i} className="bg-white/80 backdrop-blur-sm border-white/50 shadow-sm hover:shadow-xl transition-all duration-500 rounded-2xl overflow-hidden group hover:-translate-y-1">
                <CardHeader className="p-8 pb-4">
                  <div className={`w-12 h-12 ${feature.bg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500`}>
                    <feature.icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <CardTitle className="text-xl font-heading font-medium">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-8 pt-0">
                  <CardDescription className="text-sm leading-relaxed text-muted-foreground font-light">
                    {feature.desc}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pain Points vs Solution - Editorial Comparison */}
      <section className="py-20 container">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-5xl font-heading font-medium leading-tight">
              Stop Relying on <br />
              <span className="text-muted-foreground line-through decoration-destructive/30 decoration-2 italic">Outdated Methods</span>
            </h2>
            <div className="space-y-4">
              {[
                "Portal saturation means your listings get buried.",
                "Manual follow-ups are too slow for modern buyers.",
                "Generic ads waste budget on unqualified clicks."
              ].map((point, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-secondary/10 border border-border/50 hover:bg-secondary/20 transition-colors">
                  <div className="w-6 h-6 rounded-full bg-red-50 flex items-center justify-center shrink-0 mt-0.5 border border-red-100">
                    <span className="text-red-600 font-bold text-xs">✕</span>
                  </div>
                  <p className="text-base text-muted-foreground font-light">{point}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative pl-4 md:pl-10">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-accent/20 rounded-[2rem] blur-3xl -z-10" />
            <Card className="bg-white/90 backdrop-blur border-white/60 shadow-2xl rounded-[2rem] overflow-hidden relative z-10">
              <CardHeader className="p-8 border-b border-border/30 bg-gradient-to-r from-primary/5 to-transparent">
                <CardTitle className="text-xl font-heading font-medium text-primary flex items-center gap-3">
                  <Zap className="w-5 h-5 fill-primary/20" />
                  The BasisHK Solution
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                {[
                  { title: "Dominance", desc: "Own the feed with high-frequency video content." },
                  { title: "Speed", desc: "Respond in seconds, not hours, with automation." },
                  { title: "Precision", desc: "Target only the top 1% of qualified buyers." }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors">
                      <Check className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-lg font-heading font-medium text-foreground">{item.title}</div>
                      <div className="text-sm text-muted-foreground font-light">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section - Creative Finish */}
      <section className="py-16 container">
        <div className="bg-primary rounded-[2rem] p-10 md:p-16 text-center relative overflow-hidden shadow-2xl max-w-5xl mx-auto group">
          {/* Animated Background */}
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')] opacity-5 group-hover:opacity-10 transition-opacity duration-700" />
          <div className="absolute -top-[50%] -right-[20%] w-[600px] h-[600px] bg-accent/10 rounded-full blur-[100px] group-hover:bg-accent/20 transition-colors duration-700" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-left max-w-xl">
              <h2 className="text-3xl md:text-4xl font-heading font-medium mb-2 text-white">
                Ready to <span className="italic text-accent">Modernize?</span>
              </h2>
              <p className="text-base text-white/80 font-light">
                Join the top 1% of agents using intelligent infrastructure to dominate the market.
              </p>
            </div>
            <Link href="/contact">
              <span className="inline-flex items-center justify-center rounded-full font-heading font-bold text-primary bg-white h-14 px-10 text-base shadow-lg hover:bg-accent hover:text-primary-foreground hover:scale-105 transition-all whitespace-nowrap cursor-pointer">
                Start Now
              </span>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
