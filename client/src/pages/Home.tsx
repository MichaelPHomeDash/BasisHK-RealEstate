import Layout from "@/components/Layout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BarChart3, CheckCircle2, Target, TrendingUp, Users, XCircle } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section - Professional & Authoritative */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center bg-background overflow-hidden pt-20">
        {/* Subtle Professional Background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />
        
        <div className="container text-center max-w-5xl relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary border border-border text-primary text-sm font-semibold mb-8 animate-in fade-in slide-in-from-bottom-5 duration-700">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Accepting New Agency Partners for Q1 2026
          </div>
          
          <h1 className="text-5xl md:text-7xl font-heading font-bold tracking-tight mb-8 text-foreground leading-[1.1] animate-in fade-in slide-in-from-bottom-5 duration-700 delay-100">
            Systematic Growth for <br />
            <span className="text-primary">
              Elite Real Estate Agents
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-5 duration-700 delay-200">
            We engineer high-performance marketing infrastructures that solve the core challenges of lead acquisition and conversion in the Hong Kong property market.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-5 duration-700 delay-300">
            <Link href="/contact">
              <Button size="lg" className="font-heading font-semibold text-base px-10 h-14 bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20 rounded-md transition-all hover:translate-y-[-2px]">
                Schedule Strategy Session
              </Button>
            </Link>
            <Link href="/services">
              <Button variant="outline" size="lg" className="font-heading font-semibold text-base px-10 h-14 bg-background hover:bg-secondary border-border shadow-sm rounded-md transition-all hover:translate-y-[-2px]">
                Explore Solutions
              </Button>
            </Link>
          </div>

          {/* Dashboard Preview with Floating Elements */}
          <div className="mt-20 relative mx-auto max-w-5xl animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-500">
            <div className="absolute -inset-1 bg-gradient-to-b from-primary/20 to-transparent rounded-xl blur-lg opacity-50" />
            <img 
              src="/images/social-media-dashboard.jpg" 
              alt="Dashboard Preview" 
              className="relative rounded-lg shadow-2xl border border-border w-full object-cover aspect-[16/9]"
            />
            
            {/* Floating Glassmorphism Card 1: ROI */}
            <div className="absolute -top-6 -right-6 md:right-12 bg-white/90 backdrop-blur-md border border-white/20 p-4 rounded-lg shadow-xl animate-in fade-in zoom-in duration-700 delay-700">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-100 text-green-700 rounded-md">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground font-medium uppercase tracking-wide">Campaign ROI</div>
                  <div className="text-xl font-bold text-foreground">+340%</div>
                </div>
              </div>
            </div>

            {/* Floating Glassmorphism Card 2: New Lead */}
            <div className="absolute -bottom-6 -left-6 md:left-12 bg-white/90 backdrop-blur-md border border-white/20 p-4 rounded-lg shadow-xl animate-in fade-in zoom-in duration-700 delay-1000">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                    JL
                  </div>
                  <div className="absolute -bottom-1 -right-1 h-4 w-4 bg-green-500 border-2 border-white rounded-full" />
                </div>
                <div>
                  <div className="text-sm font-bold text-foreground">New Lead: James Lee</div>
                  <div className="text-xs text-muted-foreground">Budget: HK$25M • Mid-Levels</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Clean Professional Grid */}
      <section className="py-20 bg-white border-y border-border">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-px bg-border overflow-hidden rounded-lg border border-border">
            {[
              { label: "Average ROI", value: "340%", desc: "Across all client campaigns in Q4 2025" },
              { label: "Leads Generated", value: "15k+", desc: "High-intent buyer inquiries processed" },
              { label: "Agent Partners", value: "120+", desc: "Trusting us with their digital growth" }
            ].map((stat, i) => (
              <div key={i} className="text-center p-10 bg-background hover:bg-secondary/30 transition-colors">
                <div className="text-5xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="font-bold text-foreground text-lg mb-1">{stat.label}</div>
                <div className="text-muted-foreground text-sm">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pain Points - Structured Grid */}
      <section className="py-24 bg-secondary/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-foreground">
              The Market Has Shifted. <br />
              <span className="text-muted-foreground">Traditional Methods Are Failing.</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The Hong Kong real estate landscape is saturated. Relying solely on property portals and cold calling results in diminishing returns.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                problem: "Portal Saturation",
                desc: "Listing platforms are overcrowded. Your premium listings are buried under thousands of duplicates, forcing a race to the bottom on price.",
                solution: "Direct-to-Consumer Channels",
                icon: XCircle
              },
              {
                problem: "Low Lead Quality",
                desc: "Generic inquiries from window shoppers waste your valuable time. The lack of pre-qualification means hours lost on dead ends.",
                solution: "Algorithmic Pre-Qualification",
                icon: XCircle
              },
              {
                problem: "Commoditization",
                desc: "Without a distinct brand, you are just another agent. Clients choose based on commission rates rather than value and expertise.",
                solution: "Authority Positioning",
                icon: XCircle
              }
            ].map((item, i) => (
              <Card key={i} className="bg-white border border-border shadow-sm hover:shadow-md transition-all duration-300 group rounded-lg">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-red-50 rounded-md group-hover:bg-red-100 transition-colors">
                      <item.icon className="w-6 h-6 text-red-600" />
                    </div>
                    <h3 className="font-bold text-lg text-foreground">The Challenge</h3>
                  </div>
                  <CardTitle className="text-xl font-heading mb-3">{item.problem}</CardTitle>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="p-4 bg-primary/5 rounded-md border border-primary/10 group-hover:bg-primary/10 transition-colors">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span className="font-bold text-primary text-sm uppercase tracking-wide">The Solution</span>
                    </div>
                    <p className="text-foreground font-medium">
                      {item.solution}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology - Split Layout with Floating Elements */}
      <section className="py-24 bg-background overflow-hidden">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8 text-foreground">
                Our Proprietary Methodology
              </h2>
              <p className="text-lg text-muted-foreground mb-10">
                We don't offer generic "social media management." We deploy a proprietary three-stage framework designed to capture, convert, and close.
              </p>
              
              <Accordion type="single" collapsible className="w-full space-y-4" defaultValue="item-1">
                {[
                  {
                    id: "item-1",
                    title: "1. Precision Acquisition",
                    content: "We bypass the noise of portals by targeting high-net-worth individuals directly on their preferred platforms. Using lookalike audiences and behavioral data, we place your listings in front of buyers who are actively searching but haven't contacted an agent yet."
                  },
                  {
                    id: "item-2",
                    title: "2. Automated Nurturing",
                    content: "Speed to lead is critical. Our systems automatically engage new inquiries via WhatsApp and email within seconds. We deliver value-driven content—market reports, area guides—that builds trust before you even pick up the phone."
                  },
                  {
                    id: "item-3",
                    title: "3. Brand Ecosystem",
                    content: "We transform your digital presence into a 24/7 sales asset. By consistently publishing high-quality, educational content, we position you as the 'go-to' expert in your specific territory, making client acquisition inbound rather than outbound."
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
                  <img src="/images/social-growth-plant.jpg" alt="Growth" className="rounded-lg shadow-lg w-full h-80 object-cover translate-y-12" />
                  {/* Floating Element: Growth Graph */}
                  <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-lg shadow-lg border border-border w-32">
                    <div className="h-12 flex items-end gap-1 justify-between">
                      <div className="w-2 bg-primary/20 h-4 rounded-sm" />
                      <div className="w-2 bg-primary/40 h-6 rounded-sm" />
                      <div className="w-2 bg-primary/60 h-8 rounded-sm" />
                      <div className="w-2 bg-primary/80 h-10 rounded-sm" />
                      <div className="w-2 bg-primary h-12 rounded-sm" />
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <img src="/images/agent-meeting-warm.jpg" alt="Meeting" className="rounded-lg shadow-lg w-full h-80 object-cover" />
                  {/* Floating Element: Success Badge */}
                  <div className="absolute -top-4 -left-4 bg-white p-3 rounded-lg shadow-lg border border-border flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span className="text-xs font-bold">Deal Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Solid Professional Blue */}
      <section className="py-32 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
        <div className="container text-center max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8 leading-tight">
            Stop Competing. Start Dominating.
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            The market belongs to those who control the attention. Let us build the infrastructure you need to scale your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="font-heading font-bold text-primary h-16 px-12 rounded-md text-lg shadow-xl hover:bg-white transition-colors">
                Book Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
