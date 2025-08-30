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
            'contact.send': 'Send Message',
            
            // Features Page Extended (Missing translations)
            'features.hero.title': 'Powerful Features for Patent Professionals',
            'features.hero.description': 'Everything you need to draft, file, and manage patents efficiently with AI-powered assistance.',
            'features.core.title': 'Core Features',
            'features.ai.title': 'AI-Powered Patent Drafting',
            'features.ai.description': 'Generate complete patent applications with claims, specifications, and drawings using advanced AI trained on millions of patents.',
            'features.ai.point1': 'Automatic claim generation from invention disclosure',
            'features.ai.point2': 'Technical specification writing',
            'features.ai.point3': 'Drawing descriptions and annotations',
            'features.ai.point4': 'Multiple claim strategies and variations',
            'features.search.title': 'Advanced Prior Art Search',
            'features.search.description': 'Comprehensive semantic search across global patent databases with AI-powered relevance scoring.',
            'features.search.point1': 'Semantic similarity search',
            'features.search.point2': 'CPC classification analysis',
            'features.search.point3': 'Citation network visualization',
            'features.search.point4': 'Automated invalidity analysis',
            'features.docket.title': 'Intelligent Docket Management',
            'features.docket.description': 'Never miss a deadline with automated tracking, reminders, and statutory calculations.',
            'features.docket.point1': 'Automatic deadline calculation',
            'features.docket.point2': 'Multi-jurisdiction support',
            'features.docket.point3': 'Team task assignment',
            'features.docket.point4': 'Calendar integration',
            'features.additional.title': 'Additional Features',
            'features.forms.title': 'USPTO Form Generation',
            'features.forms.description': 'Automatically generate and validate all USPTO forms with pre-filled data.',
            'features.collaboration.title': 'Team Collaboration',
            'features.collaboration.description': 'Real-time collaboration with role-based permissions and version control.',
            'features.analytics.title': 'Portfolio Analytics',
            'features.analytics.description': 'Comprehensive analytics and reporting for your entire patent portfolio.',
            'features.fees.title': 'Fee Calculator',
            'features.fees.description': 'Accurate fee estimation for all entity types with excess claim calculations.',
            'features.translation.title': 'Multi-Language Support',
            'features.translation.description': 'File patents in multiple languages with professional translation services.',
            'features.integrations.title': 'Integrations',
            'features.integrations.description': 'Connect with existing IP management systems and legal software.'
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
            'footer.copyright': '© 2024 LUMA IP. Tous droits réservés. Brevet en instance.',
            
            // Product Page
            'product.hero.title': 'La Plateforme de Brevets Complète',
            'product.hero.description': 'LUMA IP combine l\'IA de pointe avec l\'expertise juridique pour rationaliser tous les aspects du dépôt de brevets, de la rédaction initiale à la poursuite finale.',
            'product.platform.title': 'Gestion de Brevets de Bout en Bout',
            'product.platform.description': 'Notre plateforme gère chaque étape du cycle de vie du brevet, de la divulgation de l\'invention à la maintenance du brevet accordé.',
            'product.platform.feature1.title': 'Rédaction Alimentée par l\'IA',
            'product.platform.feature1.description': 'Générez des demandes de brevet complètes en quelques minutes',
            'product.platform.feature2.title': 'Recherche Intelligente d\'Art Antérieur',
            'product.platform.feature2.description': 'Recherche sémantique alimentée par l\'IA dans les bases de données mondiales',
            'product.platform.feature3.title': 'Flux de Travail Automatisés',
            'product.platform.feature3.description': 'Rationalisez le dépôt avec une automatisation intelligente',
            'product.components.title': 'Composants Clés',
            'product.components.ai.title': 'Moteur d\'IA',
            'product.components.ai.description': 'Modèles de langage avancés formés sur des millions de brevets pour une génération précise de revendications',
            'product.components.database.title': 'Base de Données de Brevets',
            'product.components.database.description': 'Accès aux bases de données mondiales de brevets avec mises à jour en temps réel et couverture complète',
            'product.components.compliance.title': 'Outils de Conformité',
            'product.components.compliance.description': 'Vérifications de conformité intégrées et génération de formulaires USPTO avec validation',
            
            // Security Page
            'security.hero.title': 'La Sécurité d\'Abord, Toujours',
            'security.hero.description': 'Votre propriété intellectuelle est protégée par une sécurité de niveau entreprise, des certifications de conformité et les meilleures pratiques de l\'industrie.',
            'security.features.title': 'Fonctionnalités de Sécurité',
            'security.encryption.title': 'Chiffrement de Bout en Bout',
            'security.encryption.description': 'Toutes les données sont chiffrées au repos avec AES-256 et en transit avec TLS 1.3',
            'security.access.title': 'Contrôle d\'Accès',
            'security.access.description': 'Contrôle d\'accès basé sur les rôles avec authentification multifacteur et support SSO',
            'security.audit.title': 'Journalisation d\'Audit',
            'security.audit.description': 'Piste d\'audit complète de toutes les actions avec journalisation inviolable',
            'security.infrastructure.title': 'Infrastructure Sécurisée',
            'security.infrastructure.description': 'Hébergé sur une infrastructure conforme SOC 2 avec SLA de disponibilité de 99,99%',
            'security.threat.title': 'Protection contre les Menaces',
            'security.threat.description': 'Détection des menaces en temps réel avec protection DDoS et WAF',
            'security.backup.title': 'Sauvegarde des Données',
            'security.backup.description': 'Sauvegardes quotidiennes automatisées avec récupération à un point dans le temps',
            'security.compliance.title': 'Conformité et Certifications',
            'security.soc2': 'Certifié conforme',
            'security.iso': 'Certifié',
            'security.gdpr': 'Conforme',
            'security.ccpa': 'Conforme',
            
            // API Page
            'api.hero.title': 'API pour Développeurs',
            'api.hero.description': 'Intégrez les capacités d\'automatisation de brevets de LUMA IP dans vos applications avec notre API RESTful.',
            'api.endpoints.title': 'Points de Terminaison API',
            
            // Features Page - French
            'features.hero.title': 'Fonctionnalités Puissantes pour les Professionnels des Brevets',
            'features.hero.description': 'Tout ce dont vous avez besoin pour rédiger, déposer et gérer des brevets efficacement avec l\'assistance de l\'IA.',
            'features.core.title': 'Fonctionnalités Principales',
            'features.ai.title': 'Rédaction de Brevets Alimentée par l\'IA',
            'features.ai.description': 'Générez des demandes de brevet complètes avec revendications, spécifications et dessins en utilisant une IA avancée formée sur des millions de brevets.',
            'features.ai.point1': 'Génération automatique de revendications à partir de la divulgation de l\'invention',
            'features.ai.point2': 'Rédaction de spécifications techniques',
            'features.ai.point3': 'Descriptions et annotations de dessins',
            'features.ai.point4': 'Stratégies et variations de revendications multiples',
            'features.search.title': 'Recherche Avancée d\'Art Antérieur',
            'features.search.description': 'Recherche sémantique complète dans les bases de données mondiales de brevets avec notation de pertinence alimentée par l\'IA.',
            'features.search.point1': 'Recherche de similarité sémantique',
            'features.search.point2': 'Analyse de classification CPC',
            'features.search.point3': 'Visualisation du réseau de citations',
            'features.search.point4': 'Analyse d\'invalidité automatisée',
            'features.docket.title': 'Gestion Intelligente des Dossiers',
            'features.docket.description': 'Ne manquez jamais une échéance avec le suivi automatisé, les rappels et les calculs statutaires.',
            'features.docket.point1': 'Calcul automatique des échéances',
            'features.docket.point2': 'Support multi-juridictionnel',
            'features.docket.point3': 'Attribution de tâches d\'équipe',
            'features.docket.point4': 'Intégration de calendrier',
            'features.additional.title': 'Fonctionnalités Supplémentaires',
            'features.forms.title': 'Génération de Formulaires USPTO',
            'features.forms.description': 'Générez et validez automatiquement tous les formulaires USPTO avec des données pré-remplies.',
            'features.collaboration.title': 'Collaboration d\'Équipe',
            'features.collaboration.description': 'Collaboration en temps réel avec permissions basées sur les rôles et contrôle de version.',
            'features.analytics.title': 'Analyse de Portefeuille',
            'features.analytics.description': 'Analyses et rapports complets pour l\'ensemble de votre portefeuille de brevets.',
            'features.fees.title': 'Calculateur de Frais',
            'features.fees.description': 'Estimation précise des frais pour tous les types d\'entités avec calculs de revendications excédentaires.',
            'features.translation.title': 'Support Multi-Langues',
            'features.translation.description': 'Déposez des brevets dans plusieurs langues avec des services de traduction professionnels.',
            'features.integrations.title': 'Intégrations',
            'features.integrations.description': 'Connectez-vous aux systèmes de gestion de PI et aux logiciels juridiques existants.',
            
            // Pricing Page - French
            'pricing.hero.title': 'Tarification Simple et Transparente',
            'pricing.hero.description': 'Choisissez le plan qui correspond à vos besoins. Évoluez à tout moment.',
            'pricing.monthly': 'Mensuel',
            'pricing.annual': 'Annuel (Économisez 20%)',
            'pricing.getStarted': 'Commencer',
            'pricing.startTrial': 'Commencer l\'Essai Gratuit',
            'pricing.contactSales': 'Contacter les Ventes',
            'pricing.mostPopular': 'LE PLUS POPULAIRE',
            'pricing.starter.title': 'Débutant',
            'pricing.starter.description': 'Parfait pour les praticiens individuels',
            'pricing.starter.period': '/mois',
            'pricing.starter.feature1': 'Jusqu\'à 5 dépôts de brevets/mois',
            'pricing.starter.feature2': 'Assistance de rédaction IA de base',
            'pricing.starter.feature3': 'Recherche d\'art antérieur (100 requêtes/mois)',
            'pricing.starter.feature4': 'Support par email',
            'pricing.starter.feature5': 'Génération de formulaires USPTO',
            'pricing.professional.title': 'Professionnel',
            'pricing.professional.description': 'Pour les pratiques de brevets en croissance',
            'pricing.professional.period': '/mois',
            'pricing.professional.feature1': 'Dépôts de brevets illimités',
            'pricing.professional.feature2': 'IA avancée avec formation personnalisée',
            'pricing.professional.feature3': 'Recherches d\'art antérieur illimitées',
            'pricing.professional.feature4': 'Support prioritaire',
            'pricing.professional.feature5': 'Collaboration d\'équipe (jusqu\'à 10 utilisateurs)',
            'pricing.professional.feature6': 'Accès API',
            'pricing.professional.feature7': 'Analyse de portefeuille',
            'pricing.enterprise.title': 'Entreprise',
            'pricing.enterprise.description': 'Pour les grandes organisations',
            'pricing.enterprise.custom': 'Personnalisé',
            'pricing.enterprise.feature1': 'Tout dans Professionnel',
            'pricing.enterprise.feature2': 'Utilisateurs illimités',
            'pricing.enterprise.feature3': 'Formation de modèle IA personnalisée',
            'pricing.enterprise.feature4': 'Gestionnaire de compte dédié',
            'pricing.enterprise.feature5': 'Option de déploiement sur site',
            'pricing.enterprise.feature6': 'Garantie SLA',
            'pricing.enterprise.feature7': 'Intégrations personnalisées',
            'pricing.faq.title': 'Questions Fréquemment Posées',
            'pricing.faq.q1': 'Puis-je changer de plan à tout moment?',
            'pricing.faq.a1': 'Oui, vous pouvez mettre à niveau ou rétrograder votre plan à tout moment. Les changements prennent effet au prochain cycle de facturation.',
            'pricing.faq.q2': 'Y a-t-il un essai gratuit?',
            'pricing.faq.a2': 'Oui, nous offrons un essai gratuit de 14 jours pour le plan Professionnel avec accès complet à toutes les fonctionnalités.',
            'pricing.faq.q3': 'Quels modes de paiement acceptez-vous?',
            'pricing.faq.a3': 'Nous acceptons toutes les principales cartes de crédit, les virements ACH et les virements bancaires pour les plans Entreprise.'
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
            'footer.copyright': '© 2024 LUMA IP. Todos los derechos reservados. Patente pendiente.',
            
            // Product Page
            'product.hero.title': 'La Plataforma Completa de Patentes',
            'product.hero.description': 'LUMA IP combina IA de vanguardia con experiencia legal para optimizar todos los aspectos de la presentación de patentes, desde el borrador inicial hasta la prosecución final.',
            'product.platform.title': 'Gestión de Patentes de Extremo a Extremo',
            'product.platform.description': 'Nuestra plataforma maneja cada etapa del ciclo de vida de la patente, desde la divulgación de la invención hasta el mantenimiento de la patente otorgada.',
            'product.platform.feature1.title': 'Redacción Impulsada por IA',
            'product.platform.feature1.description': 'Genere solicitudes de patentes completas en minutos',
            'product.platform.feature2.title': 'Búsqueda Inteligente de Arte Previo',
            'product.platform.feature2.description': 'Búsqueda semántica impulsada por IA en bases de datos globales',
            'product.platform.feature3.title': 'Flujos de Trabajo Automatizados',
            'product.platform.feature3.description': 'Optimice la presentación con automatización inteligente',
            'product.components.title': 'Componentes Clave',
            'product.components.ai.title': 'Motor de IA',
            'product.components.ai.description': 'Modelos de lenguaje avanzados entrenados en millones de patentes para generación precisa de reivindicaciones',
            'product.components.database.title': 'Base de Datos de Patentes',
            'product.components.database.description': 'Acceso a bases de datos de patentes globales con actualizaciones en tiempo real y cobertura integral',
            'product.components.compliance.title': 'Herramientas de Cumplimiento',
            'product.components.compliance.description': 'Verificaciones de cumplimiento integradas y generación de formularios USPTO con validación',
            
            // Security Page
            'security.hero.title': 'Seguridad Primero, Siempre',
            'security.hero.description': 'Su propiedad intelectual está protegida por seguridad de nivel empresarial, certificaciones de cumplimiento y mejores prácticas de la industria.',
            'security.features.title': 'Características de Seguridad',
            'security.encryption.title': 'Cifrado de Extremo a Extremo',
            'security.encryption.description': 'Todos los datos están cifrados en reposo con AES-256 y en tránsito con TLS 1.3',
            'security.access.title': 'Control de Acceso',
            'security.access.description': 'Control de acceso basado en roles con autenticación multifactor y soporte SSO',
            'security.audit.title': 'Registro de Auditoría',
            'security.audit.description': 'Rastro de auditoría completo de todas las acciones con registro a prueba de manipulaciones',
            'security.infrastructure.title': 'Infraestructura Segura',
            'security.infrastructure.description': 'Alojado en infraestructura compatible con SOC 2 con SLA de tiempo de actividad del 99.99%',
            'security.threat.title': 'Protección contra Amenazas',
            'security.threat.description': 'Detección de amenazas en tiempo real con protección DDoS y WAF',
            'security.backup.title': 'Respaldo de Datos',
            'security.backup.description': 'Respaldos diarios automatizados con recuperación punto en el tiempo',
            'security.compliance.title': 'Cumplimiento y Certificaciones',
            'security.soc2': 'Certificado conforme',
            'security.iso': 'Certificado',
            'security.gdpr': 'Conforme',
            'security.ccpa': 'Conforme',
            
            // API Page
            'api.hero.title': 'API para Desarrolladores',
            'api.hero.description': 'Integre las capacidades de automatización de patentes de LUMA IP en sus aplicaciones con nuestra API RESTful.',
            'api.endpoints.title': 'Endpoints de API',
            
            // Features Page - Spanish
            'features.hero.title': 'Características Potentes para Profesionales de Patentes',
            'features.hero.description': 'Todo lo que necesita para redactar, presentar y gestionar patentes de manera eficiente con asistencia de IA.',
            'features.core.title': 'Características Principales',
            'features.ai.title': 'Redacción de Patentes Impulsada por IA',
            'features.ai.description': 'Genere solicitudes de patentes completas con reivindicaciones, especificaciones y dibujos utilizando IA avanzada entrenada en millones de patentes.',
            'features.ai.point1': 'Generación automática de reivindicaciones a partir de la divulgación de invención',
            'features.ai.point2': 'Redacción de especificaciones técnicas',
            'features.ai.point3': 'Descripciones y anotaciones de dibujos',
            'features.ai.point4': 'Múltiples estrategias y variaciones de reivindicaciones',
            'features.search.title': 'Búsqueda Avanzada de Arte Previo',
            'features.search.description': 'Búsqueda semántica integral en bases de datos de patentes globales con puntuación de relevancia impulsada por IA.',
            'features.search.point1': 'Búsqueda de similitud semántica',
            'features.search.point2': 'Análisis de clasificación CPC',
            'features.search.point3': 'Visualización de red de citas',
            'features.search.point4': 'Análisis de invalidez automatizado',
            'features.docket.title': 'Gestión Inteligente de Expedientes',
            'features.docket.description': 'Nunca pierda una fecha límite con seguimiento automatizado, recordatorios y cálculos estatutarios.',
            'features.docket.point1': 'Cálculo automático de plazos',
            'features.docket.point2': 'Soporte multi-jurisdiccional',
            'features.docket.point3': 'Asignación de tareas del equipo',
            'features.docket.point4': 'Integración de calendario',
            'features.additional.title': 'Características Adicionales',
            'features.forms.title': 'Generación de Formularios USPTO',
            'features.forms.description': 'Genere y valide automáticamente todos los formularios USPTO con datos prellenados.',
            'features.collaboration.title': 'Colaboración en Equipo',
            'features.collaboration.description': 'Colaboración en tiempo real con permisos basados en roles y control de versiones.',
            'features.analytics.title': 'Análisis de Cartera',
            'features.analytics.description': 'Análisis e informes completos para toda su cartera de patentes.',
            'features.fees.title': 'Calculadora de Tarifas',
            'features.fees.description': 'Estimación precisa de tarifas para todos los tipos de entidades con cálculos de reivindicaciones excedentes.',
            'features.translation.title': 'Soporte Multi-Idioma',
            'features.translation.description': 'Presente patentes en múltiples idiomas con servicios de traducción profesional.',
            'features.integrations.title': 'Integraciones',
            'features.integrations.description': 'Conéctese con sistemas de gestión de PI y software legal existentes.',
            
            // Pricing Page - Spanish
            'pricing.hero.title': 'Precios Simples y Transparentes',
            'pricing.hero.description': 'Elija el plan que se adapte a sus necesidades. Escale hacia arriba o hacia abajo en cualquier momento.',
            'pricing.monthly': 'Mensual',
            'pricing.annual': 'Anual (Ahorre 20%)',
            'pricing.getStarted': 'Comenzar',
            'pricing.startTrial': 'Iniciar Prueba Gratuita',
            'pricing.contactSales': 'Contactar Ventas',
            'pricing.mostPopular': 'MÁS POPULAR',
            'pricing.starter.title': 'Inicial',
            'pricing.starter.description': 'Perfecto para profesionales individuales',
            'pricing.starter.period': '/mes',
            'pricing.starter.feature1': 'Hasta 5 presentaciones de patentes/mes',
            'pricing.starter.feature2': 'Asistencia básica de redacción con IA',
            'pricing.starter.feature3': 'Búsqueda de arte previo (100 consultas/mes)',
            'pricing.starter.feature4': 'Soporte por correo electrónico',
            'pricing.starter.feature5': 'Generación de formularios USPTO',
            'pricing.professional.title': 'Profesional',
            'pricing.professional.description': 'Para prácticas de patentes en crecimiento',
            'pricing.professional.period': '/mes',
            'pricing.professional.feature1': 'Presentaciones de patentes ilimitadas',
            'pricing.professional.feature2': 'IA avanzada con entrenamiento personalizado',
            'pricing.professional.feature3': 'Búsquedas de arte previo ilimitadas',
            'pricing.professional.feature4': 'Soporte prioritario',
            'pricing.professional.feature5': 'Colaboración en equipo (hasta 10 usuarios)',
            'pricing.professional.feature6': 'Acceso a API',
            'pricing.professional.feature7': 'Análisis de cartera',
            'pricing.enterprise.title': 'Empresa',
            'pricing.enterprise.description': 'Para grandes organizaciones',
            'pricing.enterprise.custom': 'Personalizado',
            'pricing.enterprise.feature1': 'Todo en Profesional',
            'pricing.enterprise.feature2': 'Usuarios ilimitados',
            'pricing.enterprise.feature3': 'Entrenamiento de modelo de IA personalizado',
            'pricing.enterprise.feature4': 'Gerente de cuenta dedicado',
            'pricing.enterprise.feature5': 'Opción de implementación local',
            'pricing.enterprise.feature6': 'Garantía de SLA',
            'pricing.enterprise.feature7': 'Integraciones personalizadas',
            'pricing.faq.title': 'Preguntas Frecuentes',
            'pricing.faq.q1': '¿Puedo cambiar de plan en cualquier momento?',
            'pricing.faq.a1': 'Sí, puede actualizar o degradar su plan en cualquier momento. Los cambios entran en vigencia en el próximo ciclo de facturación.',
            'pricing.faq.q2': '¿Hay una prueba gratuita?',
            'pricing.faq.a2': 'Sí, ofrecemos una prueba gratuita de 14 días para el plan Profesional con acceso completo a todas las funciones.',
            'pricing.faq.q3': '¿Qué métodos de pago aceptan?',
            'pricing.faq.a3': 'Aceptamos todas las principales tarjetas de crédito, transferencias ACH y transferencias bancarias para planes Enterprise.'
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
            'footer.copyright': '© 2024 LUMA IP. 保留所有权利。专利待审。',
            
            // Product Page
            'product.hero.title': '完整的专利平台',
            'product.hero.description': 'LUMA IP 将尖端人工智能与法律专业知识相结合，简化专利申请的各个方面，从初始起草到最终审查。',
            'product.platform.title': '端到端专利管理',
            'product.platform.description': '我们的平台处理专利生命周期的每个阶段，从发明披露到授权专利维护。',
            'product.platform.feature1.title': 'AI驱动的起草',
            'product.platform.feature1.description': '在几分钟内生成完整的专利申请',
            'product.platform.feature2.title': '智能现有技术搜索',
            'product.platform.feature2.description': '在全球数据库中进行AI驱动的语义搜索',
            'product.platform.feature3.title': '自动化工作流程',
            'product.platform.feature3.description': '通过智能自动化简化申请流程',
            'product.components.title': '关键组件',
            'product.components.ai.title': 'AI引擎',
            'product.components.ai.description': '在数百万专利上训练的高级语言模型，用于准确生成权利要求',
            'product.components.database.title': '专利数据库',
            'product.components.database.description': '访问全球专利数据库，实时更新和全面覆盖',
            'product.components.compliance.title': '合规工具',
            'product.components.compliance.description': '内置合规检查和USPTO表格生成与验证',
            
            // Security Page
            'security.hero.title': '安全至上，始终如一',
            'security.hero.description': '您的知识产权受到企业级安全、合规认证和行业最佳实践的保护。',
            'security.features.title': '安全功能',
            'security.encryption.title': '端到端加密',
            'security.encryption.description': '所有数据在静态时使用AES-256加密，在传输时使用TLS 1.3',
            'security.access.title': '访问控制',
            'security.access.description': '基于角色的访问控制，支持多因素身份验证和SSO',
            'security.audit.title': '审计日志',
            'security.audit.description': '所有操作的完整审计跟踪，具有防篡改日志记录',
            'security.infrastructure.title': '安全基础设施',
            'security.infrastructure.description': '托管在符合SOC 2的基础设施上，正常运行时间SLA为99.99%',
            'security.threat.title': '威胁防护',
            'security.threat.description': '实时威胁检测，具有DDoS保护和WAF',
            'security.backup.title': '数据备份',
            'security.backup.description': '自动每日备份，具有时间点恢复',
            'security.compliance.title': '合规与认证',
            'security.soc2': '认证合规',
            'security.iso': '已认证',
            'security.gdpr': '合规',
            'security.ccpa': '合规',
            
            // API Page
            'api.hero.title': '开发者API',
            'api.hero.description': '使用我们的RESTful API将LUMA IP的专利自动化功能集成到您的应用程序中。',
            'api.endpoints.title': 'API端点',
            
            // Features Page - Chinese
            'features.hero.title': '专利专业人士的强大功能',
            'features.hero.description': '您需要的一切，通过AI辅助高效地起草、申请和管理专利。',
            'features.core.title': '核心功能',
            'features.ai.title': 'AI驱动的专利起草',
            'features.ai.description': '使用在数百万专利上训练的高级AI生成包含权利要求、说明书和附图的完整专利申请。',
            'features.ai.point1': '从发明披露自动生成权利要求',
            'features.ai.point2': '技术规格撰写',
            'features.ai.point3': '附图描述和注释',
            'features.ai.point4': '多种权利要求策略和变体',
            'features.search.title': '高级现有技术搜索',
            'features.search.description': '在全球专利数据库中进行全面的语义搜索，具有AI驱动的相关性评分。',
            'features.search.point1': '语义相似性搜索',
            'features.search.point2': 'CPC分类分析',
            'features.search.point3': '引用网络可视化',
            'features.search.point4': '自动无效性分析',
            'features.docket.title': '智能案卷管理',
            'features.docket.description': '通过自动跟踪、提醒和法定计算，永不错过截止日期。',
            'features.docket.point1': '自动截止日期计算',
            'features.docket.point2': '多司法管辖区支持',
            'features.docket.point3': '团队任务分配',
            'features.docket.point4': '日历集成',
            'features.additional.title': '附加功能',
            'features.forms.title': 'USPTO表格生成',
            'features.forms.description': '自动生成和验证所有USPTO表格，并预填充数据。',
            'features.collaboration.title': '团队协作',
            'features.collaboration.description': '实时协作，具有基于角色的权限和版本控制。',
            'features.analytics.title': '组合分析',
            'features.analytics.description': '为您的整个专利组合提供全面的分析和报告。',
            'features.fees.title': '费用计算器',
            'features.fees.description': '为所有实体类型提供准确的费用估算，包括超额权利要求计算。',
            'features.translation.title': '多语言支持',
            'features.translation.description': '使用专业翻译服务以多种语言申请专利。',
            'features.integrations.title': '集成',
            'features.integrations.description': '与现有的知识产权管理系统和法律软件连接。',
            
            // Pricing Page - Chinese
            'pricing.hero.title': '简单透明的定价',
            'pricing.hero.description': '选择适合您需求的计划。随时升级或降级。',
            'pricing.monthly': '月付',
            'pricing.annual': '年付（节省20%）',
            'pricing.getStarted': '开始使用',
            'pricing.startTrial': '开始免费试用',
            'pricing.contactSales': '联系销售',
            'pricing.mostPopular': '最受欢迎',
            'pricing.starter.title': '入门版',
            'pricing.starter.description': '适合个人从业者',
            'pricing.starter.period': '/月',
            'pricing.starter.feature1': '每月最多5个专利申请',
            'pricing.starter.feature2': '基础AI起草协助',
            'pricing.starter.feature3': '现有技术搜索（100次查询/月）',
            'pricing.starter.feature4': '电子邮件支持',
            'pricing.starter.feature5': 'USPTO表格生成',
            'pricing.professional.title': '专业版',
            'pricing.professional.description': '适合成长中的专利业务',
            'pricing.professional.period': '/月',
            'pricing.professional.feature1': '无限专利申请',
            'pricing.professional.feature2': '带自定义训练的高级AI',
            'pricing.professional.feature3': '无限现有技术搜索',
            'pricing.professional.feature4': '优先支持',
            'pricing.professional.feature5': '团队协作（最多10个用户）',
            'pricing.professional.feature6': 'API访问',
            'pricing.professional.feature7': '组合分析',
            'pricing.enterprise.title': '企业版',
            'pricing.enterprise.description': '适合大型组织',
            'pricing.enterprise.custom': '定制',
            'pricing.enterprise.feature1': '专业版的所有功能',
            'pricing.enterprise.feature2': '无限用户',
            'pricing.enterprise.feature3': '自定义AI模型训练',
            'pricing.enterprise.feature4': '专属客户经理',
            'pricing.enterprise.feature5': '本地部署选项',
            'pricing.enterprise.feature6': 'SLA保证',
            'pricing.enterprise.feature7': '自定义集成',
            'pricing.faq.title': '常见问题',
            'pricing.faq.q1': '我可以随时更改计划吗？',
            'pricing.faq.a1': '是的，您可以随时升级或降级您的计划。更改将在下一个计费周期生效。',
            'pricing.faq.q2': '有免费试用吗？',
            'pricing.faq.a2': '是的，我们为专业版计划提供14天的免费试用，可以完全访问所有功能。',
            'pricing.faq.q3': '你们接受哪些付款方式？',
            'pricing.faq.a3': '我们接受所有主要信用卡、ACH转账，企业计划还接受电汇。'
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