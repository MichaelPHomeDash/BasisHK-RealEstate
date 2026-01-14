import { Helmet } from "react-helmet-async";
import { useLanguage } from "@/contexts/LanguageContext";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  keywords?: string[];
}

export default function SEO({ 
  title, 
  description, 
  image = "/og-image.png", 
  url,
  keywords = []
}: SEOProps) {
  const { language } = useLanguage();
  
  const siteName = "BasisHK";
  const defaultTitle = language === 'en' 
    ? "BasisHK | Intelligent Real Estate Marketing Infrastructure" 
    : "BasisHK | 智能地產營銷基建";
  
  const defaultDescription = language === 'en'
    ? "Automated growth for elite real estate agents. We leverage generative video, autonomous agents, and predictive algorithms to find premium buyers."
    : "專為精英地產代理而設的自動化增長方案。我們利用生成式影片、自動化代理和預測算法，助您鎖定優質買家。";

  const defaultKeywords = language === 'en'
    ? ["Real Estate Marketing", "PropTech HK", "Lead Generation", "AI Real Estate", "Hong Kong Property", "Automated Agents"]
    : ["地產營銷", "香港房地產科技", "客源開發", "AI地產", "香港樓盤", "自動化代理"];

  const fullTitle = title ? `${title} | ${siteName}` : defaultTitle;
  const finalDescription = description || defaultDescription;
  const siteUrl = "https://basishk.com";
  const fullUrl = url ? `${siteUrl}${url}` : siteUrl;
  const fullImage = image.startsWith("http") ? image : `${siteUrl}${image}`;
  const finalKeywords = [...defaultKeywords, ...keywords].join(", ");

  return (
    <Helmet>
      {/* Standard Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={finalKeywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href={fullUrl} />
      <html lang={language === 'en' ? 'en' : 'zh-HK'} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={language === 'en' ? 'en_US' : 'zh_HK'} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={fullImage} />
    </Helmet>
  );
}
