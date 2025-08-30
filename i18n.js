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
            'nav.howItWorks': 'How It Works',
            'nav.demo': 'Demo',
            'nav.pricing': 'Pricing',
            'nav.contact': 'Contact',
            'nav.signIn': 'Sign In',
            'nav.getStarted': 'Get Started',
            
            // Hero Section
            'hero.title': 'Legal Utility for Machine Assisted IP Analysis',
            'hero.subtitle': 'Transform your patent filing process with advanced AI. Generate complete patent applications in minutes, not months. Powered by state-of-the-art language models.',
            'hero.description': 'LUMA IP combines cutting-edge artificial intelligence with legal expertise to streamline patent applications, reduce costs, and accelerate innovation.',
            'hero.watchDemo': 'Watch Demo',
            'hero.startFiling': 'Start Filing',
            'hero.cta.demo': 'Try Demo',
            'hero.cta.learn': 'Learn More',
            
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
            'features.whyChooseTitle': 'Why Choose LUMA IP?',
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
            
            // Demo Section
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
            
            // CTA Section
            'cta.title': 'Ready to Revolutionize Your Patent Practice?',
            'cta.subtitle': 'Join thousands of patent professionals using LUMA IP',
            'cta.startTrial': 'Start Free Trial',
            'cta.scheduleDemo': 'Schedule Demo',
            
            // Footer
            'footer.tagline': 'Legal Utility for Machine Assisted IP Analysis',
            'footer.product': 'Product',
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
            'footer.cookiePolicy': 'Cookie Policy',
            'footer.compliance': 'Compliance',
            'footer.security': 'Security',
            'footer.api': 'API',
            'footer.copyright': '© 2024 LUMA IP. All rights reserved. Patent pending.'
        },
        
        es: {
            // Navigation
            'nav.home': 'Inicio',
            'nav.features': 'Características',
            'nav.howItWorks': 'Cómo Funciona',
            'nav.demo': 'Demo',
            'nav.pricing': 'Precios',
            'nav.contact': 'Contacto',
            'nav.signIn': 'Iniciar Sesión',
            'nav.getStarted': 'Comenzar',
            
            // Hero Section
            'hero.title': 'Utilidad Legal para Análisis de PI Asistido por Máquina',
            'hero.subtitle': 'Transforme su proceso de solicitud de patentes con IA avanzada. Genere solicitudes de patentes completas en minutos, no meses. Impulsado por modelos de lenguaje de última generación.',
            'hero.description': 'LUMA IP combina inteligencia artificial de vanguardia con experiencia legal para agilizar las solicitudes de patentes, reducir costos y acelerar la innovación.',
            'hero.watchDemo': 'Ver Demo',
            'hero.startFiling': 'Comenzar Solicitud',
            'hero.cta.demo': 'Probar Demo',
            'hero.cta.learn': 'Aprender Más',
            
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
            'features.whyChooseTitle': '¿Por qué elegir LUMA IP?',
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
            
            // Demo Section
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
            
            // CTA Section
            'cta.title': '¿Listo para Revolucionar su Práctica de Patentes?',
            'cta.subtitle': 'Únase a miles de profesionales de patentes que usan LUMA IP',
            'cta.startTrial': 'Iniciar Prueba Gratuita',
            'cta.scheduleDemo': 'Programar Demo',
            
            // Footer
            'footer.tagline': 'Utilidad Legal para Análisis de PI Asistido por Máquina',
            'footer.product': 'Producto',
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
            'footer.cookiePolicy': 'Política de Cookies',
            'footer.compliance': 'Cumplimiento',
            'footer.security': 'Seguridad',
            'footer.api': 'API',
            'footer.copyright': '© 2024 LUMA IP. Todos los derechos reservados. Patente pendiente.'
        },
        
        fr: {
            // Navigation
            'nav.home': 'Accueil',
            'nav.features': 'Fonctionnalités',
            'nav.howItWorks': 'Comment ça Marche',
            'nav.demo': 'Démo',
            'nav.pricing': 'Tarifs',
            'nav.contact': 'Contact',
            'nav.signIn': 'Se Connecter',
            'nav.getStarted': 'Commencer',
            
            // Hero Section
            'hero.title': 'Utilité Juridique pour l\'Analyse de PI Assistée par Machine',
            'hero.subtitle': 'Transformez votre processus de dépôt de brevet avec l\'IA avancée. Générez des demandes de brevet complètes en quelques minutes, pas en mois. Alimenté par des modèles de langage de pointe.',
            'hero.description': 'LUMA IP combine l\'intelligence artificielle de pointe avec l\'expertise juridique pour rationaliser les demandes de brevet, réduire les coûts et accélérer l\'innovation.',
            'hero.watchDemo': 'Voir la Démo',
            'hero.startFiling': 'Commencer le Dépôt',
            'hero.cta.demo': 'Essayer la Démo',
            'hero.cta.learn': 'En Savoir Plus',
            
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
            'features.whyChooseTitle': 'Pourquoi Choisir LUMA IP?',
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
            
            // Demo Section
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
            
            // CTA Section
            'cta.title': 'Prêt à Révolutionner Votre Pratique de Brevets?',
            'cta.subtitle': 'Rejoignez des milliers de professionnels du brevet utilisant LUMA IP',
            'cta.startTrial': 'Commencer l\'Essai Gratuit',
            'cta.scheduleDemo': 'Planifier une Démo',
            
            // Footer
            'footer.tagline': 'Utilité Juridique pour l\'Analyse de PI Assistée par Machine',
            'footer.product': 'Produit',
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
            'footer.cookiePolicy': 'Politique de Cookies',
            'footer.compliance': 'Conformité',
            'footer.security': 'Sécurité',
            'footer.api': 'API',
            'footer.copyright': '© 2024 LUMA IP. Tous droits réservés. Brevet en instance.'
        },
        
        zh: {
            // Navigation
            'nav.home': '首页',
            'nav.features': '功能',
            'nav.howItWorks': '工作原理',
            'nav.demo': '演示',
            'nav.pricing': '价格',
            'nav.contact': '联系',
            'nav.signIn': '登录',
            'nav.getStarted': '开始使用',
            
            // Hero Section
            'hero.title': '机器辅助知识产权分析法律工具',
            'hero.subtitle': '使用先进的人工智能转变您的专利申请流程。在几分钟内生成完整的专利申请，而不是几个月。由最先进的语言模型提供支持。',
            'hero.description': 'LUMA IP 将尖端人工智能与法律专业知识相结合，简化专利申请，降低成本，加速创新。',
            'hero.watchDemo': '观看演示',
            'hero.startFiling': '开始申请',
            'hero.cta.demo': '试用演示',
            'hero.cta.learn': '了解更多',
            
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
            'features.whyChooseTitle': '为什么选择 LUMA IP？',
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
            
            // Demo Section
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
            
            // CTA Section
            'cta.title': '准备好彻底改变您的专利实践了吗？',
            'cta.subtitle': '加入数千名使用 LUMA IP 的专利专业人士',
            'cta.startTrial': '开始免费试用',
            'cta.scheduleDemo': '预约演示',
            
            // Footer
            'footer.tagline': '机器辅助知识产权分析法律工具',
            'footer.product': '产品',
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
            'footer.cookiePolicy': 'Cookie 政策',
            'footer.compliance': '合规性',
            'footer.security': '安全',
            'footer.api': 'API',
            'footer.copyright': '© 2024 LUMA IP. 保留所有权利。专利待审。'
        }
    },
    
    // Initialize i18n
    init() {
        console.log('i18n.init() called');
        
        // Get saved language from localStorage or browser language
        const savedLang = localStorage.getItem('language');
        const browserLang = navigator.language.substring(0, 2);
        
        console.log('Saved language:', savedLang);
        console.log('Browser language:', browserLang);
        
        if (savedLang && this.translations[savedLang]) {
            this.currentLang = savedLang;
        } else if (this.translations[browserLang]) {
            this.currentLang = browserLang;
        }
        
        console.log('Current language set to:', this.currentLang);
        
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
        console.log('Updating page with language:', this.currentLang);
        
        // Make sure translations are loaded
        if (!this.translations || !this.translations[this.currentLang]) {
            console.error('Translations not loaded for language:', this.currentLang);
            return;
        }
        
        // Update all elements with data-i18n attribute
        const elements = document.querySelectorAll('[data-i18n]');
        console.log('Found elements with data-i18n:', elements.length);
        
        let translatedCount = 0;
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = this.t(key);
            
            if (translation && translation !== key) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translation;
                } else {
                    // For elements with child nodes (like icons), we need to be careful
                    if (element.children.length > 0) {
                        // Find text nodes and update them
                        const walker = document.createTreeWalker(
                            element,
                            NodeFilter.SHOW_TEXT,
                            null,
                            false
                        );
                        let node;
                        while (node = walker.nextNode()) {
                            if (node.nodeValue && node.nodeValue.trim()) {
                                node.nodeValue = translation;
                                break; // Only update the first text node
                            }
                        }
                    } else {
                        // Simple text replacement for elements without children
                        element.textContent = translation;
                    }
                }
                translatedCount++;
                console.log(`Translated "${key}" to "${translation}"`);
            } else {
                console.warn(`No translation found for key: ${key}`);
            }
        });
        
        console.log(`Successfully translated ${translatedCount} elements`);
        
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
console.log('i18n.js loaded, document.readyState:', document.readyState);

// Since we're using defer, the DOM should be ready when this runs
// But let's be extra safe
if (document.readyState === 'loading') {
    console.log('Document still loading, waiting for DOMContentLoaded');
    document.addEventListener('DOMContentLoaded', () => {
        console.log('DOMContentLoaded fired, initializing i18n');
        i18n.init();
    });
} else {
    // Document is already ready (interactive or complete)
    console.log('Document ready, initializing i18n immediately');
    // Small delay to ensure all elements are rendered
    setTimeout(() => {
        i18n.init();
    }, 10);
}

// Also try initializing on window load as a fallback
window.addEventListener('load', () => {
    console.log('Window load event fired');
    if (!document.getElementById('language-switcher')) {
        console.log('Language switcher not found, initializing i18n again');
        i18n.init();
    }
});

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = i18n;
}

// Make i18n globally available
window.i18n = i18n;

// Add a manual test function
window.testI18n = function(lang) {
    console.log('Testing i18n with language:', lang || 'fr');
    i18n.changeLanguage(lang || 'fr');
    console.log('Current language after change:', i18n.currentLang);
    console.log('Sample translation - hero.title:', i18n.t('hero.title'));
    console.log('Sample translation - hero.watchDemo:', i18n.t('hero.watchDemo'));
};