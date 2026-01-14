import Layout from "@/components/Layout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Bot, BrainCircuit, CheckCircle2, MessageSquareCode, Sparkles, TrendingUp, Video, Zap } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section - Creative & Fluid */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center bg-background overflow-hidden pt-20 pb-20">
        {/* Organic Background Shapes */}
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-primary/5 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-purple-500/5 rounded-full blur-[100px] animate-pulse delay-1000" />
        
        <div className="container relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white border border-border/50 shadow-sm text-primary text-sm font-semibold mb-8 animate-in fade-in slide-in-from-bottom-5 duration-700 hover:scale-105 transition-transform cursor-default">
              <Sparkles className="w-4 h-4" />
              <span>Next-Gen AI Marketing Infrastructure</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-heading font-bold tracking-tight mb-8 text-foreground leading-[1.1] animate-in fade-in slide-in-from-bottom-5 duration-700 delay-100">
              AI-Powered Growth for <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
                Elite Real Estate Agents
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-5 duration-700 delay-200">
              We leverage generative AI video, autonomous lead capturing bots, and predictive algorithms to find premium buyers before your competitors do.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-5 duration-700 delay-300">
              <Link href="/contact">
                <Button size="lg" className="rounded-full font-heading font-semibold text-base px-10 h-14 bg-primary text-primary-foreground hover:bg-primary/90 shadow-xl shadow-primary/20 transition-all hover:scale-105">
                  Start AI Transformation
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" size="lg" className="rounded-full font-heading font-semibold text-base px-10 h-14 bg-white/50 backdrop-blur-sm hover:bg-white border-border shadow-sm transition-all hover:scale-105">
                  View Pricing Plans
                </Button>
              </Link>
            </div>
          </div>

          {/* Bento Grid Hero Visuals */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 max-w-6xl mx-auto animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-500">
            {/* Main Dashboard Card */}
            <div className="md:col-span-8 relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-[2rem] blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
              <div className="relative h-full bg-white rounded-[1.5rem] border border-border/50 shadow-2xl overflow-hidden">
                <img 
                  src="/images/social-media-dashboard.jpg" 
                  alt="AI Dashboard" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Floating UI Card */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-white/50 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-green-100 text-green-600 rounded-xl">
                        <TrendingUp className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-foreground">Campaign Performance</div>
                        <div className="text-xs text-muted-foreground">+124% Lead Volume vs. Last Month</div>
                      </div>
                    </div>
                    <div className="text-green-600 font-bold text-lg">+124%</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Side Cards Stack */}
            <div className="md:col-span-4 flex flex-col gap-6">
              {/* AI Video Card */}
              <div className="flex-1 bg-white rounded-[1.5rem] border border-border/50 shadow-xl p-6 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Video className="w-24 h-24 text-purple-600" />
                </div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mb-4">
                    <Video className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">AI Video Gen</h3>
                  <p className="text-sm text-muted-foreground">Turning photos into 4K tours instantly.</p>
                  <div className="mt-4 h-1.5 w-full bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-purple-600 w-[85%] animate-pulse" />
                  </div>
                  <div className="text-[10px] text-muted-foreground mt-1 text-right">Rendering...</div>
                </div>
              </div>

              {/* Chatbot Card */}
              <div className="flex-1 bg-primary text-primary-foreground rounded-[1.5rem] shadow-xl p-6 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/10 rounded-full blur-xl" />
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                      <Bot className="w-6 h-6 text-white" />
                    </div>
                    <div className="px-3 py-1 bg-green-500/20 text-green-300 text-xs font-bold rounded-full border border-green-500/30">
                      Online
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">24/7 Agent</h3>
                  <div className="bg-white/10 backdrop-blur-sm p-3 rounded-xl text-sm border border-white/10">
                    "I found a buyer for your Mid-Levels listing!"
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Bento Grid */}
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

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "AI Video Tours",
                desc: "We turn static property photos into cinematic video tours using generative AI. No expensive film crews needed.",
                icon: Video,
                color: "text-purple-600",
                bg: "bg-purple-50",
                colSpan: "md:col-span-2"
              },
              {
                title: "Predictive Targeting",
                desc: "Our algorithms analyze thousands of data points to identify 'Likely to Buy' signals.",
                icon: BrainCircuit,
                color: "text-indigo-600",
                bg: "bg-indigo-50",
                colSpan: "md:col-span-1"
              },
              {
                title: "Autonomous Lead Capture",
                desc: "Our AI chatbots engage every inquiry instantly, 24/7. They ask qualifying questions, filter out window shoppers, and book appointments directly into your calendar.",
                icon: MessageSquareCode,
                color: "text-blue-600",
                bg: "bg-blue-50",
                colSpan: "md:col-span-3"
              }
            ].map((item, i) => (
              <Card key={i} className={`${item.colSpan} bg-white border-none shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group rounded-[2rem] overflow-hidden`}>
                <CardHeader className="h-full flex flex-col justify-between p-8">
                  <div>
                    <div className={`w-14 h-14 ${item.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                      <item.icon className={`w-7 h-7 ${item.color}`} />
                    </div>
                    <CardTitle className="text-2xl font-heading mb-4">{item.title}</CardTitle>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="mt-8 flex items-center text-primary font-semibold group-hover:translate-x-2 transition-transform">
                    Learn more <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology - Creative Split */}
      <section className="py-32 bg-background overflow-hidden">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8 text-foreground leading-tight">
                The "AI-First" <br /> Advantage
              </h2>
              <p className="text-xl text-muted-foreground mb-12">
                While other agents are manually writing emails and editing photos, our AI infrastructure is working for you at infinite scale.
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    title: "Generative Content Engine",
                    content: "Our AI generates weeks' worth of social posts, market analysis, and property descriptions in minutes."
                  },
                  {
                    title: "24/7 Lead Qualification",
                    content: "Stop chasing ghosts. Our AI assistants chat with leads in real-time, verifying their budget and timeline."
                  },
                  {
                    title: "Algorithmic Optimization",
                    content: "Our ad campaigns self-optimize daily, reallocating budget to the best-performing creatives."
                  }
                ].map((item, i) => (
                  <div key={i} className="bg-secondary/30 p-6 rounded-2xl hover:bg-secondary/50 transition-colors cursor-default">
                    <h3 className="text-xl font-heading font-bold mb-2 text-foreground">{item.title}</h3>
                    <p className="text-muted-foreground">{item.content}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="order-1 lg:order-2 relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-purple-500/20 rounded-[3rem] rotate-6 scale-95 blur-2xl" />
              <div className="relative bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-border/50 p-4">
                <img src="/images/social-growth-plant.jpg" alt="AI Growth" className="rounded-[2rem] w-full h-[600px] object-cover" />
                
                {/* Floating Stats Cards */}
                <div className="absolute top-12 right-12 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg animate-bounce duration-[3000ms]">
                  <div className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                    <span className="font-bold">AI Active</span>
                  </div>
                </div>
                
                <div className="absolute bottom-12 left-12 bg-primary text-primary-foreground p-6 rounded-2xl shadow-xl max-w-[200px]">
                  <div className="text-3xl font-bold mb-1">40%</div>
                  <div className="text-sm opacity-90">Reduction in Cost Per Lead (CPA)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Rounded & Soft */}
      <section className="py-32 container">
        <div className="bg-primary rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl">
          {/* Background Patterns */}
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')] opacity-10" />
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-heading font-bold mb-8 text-white leading-tight">
              Ready to Automate Your Success?
            </h2>
            <p className="text-xl text-white/90 mb-12 leading-relaxed">
              Join the top 1% of agents using AI to dominate the Hong Kong market. Scale your business without scaling your workload.
            </p>
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="rounded-full font-heading font-bold text-primary h-16 px-12 text-lg shadow-xl hover:bg-white hover:scale-105 transition-all">
                Book AI Strategy Session
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
