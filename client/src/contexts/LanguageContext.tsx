import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'zh';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.getStarted': 'Get Started',
    'nav.getAccess': 'Get Access',
    
    // Footer
    'footer.desc': "Cultivating meaningful connections for Hong Kong's real estate professionals. Authentic strategies. Sustainable growth. Human-centric marketing.",
    'footer.explore': 'Explore',
    'footer.connect': 'Connect',
    'footer.rights': 'All rights reserved.',
    
    // Home
    'home.badge': 'Next-Gen Intelligent Marketing Infrastructure',
    'home.hero.title': 'Automated Growth',
    'home.hero.subtitle': 'for Elite Real Estate Agents',
    'home.hero.desc': 'We leverage generative video, autonomous agents, and predictive algorithms to find premium buyers before your competitors do.',
    'home.hero.cta.explore': 'Explore Infrastructure',
    'home.hero.cta.demo': 'Book Demo',
    'home.float.roi': 'Campaign ROI',
    'home.float.industry': 'vs. industry avg.',
    'home.float.lead': 'New Lead Qualified',
    'home.float.budget': 'Budget',
    'home.pillars.title': 'The Intelligent Advantage',
    'home.pillars.desc': 'Traditional marketing is manual and reactive. Our infrastructure is automated, predictive, and designed for the modern era.',
    'home.pillars.video.title': 'Generative Video',
    'home.pillars.video.desc': 'We turn static photos into cinematic video tours automatically, capturing 400% more engagement.',
    'home.pillars.agents.title': 'Autonomous Agents',
    'home.pillars.agents.desc': 'Our chatbots engage leads instantly, 24/7, qualifying budget and intent before you wake up.',
    'home.pillars.predictive.title': 'Predictive Targeting',
    'home.pillars.predictive.desc': 'Algorithms analyze thousands of data points to identify high-net-worth buyers ready to transact.',
    'home.pain.title': 'Stop Relying on',
    'home.pain.subtitle': 'Outdated Methods',
    'home.pain.1': 'Portal saturation means your listings get buried.',
    'home.pain.2': 'Manual follow-ups are too slow for modern buyers.',
    'home.pain.3': 'Generic ads waste budget on unqualified clicks.',
    'home.solution.title': 'The BasisHK Solution',
    'home.solution.1.title': 'Dominance',
    'home.solution.1.desc': 'Own the feed with high-frequency video content.',
    'home.solution.2.title': 'Speed',
    'home.solution.2.desc': 'Respond in seconds, not hours, with automation.',
    'home.solution.3.title': 'Precision',
    'home.solution.3.desc': 'Target only the top 1% of qualified buyers.',
    'home.cta.title': 'Ready to',
    'home.cta.subtitle': 'Modernize?',
    'home.cta.desc': 'Join the top 1% of agents using intelligent infrastructure to dominate the market.',
    'home.cta.button': 'Start Now',

    // Services
    'services.title': 'Intelligent Infrastructure',
    'services.subtitle': 'Choose the growth engine that fits your scale.',
    'services.monthly': 'Monthly',
    'services.quarterly': 'Quarterly',
    'services.save': 'Save 20%',
    'services.plan.starter': 'Starter',
    'services.plan.growth': 'Growth',
    'services.plan.agency': 'Agency',
    'services.plan.starter.desc': 'Essential automation for individual agents.',
    'services.plan.growth.desc': 'Advanced tools for high-volume producers.',
    'services.plan.agency.desc': 'Full-scale infrastructure for teams.',
    'services.feature.video': 'AI Property Videos',
    'services.feature.bot': 'Lead Capture Bot',
    'services.feature.content': 'Social Media Content',
    'services.feature.consultancy': 'Property Ad Consultancy',
    'services.feature.report': 'Performance Report',
    'services.feature.support': 'Email Support',
    'services.feature.manager': 'Dedicated Account Manager',
    'services.feature.basic': 'Basic',
    'services.feature.advanced': 'Advanced',
    'services.feature.posts': 'Posts',
    'services.feature.monthly': 'Monthly',
    'services.feature.weekly': 'Weekly',
    'services.select': 'Select Plan',
    'services.popular': 'Most Popular',

    // About
    'about.title': 'About BasisHK',
    'about.desc': 'We are a specialized marketing agency dedicated to empowering Hong Kong real estate professionals with modern digital tools.',
    'about.mission.1': 'BasisHK was established to bridge the gap between traditional real estate practices and modern digital marketing.',
    'about.mission.2': 'The Hong Kong property market is one of the most competitive in the world. We recognized that individual agents often lack the resources and technical expertise to compete with large agencies in the digital space.',
    'about.mission.3': 'Our mission is to level the playing field by providing enterprise-grade marketing strategies, data analytics, and lead generation systems to individual professionals.',
    'about.stat.focus': 'Real Estate Focus',
    'about.stat.uptime': 'System Uptime',
    'about.stat.growth': 'Dedicated to Your Growth',
    'about.values.title': 'Corporate Values',
    'about.values.integrity': 'Integrity',
    'about.values.integrity.desc': 'We operate with full transparency and adhere to the highest professional standards.',
    'about.values.innovation': 'Innovation',
    'about.values.innovation.desc': 'We constantly adapt our strategies to leverage the latest digital trends.',
    'about.values.results': 'Results',
    'about.values.results.desc': 'We are data-driven and focused on delivering measurable ROI for our clients.',
    'about.cta.title': 'Work With Us',
    'about.cta.button': 'Get in Touch',

    // Contact
    'contact.title': 'Contact Us',
    'contact.desc': 'Interested in our services? Please fill out the form to schedule a consultation with our marketing team. We look forward to discussing how we can assist in growing your real estate business.',
    'contact.hours.title': 'Office Hours',
    'contact.hours.desc': 'Monday - Friday: 9:00 AM - 6:00 PM',
    'contact.email.title': 'Email',
    'contact.form.firstName': 'First Name',
    'contact.form.lastName': 'Last Name',
    'contact.form.agency': 'Real Estate Agency',
    'contact.form.email': 'Email Address',
    'contact.form.phone': 'Phone Number',
    'contact.form.budget': 'Marketing Budget (Monthly)',
    'contact.form.budget.placeholder': 'Select range',
    'contact.form.message': 'Message',
    'contact.form.message.placeholder': 'Please describe your current marketing challenges...',
    'contact.form.submit': 'Submit Inquiry',
    'contact.form.submitting': 'Submitting...',
    'contact.toast.title': 'Inquiry Received',
    'contact.toast.desc': 'Thank you for contacting BasisHK. A representative will respond to your inquiry within 24 hours.',
  },
  zh: {
    // Navigation
    'nav.home': '首頁',
    'nav.services': '服務',
    'nav.about': '關於我們',
    'nav.contact': '聯絡我們',
    'nav.getStarted': '立即開始',
    'nav.getAccess': '獲取權限',
    
    // Footer
    'footer.desc': "為香港地產專業人士建立更有意義的連結。真實策略，持續增長，以人為本的營銷。",
    'footer.explore': '探索',
    'footer.connect': '連結',
    'footer.rights': '版權所有。',
    
    // Home
    'home.badge': '新一代智能營銷基建',
    'home.hero.title': '自動化增長',
    'home.hero.subtitle': '專為精英地產代理而設',
    'home.hero.desc': '我們利用生成式影片、自動化代理和預測算法，助您在競爭對手之前鎖定優質買家。',
    'home.hero.cta.explore': '探索基建',
    'home.hero.cta.demo': '預約演示',
    'home.float.roi': '廣告回報率',
    'home.float.industry': '對比行業平均',
    'home.float.lead': '新合資格客源',
    'home.float.budget': '預算',
    'home.pillars.title': '智能優勢',
    'home.pillars.desc': '傳統營銷是被動且人手的。我們的基建是自動化、具預測性，並專為現代而設。',
    'home.pillars.video.title': '生成式影片',
    'home.pillars.video.desc': '我們自動將靜態照片轉化為電影級樓盤影片，提升 400% 互動率。',
    'home.pillars.agents.title': '自動化代理',
    'home.pillars.agents.desc': '我們的聊天機械人全天候 24/7 即時回覆，在您醒來前已確認預算和意向。',
    'home.pillars.predictive.title': '預測性鎖定',
    'home.pillars.predictive.desc': '算法分析數千個數據點，識別準備交易的高資產淨值買家。',
    'home.pain.title': '停止依賴',
    'home.pain.subtitle': '過時的方法',
    'home.pain.1': '平台飽和意味著您的樓盤被淹沒。',
    'home.pain.2': '人手跟進對現代買家來說太慢。',
    'home.pain.3': '通用廣告將預算浪費在無效點擊上。',
    'home.solution.title': 'BasisHK 解決方案',
    'home.solution.1.title': '主導',
    'home.solution.1.desc': '以高頻影片內容主導動態消息。',
    'home.solution.2.title': '速度',
    'home.solution.2.desc': '利用自動化在秒速間回應，而非數小時。',
    'home.solution.3.title': '精準',
    'home.solution.3.desc': '只鎖定首 1% 的合資格買家。',
    'home.cta.title': '準備好',
    'home.cta.subtitle': '現代化？',
    'home.cta.desc': '加入首 1% 使用智能基建主導市場的代理行列。',
    'home.cta.button': '立即開始',

    // Services
    'services.title': '智能基建',
    'services.subtitle': '選擇適合您規模的增長引擎。',
    'services.monthly': '月費',
    'services.quarterly': '季費',
    'services.save': '節省 20%',
    'services.plan.starter': '入門版',
    'services.plan.growth': '增長版',
    'services.plan.agency': '機構版',
    'services.plan.starter.desc': '個人代理的必備自動化工具。',
    'services.plan.growth.desc': '高量產出者的進階工具。',
    'services.plan.agency.desc': '團隊的全方位基建。',
    'services.feature.video': 'AI 樓盤影片',
    'services.feature.bot': '客源捕捉機械人',
    'services.feature.content': '社交媒體內容',
    'services.feature.consultancy': '樓盤廣告諮詢服務',
    'services.feature.report': '表現報告',
    'services.feature.support': '電郵支援',
    'services.feature.manager': '專屬客戶經理',
    'services.feature.basic': '基本',
    'services.feature.advanced': '進階',
    'services.feature.posts': '則帖文',
    'services.feature.monthly': '每月',
    'services.feature.weekly': '每週',
    'services.select': '選擇計劃',
    'services.popular': '最受歡迎',

    // About
    'about.title': '關於 BasisHK',
    'about.desc': '我們是一家專門的營銷代理，致力於以現代數碼工具賦能香港地產專業人士。',
    'about.mission.1': 'BasisHK 的成立是為了縮窄傳統地產業務與現代數碼營銷之間的差距。',
    'about.mission.2': '香港樓市是全球競爭最激烈的市場之一。我們意識到個人代理往往缺乏資源和技術專長，難以在數碼領域與大型機構競爭。',
    'about.mission.3': '我們的使命是通過為個人專業人士提供企業級營銷策略、數據分析和客源生成系統，創造公平的競爭環境。',
    'about.stat.focus': '專注地產',
    'about.stat.uptime': '系統正常運行',
    'about.stat.growth': '致力於您的增長',
    'about.values.title': '企業價值',
    'about.values.integrity': '誠信',
    'about.values.integrity.desc': '我們以完全透明的方式運作，並遵守最高的專業標準。',
    'about.values.innovation': '創新',
    'about.values.innovation.desc': '我們不斷調整策略，以利用最新的數碼趨勢。',
    'about.values.results': '成果',
    'about.values.results.desc': '我們以數據為導向，專注於為客戶提供可衡量的投資回報。',
    'about.cta.title': '與我們合作',
    'about.cta.button': '聯絡我們',

    // Contact
    'contact.title': '聯絡我們',
    'contact.desc': '對我們的服務感興趣？請填寫表格預約我們的營銷團隊諮詢。我們期待討論如何協助您發展地產業務。',
    'contact.hours.title': '辦公時間',
    'contact.hours.desc': '星期一至五：上午 9:00 - 下午 6:00',
    'contact.email.title': '電郵',
    'contact.form.firstName': '名字',
    'contact.form.lastName': '姓氏',
    'contact.form.agency': '地產代理公司',
    'contact.form.email': '電郵地址',
    'contact.form.phone': '電話號碼',
    'contact.form.budget': '營銷預算 (每月)',
    'contact.form.budget.placeholder': '選擇範圍',
    'contact.form.message': '訊息',
    'contact.form.message.placeholder': '請描述您目前的營銷挑戰...',
    'contact.form.submit': '提交查詢',
    'contact.form.submitting': '提交中...',
    'contact.toast.title': '已收到查詢',
    'contact.toast.desc': '感謝您聯絡 BasisHK。我們的代表將於 24 小時內回覆您的查詢。',
  }
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
