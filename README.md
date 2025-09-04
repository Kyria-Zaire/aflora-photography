# AFLORA - Site Vitrine Photographe

Site vitrine professionnel pour photographe freelance basé à Kinshasa, RDC.

## 🚀 Déploiement Rapide

### Option 1 : Vercel (Recommandé - Gratuit)

1. Créer un compte sur [vercel.com](https://vercel.com)
2. Installer Vercel CLI : `npm i -g vercel`
3. Se connecter : `vercel login`
4. Déployer : `vercel --prod`

### Option 2 : Netlify (Gratuit)

1. Créer un compte sur [netlify.com](https://netlify.com)
2. Glisser-déposer le dossier `dist` sur Netlify
3. Ou connecter votre repo GitHub

### Option 3 : GitHub Pages

1. Pousser le code sur GitHub
2. Activer GitHub Pages dans les paramètres
3. Configurer la source : `dist` folder

## 🛠️ Développement Local

```bash
# Installer les dépendances
npm install

# Démarrer en mode développement
npm run dev

# Build de production
npm run build

# Prévisualiser le build
npm run preview
```

## 📁 Structure du Projet

- `src/` - Code source Vue.js
- `public/` - Assets statiques
- `dist/` - Build de production
- `vercel.json` - Configuration Vercel
- `netlify.toml` - Configuration Netlify

## 🌐 Configuration des Variables d'Environnement

Créer un fichier `env.production` :

```env
VITE_APP_TITLE=AFLORA - Photographie & Vidéo haut de gamme
VITE_APP_URL=https://votre-domaine.com
VITE_CONTACT_PHONE=+243 000 000 000
VITE_CONTACT_EMAIL=contact@votre-domaine.com
```

## 📱 PWA (Progressive Web App)

Le site est configuré comme PWA avec :

- Service Worker pour le cache offline
- Manifeste pour l'installation
- Optimisations de performance

## 🎨 Technologies

- Vue 3 + Composition API
- Vite (Build tool)
- Tailwind CSS
- TypeScript
- PWA Support

## 📞 Support

Pour toute question technique, consulter la documentation des plateformes de déploiement.
