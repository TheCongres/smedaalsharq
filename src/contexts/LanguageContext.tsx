
import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Header
    'nav.home': 'Home',
    'nav.najeen': 'NAJEEN Services',
    'nav.sdood': 'SDOOD Services', 
    'nav.rammaz': 'RAMMAZ Services',
    'nav.about': 'About Us',
    'nav.contact': 'Contact',

    // Company
    'company.name': 'Smeda Al Sharq',
    'company.subtitle': 'Trading Establishment',

    // Hero
    'hero.description': 'An organization interested in creativity and excellence in ideas and systems, providing innovative, practical and high-quality products.',
    'hero.exploreServices': 'Our Services',
    'hero.learnMore': 'Learn More',

    // Location & Contact Info
    'contact.location': 'Saudi Arabia, Eastern Province',
    'contact.country': 'Saudi Arabia',
    'contact.region': 'Eastern Province',
    'contact.phoneNumber': '+966 54 910 5511',
    'contact.emailAddress': 'mushabab.ceo@smedaalsharq.com',

    // Services
    'sdood.title': 'SDOOD',
    'sdood.description': 'We provide construction and renovation services, along with high-quality building tools and equipment, led by a team of skilled engineers to ensure professional and safe execution.',
    'sdood.category': 'Construction & Building',
    'sdood.fullDescription': 'SDOOD specializes in providing comprehensive construction and renovation services. Our experienced team of engineers and craftsmen ensures that every project meets the highest standards of quality and safety.',
    'sdood.services.title': 'Our Construction Services',
    'sdood.services.construction': 'General Construction',
    'sdood.services.construction.description': 'Complete construction services from foundation to finishing',
    'sdood.services.renovation': 'Renovation & Remodeling',
    'sdood.services.renovation.description': 'Professional renovation and remodeling for residential and commercial projects',
    'sdood.services.tools': 'Building Tools & Equipment',
    'sdood.services.tools.description': 'High-quality building tools and equipment supply',
    'sdood.services.consultation': 'Engineering Consultation',
    'sdood.services.consultation.description': 'Expert engineering consultation and project planning',
    'sdood.cta.title': 'Ready to Build Your Dream Project?',
    'sdood.cta.description': 'Contact our construction experts today to discuss your building needs and get a detailed project proposal.',
    'sdood.cta.button': 'Start Your Project',

    'najeen.title': 'NAJEEN', 
    'najeen.description': 'We offer safety tools, industrial solutions, and consultancy and training services, powered by an innovative team developing smart solutions to protect work environments.',
    'najeen.category': 'Industrial Safety',
    'najeen.fullDescription': 'NAJEEN is dedicated to creating safer work environments through innovative safety solutions and comprehensive training programs. Our team develops smart tools and systems to protect workers across various industries.',
    'najeen.services.title': 'Our Safety Services',
    'najeen.services.safety': 'Safety Equipment & Tools',
    'najeen.services.safety.description': 'High-quality safety equipment and protective tools for all industries',
    'najeen.services.training': 'Safety Training Programs',
    'najeen.services.training.description': 'Comprehensive training programs to ensure workplace safety compliance',
    'najeen.services.assessment': 'Risk Assessment',
    'najeen.services.assessment.description': 'Professional risk assessment and safety auditing services',
    'najeen.services.consultation': 'Industrial Safety Consultation',
    'najeen.services.consultation.description': 'Expert consultation for industrial safety system implementation',
    'najeen.cta.title': 'Ready to Enhance Your Workplace Safety?',
    'najeen.cta.description': 'Contact our safety experts today to discuss your industrial safety needs and get a customized solution.',
    'najeen.cta.button': 'Get Started Today',

    'rammaz.title': 'RAMMAZ',
    'rammaz.description': 'We develop websites and smart applications, delivering innovative digital solutions that support digital transformation and contribute to business growth, powered by a creative team of developers and designers.',
    'rammaz.category': 'Digital Solutions',
    'rammaz.fullDescription': 'RAMMAZ transforms businesses through innovative digital solutions. Our creative team of developers and designers creates websites, mobile applications, and digital platforms that drive growth and enhance user experiences.',
    'rammaz.services.title': 'Our Digital Services',
    'rammaz.services.web': 'Website Development',
    'rammaz.services.web.description': 'Modern, responsive websites that drive business growth',
    'rammaz.services.mobile': 'Mobile Applications',
    'rammaz.services.mobile.description': 'Native and cross-platform mobile applications',
    'rammaz.services.systems': 'Business Systems',
    'rammaz.services.systems.description': 'Custom business systems and enterprise solutions',
    'rammaz.services.consultation': 'Digital Transformation Consultation',
    'rammaz.services.consultation.description': 'Strategic digital transformation consulting',
    'rammaz.cta.title': 'Ready to Transform Your Business Digitally?',
    'rammaz.cta.description': 'Contact our digital experts today to discuss your technology needs and create innovative solutions that drive growth.',
    'rammaz.cta.button': 'Start Your Digital Journey',

    // About
    'about.title': 'About Us',
    'about.companyName': 'Smeda Al Sharq Trading Establishment',
    'about.companyDescription': 'An organization interested in creativity and excellence in ideas and systems. We specialize in providing innovative, practical and high-quality products. All our products have the full care to appear in perfect looking.',
    'about.mission': 'Our Mission',
    'about.missionText': 'To deliver excellence in industrial solutions through innovative products and exceptional service quality that meets the highest standards.',
    'about.vision': 'Our Vision',
    'about.visionText': 'To be the leading provider of industrial solutions in the region, recognized for our commitment to quality, innovation, and customer satisfaction.',
    'about.history.title': 'Our Story',
    'about.history.text': 'Founded with a vision to transform industrial solutions in the Eastern Province, Smeda Al Sharq has grown from a small trading establishment to a comprehensive service provider. Our journey is marked by continuous innovation and unwavering commitment to excellence.',
    'about.achievements.innovation': 'Building the future with ideas',
    'about.achievements.solutions': 'Innovation and practical solutions',
    'about.achievements.quality': 'High-quality products and services',
    'about.achievements.presentation': 'Perfect presentation and care',
    'about.values.title': 'Our Values',
    'about.values.innovation': 'Innovation',
    'about.values.innovationText': 'Continuously developing creative solutions for complex challenges.',
    'about.values.quality': 'Quality',
    'about.values.qualityText': 'Maintaining the highest standards in all our products and services.',
    'about.values.excellence': 'Excellence',
    'about.values.excellenceText': 'Striving for perfection in every project we undertake.',
    'about.values.integrity': 'Integrity',
    'about.values.integrityText': 'Building lasting relationships through trust and transparency.',

    // Services Section
    'services.title': 'Our Services',
    'services.subtitle': 'Design with Excellence - Comprehensive solutions for industrial and commercial needs',
    'services.explore': 'Explore Services',

    // Contact
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Get in touch with our team for all your industrial and security needs',
    'contact.getInTouch': 'Get In Touch',
    'contact.description': 'Ready to discuss your project? Our team of experts is here to provide you with innovative solutions tailored to your specific needs.',
    'contact.address': 'Address',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.hours': 'Business Hours',
    'contact.hoursText': 'Sunday - Thursday: 8:00 AM - 6:00 PM\nFriday - Saturday: Closed',
    'contact.sendMessage': 'Send us a message',
    'contact.firstName': 'First Name',
    'contact.lastName': 'Last Name',
    'contact.serviceInterest': 'Service Interest',
    'contact.message': 'Message',
    'contact.messagePlaceholder': 'Tell us about your project requirements...',
    'contact.submit': 'Send Message',
    'contact.selectService': 'Select a service',
    'contact.serviceOptions.najeen': 'NAJEEN - Safety Solutions',
    'contact.serviceOptions.sdood': 'SDOOD - Construction & Building',
    'contact.serviceOptions.rammaz': 'RAMMAZ - Digital Solutions',
    'contact.serviceOptions.multiple': 'Multiple Services',
    'contact.serviceOptions.other': 'Other',

    // Page titles
    'pages.najeen': 'NAJEEN - Industrial Safety Solutions',
    'pages.sdood': 'SDOOD - Construction & Building Services',
    'pages.rammaz': 'RAMMAZ - Digital Solutions & Development',
    'pages.about': 'About Smeda Al Sharq - Our Story & Values',

    // Footer
    'footer.description': 'An organization interested in creativity and excellence in ideas and systems, providing innovative, practical and high-quality products.',
    'footer.services': 'Our Services',
    'footer.contactInfo': 'Contact Information',
    'footer.businessHours': 'Business Hours:',
    'footer.copyright': '© 2024 Smeda Al Sharq Trading Establishment. All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.consultation': 'Consultation Services'
  },
  ar: {
    // Header
    'nav.home': 'الرئيسية',
    'nav.najeen': 'خدمات ناجين',
    'nav.sdood': 'خدمات سدود',
    'nav.rammaz': 'خدمات رماز',
    'nav.about': 'من نحن',
    'nav.contact': 'اتصل بنا',

    // Company
    'company.name': 'سميدع الشرق',
    'company.subtitle': 'مؤسسة تجارية',

    // Hero
    'hero.description': 'مؤسسة مهتمة بالإبداع والتميز في الأفكار والأنظمة، وتقديم منتجات مبتكرة وعملية وعالية الجودة.',
    'hero.exploreServices': 'خدماتنا',
    'hero.learnMore': 'اعرف المزيد',

    // Location & Contact Info
    'contact.location': 'المملكة العربية السعودية، المنطقة الشرقية',
    'contact.country': 'المملكة العربية السعودية',
    'contact.region': 'المنطقة الشرقية',
    "contact.phoneNumber": "+966 54 910 5511 ",
    'contact.emailAddress': 'mushabab.ceo@smedaalsharq.com', 

    // Services
    'sdood.title': 'سدود',
    'sdood.description': 'نقدم خدمات البناء والترميم، وبيع أدوات ومعدات البناء بجودة عالية، بقيادة فريق من المهندسين المتميزين لضمان تنفيذ احترافي وآمن.',
    'sdood.category': 'البناء والتشييد',
    'sdood.fullDescription': 'سدود متخصصة في تقديم خدمات البناء والترميم الشاملة. فريقنا المتمرس من المهندسين والحرفيين يضمن أن كل مشروع يلبي أعلى معايير الجودة والسلامة.',
    'sdood.services.title': 'خدمات البناء لدينا',
    'sdood.services.construction': 'البناء العام',
    'sdood.services.construction.description': 'خدمات البناء الكاملة من الأساس إلى التشطيب',
    'sdood.services.renovation': 'الترميم والتجديد',
    'sdood.services.renovation.description': 'خدمات ترميم وتجديد احترافية للمشاريع السكنية والتجارية',
    'sdood.services.tools': 'أدوات ومعدات البناء',
    'sdood.services.tools.description': 'توريد أدوات ومعدات البناء عالية الجودة',
    'sdood.services.consultation': 'الاستشارات الهندسية',
    'sdood.services.consultation.description': 'استشارات هندسية خبيرة وتخطيط المشاريع',
    'sdood.cta.title': 'مستعد لبناء مشروع أحلامك؟',
    'sdood.cta.description': 'تواصل مع خبراء البناء لدينا اليوم لمناقشة احتياجات البناء الخاصة بك والحصول على اقتراح مشروع مفصل.',
    'sdood.cta.button': 'ابدأ مشروعك',

    'najeen.title': 'ناجين',
    'najeen.description': 'نوفر أدوات السلامة، وحلول المصانع، وخدمات الاستشارات والتدريب، من خلال فريق ابتكاري يطور حلولًا ذكية لحماية بيئات العمل.',
    'najeen.category': 'السلامة الصناعية',
    'najeen.fullDescription': 'ناجين مكرسة لإنشاء بيئات عمل أكثر أماناً من خلال حلول السلامة المبتكرة وبرامج التدريب الشاملة. فريقنا يطور أدوات وأنظمة ذكية لحماية العمال عبر مختلف الصناعات.',
    'najeen.services.title': 'خدمات السلامة لدينا',
    'najeen.services.safety': 'معدات وأدوات السلامة',
    'najeen.services.safety.description': 'معدات سلامة عالية الجودة وأدوات حماية لجميع الصناعات',
    'najeen.services.training': 'برامج التدريب على السلامة',
    'najeen.services.training.description': 'برامج تدريب شاملة لضمان الامتثال لسلامة مكان العمل',
    'najeen.services.assessment': 'تقييم المخاطر',
    'najeen.services.assessment.description': 'خدمات تقييم المخاطر المهنية ومراجعة السلامة',
    'najeen.services.consultation': 'استشارات السلامة الصناعية',
    'najeen.services.consultation.description': 'استشارات خبيرة لتنفيذ أنظمة السلامة الصناعية',
    'najeen.cta.title': 'مستعد لتعزيز سلامة مكان العمل؟',
    'najeen.cta.description': 'تواصل مع خبراء السلامة لدينا اليوم لمناقشة احتياجات السلامة الصناعية والحصول على حل مخصص.',
    'najeen.cta.button': 'ابدأ اليوم',

    'rammaz.title': 'رماز',
    'rammaz.description': 'نطور المواقع الإلكترونية والتطبيقات الذكية، ونقدم حلولًا رقمية مبتكرة تدعم التحول الرقمي وتسهم في نمو الأعمال، عبر فريق مبدع من المبرمجين والمصممين.',
    'rammaz.category': 'الحلول الرقمية',
    'rammaz.fullDescription': 'رماز تحول الأعمال من خلال الحلول الرقمية المبتكرة. فريقنا المبدع من المطورين والمصممين ينشئ مواقع الويب وتطبيقات الجوال والمنصات الرقمية التي تدفع النمو وتحسن تجارب المستخدمين.',
    'rammaz.services.title': 'خدماتنا الرقمية',
    'rammaz.services.web': 'تطوير المواقع الإلكترونية',
    'rammaz.services.web.description': 'مواقع ويب حديثة ومتجاوبة تدفع نمو الأعمال',
    'rammaz.services.mobile': 'تطبيقات الجوال',
    'rammaz.services.mobile.description': 'تطبيقات الجوال الأصلية ومتعددة المنصات',
    'rammaz.services.systems': 'أنظمة الأعمال',
    'rammaz.services.systems.description': 'أنظمة أعمال مخصصة وحلول المؤسسات',
    'rammaz.services.consultation': 'استشارات التحول الرقمي',
    'rammaz.services.consultation.description': 'استشارات استراتيجية للتحول الرقمي',
    'rammaz.cta.title': 'مستعد لتحويل عملك رقمياً؟',
    'rammaz.cta.description': 'تواصل مع خبرائنا الرقميين اليوم لمناقشة احتياجاتك التقنية وإنشاء حلول مبتكرة تدفع النمو.',
    'rammaz.cta.button': 'ابدأ رحلتك الرقمية',

    // About
    'about.title': 'من نحن',
    'about.companyName': 'مؤسسة سميدع الشرق التجارية',
    'about.companyDescription': 'مؤسسة مهتمة بالإبداع والتميز في الأفكار والأنظمة. نتخصص في تقديم منتجات مبتكرة وعملية وعالية الجودة. جميع منتجاتنا تحظى بالعناية الكاملة لتظهر في شكل مثالي.',
    'about.mission': 'مهمتنا',
    'about.missionText': 'تقديم التميز في الحلول الصناعية من خلال المنتجات المبتكرة وجودة الخدمة الاستثنائية التي تلبي أعلى المعايير.',
    'about.vision': 'رؤيتنا',
    'about.visionText': 'أن نكون المزود الرائد للحلول الصناعية في المنطقة، معترف بنا لالتزامنا بالجودة والابتكار ورضا العملاء.',
    'about.history.title': 'قصتنا',
    'about.history.text': 'تأسست برؤية لتحويل الحلول الصناعية في المنطقة الشرقية، نمت سميدع الشرق من مؤسسة تجارية صغيرة إلى مزود خدمات شامل. رحلتنا تتميز بالابتكار المستمر والالتزام الثابت بالتميز.',
    'about.achievements.innovation': 'بناء المستقبل بالأفكار',
    'about.achievements.solutions': 'الابتكار والحلول العملية',
    'about.achievements.quality': 'منتجات وخدمات عالية الجودة',
    'about.achievements.presentation': 'العرض المثالي والعناية',
    'about.values.title': 'قيمنا',
    'about.values.innovation': 'الابتكار',
    'about.values.innovationText': 'التطوير المستمر للحلول الإبداعية للتحديات المعقدة.',
    'about.values.quality': 'الجودة',
    'about.values.qualityText': 'الحفاظ على أعلى المعايير في جميع منتجاتنا وخدماتنا.',
    'about.values.excellence': 'التميز',
    'about.values.excellenceText': 'السعي للكمال في كل مشروع نقوم به.',
    'about.values.integrity': 'النزاهة',
    'about.values.integrityText': 'بناء علاقات دائمة من خلال الثقة والشفافية.',

    // Services Section
    'services.title': 'خدماتنا',
    'services.subtitle': 'تصميم بامتياز - حلول شاملة للاحتياجات الصناعية والتجارية',
    'services.explore': 'استكشف الخدمات',

    // Contact
    'contact.title': 'اتصل بنا',
    'contact.subtitle': 'تواصل مع فريقنا لجميع احتياجاتك الصناعية والأمنية',
    'contact.getInTouch': 'تواصل معنا',
    'contact.description': 'مستعد لمناقشة مشروعك؟ فريق الخبراء لدينا هنا لتزويدك بحلول مبتكرة مصممة خصيصًا لاحتياجاتك المحددة.',
    'contact.address': 'العنوان',
    'contact.phone': 'الهاتف',
    'contact.email': 'البريد الإلكتروني',
    'contact.hours': 'ساعات العمل',
    'contact.hoursText': 'الأحد - الخميس: 8:00 ص - 6:00 م\nالجمعة - السبت: مغلق',
    'contact.sendMessage': 'أرسل لنا رسالة',
    'contact.firstName': 'الاسم الأول',
    'contact.lastName': 'اسم العائلة',
    'contact.serviceInterest': 'الخدمة المطلوبة',
    'contact.message': 'الرسالة',
    'contact.messagePlaceholder': 'أخبرنا عن متطلبات مشروعك...',
    'contact.submit': 'إرسال الرسالة',
    'contact.selectService': 'اختر خدمة',
    'contact.serviceOptions.najeen': 'ناجين - حلول السلامة',
    'contact.serviceOptions.sdood': 'سدود - البناء والتشييد',
    'contact.serviceOptions.rammaz': 'رماز - الحلول الرقمية',
    'contact.serviceOptions.multiple': 'خدمات متعددة',
    'contact.serviceOptions.other': 'أخرى',

    // Page titles
    'pages.najeen': 'ناجين - حلول السلامة الصناعية',
    'pages.sdood': 'سدود - خدمات البناء والتشييد',
    'pages.rammaz': 'رماز - الحلول الرقمية والتطوير',
    'pages.about': 'من نحن - قصتنا وقيمنا',

    // Footer
    'footer.description': 'مؤسسة مهتمة بالإبداع والتميز في الأفكار والأنظمة، وتقديم منتجات مبتكرة وعملية وعالية الجودة.',
    'footer.services': 'خدماتنا',
    'footer.contactInfo': 'معلومات الاتصال',
    'footer.businessHours': 'ساعات العمل:',
    'footer.copyright': '© 2024 مؤسسة سميدع الشرق التجارية. جميع الحقوق محفوظة.',
    'footer.privacy': 'سياسة الخصوصية',
    'footer.terms': 'شروط الخدمة',
    'footer.consultation': 'خدمات الاستشارات'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      <div className={language === 'ar' ? 'rtl' : 'ltr'} dir={language === 'ar' ? 'rtl' : 'ltr'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
