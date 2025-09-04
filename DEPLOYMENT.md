# 🚀 Guide de Déploiement AFLORA

## 📋 Prérequis

- ✅ Projet compilé avec succès (`npm run build`)
- ✅ Dossier `dist` généré
- ✅ Compte GitHub (optionnel mais recommandé)

---

## 🎯 **Option 1 : Vercel (RECOMMANDÉ - Gratuit)**

### Étape 1 : Créer un compte

1. Aller sur [vercel.com](https://vercel.com)
2. Cliquer sur "Sign Up"
3. Se connecter avec GitHub (recommandé) ou créer un compte email

### Étape 2 : Déployer

1. Cliquer sur "New Project"
2. Choisir "Upload" (Glisser-déposer)
3. Glisser le dossier `dist` complet
4. Cliquer sur "Deploy"

### Étape 3 : Configuration

- **Project Name** : `aflora-photography`
- **Framework Preset** : `Other`
- **Build Command** : `npm run build`
- **Output Directory** : `dist`

**URL générée** : `https://aflora-photography.vercel.app`

---

## 🌐 **Option 2 : Netlify (Gratuit)**

### Étape 1 : Créer un compte

1. Aller sur [netlify.com](https://netlify.com)
2. Cliquer sur "Sign Up"
3. Se connecter avec GitHub

### Étape 2 : Déployer

1. Cliquer sur "New site from Git"
2. Choisir votre repository GitHub
3. **Build command** : `npm run build`
4. **Publish directory** : `dist`
5. Cliquer sur "Deploy site"

---

## 📱 **Option 3 : GitHub Pages (Gratuit)**

### Étape 1 : Préparer le repository

```bash
# Initialiser Git (si pas déjà fait)
git init
git add .
git commit -m "Initial commit"

# Créer un repository sur GitHub
# Pousser le code
git remote add origin https://github.com/votre-username/aflora.git
git push -u origin main
```

### Étape 2 : Activer GitHub Pages

1. Aller dans Settings > Pages
2. **Source** : `Deploy from a branch`
3. **Branch** : `main`
4. **Folder** : `/ (root)`
5. Cliquer sur "Save"

---

## 🔧 **Configuration Post-Déploiement**

### 1. Vérifier le site

- Tester toutes les pages
- Vérifier les images
- Tester la navigation mobile

### 2. Optimiser les performances

- Vérifier le score Lighthouse
- Optimiser les images si nécessaire
- Tester la PWA

### 3. Configurer un nom de domaine (optionnel)

- Acheter un domaine (.com, .cd, .africa)
- Configurer les DNS
- Activer HTTPS

---

## 🚨 **Problèmes Courants**

### Le site ne se charge pas

- Vérifier que le dossier `dist` est complet
- Vérifier la configuration du serveur
- Vérifier les logs de build

### Images manquantes

- Vérifier que toutes les images sont dans `dist/assets/`
- Vérifier les chemins dans le code
- Recompiler le projet

### Navigation ne fonctionne pas

- Vérifier la configuration des routes
- Vérifier que `index.html` est bien configuré
- Vérifier la configuration du serveur

---

## 📞 **Support**

- **Vercel** : [vercel.com/docs](https://vercel.com/docs)
- **Netlify** : [docs.netlify.com](https://docs.netlify.com)
- **GitHub Pages** : [docs.github.com/pages](https://docs.github.com/pages)

---

## 🎉 **Félicitations !**

Votre site AFLORA est maintenant en ligne !

**Prochaines étapes recommandées :**

1. Tester le site sur différents appareils
2. Optimiser les images pour le web
3. Ajouter Google Analytics
4. Configurer un nom de domaine personnalisé
5. Mettre en place un système de backup
