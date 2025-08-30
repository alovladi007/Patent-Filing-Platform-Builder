// Comprehensive i18n implementation for LUMA IP Patent Platform
(function() {
    'use strict';
    
    const translations = {
        en: {
            // Header
            'header.subtitle': 'Automated Patent Workspace',
            
            // Navigation
            'nav.features': 'Features',
            'nav.visuals': 'Visuals',
            'nav.pricing': 'Pricing',
            'nav.contact': 'Contact',
            
            // Hero Section
            'hero.title': 'Draft, file, and prosecute—<span class="accent">visually</span>.',
            'hero.description': 'Bring a patent agent\'s toolkit into your browser: claim trees, prior-art radar, docket timelines, and a filing checklist that won\'t let you miss a detail.',
            'hero.openDemo': 'Open Live Demo',
            'hero.exploreFeatures': 'Explore Features',
            'hero.badge1': 'Secure Workspace',
            'hero.badge2': 'USPTO-ready Outputs',
            'hero.badge3': 'Visual Analytics',
            'hero.claimTreeTitle': 'Claim Tree',
            'hero.supportOk': '§112 support OK',
            'hero.needsSupport': 'needs support',
            
            // Features Section
            'features.title': 'Signature features',
            'features.claimTree.title': 'Claim Tree',
            'features.claimTree.description': 'Interactive hierarchy with inheritance, support mapping, and §112/102/103 risk flags.',
            'features.docketTimeline.title': 'Docket Timeline',
            'features.docketTimeline.description': 'Statutory deadline math with extensions, per-matter status, and ICS exports.',
            'features.priorArtRadar.title': 'Prior-Art Radar',
            'features.priorArtRadar.description': 'Visual clusters by similarity, CPC classes, and assignee; jump into claim charts.',
            'features.feeCalculator.title': 'Fee Calculator',
            'features.feeCalculator.description': 'Entity-aware cost estimation with claim/page counts and excess fees.',
            
            // Visuals Section
            'visuals.docketKanban': 'Docket Kanban',
            'visuals.drafting': 'Drafting',
            'visuals.review': 'Review',
            'visuals.filed': 'Filed',
            'visuals.ticket1': 'Utility — "Optical Coupler"',
            'visuals.ticket2': 'Provisional — "Memristor Grid"',
            'visuals.ticket3': 'Design — "Device Housing"',
            'visuals.ticket4': 'PCT — "Optical Router"',
            'visuals.feeEstimate': 'Fee Estimate',
            'visuals.entity': 'Entity',
            'visuals.micro': 'Micro',
            'visuals.small': 'Small',
            'visuals.large': 'Large',
            'visuals.claimsTotal': 'Claims (total)',
            'visuals.independentClaims': 'Independent Claims',
            'visuals.pages': 'Pages',
            'visuals.estimate': 'Estimate',
            
            // Pricing Section
            'pricing.title': 'Pricing',
            'pricing.perMatter': '/matter',
            'pricing.selfServe.title': 'Self-Serve',
            'pricing.selfServe.feature1': 'Drafting workspace',
            'pricing.selfServe.feature2': 'Filing checklist',
            'pricing.selfServe.feature3': 'Fee estimates',
            'pricing.getStarted': 'Get Started',
            'pricing.assisted.title': 'Assisted',
            'pricing.assisted.feature1': 'Everything in Self-Serve',
            'pricing.assisted.feature2': 'Prior-art radar + report',
            'pricing.assisted.feature3': 'Claim tree review',
            'pricing.talkToUs': 'Talk to Us',
            'pricing.fullService.title': 'Full Service',
            'pricing.custom': 'Custom',
            'pricing.fullService.feature1': 'Prosecution support',
            'pricing.fullService.feature2': 'Portfolio analytics',
            'pricing.fullService.feature3': 'SLAs & compliance',
            'pricing.bookCall': 'Book a Call',
            
            // Footer & Contact
            'footer.tagline': 'Patent agent in your browser',
            'footer.confidential': 'Confidential & secure by design.',
            'contact.yourEmail': 'Your email',
            'contact.yourMessage': 'Your message',
            'contact.messagePlaceholder': 'Tell us about your invention...',
            'contact.send': 'Send'
        },
        
        es: {
            // Header
            'header.subtitle': 'Espacio de Trabajo Automatizado de Patentes',
            
            // Navigation
            'nav.features': 'Características',
            'nav.visuals': 'Visuales',
            'nav.pricing': 'Precios',
            'nav.contact': 'Contacto',
            
            // Hero Section
            'hero.title': 'Redacta, presenta y procesa—<span class="accent">visualmente</span>.',
            'hero.description': 'Lleva el kit de herramientas de un agente de patentes a tu navegador: árboles de reivindicaciones, radar de arte previo, líneas de tiempo de expedientes y una lista de verificación de presentación que no te dejará pasar por alto ningún detalle.',
            'hero.openDemo': 'Abrir Demo en Vivo',
            'hero.exploreFeatures': 'Explorar Características',
            'hero.badge1': 'Espacio de Trabajo Seguro',
            'hero.badge2': 'Salidas listas para USPTO',
            'hero.badge3': 'Análisis Visual',
            'hero.claimTreeTitle': 'Árbol de Reivindicaciones',
            'hero.supportOk': 'soporte §112 OK',
            'hero.needsSupport': 'necesita soporte',
            
            // Features Section
            'features.title': 'Características distintivas',
            'features.claimTree.title': 'Árbol de Reivindicaciones',
            'features.claimTree.description': 'Jerarquía interactiva con herencia, mapeo de soporte y banderas de riesgo §112/102/103.',
            'features.docketTimeline.title': 'Línea de Tiempo del Expediente',
            'features.docketTimeline.description': 'Cálculo de plazos legales con extensiones, estado por asunto y exportaciones ICS.',
            'features.priorArtRadar.title': 'Radar de Arte Previo',
            'features.priorArtRadar.description': 'Grupos visuales por similitud, clases CPC y cesionario; salto a tablas de reivindicaciones.',
            'features.feeCalculator.title': 'Calculadora de Tarifas',
            'features.feeCalculator.description': 'Estimación de costos según entidad con recuentos de reivindicaciones/páginas y tarifas excedentes.',
            
            // Visuals Section
            'visuals.docketKanban': 'Kanban de Expedientes',
            'visuals.drafting': 'Redacción',
            'visuals.review': 'Revisión',
            'visuals.filed': 'Presentado',
            'visuals.ticket1': 'Utilidad — "Acoplador Óptico"',
            'visuals.ticket2': 'Provisional — "Red de Memristor"',
            'visuals.ticket3': 'Diseño — "Carcasa del Dispositivo"',
            'visuals.ticket4': 'PCT — "Enrutador Óptico"',
            'visuals.feeEstimate': 'Estimación de Tarifas',
            'visuals.entity': 'Entidad',
            'visuals.micro': 'Micro',
            'visuals.small': 'Pequeña',
            'visuals.large': 'Grande',
            'visuals.claimsTotal': 'Reivindicaciones (total)',
            'visuals.independentClaims': 'Reivindicaciones Independientes',
            'visuals.pages': 'Páginas',
            'visuals.estimate': 'Estimar',
            
            // Pricing Section
            'pricing.title': 'Precios',
            'pricing.perMatter': '/asunto',
            'pricing.selfServe.title': 'Autoservicio',
            'pricing.selfServe.feature1': 'Espacio de trabajo de redacción',
            'pricing.selfServe.feature2': 'Lista de verificación de presentación',
            'pricing.selfServe.feature3': 'Estimaciones de tarifas',
            'pricing.getStarted': 'Comenzar',
            'pricing.assisted.title': 'Asistido',
            'pricing.assisted.feature1': 'Todo en Autoservicio',
            'pricing.assisted.feature2': 'Radar de arte previo + informe',
            'pricing.assisted.feature3': 'Revisión del árbol de reivindicaciones',
            'pricing.talkToUs': 'Habla con Nosotros',
            'pricing.fullService.title': 'Servicio Completo',
            'pricing.custom': 'Personalizado',
            'pricing.fullService.feature1': 'Soporte de procesamiento',
            'pricing.fullService.feature2': 'Análisis de cartera',
            'pricing.fullService.feature3': 'SLAs y cumplimiento',
            'pricing.bookCall': 'Reservar una Llamada',
            
            // Footer & Contact
            'footer.tagline': 'Agente de patentes en tu navegador',
            'footer.confidential': 'Confidencial y seguro por diseño.',
            'contact.yourEmail': 'Tu correo electrónico',
            'contact.yourMessage': 'Tu mensaje',
            'contact.messagePlaceholder': 'Cuéntanos sobre tu invención...',
            'contact.send': 'Enviar'
        },
        
        fr: {
            // Header
            'header.subtitle': 'Espace de Travail Automatisé pour Brevets',
            
            // Navigation
            'nav.features': 'Fonctionnalités',
            'nav.visuals': 'Visuels',
            'nav.pricing': 'Tarifs',
            'nav.contact': 'Contact',
            
            // Hero Section
            'hero.title': 'Rédigez, déposez et poursuivez—<span class="accent">visuellement</span>.',
            'hero.description': 'Apportez la boîte à outils d\'un agent de brevets dans votre navigateur : arbres de revendications, radar d\'art antérieur, chronologies de dossiers et une liste de contrôle de dépôt qui ne vous laissera rien manquer.',
            'hero.openDemo': 'Ouvrir la Démo en Direct',
            'hero.exploreFeatures': 'Explorer les Fonctionnalités',
            'hero.badge1': 'Espace de Travail Sécurisé',
            'hero.badge2': 'Sorties prêtes pour l\'USPTO',
            'hero.badge3': 'Analyses Visuelles',
            'hero.claimTreeTitle': 'Arbre de Revendications',
            'hero.supportOk': 'support §112 OK',
            'hero.needsSupport': 'nécessite un support',
            
            // Features Section
            'features.title': 'Fonctionnalités phares',
            'features.claimTree.title': 'Arbre de Revendications',
            'features.claimTree.description': 'Hiérarchie interactive avec héritage, mappage de support et indicateurs de risque §112/102/103.',
            'features.docketTimeline.title': 'Chronologie du Dossier',
            'features.docketTimeline.description': 'Calcul des délais légaux avec extensions, statut par affaire et exports ICS.',
            'features.priorArtRadar.title': 'Radar d\'Art Antérieur',
            'features.priorArtRadar.description': 'Clusters visuels par similarité, classes CPC et cessionnaire ; accès aux tableaux de revendications.',
            'features.feeCalculator.title': 'Calculateur de Frais',
            'features.feeCalculator.description': 'Estimation des coûts selon l\'entité avec comptages de revendications/pages et frais excédentaires.',
            
            // Visuals Section
            'visuals.docketKanban': 'Kanban de Dossiers',
            'visuals.drafting': 'Rédaction',
            'visuals.review': 'Révision',
            'visuals.filed': 'Déposé',
            'visuals.ticket1': 'Utilité — "Coupleur Optique"',
            'visuals.ticket2': 'Provisoire — "Grille Memristor"',
            'visuals.ticket3': 'Design — "Boîtier d\'Appareil"',
            'visuals.ticket4': 'PCT — "Routeur Optique"',
            'visuals.feeEstimate': 'Estimation des Frais',
            'visuals.entity': 'Entité',
            'visuals.micro': 'Micro',
            'visuals.small': 'Petite',
            'visuals.large': 'Grande',
            'visuals.claimsTotal': 'Revendications (total)',
            'visuals.independentClaims': 'Revendications Indépendantes',
            'visuals.pages': 'Pages',
            'visuals.estimate': 'Estimer',
            
            // Pricing Section
            'pricing.title': 'Tarification',
            'pricing.perMatter': '/affaire',
            'pricing.selfServe.title': 'Self-Service',
            'pricing.selfServe.feature1': 'Espace de travail de rédaction',
            'pricing.selfServe.feature2': 'Liste de contrôle de dépôt',
            'pricing.selfServe.feature3': 'Estimations de frais',
            'pricing.getStarted': 'Commencer',
            'pricing.assisted.title': 'Assisté',
            'pricing.assisted.feature1': 'Tout du Self-Service',
            'pricing.assisted.feature2': 'Radar d\'art antérieur + rapport',
            'pricing.assisted.feature3': 'Révision de l\'arbre de revendications',
            'pricing.talkToUs': 'Nous Parler',
            'pricing.fullService.title': 'Service Complet',
            'pricing.custom': 'Sur Mesure',
            'pricing.fullService.feature1': 'Support de poursuite',
            'pricing.fullService.feature2': 'Analyse de portefeuille',
            'pricing.fullService.feature3': 'SLAs et conformité',
            'pricing.bookCall': 'Réserver un Appel',
            
            // Footer & Contact
            'footer.tagline': 'Agent de brevets dans votre navigateur',
            'footer.confidential': 'Confidentiel et sécurisé par conception.',
            'contact.yourEmail': 'Votre email',
            'contact.yourMessage': 'Votre message',
            'contact.messagePlaceholder': 'Parlez-nous de votre invention...',
            'contact.send': 'Envoyer'
        },
        
        zh: {
            // Header
            'header.subtitle': '自动化专利工作空间',
            
            // Navigation
            'nav.features': '功能',
            'nav.visuals': '可视化',
            'nav.pricing': '价格',
            'nav.contact': '联系',
            
            // Hero Section
            'hero.title': '起草、申请和起诉—<span class="accent">可视化</span>。',
            'hero.description': '将专利代理人的工具包带入您的浏览器：权利要求树、现有技术雷达、案卷时间线和申请清单，不会让您错过任何细节。',
            'hero.openDemo': '打开实时演示',
            'hero.exploreFeatures': '探索功能',
            'hero.badge1': '安全工作空间',
            'hero.badge2': 'USPTO就绪输出',
            'hero.badge3': '可视化分析',
            'hero.claimTreeTitle': '权利要求树',
            'hero.supportOk': '§112支持正常',
            'hero.needsSupport': '需要支持',
            
            // Features Section
            'features.title': '标志性功能',
            'features.claimTree.title': '权利要求树',
            'features.claimTree.description': '具有继承、支持映射和§112/102/103风险标志的交互式层次结构。',
            'features.docketTimeline.title': '案卷时间线',
            'features.docketTimeline.description': '法定期限计算，包括延期、每个事项状态和ICS导出。',
            'features.priorArtRadar.title': '现有技术雷达',
            'features.priorArtRadar.description': '按相似性、CPC类别和受让人的可视化集群；跳转到权利要求图表。',
            'features.feeCalculator.title': '费用计算器',
            'features.feeCalculator.description': '实体感知成本估算，包括权利要求/页面计数和超额费用。',
            
            // Visuals Section
            'visuals.docketKanban': '案卷看板',
            'visuals.drafting': '起草',
            'visuals.review': '审查',
            'visuals.filed': '已申请',
            'visuals.ticket1': '实用新型 — "光耦合器"',
            'visuals.ticket2': '临时申请 — "忆阻器网格"',
            'visuals.ticket3': '外观设计 — "设备外壳"',
            'visuals.ticket4': 'PCT — "光路由器"',
            'visuals.feeEstimate': '费用估算',
            'visuals.entity': '实体',
            'visuals.micro': '微型',
            'visuals.small': '小型',
            'visuals.large': '大型',
            'visuals.claimsTotal': '权利要求（总计）',
            'visuals.independentClaims': '独立权利要求',
            'visuals.pages': '页数',
            'visuals.estimate': '估算',
            
            // Pricing Section
            'pricing.title': '定价',
            'pricing.perMatter': '/事项',
            'pricing.selfServe.title': '自助服务',
            'pricing.selfServe.feature1': '起草工作空间',
            'pricing.selfServe.feature2': '申请清单',
            'pricing.selfServe.feature3': '费用估算',
            'pricing.getStarted': '开始使用',
            'pricing.assisted.title': '辅助服务',
            'pricing.assisted.feature1': '自助服务的所有功能',
            'pricing.assisted.feature2': '现有技术雷达 + 报告',
            'pricing.assisted.feature3': '权利要求树审查',
            'pricing.talkToUs': '与我们交谈',
            'pricing.fullService.title': '全面服务',
            'pricing.custom': '定制',
            'pricing.fullService.feature1': '起诉支持',
            'pricing.fullService.feature2': '组合分析',
            'pricing.fullService.feature3': 'SLA和合规性',
            'pricing.bookCall': '预约通话',
            
            // Footer & Contact
            'footer.tagline': '浏览器中的专利代理人',
            'footer.confidential': '设计上保密且安全。',
            'contact.yourEmail': '您的电子邮件',
            'contact.yourMessage': '您的留言',
            'contact.messagePlaceholder': '告诉我们您的发明...',
            'contact.send': '发送'
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
        
        // Handle placeholder attributes
        if (element.hasAttribute('data-i18n-placeholder')) {
            const placeholderKey = element.getAttribute('data-i18n-placeholder');
            const placeholderTranslation = translations[currentLang][placeholderKey];
            if (placeholderTranslation) {
                element.placeholder = placeholderTranslation;
            }
        }
        
        // Handle different element types
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
            if (!element.hasAttribute('data-i18n-placeholder')) {
                element.placeholder = translation;
            }
        } else {
            // For elements that might contain HTML (like the hero title with accent span)
            if (translation.includes('<')) {
                element.innerHTML = translation;
            } else {
                element.textContent = translation;
            }
        }
    }
    
    // Function to translate all elements on the page
    function translatePage() {
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(translateElement);
        
        // Also translate placeholder attributes
        const placeholderElements = document.querySelectorAll('[data-i18n-placeholder]');
        placeholderElements.forEach(element => {
            const key = element.getAttribute('data-i18n-placeholder');
            const translation = translations[currentLang][key];
            if (translation) {
                element.placeholder = translation;
            }
        });
        
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
            // Find the navigation bar
            const nav = document.querySelector('.nav');
            
            if (!nav) {
                console.error('Navigation not found');
                return;
            }
            
            // Create dropdown container
            const dropdownContainer = document.createElement('div');
            dropdownContainer.className = 'language-dropdown-container';
            dropdownContainer.style.cssText = 'position: relative; display: inline-block;';
            dropdownContainer.innerHTML = `
                <button 
                    id="language-dropdown-button"
                    onclick="toggleLanguageDropdown()"
                    class="language-dropdown-button"
                    style="display: flex; align-items: center; padding: 8px 12px; background: transparent; border: 1px solid var(--border); border-radius: 12px; color: var(--text); font-weight: 500; cursor: pointer; transition: all 0.3s ease;"
                >
                    <span style="font-size: 20px; margin-right: 6px;">${languages[currentLang].flag}</span>
                    <span>${languages[currentLang].name}</span>
                    <svg style="width: 16px; height: 16px; margin-left: 4px;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </button>
                
                <div 
                    id="language-dropdown-menu"
                    class="language-dropdown-menu"
                    style="position: absolute; right: 0; top: 100%; margin-top: 8px; min-width: 180px; background: var(--panel); border: 1px solid var(--border); border-radius: 12px; box-shadow: 0 10px 25px rgba(0,0,0,0.3); display: none; z-index: 1000;"
                >
                    ${Object.entries(languages).map(([code, lang]) => `
                        <button
                            onclick="changeLanguage('${code}'); toggleLanguageDropdown();"
                            style="width: 100%; display: flex; align-items: center; padding: 12px 16px; background: transparent; border: none; color: var(--text); cursor: pointer; transition: background 0.2s; text-align: left; ${code === currentLang ? 'background: rgba(76, 137, 255, 0.1);' : ''}"
                            onmouseover="this.style.background='rgba(76, 137, 255, 0.1)'"
                            onmouseout="this.style.background='${code === currentLang ? 'rgba(76, 137, 255, 0.1)' : 'transparent'}'"
                        >
                            <span style="font-size: 20px; margin-right: 10px;">${lang.flag}</span>
                            <span style="font-weight: 500;">${lang.name}</span>
                            ${code === currentLang ? '<svg style="width: 16px; height: 16px; margin-left: auto; color: var(--accent);" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>' : ''}
                        </button>
                    `).join('')}
                </div>
            `;
            
            // Insert before the contact button
            const contactBtn = nav.querySelector('a[href="#contact"]');
            if (contactBtn) {
                nav.insertBefore(dropdownContainer, contactBtn);
            } else {
                nav.appendChild(dropdownContainer);
            }
        }, 100);
    }
    
    // Toggle dropdown visibility
    window.toggleLanguageDropdown = function() {
        const menu = document.getElementById('language-dropdown-menu');
        if (menu) {
            menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
        }
    }
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function(event) {
        const dropdown = document.getElementById('language-dropdown-menu');
        const button = document.getElementById('language-dropdown-button');
        
        if (dropdown && button && !button.contains(event.target) && !dropdown.contains(event.target)) {
            dropdown.style.display = 'none';
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
        setTimeout(init, 100);
    }
    
    // Make changeLanguage function globally available
    window.changeLanguage = changeLanguage;
    
})();