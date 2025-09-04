<template>
  <div class="min-h-screen bg-white">
    <section
      class="relative py-32 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 text-white"
    >
      <div class="container-luxury text-center">
        <h1 class="text-5xl md:text-6xl font-serif font-bold mb-6 fade-in">Blog & Actualités</h1>
        <p class="text-xl text-readable-dark-light max-w-2xl mx-auto fade-in">
          Conseils, inspirations et actualités du studio AFLORA
        </p>
      </div>
    </section>
    <section class="section-padding bg-pattern-light slide-up">
      <div class="container-luxury">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ArticleCard v-for="article in articles" :key="article.slug" :article="article" />
        </div>
      </div>
    </section>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import ArticleCard from '../components/ArticleCard.vue'

const articles = ref([
  {
    slug: 'conseils-photo-mariage',
    title: '10 Conseils pour des Photos de Mariage Inoubliables',
    image: '/images/blog/mariage-conseils.jpg',
    summary:
      'Découvrez nos astuces de pro pour réussir vos photos de mariage et immortaliser chaque instant magique.',
    date: '2024-06-01',
    author: 'AFLORA',
  },
  {
    slug: 'portrait-pro-reussir',
    title: 'Comment réussir son portrait professionnel ?',
    image: '/images/blog/portrait-pro.jpg',
    summary: 'Les secrets d’un portrait pro qui inspire confiance et valorise votre image.',
    date: '2024-05-20',
    author: 'AFLORA',
  },
  {
    slug: 'tendance-photo-2024',
    title: 'Tendances Photo 2024 : Ce qui va marquer l’année',
    image: '/images/blog/tendance-2024.jpg',
    summary: 'Inspiration, couleurs, styles… Les grandes tendances photo à suivre cette année.',
    date: '2024-05-10',
    author: 'AFLORA',
  },
])
</script>
