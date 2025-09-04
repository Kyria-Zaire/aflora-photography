<template>
  <div class="fixed inset-0 z-[9999] bg-dark-900 flex items-center justify-center">
    <div class="text-center">
      <!-- Logo Animation -->
      <div class="mb-8">
        <div
          class="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 animate-float shadow-gold"
        >
          <img
            src="/src/assets/images2/b9918a16-3921-4392-9e1d-b5e1a6b0b846.png"
            alt="Logo AFLORA"
            class="w-20 h-20 object-cover rounded-full"
          />
        </div>
        <h1 class="text-3xl font-serif font-bold text-white mb-2">AFLORA</h1>
        <p class="text-gray-300 text-sm">Photographie de Luxe</p>
      </div>

      <!-- Loading Spinner -->
      <div class="flex justify-center mb-8">
        <div class="relative">
          <div class="w-12 h-12 border-4 border-gray-700 rounded-full"></div>
          <div
            class="absolute top-0 left-0 w-12 h-12 border-4 border-luxury-500 rounded-full animate-spin border-t-transparent"
          ></div>
        </div>
      </div>

      <!-- Loading Text -->
      <div class="space-y-2">
        <p class="text-gray-300 text-sm">Chargement en cours...</p>
        <div class="flex justify-center space-x-1">
          <div
            class="w-2 h-2 bg-luxury-500 rounded-full animate-bounce"
            style="animation-delay: 0ms"
          ></div>
          <div
            class="w-2 h-2 bg-luxury-500 rounded-full animate-bounce"
            style="animation-delay: 150ms"
          ></div>
          <div
            class="w-2 h-2 bg-luxury-500 rounded-full animate-bounce"
            style="animation-delay: 300ms"
          ></div>
        </div>
      </div>

      <!-- Progress Bar -->
      <div class="mt-8 w-64 mx-auto">
        <div class="w-full bg-gray-700 rounded-full h-1">
          <div
            class="bg-luxury-500 h-1 rounded-full transition-all duration-1000 ease-out"
            :style="{ width: progress + '%' }"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const progress = ref(0)

onMounted(() => {
  const interval = setInterval(() => {
    if (progress.value < 100) {
      progress.value += Math.random() * 15
      if (progress.value > 100) progress.value = 100
    } else {
      clearInterval(interval)
    }
  }, 200)
})
</script>

<style scoped>
@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}
</style>
