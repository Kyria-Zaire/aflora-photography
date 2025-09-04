<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Navigation from '@/components/layout/Navigation.vue'
import Footer from '@/components/layout/Footer.vue'
import LoadingOverlay from '@/components/ui/LoadingOverlay.vue'

const isLoading = ref(true)

onMounted(() => {
  // Simuler un temps de chargement pour l'effet de luxe
  setTimeout(() => {
    isLoading.value = false
  }, 2000)
})
</script>

<template>
  <div id="app" class="min-h-screen bg-white">
    <!-- Navigation -->
    <Navigation />

    <!-- Router View -->
    <main>
      <router-view v-slot="{ Component }">
        <transition name="page" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <!-- Footer -->
    <Footer />

    <!-- Loading Overlay -->
    <LoadingOverlay v-if="isLoading" />
  </div>
</template>

<style scoped>
/* Page Transitions */
.page-enter-active,
.page-leave-active {
  transition: all 0.5s ease;
}

.page-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.page-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f5f9;
}

::-webkit-scrollbar-thumb {
  background: #eab308;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #ca8a04;
}
</style>
