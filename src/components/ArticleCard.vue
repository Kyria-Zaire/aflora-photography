<template>
  <div class="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full">
    <img :src="article.image" :alt="article.title" class="w-full h-56 object-cover object-center" loading="lazy" />
    <div class="p-6 flex flex-col flex-1">
      <h2 class="text-2xl font-serif font-bold text-emphasis mb-2">{{ article.title }}</h2>
      <p class="text-sm text-gray-500 mb-4">Par {{ article.author }} • {{ formatDate(article.date) }}</p>
      <p class="text-high-contrast-light mb-6 flex-1">{{ article.summary }}</p>
      <router-link :to="'/blog/' + article.slug" class="btn-luxury-outline mt-auto text-center" aria-label="Lire l'article {{ article.title }}">
        Lire l'article
      </router-link>
    </div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  article: {
    type: Object,
    required: true
  }
})
function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })
}
</script> 