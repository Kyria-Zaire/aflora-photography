<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="relative h-screen flex items-center justify-center overflow-hidden">
      <!-- Background Image -->
      <div
        class="absolute inset-0 bg-cover bg-center bg-no-repeat"
        :style="`background-image: url('${headerCamera}')`"
      >
        <div
          class="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70"
        ></div>
        <div
          class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
        ></div>
      </div>

      <!-- Hero Content -->
      <div class="relative z-10 text-center text-white px-4">
        <div class="animate-fade-in">
          <h1 class="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight fade-in">
            <span class="block">{{ hero.title }}</span>
            <span class="text-luxury-300 text-3xl md:text-4xl font-light">{{ hero.subtitle }}</span>
          </h1>
          <p
            class="text-xl md:text-2xl text-readable-dark-light mb-8 max-w-3xl mx-auto leading-relaxed fade-in"
          >
            {{ hero.description }}
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center fade-in">
            <router-link to="/portfolio" class="btn-luxury" aria-label="Voir le portfolio complet">
              {{ hero.cta }}
            </router-link>
            <router-link
              to="/contact"
              class="btn-luxury-outline text-white border-white hover:bg-white hover:text-dark-900"
              aria-label="Accéder à la page contact"
            >
              {{ hero.ctaSecondary }}
            </router-link>
          </div>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          ></path>
        </svg>
      </div>
    </section>

    <!-- About Section -->
    <section class="relative section-padding slide-up overflow-hidden">
      <!-- Background Image -->
      <div
        class="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style="
          background-image: url('https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80');
        "
      ></div>
      <div class="absolute inset-0 bg-gradient-to-br from-white/95 to-luxury-50/95"></div>

      <div class="relative z-10 container-luxury">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="animate-slide-up">
            <h2 class="text-4xl font-serif font-bold text-emphasis mb-6">
              L'Art de la Photographie
            </h2>
            <p class="text-lg text-high-contrast-light mb-6 leading-relaxed">
              Chez AFLORA, nous croyons que chaque moment mérite d'être immortalisé avec élégance et
              sophistication. Notre approche unique combine technique professionnelle et vision
              artistique pour créer des images qui racontent votre histoire.
            </p>
            <p class="text-lg text-high-contrast-light mb-8 leading-relaxed">
              Spécialisés dans la photographie de mariage, les portraits professionnels et les
              événements corporatifs, nous vous accompagnons dans chaque étape pour des souvenirs
              inoubliables.
            </p>
            <router-link
              to="/about"
              class="btn-luxury-outline"
              aria-label="En savoir plus sur AFLORA"
            >
              En Savoir Plus
            </router-link>
          </div>
          <div class="relative animate-scale-in">
            <div
              class="aspect-square bg-cover bg-center rounded-lg shadow-2xl"
              style="
                background-image: url('https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80');
              "
            ></div>
            <div
              class="absolute -bottom-6 -right-6 w-48 h-48 bg-cover bg-center rounded-lg shadow-xl"
              style="
                background-image: url('https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80');
              "
            ></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="relative section-padding slide-up overflow-hidden services-section-white-text">
      <!-- Fond premium demandé + overlay luxe -->
      <div
        class="absolute inset-0 bg-cover bg-center"
        style="background-image: url('/src/assets/images2/pexels-pixabay-414781.jpg')"
      ></div>
      <div
        class="absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 to-transparent"
      ></div>
      <div class="relative z-10 container-luxury">
        <div class="text-center mb-16">
          <h2
            class="text-5xl font-serif font-extrabold text-luxury-300 mb-4 drop-shadow-lg tracking-wide animate-fade-in"
          >
            Nos Services d'Excellence
          </h2>
          <p class="text-2xl text-section-accroche max-w-2xl mx-auto font-medium animate-fade-in">
            Offrez-vous l'expérience photographique la plus raffinée de Kinshasa. Chaque prestation
            est pensée pour sublimer vos moments et révéler votre élégance.
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
          <div
            v-for="service in services"
            :key="service.id"
            class="group relative glass-luxe-card p-10 text-center rounded-2xl shadow-2xl border border-luxury-300/40 hover:border-luxury-300 transition-all duration-300 overflow-hidden animate-slide-up"
          >
            <!-- Icône premium -->
            <div class="flex justify-center mb-6">
              <component
                :is="service.icon"
                class="w-14 h-14 text-luxury-300 group-hover:text-luxury-100 transition-colors duration-300 drop-shadow-xl"
              />
            </div>
            <h3 class="text-2xl font-serif font-bold text-white mb-4 tracking-wide">
              {{ service.title }}
            </h3>
            <p class="text-luxury-100 mb-8 text-lg font-light">
              {{ service.description }}
            </p>
            <router-link
              :to="service.link"
              class="btn-luxury text-lg px-8 py-3 shadow-lg group-hover:scale-105 transition-transform duration-300"
              aria-label="Découvrir {{ service.title }}"
            >
              Découvrir
            </router-link>
            <!-- Effet lumineux au survol -->
            <div
              class="absolute inset-0 pointer-events-none rounded-2xl group-hover:ring-4 group-hover:ring-luxury-300/30 transition-all duration-300"
            ></div>
          </div>
        </div>
        <!-- Tableau des tarifs -->
        <!-- SUPPRIMÉ de la page d'accueil, déplacé dans ServicesView.vue -->
      </div>
    </section>

    <!-- Portfolio Preview -->
    <section class="relative section-padding overflow-hidden">
      <!-- Background Image -->
      <div
        class="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style="
          background-image: url('https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80');
        "
      ></div>
      <div class="absolute inset-0 bg-gradient-to-br from-white/95 to-luxury-50/95"></div>

      <div class="relative z-10 container-luxury">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-serif font-bold text-emphasis mb-4">Portfolio</h2>
          <p class="text-xl text-high-contrast-light max-w-2xl mx-auto">
            Découvrez nos dernières créations et laissez-vous inspirer
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="item in portfolioItems"
            :key="item.id"
            class="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
          >
            <div
              class="aspect-[4/5] bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              :style="{ backgroundImage: `url(${item.image})` }"
            ></div>
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6"
            >
              <div class="text-center text-white">
                <h3 class="text-xl font-serif font-semibold mb-2">{{ item.title }}</h3>
                <p class="text-sm text-luxury-200">{{ item.category }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="text-center mt-12">
          <router-link to="/portfolio" class="btn-luxury" aria-label="Voir tout le portfolio">
            Voir Tout le Portfolio
          </router-link>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="relative section-padding text-white slide-up overflow-hidden">
      <!-- Fond premium demandé + overlay luxe -->
      <div
        class="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style="background-image: url('/src/assets/images2/pexels-pixabay-414781.jpg')"
      ></div>
      <div class="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/80"></div>
      <div class="relative z-10 container-luxury">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-serif font-bold mb-4">Témoignages Clients</h2>
          <p class="text-xl text-high-contrast-dark-light max-w-2xl mx-auto">
            Ce que nos clients disent de leur expérience avec AFLORA
          </p>
        </div>
        <div class="w-full overflow-x-hidden">
          <div class="marquee-track flex items-center gap-8">
            <div
              v-for="testimonial in [...testimonials, ...testimonials]"
              :key="testimonial.id + '-' + Math.random()"
              class="glass-luxe-card text-white rounded-2xl shadow-2xl p-8 flex flex-col items-center min-w-[320px] max-w-xs animate-fade-in border border-luxury-300/40"
            >
              <div
                class="w-20 h-20 flex items-center justify-center rounded-full mb-4 border-4 border-luxury-300 bg-luxury-50"
              >
                <span class="text-2xl font-bold text-luxury-300">{{ testimonial.initials }}</span>
              </div>
              <h3 class="text-lg font-bold text-luxury-300 mb-2">{{ testimonial.name }}</h3>
              <p class="text-luxury-100 text-center mb-2 italic">« {{ testimonial.quote }} »</p>
              <span class="text-xs text-luxury-200">{{ testimonial.service }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="relative section-padding slide-up overflow-hidden">
      <!-- Fond premium demandé + overlay luxe -->
      <div
        class="absolute inset-0 bg-cover bg-center"
        style="background-image: url('/src/assets/images2/pexels-taryn-elliott-4340785.jpg')"
      ></div>
      <div class="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/80"></div>
      <div class="relative z-10 flex justify-center items-center">
        <div
          class="glass-luxe-card w-full max-w-2xl mx-auto p-6 sm:p-10 rounded-2xl shadow-2xl border border-luxury-300/40 text-center animate-fade-in"
        >
          <h2 class="text-4xl font-serif font-bold mb-6 text-luxury-300 drop-shadow-lg">
            Prêt à Créer des Souvenirs Inoubliables ?
          </h2>
          <p class="text-xl mb-8 max-w-2xl mx-auto text-luxury-100 font-light">
            Contactez-nous dès aujourd'hui pour discuter de votre projet et réserver votre séance
            photo.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <router-link
              to="/contact"
              class="btn-luxury text-lg px-8 py-3 shadow-lg"
              aria-label="Nous contacter"
            >
              Nous Contacter
            </router-link>
            <a
              href="tel:+243833055164"
              class="btn-luxury-outline text-white border-white hover:bg-white hover:text-dark-900 text-lg px-8 py-3 shadow-lg"
              aria-label="Appeler Blair Diam's maintenant"
            >
              Appeler Maintenant
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {
  CameraIcon,
  UserGroupIcon,
  BriefcaseIcon,
  SparklesIcon,
  HomeModernIcon,
  UsersIcon,
} from '@heroicons/vue/24/outline'
import headerCamera from '@/assets/images/pexels-tirachard-kumtanom-112571-733853.jpg'
import portraitCorporate from '@/assets/images/pexels-leo-gilmant-1144880343-32935700.jpg'
import modeImage from '@/assets/images/pexels-eric-moura-859101902-32941633.jpg'
import familleImage from '@/assets/images/pexels-greta-hoffman-9705763.jpg'
import evenementImage from '@/assets/images/pexels-mat-brown-150387-1395967.jpg'

const services = ref([
  {
    id: 1,
    title: 'Photographie de Mariage',
    description:
      'Transformez votre jour J en une œuvre d’art intemporelle. Chaque émotion, chaque regard, chaque instant précieux immortalisé avec la grâce et la sophistication qui caractérisent AFLORA.',
    link: '/services#wedding',
    icon: CameraIcon,
  },
  {
    id: 2,
    title: 'Portraits Professionnels',
    description:
      'Révélez votre essence professionnelle à travers des portraits qui parlent d’eux-mêmes. Une image qui transmet confiance, autorité et charisme pour propulser votre carrière.',
    link: '/services#portraits',
    icon: UserGroupIcon,
  },
  {
    id: 3,
    title: 'Événements Corporatifs',
    description:
      'Donnez à vos événements d’entreprise la dimension visuelle qu’ils méritent. Une documentation professionnelle qui capture l’esprit et l’énergie de vos moments forts.',
    link: '/services#corporate',
    icon: BriefcaseIcon,
  },
  {
    id: 4,
    title: 'Photographie de Mode',
    description:
      'Créez des images qui font sensation. Des shootings mode qui transforment vos collections en véritables œuvres d’art visuelles, prêtes à conquérir le monde.',
    link: '/services#fashion',
    icon: SparklesIcon,
  },
  {
    id: 5,
    title: 'Séances en Studio',
    description:
      'Découvrez la magie de nos studios équipés aux dernières technologies. Un environnement professionnel où chaque séance devient une expérience artistique unique.',
    link: '/services#studio',
    icon: HomeModernIcon,
  },
  {
    id: 6,
    title: 'Événements Privés',
    description:
      'Célébrez vos moments de vie les plus précieux avec des photographies qui racontent votre histoire. Des souvenirs qui traversent le temps avec élégance.',
    link: '/services#events',
    icon: UsersIcon,
  },
])

const portfolioItems = ref([
  {
    id: 1,
    title: 'Mariage Élégant',
    category: 'Mariage',
    image:
      'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  },
  {
    id: 2,
    title: 'Portrait Corporate',
    category: 'Portrait',
    image: portraitCorporate,
  },
  {
    id: 3,
    title: "Événement d'Entreprise",
    category: 'Corporate',
    image:
      'https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
  },
  {
    id: 4,
    title: 'Séance Mode',
    category: 'Mode',
    image: modeImage,
  },
  {
    id: 5,
    title: 'Famille Heureuse',
    category: 'Famille',
    image: familleImage,
  },
  {
    id: 6,
    title: 'Cérémonie Traditionnelle',
    category: 'Événement',
    image: evenementImage,
  },
])

const testimonials = ref([
  {
    id: 1,
    name: 'Marie & Jean',
    initials: 'MJ',
    service: 'Mariage',
    quote:
      "AFLORA a transformé notre jour J en un conte de fées photographique. Chaque image raconte notre histoire avec tant d'émotion et d'élégance. Leur professionnalisme et leur créativité ont dépassé toutes nos attentes.",
  },
  {
    id: 2,
    name: 'Sarah Dubois',
    initials: 'SD',
    service: 'Portrait Professionnel',
    quote:
      'Les portraits réalisés par AFLORA ont considérablement transformé mon image professionnelle. Leur expertise technique et leur vision artistique ont créé des images qui transmettent parfaitement confiance et autorité.',
  },
  {
    id: 3,
    name: 'Entreprise TechCorp',
    initials: 'TC',
    service: 'Événement Corporate',
    quote:
      "Professionnalisme exceptionnel et créativité au rendez-vous. AFLORA a immortalisé nos événements avec une qualité artistique remarquable, capturant l'essence même de notre entreprise.",
  },
  // Témoignages congolais(e)s
  {
    id: 4,
    name: 'Chantal Mbuyi',
    initials: 'CM',
    service: 'Portrait Studio',
    quote:
      'J’ai adoré l’expérience en studio avec AFLORA ! Les photos sont sublimes et mettent vraiment en valeur ma personnalité. Merci pour votre patience et votre sourire.',
  },
  {
    id: 5,
    name: 'Patrick Ilunga',
    initials: 'PI',
    service: 'Mariage',
    quote:
      'Un service haut de gamme, du début à la fin. Les photos de notre mariage à Kinshasa sont dignes d’un magazine ! Je recommande vivement.',
  },
  {
    id: 6,
    name: 'Aline Tshimanga',
    initials: 'AT',
    service: 'Événement Privé',
    quote:
      'AFLORA a su capturer l’ambiance de notre fête familiale avec beaucoup de sensibilité. Les souvenirs sont magnifiques, toute la famille est ravie !',
  },
  {
    id: 7,
    name: 'Blaise Kabasele',
    initials: 'BK',
    service: 'Portrait Corporate',
    quote:
      'Les portraits professionnels réalisés par AFLORA m’ont permis de booster mon image sur LinkedIn. Sérieux, rapide et très créatif.',
  },
  {
    id: 8,
    name: 'Merveille Mbemba',
    initials: 'MM',
    service: 'Séance Mode',
    quote:
      'Une équipe à l’écoute, un regard artistique unique. Mes photos de mode sont tout simplement époustouflantes. Merci AFLORA !',
  },
  {
    id: 9,
    name: 'Gloria Nsimba',
    initials: 'GN',
    service: 'Famille',
    quote:
      'Nous avons fait une séance famille avec AFLORA, les enfants étaient à l’aise et le résultat est splendide. Un vrai souvenir de Kin !',
  },
  {
    id: 10,
    name: 'Serge & Nadège',
    initials: 'SN',
    service: 'Mariage',
    quote:
      'Merci pour votre professionnalisme et votre gentillesse. Les photos de notre mariage sont magiques, on ressent toute l’émotion de la journée.',
  },
])

const hero = ref({
  title: 'AFLORA',
  subtitle: "Photographie d'Excellence",
  description:
    "Transformez vos moments précieux en œuvres d'art intemporelles. Notre expertise artistique et notre passion pour la photographie créent des images qui racontent votre histoire avec élégance et sophistication.",
  cta: 'Découvrir Notre Travail',
  ctaSecondary: 'Nous Contacter',
})
</script>

<style scoped>
.btn-luxury:focus,
.btn-luxury-outline:focus {
  outline: 2px solid #bfa181;
  outline-offset: 2px;
}

.glass-effect-luxury {
  background: rgba(191, 161, 129, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(191, 161, 129, 0.2);
}

.glass-effect-dark {
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.glass-luxe-card {
  background: rgba(30, 20, 10, 0.55);
  backdrop-filter: blur(12px);
  border-radius: 1.5rem;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.18);
  border: 1.5px solid rgba(191, 161, 129, 0.18);
}

/* Animations */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.animate-fade-in {
  animation: fadeIn 1s ease-out;
}

.animate-slide-up {
  animation: slideUp 0.8s ease-out;
}

.animate-scale-in {
  animation: scaleIn 0.8s ease-out;
}

.fade-in {
  animation: fadeIn 1s ease-out;
}

.slide-up {
  animation: slideUp 0.8s ease-out;
}

.marquee-track {
  width: max-content;
  display: flex;
  animation: marquee 40s linear infinite;
}
@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
@media (max-width: 768px) {
  .marquee-track {
    animation-duration: 60s;
  }
}
.services-section-white-text .text-section-accroche {
  color: #fff !important;
}
</style>
