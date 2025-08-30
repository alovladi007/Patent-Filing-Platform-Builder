// Internationalization (i18n) module for LUMA IP
const i18n = {
    // Current language
    currentLang: 'en',
    
    // Available languages
    languages: {
        en: { name: 'English', flag: '🇺🇸' },
        es: { name: 'Español', flag: '🇪🇸' },
        fr: { name: 'Français', flag: '🇫🇷' },
        zh: { name: '中文', flag: '🇨🇳' }
    },
    
    // Translations
    translations: {
        en: {
            // Navigation
            'nav.home': 'Home',
            'nav.features': 'Features',
            'nav.demo': 'Demo',
            'nav.pricing': 'Pricing',
            'nav.contact': 'Contact',
            'nav.getStarted': 'Get Started',
            
            // Hero Section
            'hero.title': 'Legal Utility for Machine Assisted IP Analysis',
            'hero.subtitle': 'Revolutionize your patent filing process with AI-powered automation',
            'hero.description': 'LUMA IP combines cutting-edge artificial intelligence with legal expertise to streamline patent applications, reduce costs, and accelerate innovation.',
            'hero.cta.demo': 'Try Demo',
            'hero.cta.learn': 'Learn More',
            
            // Features
            'features.title': 'Why Choose LUMA IP?',
            'features.subtitle': 'Experience the future of intellectual property management',
            'features.ai.title': 'AI-Powered Analysis',
            'features.ai.description': 'Advanced machine learning algorithms analyze prior art and optimize patent claims',
            'features.automation.title': 'Automated Workflows',
            'features.automation.description': 'Streamline filing processes with intelligent automation and templates',
            'features.collaboration.title': 'Team Collaboration',
            'features.collaboration.description': 'Real-time collaboration tools for legal teams and inventors',
            'features.security.title': 'Enterprise Security',
            'features.security.description': 'Bank-level encryption and compliance with international IP regulations',
            'features.analytics.title': 'Analytics Dashboard',
            'features.analytics.description': 'Comprehensive insights into your IP portfolio and filing metrics',
            'features.support.title': '24/7 Support',
            'features.support.description': 'Expert assistance from IP professionals whenever you need it',
            
            // Demo Section
            'demo.title': 'See LUMA IP in Action',
            'demo.subtitle': 'Experience our intelligent patent filing system',
            'demo.step1': 'Upload your invention disclosure',
            'demo.step2': 'AI analyzes and suggests optimal claims',
            'demo.step3': 'Review and refine with expert guidance',
            'demo.step4': 'File with confidence',
            'demo.cta': 'Start Free Trial',
            
            // Pricing
            'pricing.title': 'Choose Your Plan',
            'pricing.subtitle': 'Flexible pricing for teams of all sizes',
            'pricing.starter.title': 'Starter',
            'pricing.starter.price': '$299/month',
            'pricing.starter.feature1': 'Up to 5 patent filings/month',
            'pricing.starter.feature2': 'Basic AI analysis',
            'pricing.starter.feature3': 'Email support',
            'pricing.professional.title': 'Professional',
            'pricing.professional.price': '$999/month',
            'pricing.professional.feature1': 'Unlimited patent filings',
            'pricing.professional.feature2': 'Advanced AI features',
            'pricing.professional.feature3': 'Priority support',
            'pricing.professional.feature4': 'Team collaboration',
            'pricing.enterprise.title': 'Enterprise',
            'pricing.enterprise.price': 'Custom',
            'pricing.enterprise.feature1': 'Custom AI training',
            'pricing.enterprise.feature2': 'Dedicated account manager',
            'pricing.enterprise.feature3': 'On-premise deployment',
            'pricing.enterprise.feature4': 'SLA guarantee',
            
            // Contact
            'contact.title': 'Get in Touch',
            'contact.subtitle': 'Ready to transform your IP management?',
            'contact.form.name': 'Your Name',
            'contact.form.email': 'Email Address',
            'contact.form.company': 'Company',
            'contact.form.message': 'Message',
            'contact.form.submit': 'Send Message',
            
            // Footer
            'footer.company': 'Company',
            'footer.about': 'About Us',
            'footer.careers': 'Careers',
            'footer.blog': 'Blog',
            'footer.product': 'Product',
            'footer.features': 'Features',
            'footer.pricing': 'Pricing',
            'footer.integrations': 'Integrations',
            'footer.legal': 'Legal',
            'footer.privacy': 'Privacy Policy',
            'footer.terms': 'Terms of Service',
            'footer.copyright': '© 2024 LUMA IP. All rights reserved.'
        },
        
        es: {
            // Navigation
            'nav.home': 'Inicio',
            'nav.features': 'Características',
            'nav.demo': 'Demo',
            'nav.pricing': 'Precios',
            'nav.contact': 'Contacto',
            'nav.getStarted': 'Comenzar',
            
            // Hero Section
            'hero.title': 'Utilidad Legal para Análisis de PI Asistido por Máquina',
            'hero.subtitle': 'Revolucione su proceso de solicitud de patentes con automatización impulsada por IA',
            'hero.description': 'LUMA IP combina inteligencia artificial de vanguardia con experiencia legal para agilizar las solicitudes de patentes, reducir costos y acelerar la innovación.',
            'hero.cta.demo': 'Probar Demo',
            'hero.cta.learn': 'Aprender Más',
            
            // Features
            'features.title': '¿Por qué elegir LUMA IP?',
            'features.subtitle': 'Experimente el futuro de la gestión de propiedad intelectual',
            'features.ai.title': 'Análisis con IA',
            'features.ai.description': 'Algoritmos avanzados de aprendizaje automático analizan el arte previo y optimizan las reivindicaciones de patentes',
            'features.automation.title': 'Flujos de Trabajo Automatizados',
            'features.automation.description': 'Agilice los procesos de presentación con automatización inteligente y plantillas',
            'features.collaboration.title': 'Colaboración en Equipo',
            'features.collaboration.description': 'Herramientas de colaboración en tiempo real para equipos legales e inventores',
            'features.security.title': 'Seguridad Empresarial',
            'features.security.description': 'Cifrado de nivel bancario y cumplimiento con las regulaciones internacionales de PI',
            'features.analytics.title': 'Panel de Análisis',
            'features.analytics.description': 'Información completa sobre su cartera de PI y métricas de presentación',
            'features.support.title': 'Soporte 24/7',
            'features.support.description': 'Asistencia experta de profesionales de PI cuando la necesite',
            
            // Demo Section
            'demo.title': 'Vea LUMA IP en Acción',
            'demo.subtitle': 'Experimente nuestro sistema inteligente de presentación de patentes',
            'demo.step1': 'Cargue su divulgación de invención',
            'demo.step2': 'La IA analiza y sugiere reivindicaciones óptimas',
            'demo.step3': 'Revise y perfeccione con orientación experta',
            'demo.step4': 'Presente con confianza',
            'demo.cta': 'Iniciar Prueba Gratuita',
            
            // Pricing
            'pricing.title': 'Elija Su Plan',
            'pricing.subtitle': 'Precios flexibles para equipos de todos los tamaños',
            'pricing.starter.title': 'Inicial',
            'pricing.starter.price': '$299/mes',
            'pricing.starter.feature1': 'Hasta 5 solicitudes de patente/mes',
            'pricing.starter.feature2': 'Análisis básico de IA',
            'pricing.starter.feature3': 'Soporte por correo',
            'pricing.professional.title': 'Profesional',
            'pricing.professional.price': '$999/mes',
            'pricing.professional.feature1': 'Solicitudes de patente ilimitadas',
            'pricing.professional.feature2': 'Funciones avanzadas de IA',
            'pricing.professional.feature3': 'Soporte prioritario',
            'pricing.professional.feature4': 'Colaboración en equipo',
            'pricing.enterprise.title': 'Empresa',
            'pricing.enterprise.price': 'Personalizado',
            'pricing.enterprise.feature1': 'Entrenamiento de IA personalizado',
            'pricing.enterprise.feature2': 'Gerente de cuenta dedicado',
            'pricing.enterprise.feature3': 'Implementación local',
            'pricing.enterprise.feature4': 'Garantía SLA',
            
            // Contact
            'contact.title': 'Póngase en Contacto',
            'contact.subtitle': '¿Listo para transformar su gestión de PI?',
            'contact.form.name': 'Su Nombre',
            'contact.form.email': 'Correo Electrónico',
            'contact.form.company': 'Empresa',
            'contact.form.message': 'Mensaje',
            'contact.form.submit': 'Enviar Mensaje',
            
            // Footer
            'footer.company': 'Empresa',
            'footer.about': 'Acerca de Nosotros',
            'footer.careers': 'Carreras',
            'footer.blog': 'Blog',
            'footer.product': 'Producto',
            'footer.features': 'Características',
            'footer.pricing': 'Precios',
            'footer.integrations': 'Integraciones',
            'footer.legal': 'Legal',
            'footer.privacy': 'Política de Privacidad',
            'footer.terms': 'Términos de Servicio',
            'footer.copyright': '© 2024 LUMA IP. Todos los derechos reservados.'
        },
        
        fr: {
            // Navigation
            'nav.home': 'Accueil',
            'nav.features': 'Fonctionnalités',
            'nav.demo': 'Démo',
            'nav.pricing': 'Tarifs',
            'nav.contact': 'Contact',
            'nav.getStarted': 'Commencer',
            
            // Hero Section
            'hero.title': 'Utilité Juridique pour l\'Analyse de PI Assistée par Machine',
            'hero.subtitle': 'Révolutionnez votre processus de dépôt de brevet avec l\'automatisation alimentée par l\'IA',
            'hero.description': 'LUMA IP combine l\'intelligence artificielle de pointe avec l\'expertise juridique pour rationaliser les demandes de brevet, réduire les coûts et accélérer l\'innovation.',
            'hero.cta.demo': 'Essayer la Démo',
            'hero.cta.learn': 'En Savoir Plus',
            
            // Features
            'features.title': 'Pourquoi Choisir LUMA IP?',
            'features.subtitle': 'Découvrez l\'avenir de la gestion de la propriété intellectuelle',
            'features.ai.title': 'Analyse par IA',
            'features.ai.description': 'Des algorithmes d\'apprentissage automatique avancés analysent l\'art antérieur et optimisent les revendications de brevet',
            'features.automation.title': 'Flux de Travail Automatisés',
            'features.automation.description': 'Rationalisez les processus de dépôt avec une automatisation intelligente et des modèles',
            'features.collaboration.title': 'Collaboration d\'Équipe',
            'features.collaboration.description': 'Outils de collaboration en temps réel pour les équipes juridiques et les inventeurs',
            'features.security.title': 'Sécurité d\'Entreprise',
            'features.security.description': 'Chiffrement de niveau bancaire et conformité aux réglementations internationales sur la PI',
            'features.analytics.title': 'Tableau de Bord Analytique',
            'features.analytics.description': 'Aperçus complets de votre portefeuille de PI et des métriques de dépôt',
            'features.support.title': 'Support 24/7',
            'features.support.description': 'Assistance experte de professionnels de la PI quand vous en avez besoin',
            
            // Demo Section
            'demo.title': 'Voir LUMA IP en Action',
            'demo.subtitle': 'Découvrez notre système intelligent de dépôt de brevet',
            'demo.step1': 'Téléchargez votre divulgation d\'invention',
            'demo.step2': 'L\'IA analyse et suggère des revendications optimales',
            'demo.step3': 'Examinez et affinez avec des conseils d\'experts',
            'demo.step4': 'Déposez en toute confiance',
            'demo.cta': 'Commencer l\'Essai Gratuit',
            
            // Pricing
            'pricing.title': 'Choisissez Votre Plan',
            'pricing.subtitle': 'Tarification flexible pour les équipes de toutes tailles',
            'pricing.starter.title': 'Débutant',
            'pricing.starter.price': '299$/mois',
            'pricing.starter.feature1': 'Jusqu\'à 5 dépôts de brevet/mois',
            'pricing.starter.feature2': 'Analyse IA de base',
            'pricing.starter.feature3': 'Support par email',
            'pricing.professional.title': 'Professionnel',
            'pricing.professional.price': '999$/mois',
            'pricing.professional.feature1': 'Dépôts de brevet illimités',
            'pricing.professional.feature2': 'Fonctionnalités IA avancées',
            'pricing.professional.feature3': 'Support prioritaire',
            'pricing.professional.feature4': 'Collaboration d\'équipe',
            'pricing.enterprise.title': 'Entreprise',
            'pricing.enterprise.price': 'Sur mesure',
            'pricing.enterprise.feature1': 'Formation IA personnalisée',
            'pricing.enterprise.feature2': 'Gestionnaire de compte dédié',
            'pricing.enterprise.feature3': 'Déploiement sur site',
            'pricing.enterprise.feature4': 'Garantie SLA',
            
            // Contact
            'contact.title': 'Contactez-nous',
            'contact.subtitle': 'Prêt à transformer votre gestion de la PI?',
            'contact.form.name': 'Votre Nom',
            'contact.form.email': 'Adresse Email',
            'contact.form.company': 'Entreprise',
            'contact.form.message': 'Message',
            'contact.form.submit': 'Envoyer le Message',
            
            // Footer
            'footer.company': 'Entreprise',
            'footer.about': 'À Propos',
            'footer.careers': 'Carrières',
            'footer.blog': 'Blog',
            'footer.product': 'Produit',
            'footer.features': 'Fonctionnalités',
            'footer.pricing': 'Tarifs',
            'footer.integrations': 'Intégrations',
            'footer.legal': 'Juridique',
            'footer.privacy': 'Politique de Confidentialité',
            'footer.terms': 'Conditions d\'Utilisation',
            'footer.copyright': '© 2024 LUMA IP. Tous droits réservés.'
        },
        
        zh: {
            // Navigation
            'nav.home': '首页',
            'nav.features': '功能',
            'nav.demo': '演示',
            'nav.pricing': '价格',
            'nav.contact': '联系',
            'nav.getStarted': '开始使用',
            
            // Hero Section
            'hero.title': '机器辅助知识产权分析法律工具',
            'hero.subtitle': '通过人工智能驱动的自动化革新您的专利申请流程',
            'hero.description': 'LUMA IP 将尖端人工智能与法律专业知识相结合，简化专利申请，降低成本，加速创新。',
            'hero.cta.demo': '试用演示',
            'hero.cta.learn': '了解更多',
            
            // Features
            'features.title': '为什么选择 LUMA IP？',
            'features.subtitle': '体验知识产权管理的未来',
            'features.ai.title': 'AI 驱动分析',
            'features.ai.description': '先进的机器学习算法分析现有技术并优化专利权利要求',
            'features.automation.title': '自动化工作流程',
            'features.automation.description': '通过智能自动化和模板简化申请流程',
            'features.collaboration.title': '团队协作',
            'features.collaboration.description': '为法律团队和发明人提供实时协作工具',
            'features.security.title': '企业级安全',
            'features.security.description': '银行级加密并符合国际知识产权法规',
            'features.analytics.title': '分析仪表板',
            'features.analytics.description': '全面了解您的知识产权组合和申请指标',
            'features.support.title': '24/7 支持',
            'features.support.description': '随时获得知识产权专业人士的专家协助',
            
            // Demo Section
            'demo.title': '查看 LUMA IP 实际操作',
            'demo.subtitle': '体验我们的智能专利申请系统',
            'demo.step1': '上传您的发明披露',
            'demo.step2': 'AI 分析并建议最佳权利要求',
            'demo.step3': '在专家指导下审查和完善',
            'demo.step4': '自信地提交申请',
            'demo.cta': '开始免费试用',
            
            // Pricing
            'pricing.title': '选择您的计划',
            'pricing.subtitle': '适合各种规模团队的灵活定价',
            'pricing.starter.title': '入门版',
            'pricing.starter.price': '$299/月',
            'pricing.starter.feature1': '每月最多5个专利申请',
            'pricing.starter.feature2': '基础 AI 分析',
            'pricing.starter.feature3': '电子邮件支持',
            'pricing.professional.title': '专业版',
            'pricing.professional.price': '$999/月',
            'pricing.professional.feature1': '无限专利申请',
            'pricing.professional.feature2': '高级 AI 功能',
            'pricing.professional.feature3': '优先支持',
            'pricing.professional.feature4': '团队协作',
            'pricing.enterprise.title': '企业版',
            'pricing.enterprise.price': '定制',
            'pricing.enterprise.feature1': '定制 AI 训练',
            'pricing.enterprise.feature2': '专属客户经理',
            'pricing.enterprise.feature3': '本地部署',
            'pricing.enterprise.feature4': 'SLA 保证',
            
            // Contact
            'contact.title': '联系我们',
            'contact.subtitle': '准备好转变您的知识产权管理了吗？',
            'contact.form.name': '您的姓名',
            'contact.form.email': '电子邮件地址',
            'contact.form.company': '公司',
            'contact.form.message': '留言',
            'contact.form.submit': '发送消息',
            
            // Footer
            'footer.company': '公司',
            'footer.about': '关于我们',
            'footer.careers': '职业',
            'footer.blog': '博客',
            'footer.product': '产品',
            'footer.features': '功能',
            'footer.pricing': '价格',
            'footer.integrations': '集成',
            'footer.legal': '法律',
            'footer.privacy': '隐私政策',
            'footer.terms': '服务条款',
            'footer.copyright': '© 2024 LUMA IP. 保留所有权利。'
        }
    },
    
    // Initialize i18n
    init() {
        // Get saved language from localStorage or browser language
        const savedLang = localStorage.getItem('language');
        const browserLang = navigator.language.substring(0, 2);
        
        if (savedLang && this.translations[savedLang]) {
            this.currentLang = savedLang;
        } else if (this.translations[browserLang]) {
            this.currentLang = browserLang;
        }
        
        // Apply translations
        this.updatePage();
        
        // Create language switcher
        this.createLanguageSwitcher();
    },
    
    // Get translation
    t(key) {
        return this.translations[this.currentLang][key] || this.translations['en'][key] || key;
    },
    
    // Change language
    changeLanguage(lang) {
        if (this.translations[lang]) {
            this.currentLang = lang;
            localStorage.setItem('language', lang);
            document.documentElement.lang = lang;
            this.updatePage();
            this.updateLanguageSwitcher();
        }
    },
    
    // Update page with translations
    updatePage() {
        // Update all elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = this.t(key);
            
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translation;
            } else {
                element.textContent = translation;
            }
        });
        
        // Update HTML lang attribute
        document.documentElement.lang = this.currentLang;
    },
    
    // Create language switcher UI
    createLanguageSwitcher() {
        const switcher = document.createElement('div');
        switcher.id = 'language-switcher';
        switcher.className = 'fixed top-20 right-4 bg-white rounded-lg shadow-lg p-2 z-50';
        switcher.innerHTML = `
            <div class="flex flex-col space-y-1">
                ${Object.entries(this.languages).map(([code, lang]) => `
                    <button 
                        onclick="i18n.changeLanguage('${code}')" 
                        class="lang-btn flex items-center space-x-2 px-3 py-2 rounded hover:bg-gray-100 transition-colors ${this.currentLang === code ? 'bg-indigo-50 text-indigo-600' : ''}"
                        data-lang="${code}"
                    >
                        <span class="text-xl">${lang.flag}</span>
                        <span class="text-sm font-medium">${lang.name}</span>
                    </button>
                `).join('')}
            </div>
        `;
        
        // Remove existing switcher if present
        const existing = document.getElementById('language-switcher');
        if (existing) existing.remove();
        
        document.body.appendChild(switcher);
    },
    
    // Update language switcher UI
    updateLanguageSwitcher() {
        document.querySelectorAll('.lang-btn').forEach(btn => {
            const lang = btn.getAttribute('data-lang');
            if (lang === this.currentLang) {
                btn.classList.add('bg-indigo-50', 'text-indigo-600');
            } else {
                btn.classList.remove('bg-indigo-50', 'text-indigo-600');
            }
        });
    }
};

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => i18n.init());
} else {
    i18n.init();
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = i18n;
}