# 🌸 AFLORA - Site Web Photographe Kinshasa

Site web professionnel pour AFLORA, photographe freelance à Kinshasa. Design premium avec palette noir & or, responsive et optimisé pour la conversion.

## 🎯 **Concept**

**"L'émotion à l'instant juste"** - Site web moderne et élégant pour un photographe professionnel spécialisé en mariage, grossesse, mode, portrait et événementiel.

## 🚀 **Fonctionnalités**

### ✅ **Pages Principales**
- **Accueil** : Landing page avec storytelling et présentation
- **Portfolio** : Galerie interactive avec filtres par catégorie
- **Services** : Tarifs détaillés et forfaits
- **Contact** : Formulaire de réservation et informations

### ✅ **Fonctionnalités Marketing**
- **Intégration WhatsApp** : Boutons avec messages pré-remplis
- **Responsive Design** : Mobile-first, optimisé tous appareils
- **SEO Optimisé** : Meta tags, descriptions, structure sémantique
- **Animations** : AOS (Animate On Scroll) pour l'élégance
- **Tunnel de conversion** : Parcours utilisateur optimisé

### ✅ **Design Premium**
- **Palette de couleurs** : Noir & Or (#D4AF37, #FFD700)
- **Typographie** : Playfair Display + Inter
- **Animations fluides** : Transitions et hover effects
- **UI/UX moderne** : Design épuré et professionnel

## 📁 **Structure du Projet**

```
Aflora/
├── 📄 index.html              # Page d'accueil principale
├── 📄 portfolio.html          # Galerie portfolio interactive
├── 📄 services.html           # Services & tarifs détaillés
├── 📄 contact.html            # Contact & réservation
├── 📄 config.js              # Configuration centralisée
├── 📄 README.md              # Documentation complète
├── 📄 .gitignore             # Fichiers à ignorer
└── 📁 assets/                # Ressources organisées
    ├── 📁 css/
    │   └── 📄 style.css      # Styles personnalisés
    ├── 📁 js/
    │   ├── 📄 main.js        # JavaScript principal
    │   └── 📄 portfolio.js   # Galerie portfolio
    ├── 📁 images/            # Images du site
    │   ├── 📄 logo.png       # Logo AFLORA
    │   ├── 📄 hero-bg.jpg    # Image d'arrière-plan
    │   └── 📁 portfolio/     # Photos du portfolio
    └── 📁 fonts/             # Polices personnalisées
```

## 🛠️ **Technologies Utilisées**

### **Frontend**
- **HTML5** : Structure sémantique et accessible
- **CSS3** : Styles personnalisés et animations
- **Tailwind CSS** : Framework CSS (CDN gratuit)
- **JavaScript ES6+** : Interactions et fonctionnalités
- **AOS** : Animations au scroll fluides

### **Organisation**
- **Architecture modulaire** : CSS et JS séparés
- **Configuration centralisée** : Variables dans `config.js`
- **Structure responsive** : Mobile-first design
- **Performance optimisée** : Lazy loading et minification

### **Outils**
- **Google Fonts** : Typographie premium
- **Git** : Versioning et collaboration
- **Netlify/Vercel** : Déploiement gratuit

## 🚀 **Installation & Déploiement**

### **Option 1 : Hébergement Gratuit (Recommandé)**

1. **Netlify** (Gratuit)
   ```bash
   # Connecter votre repo GitHub
   # Netlify déploiera automatiquement
   ```

2. **Vercel** (Gratuit)
   ```bash
   # Connecter votre repo GitHub
   # Vercel déploiera automatiquement
   ```

3. **GitHub Pages** (Gratuit)
   ```bash
   # Activer GitHub Pages dans les settings
   # Site accessible via username.github.io/repo-name
   ```

### **Option 2 : Hébergement Local**

1. **Cloner le projet**
   ```bash
   git clone [url-du-repo]
   cd Aflora
   ```

2. **Ouvrir dans un navigateur**
   ```bash
   # Double-cliquer sur index.html
   # Ou utiliser un serveur local
   python -m http.server 8000
   ```

## 📱 **Optimisations Mobile**

- **Mobile-first design**
- **Navigation responsive**
- **Images optimisées**
- **Boutons tactiles**
- **Chargement rapide**

## 🏗️ **Architecture & Organisation**

### **Structure Modulaire**
- **`config.js`** : Configuration centralisée (contacts, tarifs, messages)
- **`assets/css/style.css`** : Styles personnalisés organisés par sections
- **`assets/js/main.js`** : Fonctionnalités principales et utilitaires
- **`assets/js/portfolio.js`** : Galerie portfolio avec filtres et lightbox

### **Avantages de cette Organisation**
- ✅ **Maintenance facile** : Chaque fichier a une responsabilité spécifique
- ✅ **Configuration centralisée** : Modifier les infos dans un seul fichier
- ✅ **Code réutilisable** : Fonctions modulaires et bien documentées
- ✅ **Performance optimisée** : CSS et JS séparés pour le cache
- ✅ **Collaboration simplifiée** : Structure claire pour les développeurs

## 🔧 **Personnalisation**

### **Modifier les Informations de Contact**
```javascript
// Dans config.js - Ligne 8
contact: {
    whatsapp: "243000000000", // Remplacer par le vrai numéro
    email: "contact@aflora.cd",
    location: "Kinshasa, RDC",
    hours: "Lun-Dim, 8h-20h"
}
```

### **Changer les Couleurs**
```css
/* Dans assets/css/style.css - Ligne 20 */
.gradient-text {
    background: linear-gradient(135deg, #D4AF37 0%, #FFD700 100%);
    /* Modifier les couleurs ici */
}
```

### **Modifier les Tarifs**
```javascript
// Dans config.js - Ligne 25
services: {
    essentiel: {
        price: 150, // Modifier le prix
        // ...
    }
}
```

### **Ajouter des Images**
1. **Logo** : Placer `logo.png` dans `assets/images/`
2. **Photos portfolio** : Ajouter dans `assets/images/portfolio/`
3. **Images d'arrière-plan** : Placer dans `assets/images/`
4. **Remplacer les placeholders** dans les fichiers HTML

### **Structure des Images Recommandée**
```
assets/images/
├── logo.png              # Logo AFLORA
├── hero-bg.jpg           # Image d'arrière-plan
├── photographer.jpg      # Photo du photographe
└── portfolio/
    ├── mariage-1.jpg
    ├── grossesse-1.jpg
    ├── mode-1.jpg
    └── portrait-1.jpg
```

## 📊 **Analytics & Tracking**

### **Google Analytics** (Optionnel)
```html
<!-- Ajouter dans le <head> de chaque page -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### **Facebook Pixel** (Optionnel)
```html
<!-- Ajouter dans le <head> de chaque page -->
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', 'YOUR_PIXEL_ID');
  fbq('track', 'PageView');
</script>
```

## 🎨 **Branding & Identité Visuelle**

### **Logo**
- **Style** : Minimaliste et élégant
- **Couleurs** : Noir & Or
- **Typographie** : Playfair Display

### **Palette de Couleurs**
- **Primaire** : Noir (#000000)
- **Secondaire** : Or (#D4AF37, #FFD700)
- **Accent** : Gris (#1a1a1a, #2d2d2d)

### **Positionnement**
- **Premium** : Service haut de gamme
- **Émotionnel** : Capture d'émotions authentiques
- **Professionnel** : Qualité et fiabilité

## 📈 **Stratégie Marketing**

### **SEO Local**
- **Mots-clés** : "photographe Kinshasa", "shooting mariage RDC"
- **Google My Business** : Optimisation locale
- **Répertoires** : Inscription dans les annuaires locaux

### **Réseaux Sociaux**
- **Instagram** : Portfolio visuel
- **Facebook** : Événements et témoignages
- **WhatsApp** : Communication directe

### **Content Marketing**
- **Blog** : Conseils photo, témoignages
- **Témoignages clients** : Social proof
- **Galerie** : Portfolio en ligne

## 🔄 **Maintenance**

### **Mises à Jour Régulières**
- **Portfolio** : Ajouter nouvelles photos
- **Tarifs** : Actualiser les prix
- **Témoignages** : Nouveaux avis clients
- **SEO** : Optimisation continue

### **Sauvegarde**
- **Backup automatique** : Via GitHub
- **Versioning** : Historique des modifications
- **Sécurité** : HTTPS obligatoire

## 📞 **Support**

Pour toute question ou modification :
- **Développeur** : [Votre nom]
- **Client** : AFLORA Photographe
- **Contact** : [Votre email]

---

**AFLORA** - L'émotion à l'instant juste ✨📸 