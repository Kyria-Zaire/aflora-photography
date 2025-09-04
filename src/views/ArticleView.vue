<template>
  <div class="min-h-screen bg-white">
    <section class="relative py-32 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 text-white">
      <div class="container-luxury text-center">
        <h1 class="text-5xl md:text-6xl font-serif font-bold mb-6">{{ article?.title || 'Article' }}</h1>
        <p class="text-sm text-gray-300 mb-2">Par {{ article?.author }} • {{ formatDate(article?.date) }}</p>
      </div>
    </section>
    <section class="section-padding bg-pattern-light">
      <div class="container-luxury max-w-3xl mx-auto">
        <img v-if="article?.image" :src="article.image" :alt="article.title" class="w-full h-80 object-cover object-center rounded-lg mb-8" loading="lazy" />
        <div class="prose prose-lg max-w-none text-high-contrast-light" v-html="article?.content || 'Contenu à venir...'" />
        <router-link to="/blog" class="btn-luxury-outline mt-12 inline-block" aria-label="Retour au blog">← Retour au blog</router-link>
      </div>
    </section>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const article = ref<any>(null)

const articles = [
  {
    slug: 'conseils-photo-mariage',
    title: '10 Conseils pour des Photos de Mariage Inoubliables',
    image: '/images/blog/mariage-conseils.jpg',
    summary: 'Découvrez nos astuces de pro pour réussir vos photos de mariage et immortaliser chaque instant magique.',
    date: '2024-06-01',
    author: 'AFLORA',
    content: `<p>Voici nos 10 conseils pour réussir vos photos de mariage : <br>1. Choisissez un photographe expérimenté.<br>2. Privilégiez la lumière naturelle.<br>3. Préparez une liste de moments clés...<br><em>Contenu à compléter selon vos besoins.</em></p>`
  },
  {
    slug: 'portrait-pro-reussir',
    title: 'Comment réussir son portrait professionnel ?',
    image: '/images/blog/portrait-pro.jpg',
    summary: 'Les secrets d’un portrait pro qui inspire confiance et valorise votre image.',
    date: '2024-05-20',
    author: 'AFLORA',
    content: `<p>Un bon portrait professionnel, c’est : <br>- Un éclairage soigné<br>- Une posture naturelle<br>- Un fond neutre...<br><em>Contenu à compléter selon vos besoins.</em></p>`
  },
  {
    slug: 'tendance-photo-2024',
    title: 'Tendances Photo 2024 : Ce qui va marquer l’année',
    image: '/images/blog/tendance-2024.jpg',
    summary: 'Inspiration, couleurs, styles… Les grandes tendances photo à suivre cette année.',
    date: '2024-05-10',
    author: 'AFLORA',
    content: `<p>En 2024, la photo sera marquée par : <br>- Des couleurs pastel<br>- Des compositions audacieuses<br>- L’authenticité...<br><em>Contenu à compléter selon vos besoins.</em></p>`
  }
]

function formatDate(dateStr: string) {
  if (!dateStr) return ''
  return new Date(dateStr).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })
}

onMounted(() => {
  const found = articles.find(a => a.slug === route.params.slug)
  article.value = found || null
})
</script> 