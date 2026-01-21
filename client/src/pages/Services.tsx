import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge, Bot, BrainCircuit, Check, Sparkles, Video, Zap, X } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "wouter";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Slider } from "@/components/ui/slider";
import SEO from "@/components/SEO";

export default function Services() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "quarterly">("monthly");
  const [videoCount, setVideoCount] = useState<number>(5);
  const { t, language } = useLanguage();
  const pricePerVideo = { monthly: 1000, quarterly: 950 }; // 5% discount for quarterly

  const plans = [
    {
      title: t('services.plan.starter'),
      desc: t('services.plan.starter.desc'),
      price: { monthly: 8000, quarterly: 7600 },
      features: [
        { name: t('services.feature.aiOptimizer'), included: true },
        { name: `10 ${t('services.feature.video')}`, included: true },
        { name: t('services.feature.basicPortal'), included: true },
        { name: t('services.feature.limitedListings'), included: true },
        { name: `${t('services.feature.basic')} ${t('services.feature.bot')}`, included: true },
        { name: t('services.feature.adsBoosting2k'), included: true },
        { name: t('services.feature.manager'), included: false }
      ]
    },
    {
      title: t('services.plan.growth'),
      desc: t('services.plan.growth.desc'),
      price: { monthly: 15000, quarterly: 14250 },
      features: [
        { name: t('services.feature.aiOptimizer'), included: true },
        { name: `25 ${t('services.feature.video')}`, included: true },
        { name: t('services.feature.basicPortal'), included: true },
        { name: t('services.feature.unlimitedListings'), included: true },
        { name: `${t('services.feature.advanced')} ${t('services.feature.bot')}`, included: true },
        { name: t('services.feature.adsBoosting4k'), included: true },
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
        { name: t('services.feature.revisions'), included: true },
        { name: t('services.feature.manager'), included: true },
        { name: t('services.feature.bot'), included: true },
        { name: t('services.feature.report'), included: true },
        { name: t('services.feature.support'), included: true },
        { name: t('services.feature.consultancy'), included: true }
      ]
    }
  ];

  const servicesTitle = language === 'en'
    ? "Real Estate Marketing Services & Pricing | AI Property Videos Hong Kong"
    : "地產營銷服務及價格 | AI 樓盤影片香港";

  const servicesDescription = language === 'en'
    ? "Explore BasisHK's real estate marketing packages. AI property video production starting at HK$1,000, lead generation bots, and digital marketing solutions for Hong Kong real estate agents."
    : "探索 BasisHK 的地產營銷套餐。AI 樓盤影片製作由 HK$1,000 起，客源開發機械人及香港地產代理數碼營銷方案。";

  const servicesKeywords = language === 'en'
    ? [
        "real estate marketing pricing Hong Kong",
        "property video production cost",
        "real estate lead generation services",
        "AI property marketing packages"
      ]
    : [
        "香港地產營銷價格",
        "樓盤影片製作費用",
        "地產客源開發服務",
        "AI 物業營銷套餐"
      ];

  return (
    <Layout>
      <SEO 
        title={servicesTitle}
        description={servicesDescription}
        keywords={servicesKeywords}
        url="/services"
      />
      {/* Hero Section - Compact */}
      <section className="py-16 bg-background relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[100px] -z-10" />
        
        <div className="container text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-border/50 shadow-sm text-primary text-xs font-semibold mb-6 animate-in fade-in slide-in-from-bottom-5 duration-700">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t('services.title')}</span>
          </div>
          <h1 className="text-3xl md:text-6xl font-heading font-bold mb-6 text-foreground leading-tight px-4">
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

          <div className="grid lg:grid-cols-3 gap-6 max-w-5xl mx-auto items-stretch px-2 md:px-0">
            {plans.map((plan, i) => (
              <Card key={i} className={`bg-white border-none shadow-md rounded-2xl p-1 flex flex-col h-full hover:scale-[1.02] transition-transform duration-300 ${plan.highlight ? "ring-2 ring-primary shadow-xl scale-100 md:scale-105 z-10 my-4 md:my-0" : ""}`}>
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
                      <div className="flex flex-col items-start">
                        <div className="flex items-baseline gap-1 flex-wrap">
                          <span className="text-3xl font-bold text-foreground">
                            HK${billingCycle === "quarterly" ? plan.price.quarterly.toLocaleString() : plan.price.monthly.toLocaleString()}
                          </span>
                          <span className="text-xs text-muted-foreground whitespace-nowrap">/{t('services.feature.monthly')}</span>
                        </div>
                        {billingCycle === "quarterly" && (
                          <span className="text-sm text-muted-foreground line-through decoration-destructive/50 decoration-2 mt-1">
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

          {/* Custom AI Videos Package */}
          <div className="max-w-3xl mx-auto mt-16">
            <Card className="bg-white border-none shadow-lg rounded-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-6 text-white">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <Video className="w-6 h-6" />
                    <CardTitle className="text-xl font-heading font-bold text-white">{t('services.plan.videoOnly')}</CardTitle>
                  </div>
                  {billingCycle === "quarterly" && (
                    <span className="text-xs font-bold bg-white/20 px-3 py-1 rounded-full">{t('services.save')}</span>
                  )}
                </div>
                <CardDescription className="text-white/80 text-sm">{t('services.plan.videoOnly.desc')}</CardDescription>
              </div>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-medium text-muted-foreground">{t('services.videoSlider.label')}</span>
                      <span className="text-sm font-bold text-foreground bg-secondary px-3 py-1 rounded-full">{videoCount} {t('services.feature.videos')}</span>
                    </div>
                    <Slider
                      value={[videoCount]}
                      onValueChange={(value) => setVideoCount(value[0])}
                      min={1}
                      max={20}
                      step={1}
                      className="w-full"
                    />
                    <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                      <span>1 {t('services.feature.video')}</span>
                      <span>20 {t('services.feature.videos')}</span>
                    </div>
                  </div>
                  <div className="text-center md:text-right md:min-w-[180px]">
                    <div className="flex flex-col items-center md:items-end">
                      <div className="text-3xl font-bold text-foreground">
                        HK${(videoCount * pricePerVideo[billingCycle]).toLocaleString()}
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">
                        HK${pricePerVideo[billingCycle].toLocaleString()} {t('services.videoSlider.perVideo')}
                      </div>
                      {billingCycle === "quarterly" && (
                        <div className="text-xs text-muted-foreground line-through decoration-destructive/50 decoration-2 mt-1">
                          HK${(videoCount * pricePerVideo.monthly).toLocaleString()}
                        </div>
                      )}
                      {billingCycle === "quarterly" && (
                        <div className="text-xs text-green-600 font-medium mt-1">
                          {t('services.quarterly')} ({t('services.save')})
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-border/50">
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <li className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Check className="w-4 h-4 text-purple-600 shrink-0" />
                      {t('services.videoOnly.feature1')}
                    </li>
                    <li className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Check className="w-4 h-4 text-purple-600 shrink-0" />
                      {t('services.videoOnly.feature2')}
                    </li>
                    <li className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Check className="w-4 h-4 text-purple-600 shrink-0" />
                      {t('services.videoOnly.feature3')}
                    </li>
                    <li className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Check className="w-4 h-4 text-purple-600 shrink-0" />
                      {t('services.videoOnly.feature4')}
                    </li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Link href="/contact" className="w-full">
                  <Button className="w-full rounded-lg h-10 font-semibold text-sm bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-700 hover:to-indigo-700">
                    {t('services.videoOnly.cta')}
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>

          {/* FAQ Section */}
          <div className="max-w-3xl mx-auto mt-24">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-heading font-bold mb-4 text-foreground">
                {t('services.faq.title')}
              </h2>
              <p className="text-base text-muted-foreground">
                {t('services.faq.subtitle')}
              </p>
            </div>
            
            <Accordion type="single" collapsible className="w-full bg-white rounded-2xl shadow-sm border border-border/50 px-6 py-2">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left font-heading font-semibold text-foreground/90 hover:text-primary hover:no-underline">
                  {t('services.faq.q1')}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {t('services.faq.a1')}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left font-heading font-semibold text-foreground/90 hover:text-primary hover:no-underline">
                  {t('services.faq.q2')}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {t('services.faq.a2')}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left font-heading font-semibold text-foreground/90 hover:text-primary hover:no-underline">
                  {t('services.faq.q3')}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {t('services.faq.a3')}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left font-heading font-semibold text-foreground/90 hover:text-primary hover:no-underline">
                  {t('services.faq.q4')}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {t('services.faq.a4')}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left font-heading font-semibold text-foreground/90 hover:text-primary hover:no-underline">
                  {t('services.faq.q5')}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {t('services.faq.a5')}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger className="text-left font-heading font-semibold text-foreground/90 hover:text-primary hover:no-underline">
                  {t('services.faq.q6')}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {t('services.faq.a6')}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-7" className="border-b-0">
                <AccordionTrigger className="text-left font-heading font-semibold text-foreground/90 hover:text-primary hover:no-underline">
                  {t('services.faq.q7')}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {t('services.faq.a7')}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
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
