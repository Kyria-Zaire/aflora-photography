import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PortfolioView from '../views/PortfolioView.vue'
import ServicesView from '../views/ServicesView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'AFLORA - Photographie de Luxe à Kinshasa'
      }
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: PortfolioView,
      meta: {
        title: 'Portfolio - AFLORA'
      }
    },
    {
      path: '/services',
      name: 'services',
      component: ServicesView,
      meta: {
        title: 'Services - AFLORA'
      }
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
      meta: {
        title: 'À Propos - AFLORA'
      }
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
      meta: {
        title: 'Contact - AFLORA'
      }
    },
    {
      path: '/blog',
      name: 'Blog',
      component: () => import('../views/BlogView.vue')
    },
    {
      path: '/blog/:slug',
      name: 'Article',
      component: () => import('../views/ArticleView.vue')
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

// Mise à jour du titre de la page
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title as string
  }
  next()
})

export default router
