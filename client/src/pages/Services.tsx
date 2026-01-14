import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge, Bot, BrainCircuit, Check, Sparkles, Video, Zap, X } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Services() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "quarterly">("monthly");
  const { t } = useLanguage();

  const plans = [
    {
      title: t('services.plan.starter'),
      desc: t('services.plan.starter.desc'),
      price: { monthly: 8000, quarterly: 6400 },
      features: [
        { name: `4 ${t('services.feature.video')}`, included: true },
        { name: `${t('services.feature.basic')} ${t('services.feature.bot')}`, included: true },
        { name: `${t('services.feature.content')} (12 ${t('services.feature.posts')})`, included: true },
        { name: t('services.feature.consultancy'), included: true },
        { name: `${t('services.feature.monthly')} ${t('services.feature.report')}`, included: true },
        { name: t('services.feature.support'), included: true },
        { name: t('services.feature.manager'), included: false }
      ]
    },
    {
      title: t('services.plan.growth'),
      desc: t('services.plan.growth.desc'),
      price: { monthly: 15000, quarterly: 12000 },
      features: [
        { name: `8 ${t('services.feature.video')}`, included: true },
        { name: `${t('services.feature.advanced')} ${t('services.feature.bot')}`, included: true },
        { name: `${t('services.feature.content')} (${t('services.feature.weekly')} ${t('services.feature.posts')})`, included: true },
        { name: t('services.feature.consultancy'), included: true },
        { name: t('home.pillars.predictive.title'), included: true },
        { name: t('services.feature.report'), included: true },
        { name: t('services.feature.manager'), included: false }
      ],
      highlight: true
    },
    {
      title: t('services.plan.agency'),
      desc: t('services.plan.agency.desc'),
      price: { monthly: "Custom", quarterly: "Custom" },
      features: [
        { name: t('services.feature.video'), included: true },
        { name: t('services.feature.content'), included: true },
        { name: t('services.feature.manager'), included: true },
        { name: t('services.feature.bot'), included: true },
        { name: t('services.feature.report'), included: true },
        { name: t('services.feature.support'), included: true },
        { name: t('services.feature.consultancy'), included: true }
      ]
    }
  ];

  return (
    <Layout>
      {/* Hero Section - Compact */}
      <section className="py-16 bg-background relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[100px] -z-10" />
        
        <div className="container text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-border/50 shadow-sm text-primary text-xs font-semibold mb-6 animate-in fade-in slide-in-from-bottom-5 duration-700">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t('services.title')}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 text-foreground leading-tight">
            {t('services.title')} <br />
            <span className="text-primary">{t('services.subtitle')}</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
            {t('home.hero.desc')}
          </p>
        </div>
      </section>

      {/* Features Deep Dive - Compact Bento Cards */}
      <section className="py-16 bg-secondary/30">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              {
                title: t('home.pillars.video.title'),
                desc: t('home.pillars.video.desc'),
                features: ["4K Video Generation", "Multi-Language Voiceovers", "Auto-Scripting"],
                icon: Video,
                color: "text-purple-600",
                bg: "bg-purple-50"
              },
              {
                title: t('home.pillars.agents.title'),
                desc: t('home.pillars.agents.desc'),
                features: ["24/7 Instant Response", "Budget Qualification", "CRM Integration"],
                icon: Bot,
                color: "text-blue-600",
                bg: "bg-blue-50"
              },
              {
                title: t('home.pillars.predictive.title'),
                desc: t('home.pillars.predictive.desc'),
                features: ["Audience Modeling", "Trend Forecasting", "Ad Spend Optimization"],
                icon: BrainCircuit,
                color: "text-indigo-600",
                bg: "bg-indigo-50"
              }
            ].map((service, i) => (
              <Card key={i} className="bg-white border-none shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 rounded-2xl overflow-hidden">
                <CardHeader className="p-6 pb-3">
                  <div className={`w-12 h-12 ${service.bg} rounded-xl flex items-center justify-center mb-4`}>
                    <service.icon className={`w-6 h-6 ${service.color}`} />
                  </div>
                  <CardTitle className="text-xl font-heading font-bold">{service.title}</CardTitle>
                  <CardDescription className="text-sm mt-2 leading-relaxed">{service.desc}</CardDescription>
                </CardHeader>
                <CardContent className="p-6 pt-2">
                  <ul className="space-y-2">
                    {service.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-2 text-xs text-muted-foreground font-medium">
                        <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3 text-green-600" />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pricing Plans - Redesigned & Compact */}
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-foreground">
              {t('services.select')}
            </h2>
            <p className="text-base text-muted-foreground mb-8">
              {t('services.subtitle')}
            </p>

            {/* Billing Switcher */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className={`text-sm font-medium ${billingCycle === "monthly" ? "text-foreground" : "text-muted-foreground"}`}>{t('services.monthly')}</span>
              <button 
                onClick={() => setBillingCycle(billingCycle === "monthly" ? "quarterly" : "monthly")}
                className="relative w-14 h-7 bg-primary/10 rounded-full p-1 transition-colors hover:bg-primary/20 focus:outline-none focus:ring-2 focus:ring-primary/20"
              >
                <div className={`w-5 h-5 bg-primary rounded-full shadow-sm transition-transform duration-300 ${billingCycle === "quarterly" ? "translate-x-7" : ""}`} />
              </button>
              <span className={`text-sm font-medium ${billingCycle === "quarterly" ? "text-foreground" : "text-muted-foreground"}`}>
                {t('services.quarterly')} <span className="ml-1 text-xs font-bold text-green-600 bg-green-100 px-2 py-0.5 rounded-full">{t('services.save')}</span>
              </span>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 max-w-5xl mx-auto items-stretch">
            {plans.map((plan, i) => (
              <Card key={i} className={`bg-white border-none shadow-md rounded-2xl p-1 flex flex-col h-full hover:scale-[1.02] transition-transform duration-300 ${plan.highlight ? "ring-2 ring-primary shadow-xl scale-105 z-10" : ""}`}>
                {plan.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-bold shadow-md">
                    {t('services.popular')}
                  </div>
                )}
                <div className="p-6 pb-0">
                  <CardTitle className="text-xl font-heading font-bold">{plan.title}</CardTitle>
                  <CardDescription className="mt-1 text-xs">{plan.desc}</CardDescription>
                  <div className="mt-4 mb-4">
                    {typeof plan.price.monthly === "number" ? (
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-bold text-foreground">
                          HK${billingCycle === "quarterly" ? plan.price.quarterly.toLocaleString() : plan.price.monthly.toLocaleString()}
                        </span>
                        <span className="text-xs text-muted-foreground">/{t('services.feature.monthly')}</span>
                        {billingCycle === "quarterly" && (
                          <span className="text-sm text-muted-foreground line-through decoration-destructive/50 decoration-2">
                            HK${plan.price.monthly.toLocaleString()}
                          </span>
                        )}
                      </div>
                    ) : (
                      <span className="text-3xl font-bold text-foreground">{plan.price.monthly}</span>
                    )}
                    {billingCycle === "quarterly" && typeof plan.price.monthly === "number" && typeof plan.price.quarterly === "number" && (
                      <div className="text-xs text-green-600 font-medium mt-1">
                        {t('services.quarterly')} ({t('services.save')})
                      </div>
                    )}
                  </div>
                </div>
                <CardContent className="flex-1 p-6 pt-0">
                  <ul className="space-y-3">
                    {plan.features.map((feature, j) => (
                      <li key={j} className={`flex items-start gap-2 text-xs ${feature.included ? "text-muted-foreground" : "text-muted-foreground/50"}`}>
                        {feature.included ? (
                          <Check className={`w-4 h-4 ${plan.highlight ? "text-primary" : "text-primary/70"} shrink-0`} />
                        ) : (
                          <X className="w-4 h-4 text-muted-foreground/40 shrink-0" />
                        )}
                        <span className={feature.included ? "" : "line-through decoration-muted-foreground/40"}>
                          {feature.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button className={`w-full rounded-lg h-10 font-semibold text-sm ${plan.highlight ? "bg-primary text-primary-foreground hover:bg-primary/90" : "bg-secondary text-secondary-foreground hover:bg-secondary/80"}`}>
                    {plan.price.monthly === "Custom" ? t('about.cta.button') : t('nav.getStarted')}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Ultra Compact */}
      <section className="py-12 container">
        <div className="bg-primary rounded-2xl p-8 md:p-10 text-center relative overflow-hidden shadow-lg">
          {/* Background Patterns */}
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')] opacity-10" />
          <div className="absolute -top-24 -left-24 w-48 h-48 bg-white/10 rounded-full blur-2xl" />
          <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-white/10 rounded-full blur-2xl" />
          
          <div className="relative z-10 max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-left">
              <h2 className="text-xl md:text-2xl font-heading font-bold mb-1 text-white leading-tight">
                {t('home.cta.title')} {t('home.cta.subtitle')}
              </h2>
              <p className="text-sm text-white/90 leading-relaxed">
                {t('home.cta.desc')}
              </p>
            </div>
            <Link href="/contact">
              <span className="inline-flex items-center justify-center rounded-full font-heading font-bold text-primary bg-white h-10 px-6 text-sm shadow-md hover:bg-white/90 hover:scale-105 transition-all whitespace-nowrap cursor-pointer">
                {t('home.hero.cta.demo')}
              </span>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
