<template>
  <nav
    ref="navRef"
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="navClasses"
    role="navigation"
    aria-label="Navigation principale"
  >
    <div class="container-luxury relative">
      <!-- Barre dorée sur scroll -->
      <div
        v-if="isScrolled"
        class="absolute left-0 right-0 bottom-0 h-0.5 bg-luxury-300 rounded-full shadow-gold transition-all duration-300"
      ></div>
      <div class="flex items-center justify-between py-4">
        <!-- Logo -->
        <router-link to="/" class="flex items-center space-x-2 group">
          <div class="w-10 h-10 bg-luxury-500 rounded-full flex items-center justify-center">
            <span class="text-white font-serif font-bold text-lg">A</span>
          </div>
          <span
            class="text-xl font-serif font-bold text-white transition-colors duration-300 group-hover:text-luxury-300 transition-transform group-hover:scale-105 group-hover:tracking-widest"
            style="display: inline-block"
          >
            AFLORA
          </span>
        </router-link>

        <!-- Desktop Navigation -->
        <div class="hidden lg:flex items-center space-x-8">
          <router-link
            v-for="item in navigationItems"
            :key="item.path"
            :to="item.path"
            class="nav-link text-white hover:text-luxury-300 transition-colors duration-300 font-medium"
            :class="{ 'nav-link-active': $route.path === item.path }"
          >
            {{ item.name }}
          </router-link>
        </div>

        <!-- Contact Button -->
        <div class="hidden lg:block">
          <router-link
            to="/contact"
            class="btn-luxury-outline text-white border-white hover:bg-white hover:text-dark-900"
          >
            Contact
          </router-link>
        </div>

        <!-- Mobile Menu Button -->
        <button
          @click="toggleMobileMenu"
          class="lg:hidden text-white hover:text-luxury-300 transition-colors duration-300 focus:outline-none"
          :aria-label="isMobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'"
        >
          <svg
            class="w-6 h-6 transition-transform duration-300"
            :class="{ 'rotate-90': isMobileMenuOpen }"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              v-if="!isMobileMenuOpen"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path
              v-else
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="transform -translate-y-2 opacity-0"
        enter-to-class="transform translate-y-0 opacity-100"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="transform translate-y-0 opacity-100"
        leave-to-class="transform -translate-y-2 opacity-0"
      >
        <div v-if="isMobileMenuOpen" class="mobile-glass-nav">
          <div class="flex flex-col space-y-4">
            <router-link
              v-for="item in navigationItems"
              :key="item.path"
              :to="item.path"
              @click="closeMobileMenu"
              class="nav-link text-white hover:text-luxury-300 transition-colors duration-300 font-medium"
              :class="{ 'nav-link-active': $route.path === item.path }"
            >
              {{ item.name }}
            </router-link>
            <router-link
              to="/contact"
              @click="closeMobileMenu"
              class="btn-luxury-outline text-white border-white hover:bg-white hover:text-dark-900 text-center"
            >
              Contact
            </router-link>
          </div>
        </div>
      </transition>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

const isMobileMenuOpen = ref(false)
const isScrolled = ref(false)
const navRef = ref<HTMLElement | null>(null)

const navigationItems = [
  { name: 'Accueil', path: '/' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Services', path: '/services' },
  { name: 'À Propos', path: '/about' },
]

const navClasses = computed(() => {
  return {
    'bg-transparent': !isScrolled.value,
    'bg-dark-900/95 backdrop-blur-md border-b border-white/10': isScrolled.value,
    'after:content-[" "] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-luxury-300':
      isScrolled.value,
  }
})

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const handleClickOutside = (e: MouseEvent) => {
  if (navRef.value && !navRef.value.contains(e.target as Node)) {
    isMobileMenuOpen.value = false
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
.nav-link-active {
  @apply text-luxury-300 border-b-2 border-luxury-300 pb-1 relative;
}
.nav-link-active::after {
  content: '';
  display: block;
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, #bfa181 0%, #fffbe6 100%);
  transform: scaleX(0);
  transition: transform 0.4s cubic-bezier(0.23, 1, 0.32, 1);
}
.nav-link-active:hover::after,
.nav-link-active:focus::after {
  transform: scaleX(1);
}

.mobile-glass-nav {
  background: rgba(30, 20, 10, 0.85);
  backdrop-filter: blur(18px);
  border-radius: 0 0 1.5rem 1.5rem;
  box-shadow:
    0 8px 32px 0 #bfa18133,
    0 0 0 4px #bfa18122;
  border-top: 1.5px solid rgba(191, 161, 129, 0.18);
  padding: 1.5rem 1rem;
  margin-top: 0.5rem;
  animation: fadeIn 0.4s cubic-bezier(0.23, 1, 0.32, 1);
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.shadow-gold {
  box-shadow:
    0 8px 32px 0 #bfa18166,
    0 0 0 4px #bfa18133;
}

@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
  }
}

.nav-link:focus,
.btn-luxury-outline:focus {
  outline: 2px solid #bfa181;
  outline-offset: 2px;
}
</style>
