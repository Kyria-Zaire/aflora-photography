/* ===================================
   AFLORA - JavaScript Ultra Luxe
   Photographe Kinshasa
   =================================== */

// ===================================
// INITIALIZATION
// ===================================
document.addEventListener('DOMContentLoaded', function() {
    console.log('🎨 AFLORA - Site Ultra Luxe initialisé');
    
    // Initialiser tous les modules
    initNavigation();
    initPortfolio();
    initAnimations();
    initContactForm();
    initScrollEffects();
    initLuxuryEffects();
});

// ===================================
// NAVIGATION LUXE
// ===================================
function initNavigation() {
    const navbar = document.querySelector('.navbar-luxe');
    const navLinks = document.querySelectorAll('.nav-link-luxe');
    
    // Effet de scroll sur la navbar
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Navigation smooth scroll
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
            
            // Mettre à jour l'état actif
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });
    
    // Détecter la section active au scroll
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section[id]');
        const scrollPos = window.scrollY + 200;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
}

// ===================================
// PORTFOLIO FILTER LUXE
// ===================================
function initPortfolio() {
    const filterBtns = document.querySelectorAll('.filter-btn-luxe');
    const portfolioItems = document.querySelectorAll('.portfolio-item-luxe');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.getAttribute('data-filter');
            
            // Mettre à jour les boutons actifs
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Filtrer les éléments
            portfolioItems.forEach(item => {
                const category = item.getAttribute('data-category');
                
                if (filter === 'all' || category === filter) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 100);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
    
    // Animation d'entrée des éléments portfolio
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const portfolioObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    portfolioItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(50px)';
        item.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        portfolioObserver.observe(item);
    });
}

// ===================================
// ANIMATIONS LUXE
// ===================================
function initAnimations() {
    // Animation des titres au scroll
    const titles = document.querySelectorAll('.section-title-luxe, .hero-title-luxe');
    
    const titleObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.3 });
    
    titles.forEach(title => {
        title.style.opacity = '0';
        title.style.transform = 'translateY(50px)';
        title.style.transition = 'all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        titleObserver.observe(title);
    });
    
    // Animation des cartes
    const cards = document.querySelectorAll('.card-luxe, .service-card-luxe, .price-card-luxe');
    
    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 200);
            }
        });
    }, { threshold: 0.1 });
    
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        card.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        cardObserver.observe(card);
    });
    
    // Animation des boutons
    const buttons = document.querySelectorAll('.btn-luxe-primary, .btn-luxe-secondary');
    
    buttons.forEach((btn, index) => {
        btn.style.opacity = '0';
        btn.style.transform = 'translateY(30px)';
        btn.style.transition = 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        
        setTimeout(() => {
            btn.style.opacity = '1';
            btn.style.transform = 'translateY(0)';
        }, 1000 + (index * 200));
    });
}

// ===================================
// CONTACT FORM LUXE
// ===================================
function initContactForm() {
    const contactForm = document.querySelector('.contact-form-luxe');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Récupérer les données du formulaire
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');
            
            // Validation basique
            if (!name || !email || !message) {
                showNotification('Veuillez remplir tous les champs', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showNotification('Veuillez entrer une adresse email valide', 'error');
                return;
            }
            
            // Simulation d'envoi
            showNotification('Envoi en cours...', 'info');
            
            setTimeout(() => {
                showNotification('Message envoyé avec succès ! Nous vous répondrons bientôt.', 'success');
                this.reset();
            }, 2000);
        });
        
        // Animation des inputs
        const inputs = contactForm.querySelectorAll('.form-input-luxe');
        
        inputs.forEach(input => {
            input.addEventListener('focus', () => {
                input.parentElement.classList.add('focused');
            });
            
            input.addEventListener('blur', () => {
                if (!input.value) {
                    input.parentElement.classList.remove('focused');
                }
            });
        });
    }
}

// ===================================
// SCROLL EFFECTS LUXE
// ===================================
function initScrollEffects() {
    // Parallax effect sur le hero
    const heroSection = document.querySelector('.hero-section-luxe');
    
    if (heroSection) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            
            heroSection.style.transform = `translateY(${rate}px)`;
        });
    }
    
    // Effet de révélation au scroll
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, { threshold: 0.1 });
    
    revealElements.forEach(el => {
        revealObserver.observe(el);
    });
}

// ===================================
// LUXURY EFFECTS
// ===================================
function initLuxuryEffects() {
    // Effet de particules dorées
    createLuxuryParticles();
    
    // Effet de hover sur les cartes
    const cards = document.querySelectorAll('.card-luxe, .service-card-luxe, .price-card-luxe');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
        });
    });
    
    // Effet de texte animé
    animateLuxuryText();
}

// ===================================
// UTILITY FUNCTIONS
// ===================================
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showNotification(message, type = 'info') {
    // Créer la notification
    const notification = document.createElement('div');
    notification.className = `notification-luxe notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Styles de la notification
    notification.style.cssText = `
        position: fixed;
        top: 2rem;
        right: 2rem;
        background: ${type === 'success' ? '#25D366' : type === 'error' ? '#FF6B6B' : '#D4AF37'};
        color: white;
        padding: 1rem 2rem;
        border-radius: 15px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        z-index: 10000;
        transform: translateX(100%);
        transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        max-width: 400px;
    `;
    
    document.body.appendChild(notification);
    
    // Animation d'entrée
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Fermer la notification
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 500);
    });
    
    // Auto-fermeture
    setTimeout(() => {
        if (document.body.contains(notification)) {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (document.body.contains(notification)) {
                    document.body.removeChild(notification);
                }
            }, 500);
        }
    }, 5000);
}

function createLuxuryParticles() {
    const particleContainer = document.createElement('div');
    particleContainer.className = 'luxury-particles';
    particleContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 1;
        overflow: hidden;
    `;
    
    document.body.appendChild(particleContainer);
    
    // Créer des particules
    for (let i = 0; i < 50; i++) {
        createParticle(particleContainer);
    }
}

function createParticle(container) {
    const particle = document.createElement('div');
    particle.style.cssText = `
        position: absolute;
        width: 4px;
        height: 4px;
        background: #D4AF37;
        border-radius: 50%;
        opacity: 0.6;
        animation: floatParticle ${Math.random() * 10 + 10}s linear infinite;
    `;
    
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 10 + 's';
    
    container.appendChild(particle);
    
    // Supprimer et recréer la particule
    setTimeout(() => {
        if (container.contains(particle)) {
            container.removeChild(particle);
            createParticle(container);
        }
    }, 15000);
}

function animateLuxuryText() {
    const luxuryTexts = document.querySelectorAll('.gradient-text-luxe');
    
    luxuryTexts.forEach(text => {
        const originalText = text.textContent;
        text.setAttribute('data-text', originalText);
        
        // Animation de brillance
        setInterval(() => {
            text.style.filter = 'brightness(1.2)';
            setTimeout(() => {
                text.style.filter = 'brightness(1)';
            }, 200);
        }, 3000);
    });
}

// ===================================
// CSS ANIMATIONS (injectées via JS)
// ===================================
const luxuryStyles = `
    @keyframes floatParticle {
        0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
        }
        10% {
            opacity: 0.6;
        }
        90% {
            opacity: 0.6;
        }
        100% {
            transform: translateY(-100px) rotate(360deg);
            opacity: 0;
        }
    }
    
    .reveal-on-scroll {
        opacity: 0;
        transform: translateY(50px);
        transition: all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }
    
    .reveal-on-scroll.revealed {
        opacity: 1;
        transform: translateY(0);
    }
    
    .form-group-luxe.focused .form-label-luxe {
        color: #D4AF37;
        transform: translateY(-5px);
    }
`;

// Injecter les styles
const styleSheet = document.createElement('style');
styleSheet.textContent = luxuryStyles;
document.head.appendChild(styleSheet);

// ===================================
// PERFORMANCE OPTIMIZATION
// ===================================
// Throttle pour les événements de scroll
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Optimiser les événements de scroll
window.addEventListener('scroll', throttle(() => {
    // Les effets de scroll sont déjà gérés dans les fonctions spécifiques
}, 16)); // ~60fps

console.log('✨ AFLORA - JavaScript Ultra Luxe chargé avec succès'); 