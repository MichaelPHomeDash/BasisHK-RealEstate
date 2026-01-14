import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge, Bot, BrainCircuit, Check, Sparkles, Video, Zap } from "lucide-react";
import { Link } from "wouter";

export default function Services() {
  return (
    <Layout>
      {/* Hero Section - Soft & Welcoming */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />
        
        <div className="container text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white border border-border/50 shadow-sm text-primary text-sm font-semibold mb-8 animate-in fade-in slide-in-from-bottom-5 duration-700">
            <Sparkles className="w-4 h-4" />
            <span>AI-Powered Real Estate Marketing</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-8 text-foreground leading-tight">
            The Future of <br />
            <span className="text-primary">Lead Generation</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-12 max-w-2xl mx-auto">
            We combine advanced AI technology with deep real estate expertise to deliver a marketing infrastructure that works 24/7.
          </p>
        </div>
      </section>

      {/* AI Features Deep Dive - Bento Cards */}
      <section className="py-24 bg-secondary/30">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-24">
            {[
              {
                title: "AI Video Production",
                desc: "Turn standard listing photos into viral-ready video tours. Our AI adds motion, voiceovers, and music automatically.",
                features: ["4K Video Generation", "Multi-Language Voiceovers", "Auto-Scripting"],
                icon: Video,
                color: "text-purple-600",
                bg: "bg-purple-50"
              },
              {
                title: "Smart Lead Capture",
                desc: "Deploy AI chatbots that live on your ads and website. They qualify leads instantly, filtering out low-intent inquiries.",
                features: ["24/7 Instant Response", "Budget Qualification", "CRM Integration"],
                icon: Bot,
                color: "text-blue-600",
                bg: "bg-blue-50"
              },
              {
                title: "Predictive Analytics",
                desc: "Stop guessing. Our AI analyzes market data to predict which neighborhoods and demographics are ready to buy.",
                features: ["Audience Modeling", "Trend Forecasting", "Ad Spend Optimization"],
                icon: BrainCircuit,
                color: "text-indigo-600",
                bg: "bg-indigo-50"
              }
            ].map((service, i) => (
              <Card key={i} className="bg-white border-none shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 rounded-[2rem] overflow-hidden">
                <CardHeader className="p-8 pb-4">
                  <div className={`w-16 h-16 ${service.bg} rounded-2xl flex items-center justify-center mb-6`}>
                    <service.icon className={`w-8 h-8 ${service.color}`} />
                  </div>
                  <CardTitle className="text-2xl font-heading font-bold">{service.title}</CardTitle>
                  <CardDescription className="text-base mt-3 leading-relaxed">{service.desc}</CardDescription>
                </CardHeader>
                <CardContent className="p-8 pt-4">
                  <ul className="space-y-4">
                    {service.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-3 text-sm text-muted-foreground font-medium">
                        <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                          <Check className="w-3.5 h-3.5 text-green-600" />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pricing Plans - Creative Layout */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-foreground">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-muted-foreground">
              Choose the AI infrastructure that fits your growth stage. No hidden fees, just results.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
            {/* Starter Plan */}
            <Card className="bg-white border-none shadow-lg rounded-[2rem] p-2 flex flex-col h-full hover:scale-105 transition-transform duration-300">
              <div className="p-8 pb-0">
                <CardTitle className="text-2xl font-heading font-bold">Starter AI</CardTitle>
                <CardDescription className="mt-2">For individual agents starting their digital journey.</CardDescription>
                <div className="mt-6 mb-6">
                  <span className="text-4xl font-bold text-foreground">HK$8,000</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </div>
              <CardContent className="flex-1 p-8 pt-0">
                <ul className="space-y-4">
                  {[
                    "5 AI-Generated Video Tours",
                    "Basic Lead Capture Bot",
                    "Social Media Content (12 Posts)",
                    "Monthly Performance Report",
                    "Email Support"
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <Check className="w-5 h-5 text-primary shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="p-8 pt-0">
                <Button className="w-full rounded-xl h-12 font-semibold" variant="outline">Get Started</Button>
              </CardFooter>
            </Card>

            {/* Growth Plan (Highlighted) */}
            <Card className="bg-primary text-primary-foreground shadow-2xl rounded-[2.5rem] p-2 scale-110 z-10 relative flex flex-col h-full">
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-white text-primary px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                Most Popular
              </div>
              <div className="p-8 pb-0">
                <CardTitle className="text-3xl font-heading font-bold">Growth AI</CardTitle>
                <CardDescription className="text-primary-foreground/80 mt-2">For top producers scaling their volume.</CardDescription>
                <div className="mt-6 mb-6">
                  <span className="text-5xl font-bold">HK$15,000</span>
                  <span className="text-primary-foreground/80">/month</span>
                </div>
              </div>
              <CardContent className="flex-1 p-8 pt-0">
                <ul className="space-y-5">
                  {[
                    "Unlimited AI Video Tours",
                    "Advanced Chatbot (WhatsApp Integration)",
                    "Social Media Content (Daily Posts)",
                    "Predictive Ad Targeting",
                    "Weekly Strategy Calls",
                    "CRM Integration"
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-base font-medium">
                      <div className="p-1 bg-white/20 rounded-full shrink-0">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="p-8 pt-0">
                <Button className="w-full bg-white text-primary hover:bg-white/90 rounded-xl h-14 text-lg font-bold shadow-lg">Start Scaling</Button>
              </CardFooter>
            </Card>

            {/* Enterprise Plan */}
            <Card className="bg-white border-none shadow-lg rounded-[2rem] p-2 flex flex-col h-full hover:scale-105 transition-transform duration-300">
              <div className="p-8 pb-0">
                <CardTitle className="text-2xl font-heading font-bold">Agency AI</CardTitle>
                <CardDescription className="mt-2">For teams and boutique agencies.</CardDescription>
                <div className="mt-6 mb-6">
                  <span className="text-4xl font-bold text-foreground">Custom</span>
                </div>
              </div>
              <CardContent className="flex-1 p-8 pt-0">
                <ul className="space-y-4">
                  {[
                    "Custom AI Model Training",
                    "Full-Service Content Team",
                    "Dedicated Account Manager",
                    "Custom API Integrations",
                    "White-Label Reporting",
                    "Priority 24/7 Support"
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <Check className="w-5 h-5 text-primary shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="p-8 pt-0">
                <Button className="w-full rounded-xl h-12 font-semibold" variant="outline">Contact Sales</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background">
        <div className="container text-center">
          <div className="bg-secondary/30 rounded-[3rem] p-12 md:p-20">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Still have questions?</h2>
            <p className="text-muted-foreground mb-10 max-w-2xl mx-auto text-lg">
              Book a free 15-minute demo to see our AI tools in action. We'll show you exactly how we generate leads for agents in your area.
            </p>
            <Link href="/contact">
              <Button size="lg" className="px-10 h-14 rounded-full text-lg shadow-lg hover:scale-105 transition-transform">Book Demo</Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
