<template>
  <div class="min-h-screen">
    <!-- Hero Section Immersif -->
    <section class="relative py-40 text-white overflow-hidden">
      <!-- Fond image naturelle avec parallaxe -->
      <div class="absolute inset-0 w-full h-full">
        <img
          src="/src/assets/images/pexels-atccommphoto-306763.jpg"
          alt="Fond Portfolio AFLORA"
          class="w-full h-full object-cover object-center"
          data-parallax
        />
      </div>
      <div
        class="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-transparent"
      ></div>

      <div
        class="container-luxury text-center relative z-10 flex flex-col items-center justify-center"
      >
        <div class="flex items-center justify-center gap-4 mb-6">
          <svg
            class="w-16 h-16 text-luxury-300 animate-pulse"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <h1
            class="text-6xl md:text-7xl font-serif font-bold fade-in text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]"
          >
            Portfolio
          </h1>
        </div>
        <p
          class="text-2xl text-high-contrast-dark-light fade-in text-white max-w-3xl mx-auto leading-relaxed"
        >
          Découvrez notre collection de créations photographiques qui racontent des histoires
          uniques et captent l'essence de chaque moment
        </p>
        <div class="mt-12 animate-bounce">
          <svg
            class="w-8 h-8 text-luxury-300 mx-auto"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>

    <!-- Filter Section Premium -->
    <section class="relative section-padding overflow-hidden">
      <!-- Fond image premium + overlay sombre luxe -->
      <div
        class="absolute inset-0 bg-cover bg-center"
        style="background-image: url('/src/assets/images/pexels-ron-lach-10273414.jpg')"
      ></div>
      <div
        class="absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 to-transparent"
      ></div>

      <div class="relative z-10 container-luxury">
        <div class="text-center mb-12">
          <h2
            class="text-4xl md:text-5xl font-serif font-bold text-white mb-6 drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]"
          >
            Nos Réalisations
          </h2>
          <p class="text-xl text-[#f5ecd7] max-w-2xl mx-auto">
            Explorez nos différentes catégories et découvrez notre expertise
          </p>
        </div>

        <div class="flex flex-wrap justify-center gap-4">
          <button
            v-for="category in categories"
            :key="category.id"
            @click="selectedCategory = category.id"
            class="glass-luxe-card px-8 py-4 rounded-full transition-all duration-500 font-medium text-lg hover:scale-105"
            :class="
              selectedCategory === category.id
                ? 'bg-luxury-500/80 text-white shadow-gold'
                : 'bg-white/20 text-[#f5ecd7] hover:bg-white/30 hover:text-white border border-luxury-300/40'
            "
            :aria-label="'Filtrer par catégorie ' + category.name"
          >
            {{ category.name }}
          </button>
        </div>
      </div>
    </section>

    <!-- Portfolio Grid Immersive -->
    <section class="relative section-padding overflow-hidden">
      <!-- Fond blanc/beige avec pattern subtil -->
      <div class="absolute inset-0 bg-gradient-to-br from-white via-[#f5ecd7] to-white"></div>
      <div class="absolute inset-0 opacity-5">
        <div
          class="absolute inset-0"
          style="
            background-image: radial-gradient(circle at 25% 25%, #bfa181 2px, transparent 2px);
            background-size: 50px 50px;
          "
        ></div>
      </div>

      <div class="relative z-10 container-luxury">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(item, idx) in filteredPortfolio"
            :key="item.id"
            class="group relative overflow-hidden rounded-2xl shadow-2xl cursor-pointer transform transition-all duration-700 hover:scale-105 animate-fade-in"
            :style="{ animationDelay: `${idx * 0.1}s` }"
            @click="showLightbox(idx)"
          >
            <!-- Image avec effet parallaxe -->
            <div class="relative h-96 overflow-hidden">
              <img
                :src="item.image"
                :alt="item.title"
                class="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              <!-- Overlay avec glassmorphism -->
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"
              >
                <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3
                    class="text-2xl font-serif font-bold mb-2 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
                  >
                    {{ item.title }}
                  </h3>
                  <p class="text-[#f5ecd7] font-medium mb-3">{{ item.category }}</p>
                  <p class="text-sm text-white/90 mb-4 line-clamp-2">{{ item.description }}</p>
                  <div class="flex items-center justify-between">
                    <span class="text-xs text-luxury-300 font-medium">{{ item.date }}</span>
                    <button
                      class="px-4 py-2 bg-luxury-500/80 backdrop-blur-sm text-white rounded-full text-sm hover:bg-luxury-400 transition-all duration-300 transform hover:scale-105"
                      aria-label="Voir plus sur {{ item.title }}"
                    >
                      Voir Plus
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Badge catégorie -->
            <div class="absolute top-4 left-4">
              <span
                class="inline-block px-3 py-1 bg-luxury-500/90 backdrop-blur-sm text-white text-xs font-medium rounded-full shadow-lg"
              >
                {{ item.category }}
              </span>
            </div>
          </div>
        </div>

        <!-- Load More & Reduce Buttons -->
        <div class="text-center mt-16 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            v-if="currentPage > 1"
            @click="reduceItems"
            class="btn-luxury-glass px-8 py-4 text-lg font-semibold rounded-full shadow-gold transition-all duration-500 hover:scale-105 hover:bg-luxury-300/80 hover:text-white"
            aria-label="Réduire les réalisations affichées"
          >
            <span class="flex items-center gap-3">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M18 12H6"
                />
              </svg>
              Réduire
            </span>
          </button>
        </div>

        <vue-easy-lightbox
          :visible="lightboxVisible"
          :imgs="galleryImages"
          :index="lightboxIndex"
          @hide="lightboxVisible = false"
        />
      </div>
    </section>

    <!-- Modal Premium -->
    <div
      v-if="selectedItem"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
      @click="closeModal"
      role="dialog"
      aria-modal="true"
      :aria-labelledby="'modal-title-' + selectedItem.id"
      tabindex="-1"
    >
      <div
        class="relative max-w-6xl w-full glass-luxe-card rounded-2xl overflow-hidden shadow-2xl"
        @click.stop
      >
        <button
          @click="closeModal"
          class="absolute top-6 right-6 z-10 w-12 h-12 bg-black/50 backdrop-blur-sm text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-all duration-300 transform hover:scale-110"
          aria-label="Fermer la modale"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div class="grid grid-cols-1 lg:grid-cols-2">
          <!-- Image Section -->
          <div class="relative h-96 lg:h-full">
            <img
              :src="selectedItem.image"
              :alt="selectedItem.title"
              class="w-full h-full object-cover object-center"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
            ></div>
            <div class="absolute bottom-6 left-6 text-white">
              <h3
                class="text-3xl font-serif font-bold mb-2 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
                :id="'modal-title-' + selectedItem.id"
              >
                {{ selectedItem.title }}
              </h3>
              <span
                class="inline-block px-4 py-2 bg-luxury-500/80 backdrop-blur-sm text-white text-sm font-medium rounded-full"
              >
                {{ selectedItem.category }}
              </span>
            </div>
          </div>

          <!-- Content Section -->
          <div class="p-8 bg-white/95 backdrop-blur-sm">
            <h2 class="text-3xl font-serif font-bold text-dark-900 mb-6">
              {{ selectedItem.title }}
            </h2>
            <p class="text-lg text-dark-700 mb-8 leading-relaxed">{{ selectedItem.description }}</p>

            <div class="space-y-6">
              <div class="flex items-center gap-4">
                <div
                  class="w-12 h-12 bg-gradient-to-r from-luxury-500 to-luxury-300 rounded-full flex items-center justify-center"
                >
                  <svg
                    class="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-dark-900 mb-1">Date</h4>
                  <p class="text-dark-600">{{ selectedItem.date }}</p>
                </div>
              </div>

              <div class="flex items-center gap-4">
                <div
                  class="w-12 h-12 bg-gradient-to-r from-luxury-500 to-luxury-300 rounded-full flex items-center justify-center"
                >
                  <svg
                    class="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-dark-900 mb-1">Équipement</h4>
                  <p class="text-dark-600">{{ selectedItem.equipment }}</p>
                </div>
              </div>
            </div>

            <div class="mt-10 flex flex-col sm:flex-row gap-4">
              <router-link
                to="/contact"
                class="btn-luxury text-lg px-8 py-4 transform hover:scale-105 transition-all duration-300"
              >
                Réserver une Séance Similaire
              </router-link>
              <button
                @click="closeModal"
                class="btn-luxury-outline text-lg px-8 py-4 transform hover:scale-105 transition-all duration-300"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import VueEasyLightbox from 'vue-easy-lightbox'

interface PortfolioItem {
  id: number
  title: string
  category: string
  description: string
  date: string
  equipment: string
  categoryId: string
  image: string
}

const selectedCategory = ref('all')
const selectedItem = ref<PortfolioItem | null>(null)
const currentPage = ref(1)

const categories = ref([
  { id: 'all', name: 'Tout' },
  { id: 'wedding', name: 'Mariage & Cérémonies' },
  { id: 'portrait', name: 'Portrait & Mode' },
  { id: 'lifestyle', name: 'Lifestyle & Nature' },
  { id: 'events', name: 'Événementiel' },
])

const portfolioItems = ref([
  // MARIAGE & CÉRÉMONIES (14 images)
  {
    id: 1,
    title: 'Cérémonie de Mariage Élégante',
    category: 'Mariage & Cérémonies',
    description: 'Cérémonie de mariage avec une élégance raffinée et des détails soignés.',
    date: 'Février 2024',
    equipment: 'Canon EOS R5, RF 85mm f/1.2',
    categoryId: 'wedding',
    image: '/src/assets/images/pexels-stringz-visuals-266260947-12752867.jpg',
  },
  {
    id: 2,
    title: 'Mariage Moderne et Sophistiqué',
    category: 'Mariage & Cérémonies',
    description: 'Mariage contemporain alliant modernité et sophistication.',
    date: 'Janvier 2024',
    equipment: 'Sony A7R IV, 50mm f/1.4',
    categoryId: 'wedding',
    image: '/src/assets/images/pexels-pavel-danilyuk-8815304.jpg',
  },
  {
    id: 3,
    title: 'Cérémonie Traditionnelle Moderne',
    category: 'Mariage & Cérémonies',
    description: 'Alliance parfaite entre tradition et modernité dans cette cérémonie unique.',
    date: 'Décembre 2023',
    equipment: 'Canon EOS R6, RF 24-70mm f/2.8',
    categoryId: 'wedding',
    image: '/src/assets/images/pexels-lombejr-5198287.jpg',
  },
  {
    id: 4,
    title: 'Mariage en Pleine Nature',
    category: 'Mariage & Cérémonies',
    description: "Cérémonie en extérieur capturant la beauté naturelle et l'amour du couple.",
    date: 'Novembre 2023',
    equipment: 'Sony A7R IV, 16-35mm f/2.8',
    categoryId: 'wedding',
    image: '/src/assets/images/pexels-king-shooter-664873673-29995701.jpg',
  },
  {
    id: 5,
    title: 'Cérémonie de Mariage Intime',
    category: 'Mariage & Cérémonies',
    description: 'Mariage intime et romantique dans un cadre chaleureux et personnel.',
    date: 'Octobre 2023',
    equipment: 'Canon EOS R5, RF 70-200mm f/2.8',
    categoryId: 'wedding',
    image: '/src/assets/images/pexels-king-shooter-664873673-29995695.jpg',
  },
  {
    id: 6,
    title: 'Mariage Urbain Élégant',
    category: 'Mariage & Cérémonies',
    description: 'Cérémonie urbaine avec une approche moderne et élégante.',
    date: 'Septembre 2023',
    equipment: 'Sony A7R IV, 35mm f/1.4',
    categoryId: 'wedding',
    image: '/src/assets/images/pexels-king-shooter-664873673-29995692.jpg',
  },
  {
    id: 7,
    title: 'Cérémonie de Mariage Sophistiquée',
    category: 'Mariage & Cérémonies',
    description: 'Mariage avec une sophistication raffinée et des détails luxueux.',
    date: 'Août 2023',
    equipment: 'Canon EOS R5, RF 85mm f/1.2',
    categoryId: 'wedding',
    image: '/src/assets/images/pexels-jessicairoh-31786639.jpg',
  },
  {
    id: 8,
    title: 'Mariage Traditionnel Authentique',
    category: 'Mariage & Cérémonies',
    description: 'Cérémonie traditionnelle authentique respectant les coutumes ancestrales.',
    date: 'Juillet 2023',
    equipment: 'Sony A7R IV, 24-105mm f/4',
    categoryId: 'wedding',
    image: '/src/assets/images/pexels-germainchentwali-17480147.jpg',
  },
  {
    id: 9,
    title: 'Cérémonie de Mariage Contemporaine',
    category: 'Mariage & Cérémonies',
    description: 'Mariage avec une approche contemporaine et créative.',
    date: 'Juin 2023',
    equipment: 'Canon EOS R6, RF 50mm f/1.2',
    categoryId: 'wedding',
    image: '/src/assets/images/pexels-deeworkroom-29723868.jpg',
  },
  {
    id: 10,
    title: 'Mariage Moderne et Élégant',
    category: 'Mariage & Cérémonies',
    description: 'Cérémonie moderne avec une élégance contemporaine.',
    date: 'Mai 2023',
    equipment: 'Sony A7R IV, 24-70mm f/2.8',
    categoryId: 'wedding',
    image: '/src/assets/images/pexels-deeworkroom-29721490.jpg',
  },
  {
    id: 11,
    title: 'Cérémonie de Mariage Créative',
    category: 'Mariage & Cérémonies',
    description: 'Mariage avec une approche créative et artistique unique.',
    date: 'Avril 2023',
    equipment: 'Canon EOS R5, RF 16-35mm f/2.8',
    categoryId: 'wedding',
    image: '/src/assets/images/pexels-chris-wade-ntezicimpa-564856410-20221662.jpg',
  },
  {
    id: 12,
    title: 'Mariage Élégant et Sophistiqué',
    category: 'Mariage & Cérémonies',
    description: 'Cérémonie avec une élégance raffinée et une sophistication moderne.',
    date: 'Mars 2023',
    equipment: 'Sony A7R IV, 85mm f/1.4',
    categoryId: 'wedding',
    image: '/src/assets/images/pexels-chidy-31338953.jpg',
  },
  {
    id: 13,
    title: 'Cérémonie de Mariage Moderne',
    category: 'Mariage & Cérémonies',
    description: 'Mariage contemporain avec des éléments modernes et élégants.',
    date: 'Février 2023',
    equipment: 'Canon EOS R5, RF 70-200mm f/2.8',
    categoryId: 'wedding',
    image: '/src/assets/images/pexels-chidy-29901718.jpg',
  },
  {
    id: 14,
    title: 'Mariage en Extérieur Élégant',
    category: 'Mariage & Cérémonies',
    description: 'Cérémonie en extérieur avec une élégance naturelle et raffinée.',
    date: 'Janvier 2023',
    equipment: 'Sony A7R IV, 35mm f/1.4',
    categoryId: 'wedding',
    image: '/src/assets/images/pexels-chad-populis-2148434888-30270796.jpg',
  },
  {
    id: 15,
    title: 'Cérémonie de Mariage Sophistiquée',
    category: 'Mariage & Cérémonies',
    description: 'Mariage avec une sophistication exceptionnelle et des détails luxueux.',
    date: 'Décembre 2022',
    equipment: 'Canon EOS R6, RF 24-70mm f/2.8',
    categoryId: 'wedding',
    image: '/src/assets/images/pexels-bule-2127348686-31877239.jpg',
  },
  {
    id: 16,
    title: 'Mariage Élégant et Moderne',
    category: 'Mariage & Cérémonies',
    description: 'Cérémonie de mariage alliant élégance traditionnelle et modernité contemporaine.',
    date: 'Novembre 2022',
    equipment: 'Sony A7R IV, 85mm f/1.4',
    categoryId: 'wedding',
    image: '/src/assets/images/pexels-zeal-creatives-58866141-30592216.jpg',
  },
  {
    id: 17,
    title: 'Cérémonie de Mariage Créative',
    category: 'Mariage & Cérémonies',
    description: 'Mariage avec une approche créative et artistique unique.',
    date: 'Octobre 2022',
    equipment: 'Canon EOS R5, RF 50mm f/1.2',
    categoryId: 'wedding',
    image: '/src/assets/images/pexels-zeal-creatives-58866141-30592214.jpg',
  },
  {
    id: 18,
    title: 'Mariage en Pleine Nature',
    category: 'Mariage & Cérémonies',
    description: "Cérémonie en extérieur capturant la beauté naturelle et l'harmonie du couple.",
    date: 'Septembre 2022',
    equipment: 'Sony A7R IV, 16-35mm f/2.8',
    categoryId: 'wedding',
    image: '/src/assets/images/pexels-xzibeatdag-11892158.jpg',
  },
  {
    id: 19,
    title: 'Cérémonie de Mariage Sophistiquée',
    category: 'Mariage & Cérémonies',
    description: 'Mariage avec une sophistication raffinée et des détails luxueux.',
    date: 'Août 2022',
    equipment: 'Canon EOS R5, RF 70-200mm f/2.8',
    categoryId: 'wedding',
    image: '/src/assets/images/pexels-tosinsuperson-32080733.jpg',
  },
  {
    id: 20,
    title: 'Mariage Moderne et Élégant',
    category: 'Mariage & Cérémonies',
    description: 'Cérémonie moderne avec une élégance contemporaine et des éléments sophistiqués.',
    date: 'Juillet 2022',
    equipment: 'Sony A7R IV, 24-70mm f/2.8',
    categoryId: 'wedding',
    image: '/src/assets/images/pexels-tosinsuperson-32080731.jpg',
  },

  // PORTRAIT & MODE (10 images)
  {
    id: 21,
    title: 'Portrait Executive',
    category: 'Portrait & Mode',
    description:
      "Portrait professionnel pour un dirigeant d'entreprise, mettant en valeur son charisme et son leadership à travers une composition soignée.",
    date: 'Décembre 2024',
    equipment: 'Sony A7R IV, 85mm f/1.4',
    categoryId: 'portrait',
    image: '/src/assets/images/pexels-bestbe-models-975242-2100650.jpg',
  },
  {
    id: 22,
    title: 'Séance Mode Éditoriale',
    category: 'Portrait & Mode',
    description:
      'Shooting mode pour une collection printemps-été, alliant créativité artistique et vision commerciale.',
    date: 'Novembre 2024',
    equipment: 'Sony A7R IV, 24-70mm f/2.8',
    categoryId: 'portrait',
    image: '/src/assets/images/pexels-fabio-pelegrino-1457517-3409421.jpg',
  },
  {
    id: 23,
    title: 'Portrait Artistique',
    category: 'Portrait & Mode',
    description:
      "Portrait créatif avec éclairage dramatique, révélant la personnalité profonde du sujet à travers l'art photographique.",
    date: 'Octobre 2024',
    equipment: 'Sony A7R IV, 135mm f/1.8',
    categoryId: 'portrait',
    image: '/src/assets/images/pexels-mikhail-nilov-7624821.jpg',
  },
  {
    id: 24,
    title: 'Portrait de Mode Urbain',
    category: 'Portrait & Mode',
    description:
      "Shooting mode en milieu urbain, alliant l'élégance de la mode à l'énergie de la ville.",
    date: 'Septembre 2024',
    equipment: 'Canon EOS R5, RF 85mm f/1.2',
    categoryId: 'portrait',
    image: '/src/assets/images/pexels-franklin-282189831-13020508.jpg',
  },
  {
    id: 25,
    title: 'Portrait Corporate',
    category: 'Portrait & Mode',
    description:
      "Portrait professionnel pour une entreprise, mettant en valeur l'expertise et la confiance.",
    date: 'Août 2024',
    equipment: 'Sony A7R IV, 50mm f/1.4',
    categoryId: 'portrait',
    image: '/src/assets/images/pexels-heyy-kazz-705792-18459701.jpg',
  },
  {
    id: 26,
    title: 'Portrait Créatif',
    category: 'Portrait & Mode',
    description: 'Portrait artistique avec une approche créative et innovante.',
    date: 'Juillet 2024',
    equipment: 'Canon EOS R5, RF 70-200mm f/2.8',
    categoryId: 'portrait',
    image: '/src/assets/images/pexels-ajwad-mahmud-664872669-32879445.jpg',
  },
  {
    id: 27,
    title: 'Séance Mode Lifestyle',
    category: 'Portrait & Mode',
    description: "Shooting mode lifestyle, capturant l'authenticité et le naturel.",
    date: 'Juin 2024',
    equipment: 'Sony A7R IV, 35mm f/1.4',
    categoryId: 'portrait',
    image: '/src/assets/images/pexels-akingbola-opeyemi-505464242-32903686.jpg',
  },
  {
    id: 28,
    title: 'Portrait Émotionnel',
    category: 'Portrait & Mode',
    description: "Portrait capturant les émotions profondes et l'authenticité du sujet.",
    date: 'Mai 2024',
    equipment: 'Canon EOS R5, RF 85mm f/1.2',
    categoryId: 'portrait',
    image: '/src/assets/images/pexels-akingbola-opeyemi-505464242-32903736.jpg',
  },
  {
    id: 29,
    title: 'Séance Mode Conceptuelle',
    category: 'Portrait & Mode',
    description: 'Shooting mode conceptuel avec une approche artistique et narrative.',
    date: 'Avril 2024',
    equipment: 'Sony A7R IV, 24-70mm f/2.8',
    categoryId: 'portrait',
    image: '/src/assets/images/pexels-ario-stories-278509849-32428961.jpg',
  },
  {
    id: 30,
    title: 'Portrait Minimaliste',
    category: 'Portrait & Mode',
    description: "Portrait épuré et minimaliste, mettant l'accent sur l'essentiel.",
    date: 'Mars 2024',
    equipment: 'Canon EOS R5, RF 50mm f/1.2',
    categoryId: 'portrait',
    image: '/src/assets/images/pexels-akingbola-opeyemi-505464242-32903672.jpg',
  },

  // LIFESTYLE & NATURE (23 images du dossier images2)
  {
    id: 31,
    title: 'Lifestyle Urbain Moderne',
    category: 'Lifestyle & Nature',
    description: "Photographie lifestyle capturant l'authenticité de la vie urbaine contemporaine.",
    date: 'Décembre 2024',
    equipment: 'Canon EOS R5, RF 50mm f/1.2',
    categoryId: 'lifestyle',
    image: '/src/assets/images2/pexels-ante-emmanuel-3691197-31466157.jpg',
  },
  {
    id: 32,
    title: 'Portrait Lifestyle',
    category: 'Lifestyle & Nature',
    description: 'Portrait lifestyle naturel capturant la personnalité authentique du sujet.',
    date: 'Novembre 2024',
    equipment: 'Sony A7R IV, 85mm f/1.4',
    categoryId: 'lifestyle',
    image: '/src/assets/images2/pexels-leo-chimenem-313365165-13742768.jpg',
  },
  {
    id: 33,
    title: 'Nature et Paysage',
    category: 'Lifestyle & Nature',
    description:
      'Photographie de paysage naturel, capturant la beauté et la sérénité de la nature.',
    date: 'Octobre 2024',
    equipment: 'Canon EOS R5, RF 16-35mm f/2.8',
    categoryId: 'lifestyle',
    image: '/src/assets/images2/pexels-edouard-mihigo-129683048-30483242.jpg',
  },
  {
    id: 34,
    title: 'Lifestyle Familial',
    category: 'Lifestyle & Nature',
    description:
      'Séance lifestyle familiale, immortalisant les moments authentiques de la vie quotidienne.',
    date: 'Septembre 2024',
    equipment: 'Sony A7R IV, 50mm f/1.4',
    categoryId: 'lifestyle',
    image: '/src/assets/images2/pexels-bave-pictures-64453798-17691638.jpg',
  },
  {
    id: 35,
    title: 'Aventure en Extérieur',
    category: 'Lifestyle & Nature',
    description:
      "Photographie d'aventure en extérieur, capturant l'esprit d'exploration et de découverte.",
    date: 'Août 2024',
    equipment: 'Canon EOS R5, RF 24-70mm f/2.8',
    categoryId: 'lifestyle',
    image: '/src/assets/images2/pexels-charles-awelewa-2147613783-29676644.jpg',
  },
  {
    id: 36,
    title: 'Lifestyle Minimaliste',
    category: 'Lifestyle & Nature',
    description:
      "Approche minimaliste du lifestyle, mettant l'accent sur l'essentiel et la simplicité.",
    date: 'Juillet 2024',
    equipment: 'Sony A7R IV, 85mm f/1.4',
    categoryId: 'lifestyle',
    image: '/src/assets/images2/pexels-meshack-emmanuel-kazanshyi-1267432081-29248997.jpg',
  },
  {
    id: 37,
    title: 'Paysage Urbain',
    category: 'Lifestyle & Nature',
    description:
      "Photographie de paysage urbain, capturant l'architecture et l'énergie de la ville.",
    date: 'Juin 2024',
    equipment: 'Canon EOS R5, RF 16-35mm f/2.8',
    categoryId: 'lifestyle',
    image: '/src/assets/images2/pexels-barbara-olsen-7880387.jpg',
  },
  {
    id: 38,
    title: 'Lifestyle Naturel',
    category: 'Lifestyle & Nature',
    description:
      "Lifestyle en harmonie avec la nature, capturant la connexion entre l'humain et l'environnement.",
    date: 'Mai 2024',
    equipment: 'Sony A7R IV, 35mm f/1.4',
    categoryId: 'lifestyle',
    image: '/src/assets/images2/pexels-jairo-david-arboleda-621072-3652650.jpg',
  },
  {
    id: 39,
    title: 'Photographie de Rue',
    category: 'Lifestyle & Nature',
    description:
      'Photographie de rue authentique, immortalisant la vie quotidienne et les moments spontanés.',
    date: 'Avril 2024',
    equipment: 'Canon EOS R5, RF 50mm f/1.2',
    categoryId: 'lifestyle',
    image: '/src/assets/images2/pexels-akingbola-opeyemi-505464242-30030552.jpg',
  },
  {
    id: 40,
    title: 'Lifestyle Contemporain',
    category: 'Lifestyle & Nature',
    description: 'Lifestyle contemporain, reflétant les tendances et les modes de vie actuels.',
    date: 'Mars 2024',
    equipment: 'Sony A7R IV, 24-70mm f/2.8',
    categoryId: 'lifestyle',
    image: '/src/assets/images2/pexels-planeteelevene-32617404.jpg',
  },
  {
    id: 41,
    title: 'Portrait Lifestyle Urbain',
    category: 'Lifestyle & Nature',
    description: 'Portrait lifestyle en milieu urbain, alliant authenticité et modernité.',
    date: 'Février 2024',
    equipment: 'Canon EOS R5, RF 85mm f/1.2',
    categoryId: 'lifestyle',
    image: '/src/assets/images2/pexels-davdkuko-17204109.jpg',
  },
  {
    id: 42,
    title: 'Lifestyle Artistique',
    category: 'Lifestyle & Nature',
    description: 'Lifestyle avec une approche artistique et créative unique.',
    date: 'Janvier 2024',
    equipment: 'Sony A7R IV, 50mm f/1.4',
    categoryId: 'lifestyle',
    image: '/src/assets/images2/pexels-farrow-photography-2153739185-32904276.jpg',
  },
  {
    id: 43,
    title: 'Nature et Sérénité',
    category: 'Lifestyle & Nature',
    description:
      'Photographie de nature capturant la sérénité et la tranquillité des espaces naturels.',
    date: 'Décembre 2023',
    equipment: 'Canon EOS R5, RF 16-35mm f/2.8',
    categoryId: 'lifestyle',
    image: '/src/assets/images2/pexels-fpdimages-14037648.jpg',
  },
  {
    id: 44,
    title: 'Lifestyle Moderne',
    category: 'Lifestyle & Nature',
    description:
      'Lifestyle moderne reflétant les tendances actuelles et les modes de vie contemporains.',
    date: 'Novembre 2023',
    equipment: 'Sony A7R IV, 35mm f/1.4',
    categoryId: 'lifestyle',
    image: '/src/assets/images2/pexels-ante-emmanuel-3691197-31466155.jpg',
  },
  {
    id: 45,
    title: 'Paysage Naturel',
    category: 'Lifestyle & Nature',
    description: 'Paysage naturel capturant la beauté et la majesté de la nature sauvage.',
    date: 'Octobre 2023',
    equipment: 'Canon EOS R5, RF 24-70mm f/2.8',
    categoryId: 'lifestyle',
    image: '/src/assets/images2/pexels-edouard-mihigo-129683048-32959460.jpg',
  },
  {
    id: 46,
    title: 'Lifestyle Authentique',
    category: 'Lifestyle & Nature',
    description:
      'Lifestyle authentique capturant les moments vrais et naturels de la vie quotidienne.',
    date: 'Septembre 2023',
    equipment: 'Sony A7R IV, 85mm f/1.4',
    categoryId: 'lifestyle',
    image: '/src/assets/images2/pexels-aristotle-guweh-jr-1643208950-32950414.jpg',
  },
  {
    id: 47,
    title: 'Vue Urbaine',
    category: 'Lifestyle & Nature',
    description: "Vue urbaine capturant l'énergie et le dynamisme de la vie citadine.",
    date: 'Août 2023',
    equipment: 'Canon EOS R5, RF 50mm f/1.2',
    categoryId: 'lifestyle',
    image: '/src/assets/images2/pexels-skylight-views-2151863365-32967040.jpg',
  },
  {
    id: 48,
    title: 'Lifestyle Créatif',
    category: 'Lifestyle & Nature',
    description: 'Lifestyle créatif avec une approche artistique et innovante.',
    date: 'Juillet 2023',
    equipment: 'Sony A7R IV, 24-70mm f/2.8',
    categoryId: 'lifestyle',
    image: '/src/assets/images2/pexels-jonah-victor-2148904859-32963069 (1).jpg',
  },
  {
    id: 49,
    title: 'Nature et Harmonie',
    category: 'Lifestyle & Nature',
    description: "Photographie de nature capturant l'harmonie et l'équilibre des écosystèmes.",
    date: 'Juin 2023',
    equipment: 'Canon EOS R5, RF 16-35mm f/2.8',
    categoryId: 'lifestyle',
    image: '/src/assets/images2/pexels-skylight-views-2151863365-32967046.jpg',
  },
  {
    id: 50,
    title: 'Lifestyle Élégant',
    category: 'Lifestyle & Nature',
    description: 'Lifestyle élégant avec une approche raffinée et sophistiquée.',
    date: 'Mai 2023',
    equipment: 'Sony A7R IV, 85mm f/1.4',
    categoryId: 'lifestyle',
    image: '/src/assets/images2/pexels-abdullahi-santuraki-615175419-32954947.jpg',
  },
  {
    id: 51,
    title: 'Portrait Lifestyle Naturel',
    category: 'Lifestyle & Nature',
    description: "Portrait lifestyle naturel capturant l'authenticité et la beauté du sujet.",
    date: 'Avril 2023',
    equipment: 'Canon EOS R5, RF 50mm f/1.2',
    categoryId: 'lifestyle',
    image: '/src/assets/images2/pexels-thenssight1-13883500.jpg',
  },
  {
    id: 52,
    title: 'Lifestyle Urbain Dynamique',
    category: 'Lifestyle & Nature',
    description: "Lifestyle urbain dynamique capturant l'énergie et le mouvement de la ville.",
    date: 'Mars 2023',
    equipment: 'Sony A7R IV, 35mm f/1.4',
    categoryId: 'lifestyle',
    image: '/src/assets/images2/pexels-elsimage-3394346.jpg',
  },
  {
    id: 53,
    title: 'Nature et Tranquillité',
    category: 'Lifestyle & Nature',
    description:
      'Photographie de nature capturant la tranquillité et la paix des espaces naturels.',
    date: 'Février 2023',
    equipment: 'Canon EOS R5, RF 24-70mm f/2.8',
    categoryId: 'lifestyle',
    image: '/src/assets/images2/pexels-jeff-denlea-721292-3714743.jpg',
  },

  // ÉVÉNEMENTIEL (10 images)
  {
    id: 54,
    title: 'Événement Corporate',
    category: 'Événementiel',
    description: "Événement d'entreprise avec une approche professionnelle et élégante.",
    date: 'Décembre 2024',
    equipment: 'Canon EOS R5, RF 24-70mm f/2.8',
    categoryId: 'events',
    image: '/src/assets/images/pexels-moment4lifphoto-7984536.jpg',
  },
  {
    id: 55,
    title: 'Conférence Internationale',
    category: 'Événementiel',
    description:
      "Couverture photographique d'une conférence internationale avec des intervenants de renom.",
    date: 'Novembre 2024',
    equipment: 'Sony A7R IV, 70-200mm f/2.8',
    categoryId: 'events',
    image: '/src/assets/images/pexels-kenilev-terku-1653746-16256674.jpg',
  },
  {
    id: 56,
    title: 'Lancement de Produit',
    category: 'Événementiel',
    description: 'Événement de lancement de produit avec une mise en scène sophistiquée.',
    date: 'Octobre 2024',
    equipment: 'Canon EOS R5, RF 16-35mm f/2.8',
    categoryId: 'events',
    image: '/src/assets/images/pexels-justice-lopez-564881319-32933565.jpg',
  },
  {
    id: 57,
    title: 'Gala de Charité',
    category: 'Événementiel',
    description: "Gala de charité avec une ambiance raffinée et des moments d'émotion.",
    date: 'Septembre 2024',
    equipment: 'Sony A7R IV, 85mm f/1.4',
    categoryId: 'events',
    image: '/src/assets/images/pexels-j-scott-photography-67121182-17234541.jpg',
  },
  {
    id: 58,
    title: "Séminaire d'Entreprise",
    category: 'Événementiel',
    description:
      "Séminaire d'entreprise avec des sessions interactives et des moments de networking.",
    date: 'Août 2024',
    equipment: 'Canon EOS R5, RF 24-105mm f/4',
    categoryId: 'events',
    image: '/src/assets/images/pexels-chad-populis-2148434888-30270797.jpg',
  },
  {
    id: 59,
    title: "Exposition d'Art",
    category: 'Événementiel',
    description:
      "Vernissage d'exposition d'art avec des œuvres contemporaines et des artistes présents.",
    date: 'Juillet 2024',
    equipment: 'Sony A7R IV, 35mm f/1.4',
    categoryId: 'events',
    image: '/src/assets/images/pexels-antonio-ribeiro-2267606-16176361.jpg',
  },
  {
    id: 60,
    title: 'Cérémonie de Remise de Prix',
    category: 'Événementiel',
    description: 'Cérémonie officielle de remise de prix avec des moments de célébration.',
    date: 'Juin 2024',
    equipment: 'Canon EOS R5, RF 70-200mm f/2.8',
    categoryId: 'events',
    image: '/src/assets/images/pexels-amenkingdom-27112659.jpg',
  },
  {
    id: 61,
    title: 'Événement de Networking',
    category: 'Événementiel',
    description: 'Événement de networking professionnel avec des échanges enrichissants.',
    date: 'Mai 2024',
    equipment: 'Sony A7R IV, 50mm f/1.4',
    categoryId: 'events',
    image: '/src/assets/images/pexels-amenkingdom-27112654.jpg',
  },
  {
    id: 62,
    title: 'Conférence de Presse',
    category: 'Événementiel',
    description:
      'Conférence de presse avec des annonces importantes et des échanges avec les médias.',
    date: 'Avril 2024',
    equipment: 'Canon EOS R5, RF 24-70mm f/2.8',
    categoryId: 'events',
    image: '/src/assets/images/pexels-22dated-31995638.jpg',
  },
  {
    id: 63,
    title: 'Événement de Formation',
    category: 'Événementiel',
    description:
      "Événement de formation professionnelle avec des sessions d'apprentissage interactives.",
    date: 'Mars 2024',
    equipment: 'Sony A7R IV, 16-35mm f/2.8',
    categoryId: 'events',
    image: '/src/assets/images/pexels-22dated-31995637.jpg',
  },
  {
    id: 64,
    title: 'Salon Professionnel',
    category: 'Événementiel',
    description: 'Salon professionnel avec des exposants et des visiteurs spécialisés.',
    date: 'Février 2024',
    equipment: 'Canon EOS R5, RF 24-70mm f/2.8',
    categoryId: 'events',
    image: '/src/assets/images/pexels-polina-tankilevitch-7689972.jpg',
  },
  {
    id: 65,
    title: 'Conférence Tech',
    category: 'Événementiel',
    description: 'Conférence technologique avec des innovations et des présentations futuristes.',
    date: 'Janvier 2024',
    equipment: 'Sony A7R IV, 70-200mm f/2.8',
    categoryId: 'events',
    image: '/src/assets/images/pexels-psalmist-hulisani-mrsuit-239931523-13337027.jpg',
  },
  {
    id: 66,
    title: 'Événement de Networking',
    category: 'Événementiel',
    description: 'Événement de networking avec des professionnels de différents secteurs.',
    date: 'Décembre 2023',
    equipment: 'Canon EOS R5, RF 50mm f/1.2',
    categoryId: 'events',
    image: '/src/assets/images/pexels-stillpicturesphotography-8422831.jpg',
  },
  {
    id: 67,
    title: 'Lancement de Marque',
    category: 'Événementiel',
    description: 'Événement de lancement de marque avec une présentation sophistiquée.',
    date: 'Novembre 2023',
    equipment: 'Sony A7R IV, 16-35mm f/2.8',
    categoryId: 'events',
    image: '/src/assets/images/pexels-valdansmedia-29716847.jpg',
  },
  {
    id: 68,
    title: 'Séminaire de Leadership',
    category: 'Événementiel',
    description: 'Séminaire de leadership avec des sessions de développement personnel.',
    date: 'Octobre 2023',
    equipment: 'Canon EOS R5, RF 85mm f/1.2',
    categoryId: 'events',
    image: '/src/assets/images/pexels-oleratomotshebe-26609646.jpg',
  },
  {
    id: 69,
    title: 'Événement Corporate',
    category: 'Événementiel',
    description: "Événement d'entreprise avec une approche moderne et professionnelle.",
    date: 'Septembre 2023',
    equipment: 'Sony A7R IV, 24-70mm f/2.8',
    categoryId: 'events',
    image: '/src/assets/images/pexels-mika-photogenius-641920605-30698083.jpg',
  },
  {
    id: 70,
    title: 'Conférence Marketing',
    category: 'Événementiel',
    description: 'Conférence marketing avec des experts du secteur et des innovations.',
    date: 'Août 2023',
    equipment: 'Canon EOS R5, RF 70-200mm f/2.8',
    categoryId: 'events',
    image: '/src/assets/images/pexels-j-scott-photography-67121182-17234540.jpg',
  },
  {
    id: 71,
    title: 'Événement de Formation',
    category: 'Événementiel',
    description: "Événement de formation avec des sessions d'apprentissage intensives.",
    date: 'Juillet 2023',
    equipment: 'Sony A7R IV, 35mm f/1.4',
    categoryId: 'events',
    image: '/src/assets/images/pexels-hian-prims-371881225-14770626.jpg',
  },
  {
    id: 72,
    title: "Salon d'Innovation",
    category: 'Événementiel',
    description: "Salon d'innovation avec des technologies de pointe et des startups.",
    date: 'Juin 2023',
    equipment: 'Canon EOS R5, RF 16-35mm f/2.8',
    categoryId: 'events',
    image: '/src/assets/images/pexels-finest-pixel-2148805739-32271176 (1).jpg',
  },
  {
    id: 73,
    title: 'Conférence de Presse',
    category: 'Événementiel',
    description: 'Conférence de presse avec des annonces importantes et des échanges.',
    date: 'Mai 2023',
    equipment: 'Sony A7R IV, 50mm f/1.4',
    categoryId: 'events',
    image: '/src/assets/images/pexels-felix-adams-2546767-9302965.jpg',
  },
  {
    id: 74,
    title: 'Événement de Networking',
    category: 'Événementiel',
    description: 'Événement de networking avec des professionnels et des entrepreneurs.',
    date: 'Avril 2023',
    equipment: 'Canon EOS R5, RF 24-105mm f/4',
    categoryId: 'events',
    image: '/src/assets/images/pexels-eden-29017903.jpg',
  },
  {
    id: 75,
    title: "Séminaire d'Entreprise",
    category: 'Événementiel',
    description: "Séminaire d'entreprise avec des sessions de travail collaboratif.",
    date: 'Mars 2023',
    equipment: 'Sony A7R IV, 85mm f/1.4',
    categoryId: 'events',
    image: '/src/assets/images/pexels-cottonbro-6667022.jpg',
  },
  {
    id: 76,
    title: 'Événement Corporate',
    category: 'Événementiel',
    description: "Événement d'entreprise avec une approche élégante et professionnelle.",
    date: 'Février 2023',
    equipment: 'Canon EOS R5, RF 70-200mm f/2.8',
    categoryId: 'events',
    image: '/src/assets/images/pexels-chad-populis-2148434888-30726144.jpg',
  },
  {
    id: 77,
    title: 'Conférence Internationale',
    category: 'Événementiel',
    description: 'Conférence internationale avec des intervenants de renommée mondiale.',
    date: 'Janvier 2023',
    equipment: 'Sony A7R IV, 24-70mm f/2.8',
    categoryId: 'events',
    image: '/src/assets/images/pexels-biola-visuals-415017893-17832164.jpg',
  },
  {
    id: 78,
    title: 'Événement de Lancement',
    category: 'Événementiel',
    description: 'Événement de lancement avec une présentation spectaculaire et moderne.',
    date: 'Décembre 2022',
    equipment: 'Canon EOS R5, RF 16-35mm f/2.8',
    categoryId: 'events',
    image: '/src/assets/images/pexels-anthonyshkraba-production-8910427.jpg',
  },
])

const filteredPortfolio = computed(() => {
  if (selectedCategory.value === 'all') {
    // Mélange équilibré : on alterne les images de chaque catégorie
    const categoriesToShow = ['wedding', 'portrait', 'lifestyle', 'events']
    const byCat = categoriesToShow.map((cat) =>
      portfolioItems.value.filter((item) => item.categoryId === cat),
    )
    const maxLen = Math.max(...byCat.map((arr) => arr.length))
    const result: PortfolioItem[] = []
    for (let i = 0; i < maxLen; i++) {
      for (let c = 0; c < byCat.length; c++) {
        if (byCat[c][i]) result.push(byCat[c][i])
      }
    }
    return result
  } else {
    return portfolioItems.value.filter((item) => item.categoryId === selectedCategory.value)
  }
})

// On retire la logique de pagination

const closeModal = () => {
  selectedItem.value = null
  document.body.style.overflow = 'auto'
}

const reduceItems = () => {
  if (currentPage.value > 1) {
    currentPage.value--
  }
}

const lightboxVisible = ref(false)
const lightboxIndex = ref(0)
const galleryImages = computed(() => filteredPortfolio.value.map((item) => item.image))

function showLightbox(idx: number) {
  lightboxIndex.value = idx
  lightboxVisible.value = true
}
</script>

<style scoped>
button:focus,
.btn-luxury-outline:focus {
  outline: 2px solid #bfa181;
  outline-offset: 2px;
}

.glass-luxe-card {
  background: rgba(30, 20, 10, 0.55);
  backdrop-filter: blur(12px);
  border-radius: 1.5rem;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.18);
  border: 1.5px solid rgba(191, 161, 129, 0.18);
}

.shadow-gold {
  box-shadow:
    0 8px 32px 0 #bfa18166,
    0 0 0 4px #bfa18133;
}

.animate-fade-in {
  animation: fadeIn 1s cubic-bezier(0.23, 1, 0.32, 1) both;
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-float-delayed {
  animation: float 6s ease-in-out infinite;
  animation-delay: 3s;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

.fade-in {
  animation: fadeIn 1.5s ease-out;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.btn-luxury-glass {
  background: rgba(30, 20, 10, 0.45);
  backdrop-filter: blur(10px);
  border-radius: 9999px;
  border: 1.5px solid rgba(191, 161, 129, 0.25);
  color: #f5ecd7;
  box-shadow:
    0 8px 32px 0 #bfa18133,
    0 0 0 4px #bfa18122;
  transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
}
.btn-luxury-glass:hover {
  background: rgba(191, 161, 129, 0.85);
  color: #fff;
  box-shadow:
    0 8px 32px 0 #bfa18166,
    0 0 0 4px #bfa18133;
}

@media (max-width: 768px) {
  .container-luxury {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}
</style>
