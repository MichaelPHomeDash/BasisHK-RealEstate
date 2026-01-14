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
    'home.hero.cta.demo': 'Schedule a Consult',
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
    'home.trusted.title': 'Trusted by Agents from Top Developers',
    'home.how.title': 'How It Works',
    'home.how.desc': 'A streamlined three-step process to transform your lead generation.',
    'home.how.1.title': 'Connect',
    'home.how.1.desc': 'Integrate your listings and social profiles with our secure platform.',
    'home.how.2.title': 'Automate',
    'home.how.2.desc': 'Our AI generates content and launches targeted campaigns instantly.',
    'home.how.3.title': 'Convert',
    'home.how.3.desc': 'Receive pre-qualified leads directly to your phone, ready to view.',

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
    'services.feature.revisions': 'Unlimited Revisions',
    'services.feature.weekly': 'Weekly',
    'services.select': 'Select Plan',
    'services.popular': 'Most Popular',

    // About
    'about.title': 'Built by Agents, For Agents',
    'about.desc': 'We are not just tech developers. We are real estate veterans who understand the hustle.',
    'about.mission.1': 'BasisHK was born from frustration. As former agents in Hong Kong\'s cutthroat market, we saw how traditional marketing failed to keep up with the digital age.',
    'about.mission.2': 'We spent years building the tools we wished we had: systems that automate the grunt work, qualify leads while we sleep, and let us focus on what matters—closing deals.',
    'about.mission.3': 'Today, we empower individual agents with the same enterprise-grade technology used by global firms, leveling the playing field for everyone.',
    'about.stat.focus': 'Real Estate Focus',
    'about.stat.uptime': 'System Uptime',
    'about.stat.growth': 'Dedicated to Your Growth',
    'about.values.title': 'Our Core Values',
    'about.values.integrity': 'Agent-First',
    'about.values.integrity.desc': 'We build features that solve real problems, not just shiny toys.',
    'about.values.innovation': 'Transparency',
    'about.values.innovation.desc': 'No hidden fees or vanity metrics. We track what makes you money.',
    'about.values.results': 'Excellence',
    'about.values.results.desc': 'We believe every agent deserves world-class infrastructure.',
    'about.cta.title': 'Join the Revolution',
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
    'home.hero.cta.demo': '預約諮詢',
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
    'home.trusted.title': '深受頂尖發展商代理信賴',
    'home.how.title': '運作流程',
    'home.how.desc': '簡單三步，徹底轉型您的客源生成模式。',
    'home.how.1.title': '連接',
    'home.how.1.desc': '將您的樓盤和社交帳戶整合到我們的安全平台。',
    'home.how.2.title': '自動化',
    'home.how.2.desc': '我們的 AI 即時生成內容並啟動針對性廣告活動。',
    'home.how.3.title': '轉化',
    'home.how.3.desc': '直接在手機接收已預先篩選的合資格客源，隨時預約睇樓。',

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
    'services.feature.revisions': '無限次修改',
    'services.feature.weekly': '每週',
    'services.select': '選擇計劃',
    'services.popular': '最受歡迎',

    // About
    'about.title': '由代理建立，為代理而設',
    'about.desc': '我們不只是技術開發者。我們是深明市場運作的地產老手。',
    'about.mission.1': 'BasisHK 源於挫折。作為曾在香港競爭激烈的市場打拼的前線代理，我們親眼目睹傳統營銷如何未能跟上數碼時代的步伐。',
    'about.mission.2': '我們花費多年時間建立了我們夢寐以求的工具：這些系統能自動化繁瑣工作，在我們睡覺時篩選客源，讓我們能專注於最重要的事情——促成交易。',
    'about.mission.3': '今天，我們以跨國企業級的技術賦能個人代理，為每位專業人士創造公平的競爭環境。',
    'about.stat.focus': '專注地產',
    'about.stat.uptime': '系統正常運行',
    'about.stat.growth': '致力於您的增長',
    'about.values.title': '核心價值',
    'about.values.integrity': '代理優先',
    'about.values.integrity.desc': '我們開發能解決實際問題的功能，而非花巧的玩具。',
    'about.values.innovation': '透明度',
    'about.values.innovation.desc': '絕無隱藏收費或虛榮指標。我們只追蹤能為您帶來收益的數據。',
    'about.values.results': '卓越',
    'about.values.results.desc': '我們相信每位代理都值得擁有世界級的基建。',
    'about.cta.title': '加入革命',
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
