// i18n implementation with dropdown in navigation bar
(function() {
    'use strict';
    
    const translations = {
        en: {
            // Navigation
            'nav.product': 'Product',
            'nav.features': 'Features',
            'nav.howItWorks': 'How It Works',
            'nav.demo': 'Demo',
            'nav.pricing': 'Pricing',
            'nav.security': 'Security',
            'nav.api': 'API',
            'nav.signIn': 'Sign In',
            'nav.getStarted': 'Get Started',
            
            // Hero
            'hero.title': 'Legal Utility for Machine Assisted IP Analysis',
            'hero.subtitle': 'Transform your patent filing process with advanced AI. Generate complete patent applications in minutes, not months. Powered by state-of-the-art language models.',
            'hero.watchDemo': 'Watch Demo',
            'hero.startFiling': 'Start Filing',
            
            // Stats
            'stats.patentsFiled': 'Patents Filed',
            'stats.grantRate': 'Grant Rate',
            'stats.timeSaved': 'Time Saved',
            'stats.lawFirms': 'Law Firms',
            
            // Features
            'features.title': 'Everything You Need for Patent Filing',
            'features.subtitle': 'A complete platform that handles the entire patent lifecycle',
            'features.aiDrafting.title': 'AI-Powered Drafting',
            'features.aiDrafting.description': 'Generate patent claims and specifications using GPT-4 trained on millions of patents',
            'features.usptoForms.title': 'USPTO Form Generation',
            'features.usptoForms.description': 'Automatically create ADS, IDS, and other USPTO forms with validated data',
            'features.priorArt.title': 'Prior Art Search',
            'features.priorArt.description': 'Vector-based semantic search through global patent databases',
            'features.docket.title': 'Docket Management',
            'features.docket.description': 'Never miss a deadline with automated tracking and reminders',
            'features.teamCollab.title': 'Team Collaboration',
            'features.teamCollab.description': 'Work together with role-based access control and real-time updates',
            'features.enterpriseSec.title': 'Enterprise Security',
            'features.enterpriseSec.description': 'Bank-level encryption, SOC 2 compliance, and audit trails',
            
            // Workflow
            'workflow.title': 'Simple 5-Step Process',
            'workflow.subtitle': 'From idea to filed patent in record time',
            'workflow.step1.title': 'Describe Your Invention',
            'workflow.step1.description': 'Input your invention details and technical specifications',
            'workflow.step2.title': 'AI Generation',
            'workflow.step2.description': 'Our LLM generates claims, specifications, and drawings',
            'workflow.step3.title': 'Prior Art Analysis',
            'workflow.step3.description': 'Automatic search and patentability scoring',
            'workflow.step4.title': 'Review & Edit',
            'workflow.step4.description': 'Refine the generated documents with AI assistance',
            'workflow.step5.title': 'File with USPTO',
            'workflow.step5.description': 'Submit directly or export for traditional filing',
            
            // Demo
            'demo.title': 'See LUMA IP in Action',
            'demo.subtitle': 'Experience the power of AI-driven patent filing',
            'demo.tabs.dashboard': 'Dashboard',
            'demo.tabs.filing': 'New Filing',
            'demo.tabs.portfolio': 'Portfolio',
            'demo.tabs.priorArt': 'Prior Art',
            'demo.dashboard.title': 'Patent Portfolio Dashboard',
            'demo.dashboard.activePatents': 'Active Patents',
            'demo.dashboard.pending': 'Pending',
            'demo.dashboard.deadlines': 'Deadlines',
            'demo.dashboard.portfolioValue': 'Portfolio Value',
            'demo.dashboard.recentActivity': 'Recent Activity',
            
            // CTA
            'cta.title': 'Ready to Revolutionize Your Patent Practice?',
            'cta.subtitle': 'Join thousands of patent professionals using LUMA IP',
            'cta.startTrial': 'Start Free Trial',
            'cta.scheduleDemo': 'Schedule Demo',
            
            // Footer
            'footer.tagline': 'Legal Utility for Machine Assisted IP Analysis',
            'footer.product': 'Product',
            'footer.productOverview': 'Product Overview',
            'footer.company': 'Company',
            'footer.features': 'Features',
            'footer.pricing': 'Pricing',
            'footer.security': 'Security',
            'footer.api': 'API',
            'footer.about': 'About',
            'footer.blog': 'Blog',
            'footer.careers': 'Careers',
            'footer.contact': 'Contact',
            'footer.legal': 'Legal',
            'footer.privacy': 'Privacy Policy',
            'footer.terms': 'Terms of Service',
            'footer.cookiePolicy': 'Cookie Policy',
            'footer.compliance': 'Compliance',
            'footer.copyright': '© 2024 LUMA IP. All rights reserved. Patent pending.',
            
            // Product Page
            'product.hero.title': 'The Complete Patent Platform',
            'product.hero.description': 'LUMA IP combines cutting-edge AI with legal expertise to streamline every aspect of patent filing, from initial drafting to final prosecution.',
            'product.platform.title': 'End-to-End Patent Management',
            'product.platform.description': 'Our platform handles every stage of the patent lifecycle, from invention disclosure to granted patent maintenance.',
            'product.platform.feature1.title': 'AI-Powered Drafting',
            'product.platform.feature1.description': 'Generate complete patent applications in minutes',
            'product.platform.feature2.title': 'Smart Prior Art Search',
            'product.platform.feature2.description': 'AI-powered semantic search across global databases',
            'product.platform.feature3.title': 'Automated Workflows',
            'product.platform.feature3.description': 'Streamline filing with intelligent automation',
            'product.components.title': 'Key Components',
            'product.components.ai.title': 'AI Engine',
            'product.components.ai.description': 'Advanced language models trained on millions of patents for accurate claim generation',
            'product.components.database.title': 'Patent Database',
            'product.components.database.description': 'Access to global patent databases with real-time updates and comprehensive coverage',
            'product.components.compliance.title': 'Compliance Tools',
            'product.components.compliance.description': 'Built-in compliance checks and USPTO form generation with validation',
            
            // Security Page
            'security.hero.title': 'Security First, Always',
            'security.hero.description': 'Your intellectual property is protected by enterprise-grade security, compliance certifications, and industry best practices.',
            'security.features.title': 'Security Features',
            'security.encryption.title': 'End-to-End Encryption',
            'security.encryption.description': 'All data is encrypted at rest with AES-256 and in transit with TLS 1.3',
            'security.access.title': 'Access Control',
            'security.access.description': 'Role-based access control with multi-factor authentication and SSO support',
            'security.audit.title': 'Audit Logging',
            'security.audit.description': 'Complete audit trail of all actions with tamper-proof logging',
            'security.infrastructure.title': 'Secure Infrastructure',
            'security.infrastructure.description': 'Hosted on SOC 2 compliant infrastructure with 99.99% uptime SLA',
            'security.threat.title': 'Threat Protection',
            'security.threat.description': 'Real-time threat detection with DDoS protection and WAF',
            'security.backup.title': 'Data Backup',
            'security.backup.description': 'Automated daily backups with point-in-time recovery',
            'security.compliance.title': 'Compliance & Certifications',
            'security.soc2': 'Certified compliant',
            'security.iso': 'Certified',
            'security.gdpr': 'Compliant',
            'security.ccpa': 'Compliant',
            
            // API Page
            'api.hero.title': 'Developer API',
            'api.hero.description': 'Integrate LUMA IP\'s patent automation capabilities into your applications with our RESTful API.',
            'api.endpoints.title': 'API Endpoints',
            
            // About Page
            'about.hero.title': 'About LUMA IP',
            'about.hero.description': 'We\'re on a mission to democratize patent filing and make intellectual property protection accessible to all innovators.',
            'about.mission.title': 'Our Mission',
            'about.mission.text': 'LUMA IP was founded with the belief that protecting innovation shouldn\'t be complicated or expensive. We combine cutting-edge AI technology with legal expertise to streamline the patent process.',
            
            // Contact Page
            'contact.hero.title': 'Get in Touch',
            'contact.hero.description': 'We\'re here to help with your patent needs',
            'contact.name': 'Name',
            'contact.email': 'Email',
            'contact.subject': 'Subject',
            'contact.message': 'Message',
            'contact.send': 'Send Message'
        },
        
        fr: {
            // Navigation
            'nav.product': 'Produit',
            'nav.features': 'Fonctionnalités',
            'nav.howItWorks': 'Comment ça Marche',
            'nav.demo': 'Démo',
            'nav.pricing': 'Tarifs',
            'nav.security': 'Sécurité',
            'nav.api': 'API',
            'nav.signIn': 'Se Connecter',
            'nav.getStarted': 'Commencer',
            
            // Hero
            'hero.title': 'Utilité Juridique pour l\'Analyse de PI Assistée par Machine',
            'hero.subtitle': 'Transformez votre processus de dépôt de brevet avec l\'IA avancée. Générez des demandes de brevet complètes en quelques minutes, pas en mois. Alimenté par des modèles de langage de pointe.',
            'hero.watchDemo': 'Voir la Démo',
            'hero.startFiling': 'Commencer le Dépôt',
            
            // Stats
            'stats.patentsFiled': 'Brevets Déposés',
            'stats.grantRate': 'Taux d\'Acceptation',
            'stats.timeSaved': 'Temps Économisé',
            'stats.lawFirms': 'Cabinets d\'Avocats',
            
            // Features
            'features.title': 'Tout ce dont Vous Avez Besoin pour le Dépôt de Brevets',
            'features.subtitle': 'Une plateforme complète qui gère tout le cycle de vie du brevet',
            'features.aiDrafting.title': 'Rédaction par IA',
            'features.aiDrafting.description': 'Générez des revendications et spécifications de brevets en utilisant GPT-4 formé sur des millions de brevets',
            'features.usptoForms.title': 'Génération de Formulaires USPTO',
            'features.usptoForms.description': 'Créez automatiquement des formulaires ADS, IDS et autres USPTO avec des données validées',
            'features.priorArt.title': 'Recherche d\'Art Antérieur',
            'features.priorArt.description': 'Recherche sémantique basée sur des vecteurs dans les bases de données mondiales de brevets',
            'features.docket.title': 'Gestion des Dossiers',
            'features.docket.description': 'Ne manquez jamais une échéance avec le suivi et les rappels automatisés',
            'features.teamCollab.title': 'Collaboration d\'Équipe',
            'features.teamCollab.description': 'Travaillez ensemble avec un contrôle d\'accès basé sur les rôles et des mises à jour en temps réel',
            'features.enterpriseSec.title': 'Sécurité d\'Entreprise',
            'features.enterpriseSec.description': 'Chiffrement de niveau bancaire, conformité SOC 2 et pistes d\'audit',
            
            // Workflow
            'workflow.title': 'Processus Simple en 5 Étapes',
            'workflow.subtitle': 'De l\'idée au brevet déposé en un temps record',
            'workflow.step1.title': 'Décrivez Votre Invention',
            'workflow.step1.description': 'Saisissez les détails de votre invention et les spécifications techniques',
            'workflow.step2.title': 'Génération par IA',
            'workflow.step2.description': 'Notre LLM génère des revendications, des spécifications et des dessins',
            'workflow.step3.title': 'Analyse de l\'Art Antérieur',
            'workflow.step3.description': 'Recherche automatique et notation de brevetabilité',
            'workflow.step4.title': 'Réviser et Éditer',
            'workflow.step4.description': 'Affinez les documents générés avec l\'assistance de l\'IA',
            'workflow.step5.title': 'Déposer auprès de l\'USPTO',
            'workflow.step5.description': 'Soumettez directement ou exportez pour un dépôt traditionnel',
            
            // Demo
            'demo.title': 'Voir LUMA IP en Action',
            'demo.subtitle': 'Découvrez la puissance du dépôt de brevet piloté par l\'IA',
            'demo.tabs.dashboard': 'Tableau de Bord',
            'demo.tabs.filing': 'Nouveau Dépôt',
            'demo.tabs.portfolio': 'Portefeuille',
            'demo.tabs.priorArt': 'Art Antérieur',
            'demo.dashboard.title': 'Tableau de Bord du Portefeuille de Brevets',
            'demo.dashboard.activePatents': 'Brevets Actifs',
            'demo.dashboard.pending': 'En Attente',
            'demo.dashboard.deadlines': 'Échéances',
            'demo.dashboard.portfolioValue': 'Valeur du Portefeuille',
            'demo.dashboard.recentActivity': 'Activité Récente',
            
            // CTA
            'cta.title': 'Prêt à Révolutionner Votre Pratique de Brevets?',
            'cta.subtitle': 'Rejoignez des milliers de professionnels du brevet utilisant LUMA IP',
            'cta.startTrial': 'Commencer l\'Essai Gratuit',
            'cta.scheduleDemo': 'Planifier une Démo',
            
            // Footer
            'footer.tagline': 'Utilité Juridique pour l\'Analyse de PI Assistée par Machine',
            'footer.product': 'Produit',
            'footer.company': 'Entreprise',
            'footer.features': 'Fonctionnalités',
            'footer.pricing': 'Tarifs',
            'footer.security': 'Sécurité',
            'footer.api': 'API',
            'footer.about': 'À Propos',
            'footer.blog': 'Blog',
            'footer.careers': 'Carrières',
            'footer.contact': 'Contact',
            'footer.legal': 'Juridique',
            'footer.privacy': 'Politique de Confidentialité',
            'footer.terms': 'Conditions d\'Utilisation',
            'footer.cookiePolicy': 'Politique de Cookies',
            'footer.compliance': 'Conformité',
            'footer.copyright': '© 2024 LUMA IP. Tous droits réservés. Brevet en instance.'
        },
        
        es: {
            // Navigation
            'nav.product': 'Producto',
            'nav.features': 'Características',
            'nav.howItWorks': 'Cómo Funciona',
            'nav.demo': 'Demo',
            'nav.pricing': 'Precios',
            'nav.security': 'Seguridad',
            'nav.api': 'API',
            'nav.signIn': 'Iniciar Sesión',
            'nav.getStarted': 'Comenzar',
            
            // Hero
            'hero.title': 'Utilidad Legal para Análisis de PI Asistido por Máquina',
            'hero.subtitle': 'Transforme su proceso de solicitud de patentes con IA avanzada. Genere solicitudes de patentes completas en minutos, no meses. Impulsado por modelos de lenguaje de última generación.',
            'hero.watchDemo': 'Ver Demo',
            'hero.startFiling': 'Comenzar Solicitud',
            
            // Stats
            'stats.patentsFiled': 'Patentes Presentadas',
            'stats.grantRate': 'Tasa de Concesión',
            'stats.timeSaved': 'Tiempo Ahorrado',
            'stats.lawFirms': 'Firmas de Abogados',
            
            // Features
            'features.title': 'Todo lo que Necesita para Presentar Patentes',
            'features.subtitle': 'Una plataforma completa que maneja todo el ciclo de vida de la patente',
            'features.aiDrafting.title': 'Redacción con IA',
            'features.aiDrafting.description': 'Genere reivindicaciones y especificaciones de patentes usando GPT-4 entrenado en millones de patentes',
            'features.usptoForms.title': 'Generación de Formularios USPTO',
            'features.usptoForms.description': 'Cree automáticamente ADS, IDS y otros formularios USPTO con datos validados',
            'features.priorArt.title': 'Búsqueda de Arte Previo',
            'features.priorArt.description': 'Búsqueda semántica basada en vectores a través de bases de datos globales de patentes',
            'features.docket.title': 'Gestión de Expedientes',
            'features.docket.description': 'Nunca pierda una fecha límite con seguimiento y recordatorios automatizados',
            'features.teamCollab.title': 'Colaboración en Equipo',
            'features.teamCollab.description': 'Trabajen juntos con control de acceso basado en roles y actualizaciones en tiempo real',
            'features.enterpriseSec.title': 'Seguridad Empresarial',
            'features.enterpriseSec.description': 'Cifrado de nivel bancario, cumplimiento SOC 2 y registros de auditoría',
            
            // Workflow
            'workflow.title': 'Proceso Simple de 5 Pasos',
            'workflow.subtitle': 'De la idea a la patente presentada en tiempo récord',
            'workflow.step1.title': 'Describa Su Invención',
            'workflow.step1.description': 'Ingrese los detalles de su invención y especificaciones técnicas',
            'workflow.step2.title': 'Generación con IA',
            'workflow.step2.description': 'Nuestro LLM genera reivindicaciones, especificaciones y dibujos',
            'workflow.step3.title': 'Análisis de Arte Previo',
            'workflow.step3.description': 'Búsqueda automática y puntuación de patentabilidad',
            'workflow.step4.title': 'Revisar y Editar',
            'workflow.step4.description': 'Perfeccione los documentos generados con asistencia de IA',
            'workflow.step5.title': 'Presentar ante USPTO',
            'workflow.step5.description': 'Envíe directamente o exporte para presentación tradicional',
            
            // Demo
            'demo.title': 'Vea LUMA IP en Acción',
            'demo.subtitle': 'Experimente el poder de la presentación de patentes impulsada por IA',
            'demo.tabs.dashboard': 'Panel',
            'demo.tabs.filing': 'Nueva Solicitud',
            'demo.tabs.portfolio': 'Portafolio',
            'demo.tabs.priorArt': 'Arte Previo',
            'demo.dashboard.title': 'Panel de Portafolio de Patentes',
            'demo.dashboard.activePatents': 'Patentes Activas',
            'demo.dashboard.pending': 'Pendientes',
            'demo.dashboard.deadlines': 'Fechas Límite',
            'demo.dashboard.portfolioValue': 'Valor del Portafolio',
            'demo.dashboard.recentActivity': 'Actividad Reciente',
            
            // CTA
            'cta.title': '¿Listo para Revolucionar su Práctica de Patentes?',
            'cta.subtitle': 'Únase a miles de profesionales de patentes que usan LUMA IP',
            'cta.startTrial': 'Iniciar Prueba Gratuita',
            'cta.scheduleDemo': 'Programar Demo',
            
            // Footer
            'footer.tagline': 'Utilidad Legal para Análisis de PI Asistido por Máquina',
            'footer.product': 'Producto',
            'footer.company': 'Empresa',
            'footer.features': 'Características',
            'footer.pricing': 'Precios',
            'footer.security': 'Seguridad',
            'footer.api': 'API',
            'footer.about': 'Acerca de Nosotros',
            'footer.blog': 'Blog',
            'footer.careers': 'Carreras',
            'footer.legal': 'Legal',
            'footer.privacy': 'Política de Privacidad',
            'footer.terms': 'Términos de Servicio',
            'footer.cookiePolicy': 'Política de Cookies',
            'footer.compliance': 'Cumplimiento',
            'footer.copyright': '© 2024 LUMA IP. Todos los derechos reservados. Patente pendiente.'
        },
        
        zh: {
            // Navigation
            'nav.product': '产品',
            'nav.features': '功能',
            'nav.howItWorks': '工作原理',
            'nav.demo': '演示',
            'nav.pricing': '价格',
            'nav.security': '安全',
            'nav.api': 'API',
            'nav.signIn': '登录',
            'nav.getStarted': '开始使用',
            
            // Hero
            'hero.title': '机器辅助知识产权分析法律工具',
            'hero.subtitle': '使用先进的人工智能转变您的专利申请流程。在几分钟内生成完整的专利申请，而不是几个月。由最先进的语言模型提供支持。',
            'hero.watchDemo': '观看演示',
            'hero.startFiling': '开始申请',
            
            // Stats
            'stats.patentsFiled': '已申请专利',
            'stats.grantRate': '授权率',
            'stats.timeSaved': '节省时间',
            'stats.lawFirms': '律师事务所',
            
            // Features
            'features.title': '专利申请所需的一切',
            'features.subtitle': '处理整个专利生命周期的完整平台',
            'features.aiDrafting.title': 'AI 驱动起草',
            'features.aiDrafting.description': '使用在数百万专利上训练的 GPT-4 生成专利权利要求和说明书',
            'features.usptoForms.title': 'USPTO 表格生成',
            'features.usptoForms.description': '使用经过验证的数据自动创建 ADS、IDS 和其他 USPTO 表格',
            'features.priorArt.title': '现有技术搜索',
            'features.priorArt.description': '通过全球专利数据库进行基于向量的语义搜索',
            'features.docket.title': '案卷管理',
            'features.docket.description': '通过自动跟踪和提醒，永不错过截止日期',
            'features.teamCollab.title': '团队协作',
            'features.teamCollab.description': '通过基于角色的访问控制和实时更新一起工作',
            'features.enterpriseSec.title': '企业级安全',
            'features.enterpriseSec.description': '银行级加密、SOC 2 合规性和审计跟踪',
            
            // Workflow
            'workflow.title': '简单的5步流程',
            'workflow.subtitle': '从创意到专利申请的时间创纪录',
            'workflow.step1.title': '描述您的发明',
            'workflow.step1.description': '输入您的发明细节和技术规格',
            'workflow.step2.title': 'AI 生成',
            'workflow.step2.description': '我们的 LLM 生成权利要求、说明书和图纸',
            'workflow.step3.title': '现有技术分析',
            'workflow.step3.description': '自动搜索和可专利性评分',
            'workflow.step4.title': '审查和编辑',
            'workflow.step4.description': '在 AI 协助下完善生成的文档',
            'workflow.step5.title': '向 USPTO 提交',
            'workflow.step5.description': '直接提交或导出用于传统申请',
            
            // Demo
            'demo.title': '查看 LUMA IP 实际操作',
            'demo.subtitle': '体验人工智能驱动的专利申请的力量',
            'demo.tabs.dashboard': '仪表板',
            'demo.tabs.filing': '新申请',
            'demo.tabs.portfolio': '投资组合',
            'demo.tabs.priorArt': '现有技术',
            'demo.dashboard.title': '专利组合仪表板',
            'demo.dashboard.activePatents': '有效专利',
            'demo.dashboard.pending': '待处理',
            'demo.dashboard.deadlines': '截止日期',
            'demo.dashboard.portfolioValue': '投资组合价值',
            'demo.dashboard.recentActivity': '最近活动',
            
            // CTA
            'cta.title': '准备好彻底改变您的专利实践了吗？',
            'cta.subtitle': '加入数千名使用 LUMA IP 的专利专业人士',
            'cta.startTrial': '开始免费试用',
            'cta.scheduleDemo': '预约演示',
            
            // Footer
            'footer.tagline': '机器辅助知识产权分析法律工具',
            'footer.product': '产品',
            'footer.company': '公司',
            'footer.features': '功能',
            'footer.pricing': '价格',
            'footer.security': '安全',
            'footer.api': 'API',
            'footer.about': '关于我们',
            'footer.blog': '博客',
            'footer.careers': '职业',
            'footer.legal': '法律',
            'footer.privacy': '隐私政策',
            'footer.terms': '服务条款',
            'footer.cookiePolicy': 'Cookie 政策',
            'footer.compliance': '合规性',
            'footer.copyright': '© 2024 LUMA IP. 保留所有权利。专利待审。'
        }
    };
    
    const languages = {
        en: { name: 'English', flag: '🇺🇸' },
        es: { name: 'Español', flag: '🇪🇸' },
        fr: { name: 'Français', flag: '🇫🇷' },
        zh: { name: '中文', flag: '🇨🇳' }
    };
    
    let currentLang = 'en';
    
    // Function to translate a single element
    function translateElement(element) {
        const key = element.getAttribute('data-i18n');
        if (!key) return;
        
        const translation = translations[currentLang][key];
        if (!translation) {
            console.warn('Missing translation for key:', key);
            return;
        }
        
        // Handle different element types
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
            element.placeholder = translation;
        } else {
            element.textContent = translation;
        }
    }
    
    // Function to translate all elements on the page
    function translatePage() {
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(translateElement);
        document.documentElement.lang = currentLang;
    }
    
    // Function to change language
    function changeLanguage(lang) {
        if (!translations[lang]) {
            console.error('Language not supported:', lang);
            return;
        }
        
        currentLang = lang;
        localStorage.setItem('language', lang);
        translatePage();
        updateDropdownDisplay();
    }
    
    // Update dropdown display
    function updateDropdownDisplay() {
        const dropdownButton = document.getElementById('language-dropdown-button');
        if (dropdownButton) {
            const lang = languages[currentLang];
            dropdownButton.innerHTML = `
                <span style="font-size: 20px; margin-right: 6px;">${lang.flag}</span>
                <span class="hidden sm:inline">${lang.name}</span>
                <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
            `;
        }
    }
    
    // Create language dropdown in navigation
    function createLanguageDropdown() {
        // Wait a bit to ensure the DOM is ready
        setTimeout(() => {
            // Find the navigation bar buttons container
            const navButtons = document.querySelector('nav .flex.items-center.space-x-4');
            
            if (!navButtons) {
                console.error('Navigation buttons container not found');
                return;
            }
            
            // Create dropdown container
            const dropdownContainer = document.createElement('div');
            dropdownContainer.className = 'relative';
            dropdownContainer.innerHTML = `
                <button 
                    id="language-dropdown-button"
                    onclick="toggleLanguageDropdown()"
                    class="flex items-center px-3 py-2 text-gray-700 hover:text-purple-700 font-medium transition"
                    style="min-width: 120px;"
                >
                    <span style="font-size: 20px; margin-right: 6px;">${languages[currentLang].flag}</span>
                    <span class="hidden sm:inline">${languages[currentLang].name}</span>
                    <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </button>
                
                <div 
                    id="language-dropdown-menu"
                    class="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 hidden z-50"
                >
                    ${Object.entries(languages).map(([code, lang]) => `
                        <button
                            onclick="changeLanguage('${code}'); toggleLanguageDropdown();"
                            class="w-full flex items-center px-4 py-3 hover:bg-purple-50 transition ${code === currentLang ? 'bg-purple-50' : ''}"
                            style="text-align: left;"
                        >
                            <span style="font-size: 20px; margin-right: 10px;">${lang.flag}</span>
                            <span class="text-gray-700 font-medium">${lang.name}</span>
                            ${code === currentLang ? '<svg class="w-4 h-4 ml-auto text-purple-700" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>' : ''}
                        </button>
                    `).join('')}
                </div>
            `;
            
            // Insert before the first button in the nav
            navButtons.insertBefore(dropdownContainer, navButtons.firstChild);
            
            // Add styles for the dropdown
            const style = document.createElement('style');
            style.textContent = `
                #language-dropdown-menu button:first-child {
                    border-top-left-radius: 0.5rem;
                    border-top-right-radius: 0.5rem;
                }
                #language-dropdown-menu button:last-child {
                    border-bottom-left-radius: 0.5rem;
                    border-bottom-right-radius: 0.5rem;
                }
                #language-dropdown-button:focus {
                    outline: none;
                    box-shadow: 0 0 0 3px rgba(147, 51, 234, 0.1);
                }
            `;
            document.head.appendChild(style);
        }, 100);
    }
    
    // Toggle dropdown visibility
    window.toggleLanguageDropdown = function() {
        const menu = document.getElementById('language-dropdown-menu');
        if (menu) {
            menu.classList.toggle('hidden');
        }
    }
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function(event) {
        const dropdown = document.getElementById('language-dropdown-menu');
        const button = document.getElementById('language-dropdown-button');
        
        if (dropdown && button && !button.contains(event.target) && !dropdown.contains(event.target)) {
            dropdown.classList.add('hidden');
        }
    });
    
    // Initialize
    function init() {
        // Get saved language or detect browser language
        const savedLang = localStorage.getItem('language');
        const browserLang = navigator.language.substring(0, 2);
        
        if (savedLang && translations[savedLang]) {
            currentLang = savedLang;
        } else if (translations[browserLang]) {
            currentLang = browserLang;
        }
        
        // Translate page
        translatePage();
        
        // Create language dropdown
        createLanguageDropdown();
        
        console.log('i18n initialized with language:', currentLang);
    }
    
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        // DOM is already ready
        setTimeout(init, 100); // Small delay to ensure all elements are rendered
    }
    
    // Make changeLanguage function globally available
    window.changeLanguage = changeLanguage;
    
})();