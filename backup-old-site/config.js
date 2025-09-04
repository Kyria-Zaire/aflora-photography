/* ===================================
   AFLORA - Configuration
   Variables centralisées du site
   =================================== */

const AFLORA_CONFIG = {
    // ===================================
    // INFORMATIONS DE CONTACT
    // ===================================
    contact: {
        whatsapp: "243000000000", // Remplacer par le vrai numéro
        email: "contact@aflora.cd",
        location: "Kinshasa, RDC",
        hours: "Lun-Dim, 8h-20h"
    },

    // ===================================
    // RÉSEAUX SOCIAUX
    // ===================================
    social: {
        instagram: "https://instagram.com/aflora_photo",
        facebook: "https://facebook.com/afloraphoto",
        whatsapp: "https://wa.me/243000000000"
    },

    // ===================================
    // SERVICES & TARIFS
    // ===================================
    services: {
        essentiel: {
            name: "Essentiel",
            price: 150,
            currency: "USD",
            duration: "2h",
            photos: 10,
            features: [
                "2h de shooting",
                "10 photos retouchées",
                "Livraison en 48h",
                "Conseils vestimentaires",
                "1 tenue incluse"
            ]
        },
        premium: {
            name: "Premium",
            price: 300,
            currency: "USD",
            duration: "4h",
            photos: 25,
            features: [
                "4h de shooting",
                "25 photos retouchées",
                "Livraison en 48h",
                "Conseils vestimentaires",
                "3 tenues incluses",
                "Album numérique",
                "Photos en haute résolution"
            ]
        },
        luxe: {
            name: "Luxe",
            price: 500,
            currency: "USD",
            duration: "6h",
            photos: 50,
            features: [
                "6h de shooting",
                "50 photos retouchées",
                "Livraison en 48h",
                "Conseils vestimentaires",
                "5 tenues incluses",
                "Album physique premium",
                "Photos en haute résolution",
                "Retouche avancée",
                "Support prioritaire"
            ]
        },
        mariage: {
            name: "Mariage Complet",
            price: 800,
            currency: "USD",
            duration: "Journée complète",
            photos: 100,
            features: [
                "Préparation de la mariée",
                "Cérémonie religieuse",
                "Réception complète",
                "Photos de couple",
                "100 photos retouchées",
                "Album premium physique",
                "Livraison en 72h",
                "Support prioritaire 24/7"
            ]
        }
    },

    // ===================================
    // CATÉGORIES PORTFOLIO
    // ===================================
    portfolio: {
        categories: [
            {
                id: "mariage",
                name: "Mariage",
                icon: "💒",
                description: "Cérémonies et réceptions"
            },
            {
                id: "grossesse",
                name: "Grossesse",
                icon: "🤱",
                description: "Shootings maternité"
            },
            {
                id: "mode",
                name: "Mode",
                icon: "👗",
                description: "Lookbooks et créations"
            },
            {
                id: "portrait",
                name: "Portrait",
                icon: "📸",
                description: "Portraits professionnels"
            },
            {
                id: "evenementiel",
                name: "Événementiel",
                icon: "🎉",
                description: "Événements et célébrations"
            }
        ]
    },

    // ===================================
    // MESSAGES WHATSAPP PRÉ-REMPLIS
    // ===================================
    whatsapp: {
        default: "Bonjour AFLORA, j'aimerais réserver un shooting...",
        essentiel: "Bonjour AFLORA, j'aimerais réserver le forfait Essentiel ($150)...",
        premium: "Bonjour AFLORA, j'aimerais réserver le forfait Premium ($300)...",
        luxe: "Bonjour AFLORA, j'aimerais réserver le forfait Luxe ($500)...",
        mariage: "Bonjour AFLORA, j'aimerais réserver le service Mariage Complet ($800)...",
        devis: "Bonjour AFLORA, j'aimerais un devis pour un événement...",
        portfolio: "Bonjour AFLORA, j'aimerais voir plus de photos de votre portfolio..."
    },

    // ===================================
    // SEO & META
    // ===================================
    seo: {
        title: "AFLORA - Photographe d'émotions à Kinshasa | L'émotion à l'instant juste",
        description: "AFLORA, photographe professionnel à Kinshasa. Spécialisé en mariage, grossesse, mode et portrait. Capturez vos moments les plus précieux avec émotion.",
        keywords: "photographe Kinshasa, shooting mariage RDC, photographe grossesse, portrait professionnel, événementiel Kinshasa",
        author: "AFLORA Photographe",
        ogImage: "/assets/images/og-image.jpg"
    },

    // ===================================
    // ANALYTICS
    // ===================================
    analytics: {
        googleAnalytics: "GA_MEASUREMENT_ID", // Remplacer par l'ID réel
        facebookPixel: "YOUR_PIXEL_ID" // Remplacer par l'ID réel
    },

    // ===================================
    // ANIMATIONS
    // ===================================
    animations: {
        duration: 1000,
        offset: 100,
        once: true,
        easing: 'ease-in-out'
    },

    // ===================================
    // COULEURS & DESIGN
    // ===================================
    design: {
        colors: {
            primary: "#000000",
            secondary: "#D4AF37",
            accent: "#FFD700",
            gray: {
                800: "#1a1a1a",
                900: "#2d2d2d"
            }
        },
        fonts: {
            primary: "Playfair Display",
            secondary: "Inter"
        }
    },

    // ===================================
    // FONCTIONS UTILITAIRES
    // ===================================
    utils: {
        // Formater un prix
        formatPrice: function(price, currency = "USD") {
            return `${currency === "USD" ? "$" : ""}${price}`;
        },

        // Générer un lien WhatsApp
        getWhatsAppLink: function(message) {
            const encodedMessage = encodeURIComponent(message);
            return `https://wa.me/${this.contact.whatsapp}?text=${encodedMessage}`;
        },

        // Formater un numéro de téléphone
        formatPhone: function(phone) {
            return phone.replace(/(\d{3})(\d{3})(\d{3})/, '$1 $2 $3');
        },

        // Vérifier si c'est la page active
        isActivePage: function(pageName) {
            return window.location.pathname.includes(pageName);
        }
    }
};

// ===================================
// EXPORT POUR UTILISATION GLOBALE
// ===================================
window.AFLORA_CONFIG = AFLORA_CONFIG;

// ===================================
// FONCTIONS DE CONFIGURATION
// ===================================
window.ConfigUtils = {
    // Obtenir un service par ID
    getService: function(serviceId) {
        return AFLORA_CONFIG.services[serviceId];
    },

    // Obtenir une catégorie par ID
    getCategory: function(categoryId) {
        return AFLORA_CONFIG.portfolio.categories.find(cat => cat.id === categoryId);
    },

    // Obtenir un message WhatsApp par type
    getWhatsAppMessage: function(type) {
        return AFLORA_CONFIG.whatsapp[type] || AFLORA_CONFIG.whatsapp.default;
    },

    // Générer un lien WhatsApp complet
    getWhatsAppLink: function(type) {
        const message = this.getWhatsAppMessage(type);
        return AFLORA_CONFIG.utils.getWhatsAppLink(message);
    },

    // Mettre à jour les éléments du DOM avec la configuration
    updateDOM: function() {
        // Mettre à jour les liens WhatsApp
        document.querySelectorAll('[data-whatsapp-type]').forEach(element => {
            const type = element.getAttribute('data-whatsapp-type');
            element.href = this.getWhatsAppLink(type);
        });

        // Mettre à jour les numéros de téléphone
        document.querySelectorAll('[data-phone]').forEach(element => {
            element.textContent = AFLORA_CONFIG.utils.formatPhone(AFLORA_CONFIG.contact.whatsapp);
        });

        // Mettre à jour les emails
        document.querySelectorAll('[data-email]').forEach(element => {
            element.textContent = AFLORA_CONFIG.contact.email;
        });
    }
};

// Mettre à jour le DOM quand le script est chargé
document.addEventListener('DOMContentLoaded', function() {
    ConfigUtils.updateDOM();
}); 