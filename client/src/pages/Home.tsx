import Layout from "@/components/Layout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Bot, BrainCircuit, CheckCircle2, MessageSquareCode, Sparkles, TrendingUp, Video, Zap } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section - AI-First Positioning */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center bg-background overflow-hidden pt-20">
        {/* Tech Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03]" />
        
        <div className="container text-center max-w-5xl relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary border border-border text-primary text-sm font-semibold mb-8 animate-in fade-in slide-in-from-bottom-5 duration-700">
            <Sparkles className="w-4 h-4" />
            <span>Next-Gen AI Marketing Infrastructure</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-heading font-bold tracking-tight mb-8 text-foreground leading-[1.1] animate-in fade-in slide-in-from-bottom-5 duration-700 delay-100">
            AI-Powered Growth for <br />
            <span className="text-primary">
              Elite Real Estate Agents
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-5 duration-700 delay-200">
            We leverage generative AI video, autonomous lead capturing bots, and predictive algorithms to find premium buyers before your competitors do.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-5 duration-700 delay-300">
            <Link href="/contact">
              <Button size="lg" className="font-heading font-semibold text-base px-10 h-14 bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20 rounded-md transition-all hover:translate-y-[-2px]">
                Start AI Transformation
              </Button>
            </Link>
            <Link href="/services">
              <Button variant="outline" size="lg" className="font-heading font-semibold text-base px-10 h-14 bg-background hover:bg-secondary border-border shadow-sm rounded-md transition-all hover:translate-y-[-2px]">
                View Pricing Plans
              </Button>
            </Link>
          </div>

          {/* Dashboard Preview with AI Elements */}
          <div className="mt-20 relative mx-auto max-w-5xl animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-500">
            <div className="absolute -inset-1 bg-gradient-to-b from-primary/20 to-transparent rounded-xl blur-lg opacity-50" />
            <img 
              src="/images/social-media-dashboard.jpg" 
              alt="AI Dashboard Preview" 
              className="relative rounded-lg shadow-2xl border border-border w-full object-cover aspect-[16/9]"
            />
            
            {/* Floating Element: AI Video Generation */}
            <div className="absolute -top-6 -right-6 md:right-12 bg-white/95 backdrop-blur-md border border-white/20 p-4 rounded-lg shadow-xl animate-in fade-in zoom-in duration-700 delay-700 max-w-[200px]">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-1.5 bg-purple-100 text-purple-700 rounded-md">
                  <Video className="w-4 h-4" />
                </div>
                <div className="text-xs font-bold text-foreground">AI Video Generated</div>
              </div>
              <div className="h-1.5 w-full bg-secondary rounded-full overflow-hidden">
                <div className="h-full bg-purple-600 w-[85%] animate-pulse" />
              </div>
              <div className="text-[10px] text-muted-foreground mt-1 text-right">Rendering 4K Tour...</div>
            </div>

            {/* Floating Element: AI Lead Chat */}
            <div className="absolute -bottom-6 -left-6 md:left-12 bg-white/95 backdrop-blur-md border border-white/20 p-4 rounded-lg shadow-xl animate-in fade-in zoom-in duration-700 delay-1000 max-w-[260px]">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-primary/10 rounded-full">
                  <Bot className="w-5 h-5 text-primary" />
                </div>
                <div className="space-y-2">
                  <div className="bg-secondary/50 p-2 rounded-lg rounded-tl-none text-xs text-foreground">
                    "I see you're looking for a 3-bed in Mid-Levels. Is your budget above HK$20M?"
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-[10px] font-bold text-green-600 uppercase">Lead Qualified</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Features Grid */}
      <section className="py-24 bg-secondary/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-foreground">
              Outsmart the Market with <br />
              <span className="text-primary">Artificial Intelligence</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Traditional marketing is manual and slow. We deploy autonomous AI agents to create content, engage leads, and optimize campaigns 24/7.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "AI Video Tours",
                desc: "We turn static property photos into cinematic video tours using generative AI. No expensive film crews needed—just stunning, viral-ready video content produced in minutes.",
                icon: Video,
                color: "text-purple-600",
                bg: "bg-purple-50"
              },
              {
                title: "Autonomous Lead Capture",
                desc: "Our AI chatbots engage every inquiry instantly, 24/7. They ask qualifying questions, filter out window shoppers, and book appointments directly into your calendar.",
                icon: MessageSquareCode,
                color: "text-blue-600",
                bg: "bg-blue-50"
              },
              {
                title: "Predictive Targeting",
                desc: "Our algorithms analyze thousands of data points to identify 'Likely to Buy' signals, putting your ads in front of high-net-worth individuals before they even search.",
                icon: BrainCircuit,
                color: "text-indigo-600",
                bg: "bg-indigo-50"
              }
            ].map((item, i) => (
              <Card key={i} className="bg-white border border-border shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group rounded-lg">
                <CardHeader>
                  <div className={`w-12 h-12 ${item.bg} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <item.icon className={`w-6 h-6 ${item.color}`} />
                  </div>
                  <CardTitle className="text-xl font-heading mb-3">{item.title}</CardTitle>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology - AI Workflow */}
      <section className="py-24 bg-background overflow-hidden">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8 text-foreground">
                The "AI-First" Advantage
              </h2>
              <p className="text-lg text-muted-foreground mb-10">
                While other agents are manually writing emails and editing photos, our AI infrastructure is working for you at infinite scale.
              </p>
              
              <Accordion type="single" collapsible className="w-full space-y-4" defaultValue="item-1">
                {[
                  {
                    id: "item-1",
                    title: "1. Generative Content Engine",
                    content: "Our AI generates weeks' worth of social posts, market analysis, and property descriptions in minutes. It ensures your brand is always active, always relevant, and always visible."
                  },
                  {
                    id: "item-2",
                    title: "2. 24/7 Lead Qualification",
                    content: "Stop chasing ghosts. Our AI assistants chat with leads in real-time, verifying their budget, timeline, and preferences. You only speak to prospects who are ready to sign."
                  },
                  {
                    id: "item-3",
                    title: "3. Algorithmic Optimization",
                    content: "Our ad campaigns self-optimize daily. The AI reallocates budget to the best-performing creatives and audiences, lowering your cost per lead while increasing quality."
                  }
                ].map((item) => (
                  <AccordionItem key={item.id} value={item.id} className="border border-border rounded-lg px-6 bg-white shadow-sm data-[state=open]:border-primary transition-colors">
                    <AccordionTrigger className="text-lg font-heading font-semibold py-6 hover:no-underline hover:text-primary">
                      {item.title}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed text-base pb-6">
                      {item.content}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/5 rounded-full blur-3xl opacity-50" />
              <div className="grid grid-cols-2 gap-6 relative z-10">
                <div className="relative">
                  <img src="/images/social-growth-plant.jpg" alt="AI Growth" className="rounded-lg shadow-lg w-full h-80 object-cover translate-y-12" />
                  {/* Floating Element: AI Processing */}
                  <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-lg shadow-lg border border-border w-40">
                    <div className="flex items-center gap-2 mb-2">
                      <Zap className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      <span className="text-xs font-bold">AI Optimization</span>
                    </div>
                    <div className="text-xs text-muted-foreground">Reducing CPA by 40%...</div>
                  </div>
                </div>
                <div className="relative">
                  <img src="/images/agent-meeting-warm.jpg" alt="Meeting" className="rounded-lg shadow-lg w-full h-80 object-cover" />
                  {/* Floating Element: Success Badge */}
                  <div className="absolute -top-4 -left-4 bg-white p-3 rounded-lg shadow-lg border border-border flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span className="text-xs font-bold">Lead Converted</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
        <div className="container text-center max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8 leading-tight">
            Ready to Automate Your Success?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join the top 1% of agents using AI to dominate the Hong Kong market. Scale your business without scaling your workload.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="font-heading font-bold text-primary h-16 px-12 rounded-md text-lg shadow-xl hover:bg-white transition-colors">
                Book AI Strategy Session
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
