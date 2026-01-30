import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, TrendingUp, Users, Clock, DollarSign, Eye, Target, Video, Bot, BarChart3, CheckCircle2, Play, Quote } from "lucide-react";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import SEO from "@/components/SEO";
import { useState } from "react";

// Case Study Data
const caseStudies = [
  {
    id: "mid-levels-luxury",
    category: "Luxury Residential",
    title: {
      en: "Mid-Levels Luxury Apartment",
      zh: "半山豪宅單位"
    },
    subtitle: {
      en: "How AI Video Generated 15,000+ Organic Views",
      zh: "AI影片如何獲得超過15,000次自然觀看"
    },
    agent: {
      en: "Senior Agent, 12 Years Experience",
      zh: "資深代理，12年經驗"
    },
    challenge: {
      en: "A luxury 3-bedroom apartment in Mid-Levels had been on the market for 45 days with minimal interest. Traditional portal listings and static photos weren't capturing the property's stunning harbor views and premium finishes.",
      zh: "一個位於半山的豪華三房單位已在市場上放盤45天，但反應冷淡。傳統的地產平台放盤和靜態照片未能展現物業的壯麗海景和優質裝修。"
    },
    solution: {
      en: "We created a cinematic 60-second video tour using our AI video generation technology. The video featured smooth camera movements through the space, professional voiceover highlighting key features, and dramatic drone footage of the harbor views.",
      zh: "我們使用AI影片生成技術製作了60秒的電影級導覽影片。影片包含流暢的空間鏡頭移動、專業旁白介紹主要特色，以及壯觀的海景航拍畫面。"
    },
    results: [
      { metric: "15,000+", label: { en: "Organic Video Views", zh: "自然影片觀看次數" } },
      { metric: "14", label: { en: "Days to Sale", zh: "天內成交" } },
      { metric: "23", label: { en: "Qualified Inquiries", zh: "個優質查詢" } },
      { metric: "98%", label: { en: "Asking Price Achieved", zh: "達到叫價" } }
    ],
    testimonial: {
      en: "The video completely changed the game. Within 48 hours of posting, I had more inquiries than the previous 6 weeks combined. The quality made my listing stand out from everything else on the market.",
      zh: "這條影片完全改變了局面。發布後48小時內，我收到的查詢比之前6週加起來還多。高質素的製作讓我的放盤在市場上脫穎而出。"
    },
    services: ["AI Video", "Social Media Distribution"],
    image: "/images/case-midlevels.jpg",
    color: "from-blue-500/20 to-purple-500/20"
  },
  {
    id: "kai-tak-investment",
    category: "New Development",
    title: {
      en: "Kai Tak New Development Launch",
      zh: "啟德新盤推廣"
    },
    subtitle: {
      en: "45 Qualified Leads in Just 48 Hours",
      zh: "48小時內獲得45個優質客源"
    },
    agent: {
      en: "Property Investment Specialist",
      zh: "物業投資專家"
    },
    challenge: {
      en: "A new development in Kai Tak was launching with intense competition from multiple projects in the area. The agent needed to generate high-quality leads quickly before the official sales launch to secure early appointments.",
      zh: "啟德一個新盤即將推出，但區內多個項目競爭激烈。代理需要在正式開售前快速獲取優質客源，以確保早期預約。"
    },
    solution: {
      en: "We deployed a multi-channel campaign combining vertical video ads optimized for Instagram Reels and Facebook Stories, predictive targeting to reach active property seekers, and our AI lead qualification bot to pre-screen all inquiries.",
      zh: "我們部署了多渠道推廣活動，結合針對Instagram Reels和Facebook Stories優化的直式影片廣告、精準定位以接觸活躍的物業搜尋者，以及AI客源篩選機器人預先篩選所有查詢。"
    },
    results: [
      { metric: "45", label: { en: "Qualified Leads", zh: "個優質客源" } },
      { metric: "$12", label: { en: "Cost Per Lead", zh: "每個客源成本" } },
      { metric: "48hrs", label: { en: "Campaign Duration", zh: "推廣時間" } },
      { metric: "8", label: { en: "Confirmed Sales", zh: "個確認成交" } }
    ],
    testimonial: {
      en: "I've never seen results like this. The leads were already pre-qualified with budget and timeline before I even spoke to them. It saved me hours of time and helped me close 8 units in the first week.",
      zh: "我從未見過這樣的成果。在我與客戶交談之前，他們已經預先篩選了預算和時間表。這為我節省了大量時間，並幫助我在第一週內成交了8個單位。"
    },
    services: ["AI Video", "Predictive Targeting", "Lead Capture Bot"],
    image: "/images/case-kaitak.jpg",
    color: "from-emerald-500/20 to-teal-500/20"
  },
  {
    id: "sai-kung-villa",
    category: "Luxury Villa",
    title: {
      en: "Sai Kung Waterfront Villa",
      zh: "西貢海濱別墅"
    },
    subtitle: {
      en: "Attracting 12 High-Net-Worth Buyers",
      zh: "吸引12位高資產買家"
    },
    agent: {
      en: "Luxury Property Specialist, Sai Kung",
      zh: "西貢豪宅專家"
    },
    challenge: {
      en: "A stunning waterfront villa in Sai Kung needed to reach a very specific audience: high-net-worth individuals looking for lifestyle properties. Traditional marketing channels weren't reaching the right buyers.",
      zh: "西貢一棟壯麗的海濱別墅需要接觸非常特定的受眾：尋找生活品味物業的高資產人士。傳統營銷渠道無法接觸到合適的買家。"
    },
    solution: {
      en: "We created a premium video showcase featuring extensive drone footage of the waterfront location, lifestyle imagery, and detailed interior tours. The campaign was targeted specifically at high-income professionals and business owners in Hong Kong.",
      zh: "我們製作了高端影片展示，包含海濱位置的大量航拍畫面、生活品味影像和詳細的室內導覽。推廣活動專門針對香港的高收入專業人士和企業主。"
    },
    results: [
      { metric: "12", label: { en: "HNW Buyers Engaged", zh: "位高資產買家" } },
      { metric: "14.2%", label: { en: "Engagement Rate", zh: "互動率" } },
      { metric: "6", label: { en: "Private Viewings", zh: "次私人睇樓" } },
      { metric: "32", label: { en: "Days to Offer", zh: "天內收到出價" } }
    ],
    testimonial: {
      en: "The drone footage was absolutely stunning. It captured the lifestyle that this property offers in a way that photos never could. Every single viewer who came was a serious buyer.",
      zh: "航拍畫面絕對令人驚嘆。它以照片無法呈現的方式捕捉了這個物業所提供的生活方式。每一位來睇樓的人都是認真的買家。"
    },
    services: ["AI Video", "Drone Footage", "Predictive Targeting"],
    image: "/images/case-saikung.jpg",
    color: "from-orange-500/20 to-amber-500/20"
  },
  {
    id: "tseung-kwan-o-portfolio",
    category: "Portfolio Marketing",
    title: {
      en: "Tseung Kwan O Portfolio Campaign",
      zh: "將軍澳組合推廣"
    },
    subtitle: {
      en: "Scaling Content for 50+ Listings",
      zh: "為50+個放盤擴展內容"
    },
    agent: {
      en: "Team Leader, 8-Agent Team",
      zh: "團隊領袖，8人團隊"
    },
    challenge: {
      en: "A team of 8 agents managing over 50 active listings in Tseung Kwan O needed a scalable solution to create video content for all properties without breaking the budget or spending weeks on production.",
      zh: "一個管理將軍澳超過50個活躍放盤的8人團隊需要一個可擴展的解決方案，為所有物業製作影片內容，同時不超出預算或花費數週時間製作。"
    },
    solution: {
      en: "We implemented our Agency plan with batch video processing, creating consistent branded content across all listings. Each property received a professional video within 48 hours of photo upload, with the team's branding throughout.",
      zh: "我們實施了團隊方案，進行批量影片處理，為所有放盤創建一致的品牌內容。每個物業在照片上傳後48小時內收到專業影片，全程展示團隊品牌。"
    },
    results: [
      { metric: "50+", label: { en: "Videos Created", zh: "條影片製作" } },
      { metric: "340%", label: { en: "Increase in Inquiries", zh: "查詢增長" } },
      { metric: "48hrs", label: { en: "Avg. Turnaround", zh: "平均交付時間" } },
      { metric: "22", label: { en: "Sales in 3 Months", zh: "個3個月內成交" } }
    ],
    testimonial: {
      en: "Before BasisHK, creating video for every listing was impossible. Now my entire team has professional video content for every property. Our social media presence has completely transformed.",
      zh: "在使用BasisHK之前，為每個放盤製作影片是不可能的。現在我整個團隊的每個物業都有專業影片內容。我們的社交媒體形象已經完全改變。"
    },
    services: ["AI Video", "Branded Portal", "Team Dashboard"],
    image: "/images/case-tko.jpg",
    color: "from-pink-500/20 to-rose-500/20"
  },
  {
    id: "central-commercial",
    category: "Commercial Property",
    title: {
      en: "Central Office Space Leasing",
      zh: "中環寫字樓租賃"
    },
    subtitle: {
      en: "Filling 3 Floors in Record Time",
      zh: "創紀錄時間內租出3層"
    },
    agent: {
      en: "Commercial Property Specialist",
      zh: "商業物業專家"
    },
    challenge: {
      en: "A Grade A office building in Central had 3 floors of vacant space after a major tenant relocated. The landlord needed to fill the space quickly to minimize vacancy losses in a competitive commercial market.",
      zh: "中環一棟甲級寫字樓在主要租戶搬遷後有3層空置空間。業主需要在競爭激烈的商業市場中快速填補空間，以減少空置損失。"
    },
    solution: {
      en: "We created virtual tour videos for each floor configuration, targeted at business decision-makers and relocation consultants. Our lead capture bot qualified inquiries by company size, industry, and timeline.",
      zh: "我們為每個樓層配置製作了虛擬導覽影片，針對企業決策者和搬遷顧問。我們的客源捕獲機器人按公司規模、行業和時間表篩選查詢。"
    },
    results: [
      { metric: "3", label: { en: "Floors Leased", zh: "層租出" } },
      { metric: "67", label: { en: "Days to Full Occupancy", zh: "天內全部租出" } },
      { metric: "18", label: { en: "Corporate Viewings", zh: "次企業睇樓" } },
      { metric: "$2.1M", label: { en: "Annual Rental Value", zh: "年租金價值" } }
    ],
    testimonial: {
      en: "The virtual tours allowed decision-makers to shortlist our space before even visiting. By the time they came for viewings, they were already 80% convinced. We filled all three floors in just over two months.",
      zh: "虛擬導覽讓決策者在參觀之前就將我們的空間列入候選名單。當他們來睇樓時，已經80%被說服了。我們在短短兩個多月內租出了所有三層。"
    },
    services: ["AI Video", "Virtual Tours", "Lead Capture Bot"],
    image: "/images/case-central.jpg",
    color: "from-indigo-500/20 to-blue-500/20"
  },
  {
    id: "discovery-bay-expat",
    category: "Expat Rental",
    title: {
      en: "Discovery Bay Expat Rentals",
      zh: "愉景灣外籍人士租賃"
    },
    subtitle: {
      en: "Dominating the Expat Rental Market",
      zh: "主導外籍人士租賃市場"
    },
    agent: {
      en: "Expat Rental Specialist, Discovery Bay",
      zh: "愉景灣外籍人士租賃專家"
    },
    challenge: {
      en: "An agent specializing in Discovery Bay rentals wanted to establish dominance in the expat rental market. Competition was fierce, and most inquiries were going to agents with stronger online presence.",
      zh: "一位專門從事愉景灣租賃的代理希望在外籍人士租賃市場建立主導地位。競爭激烈，大多數查詢都流向了網上形象更強的代理。"
    },
    solution: {
      en: "We created a content strategy with weekly video tours of available properties, lifestyle content showcasing Discovery Bay's amenities, and targeted ads reaching expats relocating to Hong Kong.",
      zh: "我們制定了內容策略，包括每週可租物業的影片導覽、展示愉景灣設施的生活方式內容，以及針對搬遷到香港的外籍人士的定向廣告。"
    },
    results: [
      { metric: "156%", label: { en: "Increase in Inquiries", zh: "查詢增長" } },
      { metric: "#1", label: { en: "Market Position", zh: "市場排名" } },
      { metric: "34", label: { en: "Rentals in 6 Months", zh: "個6個月內租出" } },
      { metric: "4.2x", label: { en: "ROI on Marketing", zh: "營銷投資回報" } }
    ],
    testimonial: {
      en: "I went from struggling to get inquiries to being the go-to agent for Discovery Bay rentals. The consistent video content built my brand and now clients come to me first.",
      zh: "我從難以獲得查詢變成了愉景灣租賃的首選代理。持續的影片內容建立了我的品牌，現在客戶首先找我。"
    },
    services: ["AI Video", "Content Strategy", "Predictive Targeting"],
    image: "/images/case-db.jpg",
    color: "from-cyan-500/20 to-sky-500/20"
  }
];

// Aggregate Statistics
const aggregateStats = [
  { value: "500+", label: { en: "Properties Marketed", zh: "個物業推廣" }, icon: Video },
  { value: "2.5M+", label: { en: "Video Views Generated", zh: "次影片觀看" }, icon: Eye },
  { value: "3,200+", label: { en: "Qualified Leads Delivered", zh: "個優質客源" }, icon: Users },
  { value: "312%", label: { en: "Average ROI Increase", zh: "平均投資回報增長" }, icon: TrendingUp }
];

export default function CaseStudies() {
  const { t, language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [expandedCase, setExpandedCase] = useState<string | null>(null);

  const categories = ["All", "Luxury Residential", "New Development", "Luxury Villa", "Portfolio Marketing", "Commercial Property", "Expat Rental"];
  
  const filteredCases = selectedCategory === "All" 
    ? caseStudies 
    : caseStudies.filter(cs => cs.category === selectedCategory);

  const pageTitle = language === 'en'
    ? "Case Studies | BasisHK - Real Results from Real Agents"
    : "成功案例 | BasisHK - 真實代理的真實成果";

  const pageDescription = language === 'en'
    ? "Discover how Hong Kong real estate agents are transforming their business with BasisHK. Real case studies showing measurable results from AI video marketing, lead generation, and predictive targeting."
    : "了解香港地產代理如何透過BasisHK轉型業務。真實案例展示AI影片營銷、客源開發和精準定位的可衡量成果。";

  return (
    <Layout>
      <SEO 
        title={pageTitle}
        description={pageDescription}
        keywords={language === 'en' 
          ? ["BasisHK case studies", "real estate marketing results", "PropTech success stories", "AI video marketing ROI", "Hong Kong property marketing"]
          : ["BasisHK成功案例", "地產營銷成果", "地產科技成功故事", "AI影片營銷回報", "香港物業營銷"]
        }
        url="/case-studies"
      />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 mesh-bg -z-20" />
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-secondary/30 rounded-full blur-[100px] animate-pulse -z-10" />
        
        <div className="container max-w-6xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-white/40 shadow-sm text-primary text-[11px] font-bold uppercase tracking-widest mb-6">
              <BarChart3 className="w-3 h-3" />
              <span>{language === 'en' ? 'Proven Results' : '實證成果'}</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-heading font-medium mb-6 text-foreground leading-[1.1] tracking-tight">
              {language === 'en' ? 'Real Results from' : '來自真實代理的'}
              <br />
              <span className="italic font-light text-primary">
                {language === 'en' ? 'Real Agents' : '真實成果'}
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto font-light">
              {language === 'en' 
                ? "Discover how Hong Kong's top agents are transforming their business with intelligent marketing infrastructure."
                : "了解香港頂尖代理如何透過智能營銷基礎設施轉型業務。"
              }
            </p>
          </div>

          {/* Aggregate Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {aggregateStats.map((stat, index) => (
              <Card key={index} className="bg-white/60 backdrop-blur-sm border-white/40 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label[language]}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-y border-border/50 bg-white/50 backdrop-blur-sm sticky top-16 z-40">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-primary text-white shadow-lg"
                    : "bg-white/80 text-muted-foreground hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16">
        <div className="container max-w-6xl">
          <div className="space-y-8">
            {filteredCases.map((caseStudy, index) => (
              <Card 
                key={caseStudy.id}
                className={`overflow-hidden bg-gradient-to-br ${caseStudy.color} border-white/40 hover:shadow-xl transition-all duration-500 ${
                  expandedCase === caseStudy.id ? 'ring-2 ring-primary/50' : ''
                }`}
              >
                <CardContent className="p-0">
                  {/* Header */}
                  <div 
                    className="p-6 md:p-8 cursor-pointer"
                    onClick={() => setExpandedCase(expandedCase === caseStudy.id ? null : caseStudy.id)}
                  >
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                      <div>
                        <span className="inline-block px-3 py-1 rounded-full bg-white/80 text-xs font-semibold text-primary mb-3">
                          {caseStudy.category}
                        </span>
                        <h2 className="text-2xl md:text-3xl font-heading font-medium text-foreground mb-2">
                          {caseStudy.title[language]}
                        </h2>
                        <p className="text-lg text-muted-foreground">
                          {caseStudy.subtitle[language]}
                        </p>
                        <p className="text-sm text-muted-foreground mt-2 flex items-center gap-2">
                          <Users className="w-4 h-4" />
                          {caseStudy.agent[language]}
                        </p>
                      </div>
                      
                      {/* Quick Stats */}
                      <div className="grid grid-cols-2 gap-3 md:gap-4">
                        {caseStudy.results.slice(0, 2).map((result, idx) => (
                          <div key={idx} className="bg-white/80 backdrop-blur-sm rounded-xl p-3 md:p-4 text-center min-w-[100px]">
                            <div className="text-xl md:text-2xl font-bold text-primary">{result.metric}</div>
                            <div className="text-xs text-muted-foreground">{result.label[language]}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Expand Indicator */}
                    <div className="flex items-center justify-center">
                      <button className="flex items-center gap-2 text-sm text-primary font-medium hover:underline">
                        {expandedCase === caseStudy.id 
                          ? (language === 'en' ? 'Show Less' : '收起詳情')
                          : (language === 'en' ? 'Read Full Case Study' : '閱讀完整案例')
                        }
                        <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${expandedCase === caseStudy.id ? 'rotate-90' : ''}`} />
                      </button>
                    </div>
                  </div>

                  {/* Expanded Content */}
                  {expandedCase === caseStudy.id && (
                    <div className="px-6 md:px-8 pb-8 border-t border-white/40 pt-6 animate-in fade-in slide-in-from-top-5 duration-500">
                      <div className="grid md:grid-cols-2 gap-8">
                        {/* Challenge & Solution */}
                        <div className="space-y-6">
                          <div>
                            <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                              <Target className="w-5 h-5 text-red-500" />
                              {language === 'en' ? 'The Challenge' : '挑戰'}
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                              {caseStudy.challenge[language]}
                            </p>
                          </div>
                          
                          <div>
                            <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                              <CheckCircle2 className="w-5 h-5 text-green-500" />
                              {language === 'en' ? 'Our Solution' : '我們的解決方案'}
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                              {caseStudy.solution[language]}
                            </p>
                          </div>

                          {/* Services Used */}
                          <div>
                            <h3 className="text-lg font-semibold text-foreground mb-3">
                              {language === 'en' ? 'Services Used' : '使用的服務'}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                              {caseStudy.services.map((service, idx) => (
                                <span key={idx} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                                  {service}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Results & Testimonial */}
                        <div className="space-y-6">
                          {/* All Results */}
                          <div>
                            <h3 className="text-lg font-semibold text-foreground mb-4">
                              {language === 'en' ? 'Results' : '成果'}
                            </h3>
                            <div className="grid grid-cols-2 gap-3">
                              {caseStudy.results.map((result, idx) => (
                                <div key={idx} className="bg-white/90 backdrop-blur-sm rounded-xl p-4 text-center">
                                  <div className="text-2xl font-bold text-primary">{result.metric}</div>
                                  <div className="text-xs text-muted-foreground">{result.label[language]}</div>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Testimonial */}
                          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6">
                            <Quote className="w-8 h-8 text-primary/30 mb-3" />
                            <p className="text-foreground italic leading-relaxed mb-4">
                              "{caseStudy.testimonial[language]}"
                            </p>
                            <p className="text-sm text-muted-foreground font-medium">
                              — {caseStudy.agent[language]}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/10">
        <div className="container max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-medium mb-6">
            {language === 'en' ? 'Ready to Become Our Next Success Story?' : '準備好成為我們的下一個成功案例？'}
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            {language === 'en' 
              ? "Join the growing number of Hong Kong agents who are transforming their business with BasisHK's intelligent marketing infrastructure."
              : "加入越來越多透過BasisHK智能營銷基礎設施轉型業務的香港代理行列。"
            }
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://calendly.com/business-basis/30min" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="rounded-full px-10 h-12 text-base font-medium shadow-xl shadow-primary/10 hover:shadow-primary/20 transition-all hover:-translate-y-1">
                {language === 'en' ? 'Book a Free Consultation' : '預約免費諮詢'}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </a>
            <Link href="/services">
              <Button variant="outline" size="lg" className="rounded-full px-10 h-12 text-base font-medium">
                {language === 'en' ? 'View Our Services' : '查看我們的服務'}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
