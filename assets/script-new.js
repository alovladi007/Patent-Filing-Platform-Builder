// Fee Calculator Function
function calc() {
    const entity = document.getElementById('entity').value;
    const claims = parseInt(document.getElementById('claims').value || '0', 10);
    const indep = parseInt(document.getElementById('indClaims').value || '0', 10);
    const pages = parseInt(document.getElementById('pages').value || '0', 10);

    // Simple illustrative estimate (NOT official USPTO fees):
    // Base filing + search + exam adjusted by entity
    const baseMap = { micro: 200, small: 400, large: 800 };
    const claimExcess = Math.max(0, claims - 20) * { micro: 10, small: 20, large: 40 }[entity];
    const indepExcess = Math.max(0, indep - 3) * { micro: 40, small: 80, large: 160 }[entity];
    const pageExcess = Math.max(0, pages - 100) * { micro: 2, small: 4, large: 8 }[entity];
    const total = baseMap[entity] + claimExcess + indepExcess + pageExcess;

    const el = document.getElementById('result');
    
    // Get translations for the result display
    const lang = document.documentElement.lang || 'en';
    const translations = {
        en: {
            estimatedFees: 'Estimated Fees',
            entity: 'Entity',
            claims: 'Claims',
            independent: 'Independent',
            pages: 'Pages',
            disclaimer: 'Illustrative only; confirm latest USPTO schedule.'
        },
        es: {
            estimatedFees: 'Tarifas Estimadas',
            entity: 'Entidad',
            claims: 'Reivindicaciones',
            independent: 'Independientes',
            pages: 'Páginas',
            disclaimer: 'Solo ilustrativo; confirme el último programa de USPTO.'
        },
        fr: {
            estimatedFees: 'Frais Estimés',
            entity: 'Entité',
            claims: 'Revendications',
            independent: 'Indépendantes',
            pages: 'Pages',
            disclaimer: 'Illustratif seulement; confirmez le dernier barème USPTO.'
        },
        zh: {
            estimatedFees: '预估费用',
            entity: '实体',
            claims: '权利要求',
            independent: '独立',
            pages: '页数',
            disclaimer: '仅供参考；请确认最新的USPTO收费表。'
        }
    };
    
    const t = translations[lang] || translations.en;
    
    el.innerHTML = `
        <div><strong>${t.estimatedFees}</strong></div>
        <div>${t.entity}: ${entity}</div>
        <div>${t.claims}: ${claims}, ${t.independent}: ${indep}, ${t.pages}: ${pages}</div>
        <div style="margin-top:8px;font-size:24px;font-weight:800;color:var(--accent)">$${total.toFixed(2)}</div>
        <div class="fine" style="margin-top:8px;color:#9fb0c7;font-size:12px">${t.disclaimer}</div>
    `;
}

// Set current year
document.addEventListener('DOMContentLoaded', function() {
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});

// Smooth scroll for anchor links
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '0';
            entry.target.style.transform = 'translateY(20px)';
            setTimeout(() => {
                entry.target.style.transition = 'all 0.6s ease';
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, 100);
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.card, .panel, .pricecard').forEach(element => {
        observer.observe(element);
    });
});

// Form submission handler
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const email = this.querySelector('input[type="email"]').value;
            const message = this.querySelector('textarea').value;
            
            // Here you would normally send this to your backend
            console.log('Contact form submitted:', { email, message });
            
            // Show success message
            const lang = document.documentElement.lang || 'en';
            const successMessages = {
                en: 'Thank you! We\'ll be in touch soon.',
                es: '¡Gracias! Nos pondremos en contacto pronto.',
                fr: 'Merci! Nous vous contacterons bientôt.',
                zh: '谢谢！我们会尽快与您联系。'
            };
            
            alert(successMessages[lang] || successMessages.en);
            
            // Reset form
            this.reset();
        });
    }
});