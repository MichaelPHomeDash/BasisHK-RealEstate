import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BarChart3, Bot, BrainCircuit, Check, Globe, Sparkles, Target, TrendingUp, Video, Zap } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section - Ultra Compact */}
      <section className="relative pt-16 pb-12 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-[80px] -z-10" />
        
        <div className="container text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-border/50 shadow-sm text-primary text-[10px] font-bold uppercase tracking-wider mb-4 animate-in fade-in slide-in-from-bottom-5 duration-700">
            <Sparkles className="w-3 h-3" />
            <span>Next-Gen Intelligent Marketing Infrastructure</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4 text-foreground leading-tight tracking-tight">
            AUTOMATED GROWTH <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
              FOR ELITE REAL ESTATE AGENTS
            </span>
          </h1>
          
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6 max-w-2xl mx-auto">
            We leverage generative video, autonomous lead capturing agents, and predictive algorithms to find premium buyers before your competitors do.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/services">
              <Button size="lg" className="rounded-full px-8 h-10 text-sm font-bold shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all hover:-translate-y-0.5">
                Explore Infrastructure
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="rounded-full px-8 h-10 text-sm font-bold bg-white hover:bg-secondary/50 border-border/50">
                Book Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Floating UI Showcase - Compact */}
      <section className="pb-16 container">
        <div className="relative max-w-4xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/50 bg-white aspect-[16/9] group">
            <img 
              src="/images/hero-city-night.jpg" 
              alt="Hong Kong Real Estate Analytics" 
              className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            
            {/* Floating Glass Cards - Compact */}
            <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md p-3 rounded-xl shadow-lg border border-white/20 animate-in fade-in slide-in-from-right-10 duration-1000 delay-300 max-w-[180px]">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-3 h-3 text-green-600" />
                </div>
                <span className="text-xs font-bold text-foreground">Campaign ROI</span>
              </div>
              <div className="text-xl font-bold text-foreground">+312%</div>
              <div className="text-[10px] text-muted-foreground">vs. industry avg.</div>
            </div>

            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md p-3 rounded-xl shadow-lg border border-white/20 animate-in fade-in slide-in-from-left-10 duration-1000 delay-500 flex items-center gap-3 max-w-[220px]">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                <Bot className="w-4 h-4 text-blue-600" />
              </div>
              <div>
                <div className="text-xs font-bold text-foreground">New Lead Qualified</div>
                <div className="text-[10px] text-muted-foreground">Budget: HK$25M • Mid-Levels</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Pillars - Compact Bento Grid */}
      <section className="py-12 bg-secondary/30">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-3 text-foreground">
              The Intelligent Advantage
            </h2>
            <p className="text-sm text-muted-foreground">
              Traditional marketing is manual and reactive. Our infrastructure is automated and predictive.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
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
              <Card key={i} className="bg-white border-none shadow-sm hover:shadow-md transition-all duration-300 rounded-xl overflow-hidden group">
                <CardHeader className="p-5 pb-2">
                  <div className={`w-10 h-10 ${feature.bg} rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                    <feature.icon className={`w-5 h-5 ${feature.color}`} />
                  </div>
                  <CardTitle className="text-lg font-heading font-bold">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-5 pt-0">
                  <CardDescription className="text-xs leading-relaxed text-muted-foreground">
                    {feature.desc}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pain Points vs Solution - Compact Comparison */}
      <section className="py-12 container">
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-center">
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-heading font-bold leading-tight">
              Stop Relying on <br />
              <span className="text-muted-foreground line-through decoration-destructive/50">Outdated Methods</span>
            </h2>
            <div className="space-y-3">
              {[
                "Portal saturation means your listings get buried.",
                "Manual follow-ups are too slow for modern buyers.",
                "Generic ads waste budget on unqualified clicks."
              ].map((point, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-secondary/20 border border-border/50">
                  <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-red-600 font-bold text-xs">✕</span>
                  </div>
                  <p className="text-sm text-muted-foreground font-medium">{point}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-2xl blur-3xl -z-10" />
            <Card className="bg-white border-none shadow-xl rounded-2xl overflow-hidden">
              <CardHeader className="p-6 border-b border-border/50 bg-primary/5">
                <CardTitle className="text-lg font-bold text-primary flex items-center gap-2">
                  <Zap className="w-4 h-4 fill-primary" />
                  The PropelHK Solution
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                {[
                  { title: "Dominance", desc: "Own the feed with high-frequency video content." },
                  { title: "Speed", desc: "Respond in seconds, not hours, with automation." },
                  { title: "Precision", desc: "Target only the top 1% of qualified buyers." }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-foreground">{item.title}</div>
                      <div className="text-xs text-muted-foreground">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section - Ultra Compact */}
      <section className="py-10 container">
        <div className="bg-primary rounded-2xl p-6 md:p-8 text-center relative overflow-hidden shadow-lg max-w-4xl mx-auto">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')] opacity-10" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-left">
              <h2 className="text-lg md:text-xl font-heading font-bold mb-1 text-white">
                Ready to Modernize?
              </h2>
              <p className="text-xs text-white/90">
                Join the top 1% of agents using intelligent infrastructure.
              </p>
            </div>
            <Link href="/contact">
              <span className="inline-flex items-center justify-center rounded-full font-heading font-bold text-primary bg-white h-9 px-6 text-xs shadow-md hover:bg-white/90 hover:scale-105 transition-all whitespace-nowrap cursor-pointer">
                Start Now
              </span>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
