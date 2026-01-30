import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import SEO from "@/components/SEO";

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  titleZh: string;
  excerpt: string;
  excerptZh: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  categoryZh: string;
  image: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "asia-real-estate-tech-outdated",
    title: "Why Asia's Real Estate Tech is Stuck in 2010 — And What Needs to Change",
    titleZh: "亞洲地產科技為何停滯不前 — 以及如何改變現狀",
    excerpt: "While Silicon Valley disrupts every industry, Asia's property market still relies on WhatsApp groups and PDF brochures. Here's why the region's real estate tech is a decade behind — and the massive opportunity this creates.",
    excerptZh: "當矽谷顛覆各行各業時，亞洲物業市場仍依賴 WhatsApp 群組和 PDF 樓書。本文探討為何區內地產科技落後十年，以及這帶來的龐大機遇。",
    author: "James Chen",
    date: "2026-01-20",
    readTime: "8 min",
    category: "Industry Analysis",
    categoryZh: "行業分析",
    image: "/images/hero-city-night.jpg"
  },
  {
    id: "2",
    slug: "content-is-king-real-estate",
    title: "Content is King: Why This Generation of Buyers Demands More Than Floor Plans",
    titleZh: "內容為王：為何新一代買家不再滿足於平面圖",
    excerpt: "Millennials and Gen Z are now the largest property buying demographic. They scroll past static listings in milliseconds. Learn why cinematic content, storytelling, and authenticity are the new currency in real estate marketing.",
    excerptZh: "千禧世代和 Z 世代已成為最大的置業群體。他們會在毫秒間滑過靜態樓盤資訊。了解為何電影級內容、故事敘述和真實性已成為地產營銷的新貨幣。",
    author: "Sarah Wong",
    date: "2026-01-15",
    readTime: "6 min",
    category: "Marketing Strategy",
    categoryZh: "營銷策略",
    image: "/images/luxury-interior-day.jpg"
  },
  {
    id: "3",
    slug: "basishk-changing-real-estate-marketing",
    title: "How BasisHK is Rewriting the Rules of Real Estate Marketing in Hong Kong",
    titleZh: "BasisHK 如何重新定義香港地產營銷",
    excerpt: "From AI-generated property videos to autonomous lead nurturing, we're building the future of real estate marketing. Here's our vision for transforming how properties are sold in Asia's most competitive market.",
    excerptZh: "從 AI 生成的物業影片到自動化客戶培育，我們正在打造地產營銷的未來。這是我們在亞洲最競爭激烈的市場中，改變物業銷售方式的願景。",
    author: "David Liu",
    date: "2026-01-10",
    readTime: "10 min",
    category: "Company Vision",
    categoryZh: "公司願景",
    image: "/images/hero-daylight-hk.jpg"
  },
  {
    id: "4",
    slug: "generative-ai-property-listings",
    title: "How Generative AI is Revolutionizing Property Listings in 2026",
    titleZh: "生成式 AI 如何在 2026 年徹底改變物業展示",
    excerpt: "From AI-written descriptions to virtual staging and video generation, generative AI is transforming how properties are presented online. Discover the tools and techniques leading agents are using to stand out.",
    excerptZh: "從 AI 撰寫的描述到虛擬佈置和影片生成，生成式 AI 正在改變物業的線上展示方式。了解頂尖代理正在使用的工具和技術。",
    author: "Alex Tam",
    date: "2026-01-25",
    readTime: "7 min",
    category: "AI Technology",
    categoryZh: "AI 科技",
    image: "/images/hero-city-night.jpg"
  },
  {
    id: "5",
    slug: "ai-video-tours-future-real-estate",
    title: "AI Video Tours: The Future of Real Estate Showings is Already Here",
    titleZh: "AI 影片導覽：地產睇樓的未來已經來臨",
    excerpt: "Physical viewings are time-consuming and often unproductive. AI-generated video tours are changing the game by qualifying buyers before they ever step foot in a property. Here's how it works.",
    excerptZh: "實地睇樓既耗時又往往效果不彰。AI 生成的影片導覽正在改變遊戲規則，讓買家在踏入物業之前就已經被篩選。了解其運作原理。",
    author: "Michelle Lee",
    date: "2026-01-22",
    readTime: "5 min",
    category: "PropTech Trends",
    categoryZh: "地產科技趨勢",
    image: "/images/luxury-interior-day.jpg"
  },
  {
    id: "6",
    slug: "chatgpt-real-estate-agents-guide",
    title: "The Real Estate Agent's Complete Guide to Using ChatGPT and AI Tools",
    titleZh: "地產代理使用 ChatGPT 和 AI 工具完全指南",
    excerpt: "From writing listing descriptions to responding to inquiries and creating social media content, AI tools can save agents 10+ hours per week. This practical guide shows you exactly how to get started.",
    excerptZh: "從撰寫樓盤描述到回覆查詢和創建社交媒體內容，AI 工具每週可為代理節省 10 小時以上。本實用指南將向您展示如何開始使用。",
    author: "Kevin Chow",
    date: "2026-01-18",
    readTime: "12 min",
    category: "Practical Guide",
    categoryZh: "實用指南",
    image: "/images/hero-daylight-hk.jpg"
  }
];

export default function Blog() {
  const { t, language } = useLanguage();

  const blogKeywords = language === 'en'
    ? [
        "real estate marketing blog",
        "PropTech insights Asia",
        "property marketing trends",
        "real estate technology Hong Kong",
        "AI in real estate"
      ]
    : [
        "地產營銷博客",
        "亞洲地產科技趨勢",
        "物業推廣策略",
        "香港地產科技",
        "AI 地產應用"
      ];

  const blogTitle = language === 'en'
    ? "Blog | Real Estate Marketing Insights | BasisHK"
    : "博客 | 地產營銷洞察 | BasisHK";

  const blogDescription = language === 'en'
    ? "Explore insights on real estate technology, property marketing strategies, and how AI is transforming the industry in Asia. Expert perspectives from the BasisHK team."
    : "探索地產科技、物業營銷策略，以及 AI 如何改變亞洲地產行業的洞察。來自 BasisHK 團隊的專業觀點。";

  // Featured post (first one)
  const featuredPost = blogPosts[0];
  const otherPosts = blogPosts.slice(1);

  return (
    <Layout>
      <SEO 
        title={blogTitle}
        description={blogDescription}
        keywords={blogKeywords}
        url="/blog"
      />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-12 overflow-hidden">
        <div className="absolute inset-0 mesh-bg -z-20" />
        <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] bg-secondary/20 rounded-full blur-[100px] -z-10" />
        
        <div className="container max-w-4xl text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent-foreground text-xs font-semibold uppercase tracking-wider mb-4">
            {language === 'en' ? 'Insights & Ideas' : '洞察與見解'}
          </span>
          <h1 className="text-4xl md:text-6xl font-heading font-medium mb-6 text-foreground">
            {language === 'en' ? 'The BasisHK Blog' : 'BasisHK 博客'}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {language === 'en' 
              ? "Thoughts on real estate technology, content marketing, and the future of property sales in Asia."
              : "關於地產科技、內容營銷，以及亞洲物業銷售未來的思考。"
            }
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-8">
        <div className="container">
          <Link href={`/blog/${featuredPost.slug}`}>
            <div className="group relative rounded-2xl overflow-hidden bg-background border border-border/50 hover:border-primary/30 hover:shadow-2xl transition-all duration-500">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Image Side */}
                <div className="relative aspect-[16/10] lg:aspect-auto lg:min-h-[400px] overflow-hidden">
                  <img 
                    src={featuredPost.image} 
                    alt={language === 'en' ? featuredPost.title : featuredPost.titleZh}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-black/10" />
                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-wider">
                      {language === 'en' ? 'Featured' : '精選文章'}
                    </span>
                  </div>
                </div>
                
                {/* Content Side */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent-foreground text-xs font-medium w-fit mb-4">
                    {language === 'en' ? featuredPost.category : featuredPost.categoryZh}
                  </span>
                  
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-medium mb-4 group-hover:text-primary transition-colors">
                    {language === 'en' ? featuredPost.title : featuredPost.titleZh}
                  </h2>
                  
                  <p className="text-muted-foreground mb-6 line-clamp-3 text-base lg:text-lg">
                    {language === 'en' ? featuredPost.excerpt : featuredPost.excerptZh}
                  </p>
                  
                  <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
                    <span className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      {featuredPost.author}
                    </span>
                    <span className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {featuredPost.date}
                    </span>
                    <span className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {featuredPost.readTime}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-primary font-medium">
                    {language === 'en' ? 'Read Article' : '閱讀全文'}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Other Blog Posts */}
      <section className="py-12 bg-muted/30">
        <div className="container">
          <h3 className="text-2xl font-heading font-medium mb-8">
            {language === 'en' ? 'More Articles' : '更多文章'}
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {otherPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`}>
                <Card className="group h-full bg-background/80 backdrop-blur-sm border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden">
                  {/* Image */}
                  <div className="aspect-[16/9] relative overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={language === 'en' ? post.title : post.titleZh}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-background/90 backdrop-blur-sm text-xs font-medium text-foreground">
                        {language === 'en' ? post.category : post.categoryZh}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-4 text-xs text-white/90">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {post.readTime}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl font-heading group-hover:text-primary transition-colors line-clamp-2">
                      {language === 'en' ? post.title : post.titleZh}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent>
                    <CardDescription className="text-muted-foreground line-clamp-2 mb-4">
                      {language === 'en' ? post.excerpt : post.excerptZh}
                    </CardDescription>
                    
                    <div className="flex items-center justify-between text-sm">
                      <span className="flex items-center gap-2 text-muted-foreground">
                        <User className="w-3.5 h-3.5" />
                        {post.author}
                      </span>
                      <span className="flex items-center gap-1 text-primary font-medium">
                        {language === 'en' ? 'Read' : '閱讀'}
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-medium mb-4">
            {language === 'en' ? 'Ready to Transform Your Marketing?' : '準備好改變您的營銷方式？'}
          </h2>
          <p className="text-muted-foreground mb-8">
            {language === 'en' 
              ? "Join the agents who are already using AI-powered content to close more deals."
              : "加入已經使用 AI 內容來成交更多交易的代理行列。"
            }
          </p>
          <a href="https://calendly.com/business-basis/30min" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="rounded-full px-10">
              {language === 'en' ? 'Get Started' : '立即開始'}
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </a>
        </div>
      </section>
    </Layout>
  );
}
