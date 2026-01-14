import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge, Bot, BrainCircuit, Check, Sparkles, Video, Zap } from "lucide-react";
import { Link } from "wouter";

export default function Services() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-background border-b border-border">
        <div className="container text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary border border-border text-primary text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4" />
            <span>AI-Powered Real Estate Marketing</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 text-foreground">
            The Future of <br />
            <span className="text-primary">Lead Generation</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-10">
            We combine advanced AI technology with deep real estate expertise to deliver a marketing infrastructure that works 24/7.
          </p>
        </div>
      </section>

      {/* AI Features Deep Dive */}
      <section className="py-24 bg-secondary/30">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-20">
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
              <Card key={i} className="bg-white border border-border shadow-sm hover:shadow-md transition-all">
                <CardHeader>
                  <div className={`w-12 h-12 ${service.bg} rounded-lg flex items-center justify-center mb-4`}>
                    <service.icon className={`w-6 h-6 ${service.color}`} />
                  </div>
                  <CardTitle className="text-xl font-heading">{service.title}</CardTitle>
                  <CardDescription className="text-base mt-2">{service.desc}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pricing Plans */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-foreground">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-muted-foreground">
              Choose the AI infrastructure that fits your growth stage. No hidden fees, just results.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Starter Plan */}
            <Card className="bg-white border border-border shadow-sm flex flex-col">
              <CardHeader>
                <CardTitle className="text-2xl font-heading">Starter AI</CardTitle>
                <CardDescription>For individual agents starting their digital journey.</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-foreground">HK$8,000</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
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
              <CardFooter>
                <Button className="w-full" variant="outline">Get Started</Button>
              </CardFooter>
            </Card>

            {/* Growth Plan (Highlighted) */}
            <Card className="bg-primary text-primary-foreground border-primary shadow-xl scale-105 relative flex flex-col">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-primary px-4 py-1 rounded-full text-sm font-bold shadow-sm">
                Most Popular
              </div>
              <CardHeader>
                <CardTitle className="text-2xl font-heading">Growth AI</CardTitle>
                <CardDescription className="text-primary-foreground/80">For top producers scaling their volume.</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">HK$15,000</span>
                  <span className="text-primary-foreground/80">/month</span>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-4">
                  {[
                    "Unlimited AI Video Tours",
                    "Advanced Chatbot (WhatsApp Integration)",
                    "Social Media Content (Daily Posts)",
                    "Predictive Ad Targeting",
                    "Weekly Strategy Calls",
                    "CRM Integration"
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <div className="p-0.5 bg-white/20 rounded-full">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-white text-primary hover:bg-white/90">Start Scaling</Button>
              </CardFooter>
            </Card>

            {/* Enterprise Plan */}
            <Card className="bg-white border border-border shadow-sm flex flex-col">
              <CardHeader>
                <CardTitle className="text-2xl font-heading">Agency AI</CardTitle>
                <CardDescription>For teams and boutique agencies.</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-foreground">Custom</span>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
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
              <CardFooter>
                <Button className="w-full" variant="outline">Contact Sales</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background border-t border-border">
        <div className="container text-center">
          <h2 className="text-3xl font-heading font-bold mb-6">Still have questions?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Book a free 15-minute demo to see our AI tools in action. We'll show you exactly how we generate leads for agents in your area.
          </p>
          <Link href="/contact">
            <Button size="lg" className="px-8">Book Demo</Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
