import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// Configuration globale de l'application
const app = createApp(App)

// Configuration Pinia pour la gestion d'état
app.use(createPinia())

// Configuration du router
app.use(router)

// Configuration des performances
if (import.meta.env.PROD) {
  // Désactiver les warnings en production
  app.config.warnHandler = () => null

  // Optimisation des performances
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js').catch(console.error)
    })
  }
}

app.mount('#app')
