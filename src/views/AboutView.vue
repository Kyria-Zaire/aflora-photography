<template>
  <div class="min-h-screen">
    <!-- Hero Section Immersif -->
    <section class="relative py-40 text-white overflow-hidden">
      <!-- Fond image naturelle avec parallaxe -->
      <div class="absolute inset-0 w-full h-full">
        <img
          src="/src/assets/images/pexels-hikaique-125532.jpg"
          alt="Fond À Propos AFLORA"
          class="w-full h-full object-cover object-center"
          data-parallax
        />
      </div>
      <div
        class="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-transparent"
      ></div>

      <!-- Éléments décoratifs flottants -->
      <div
        class="absolute top-20 left-10 w-32 h-32 bg-gradient-radial from-luxury-300/30 to-transparent rounded-full blur-2xl animate-float"
      ></div>
      <div
        class="absolute bottom-20 right-10 w-48 h-48 bg-gradient-radial from-luxury-500/20 to-transparent rounded-full blur-3xl animate-float-delayed"
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
              d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <h1
            class="text-6xl md:text-7xl font-serif font-bold fade-in text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]"
          >
            À Propos
          </h1>
        </div>
        <p
          class="text-2xl text-high-contrast-dark-light fade-in text-white max-w-3xl mx-auto leading-relaxed"
        >
          Découvrez l'histoire derrière AFLORA et notre passion pour transformer chaque instant en
          œuvre d'art
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

    <!-- Notre Histoire Section Immersive -->
    <section class="relative section-padding overflow-hidden">
      <!-- Fond image naturelle + overlay sombre luxe -->
      <div
        class="absolute inset-0 bg-cover bg-center"
        style="background-image: url('/src/assets/images/pexels-ron-lach-10273414.jpg')"
      ></div>
      <div
        class="absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 to-transparent"
      ></div>

      <div class="relative z-10 container-luxury">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div class="animate-slide-up">
            <div class="flex items-center gap-4 mb-8">
              <div class="w-1 h-16 bg-gradient-to-b from-luxury-300 to-transparent"></div>
              <h2
                class="text-5xl md:text-6xl font-serif font-bold text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]"
              >
                Notre Histoire
              </h2>
            </div>
            <div class="space-y-6">
              <p class="text-xl text-[#f5ecd7] leading-relaxed">
                AFLORA est né d'une
                <span class="text-luxury-300 font-semibold">passion dévorante</span> pour l'art de
                la photographie et d'un désir profond de capturer l'essence même de la beauté
                humaine. Fondé à Kinshasa, notre studio s'est imposé comme une référence
                incontournable dans le domaine de la
                <span class="text-luxury-300 font-semibold">photographie de luxe</span>.
              </p>
              <p class="text-xl text-[#f5ecd7] leading-relaxed">
                Depuis nos débuts, nous avons eu le privilège de documenter des
                <span class="text-luxury-300 font-semibold">moments précieux</span> dans la vie de
                centaines de familles, couples et entreprises. Chaque cliché raconte une histoire
                unique, chaque image porte en elle l'émotion d'un instant fugace transformé en
                <span class="text-luxury-300 font-semibold">souvenir éternel</span>.
              </p>
              <p class="text-xl text-[#f5ecd7] leading-relaxed">
                Notre approche allie
                <span class="text-luxury-300 font-semibold">technique professionnelle</span> et
                sensibilité artistique, créant des images qui dépassent la simple photographie pour
                devenir de véritables
                <span class="text-luxury-300 font-semibold">œuvres d'art</span>.
              </p>
            </div>
          </div>

          <div class="relative animate-scale-in">
            <div class="glass-luxe-card p-8 rounded-2xl shadow-2xl border border-luxury-300/40">
              <div
                class="aspect-square bg-cover bg-center rounded-lg relative overflow-hidden"
                style="background-image: url('/src/assets/images/pexels-ron-lach-10273414.jpg')"
              >
                <div
                  class="absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-transparent"
                ></div>
              </div>
            </div>
            <!-- Éléments décoratifs -->
            <div
              class="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-luxury-300/30 to-transparent rounded-full blur-2xl"
            ></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Nos Valeurs Section Premium -->
    <section class="relative section-padding overflow-hidden">
      <!-- Fond image naturelle -->
      <div
        class="absolute inset-0 bg-cover bg-center"
        style="background-image: url('/src/assets/images/pexels-imagifier-140221.jpg')"
      ></div>
      <div
        class="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-transparent"
      ></div>

      <div class="relative z-10 container-luxury">
        <div class="text-center mb-20">
          <div class="flex items-center justify-center gap-4 mb-6">
            <svg
              class="w-12 h-12 text-luxury-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              />
            </svg>
            <h2
              class="text-5xl md:text-6xl font-serif font-bold text-white tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]"
            >
              Nos Valeurs
            </h2>
          </div>
          <p class="text-2xl text-[#f5ecd7] max-w-3xl mx-auto font-serif">
            Les principes qui guident notre travail et notre relation avec nos clients
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(value, index) in values"
            :key="value.id"
            class="glass-luxe-card p-8 text-center group hover:scale-105 transition-all duration-500 animate-fade-in"
            :style="{ animationDelay: `${index * 0.2}s` }"
          >
            <div
              class="w-20 h-20 bg-gradient-to-r from-luxury-500 to-luxury-300 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-gold transition-all duration-300"
            >
              <svg
                v-if="value.id === 1"
                class="w-10 h-10 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>
              <svg
                v-else-if="value.id === 2"
                class="w-10 h-10 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"
                />
              </svg>
              <svg
                v-else-if="value.id === 3"
                class="w-10 h-10 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6"
                />
              </svg>
              <svg
                v-else-if="value.id === 4"
                class="w-10 h-10 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              <svg
                v-else-if="value.id === 5"
                class="w-10 h-10 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              <svg
                v-else-if="value.id === 6"
                class="w-10 h-10 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3
              class="text-2xl font-serif font-bold text-white mb-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]"
            >
              {{ value.title }}
            </h3>
            <p class="text-[#f5ecd7] text-lg font-light leading-relaxed">
              {{ value.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Notre Équipe Section Immersive -->
    <section class="relative section-padding overflow-hidden">
      <!-- Fond premium demandé + overlay luxe -->
      <div
        class="absolute inset-0 bg-cover bg-center"
        style="background-image: url('/src/assets/images2/pexels-markusspiske-4201333.jpg')"
      ></div>
      <div
        class="absolute inset-0 bg-gradient-to-br from-white/90 via-[#f5ecd7]/90 to-white/80"
      ></div>
      <div class="relative z-10 container-luxury">
        <div class="text-center mb-20">
          <div class="flex items-center justify-center gap-4 mb-6">
            <svg
              class="w-12 h-12 text-luxury-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <h2 class="text-5xl md:text-6xl font-serif font-bold text-dark-900 tracking-wide">
              Notre Équipe
            </h2>
          </div>
          <p class="text-2xl text-dark-700 max-w-3xl mx-auto font-serif">
            Une équipe créative dédiée à l'art de la photographie et au développement web
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <!-- Blaire Diams (texte à gauche) -->
          <div
            class="glass-luxe-card p-6 text-center group hover:scale-105 transition-all duration-500 animate-fade-in"
          >
            <div
              class="w-32 h-32 bg-gradient-to-br from-luxury-100 to-luxury-300 rounded-full mx-auto mb-6 flex items-center justify-center shadow-2xl group-hover:shadow-gold transition-all duration-300"
            >
              <div
                class="w-20 h-20 bg-gradient-to-r from-luxury-500 to-luxury-600 rounded-full flex items-center justify-center shadow-lg"
              >
                <svg
                  class="w-10 h-10 text-white"
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
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
            </div>
            <h3
              class="text-xl font-serif font-bold text-white mb-2 drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]"
            >
              Blaire Diams
            </h3>
            <p class="text-[#f5ecd7] font-semibold text-base mb-3">
              Propriétaire d’AFLORA & Photographe freelance
            </p>
            <p class="text-white text-sm leading-relaxed mb-4">
              Fondateur d’AFLORA, Blaire capture l’essence et l’émotion de chaque instant avec un
              regard unique. Photographe freelance passionné, il accompagne particuliers et
              entreprises pour sublimer leurs plus beaux souvenirs et projets visuels à Kinshasa et
              au-delà.
            </p>
            <div class="flex justify-center space-x-4">
              <a
                href="#"
                class="text-[#f5ecd7] hover:text-luxury-300 transition-colors duration-300 transform hover:scale-110"
                aria-label="Twitter de Blaire Diams"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
                  />
                </svg>
              </a>
              <a
                href="#"
                class="text-[#f5ecd7] hover:text-luxury-300 transition-colors duration-300 transform hover:scale-110"
                aria-label="Instagram de Blaire Diams"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.35 3.608 1.325.975.975 1.263 2.242 1.325 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.35 2.633-1.325 3.608-.975.975-2.242 1.263-3.608 1.325-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.35-3.608-1.325-.975-.975-1.263-2.242-1.325-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.35-2.633 1.325-3.608.975-.975 2.242-1.263 3.608-1.325C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.014 7.052.072 5.775.13 4.602.422 3.635 1.39 2.668 2.357 2.376 3.53 2.318 4.808 2.26 6.088 2.246 6.497 2.246 12c0 5.503.014 5.912.072 7.192.058 1.278.35 2.451 1.317 3.418.967.967 2.14 1.259 3.418 1.317C8.332 23.986 8.741 24 12 24s3.668-.014 4.948-.072c1.278-.058 2.451-.35 3.418-1.317.967-.967 1.259-2.14 1.317-3.418.058-1.28.072-1.689.072-7.192 0-5.503-.014-5.912-.072-7.192-.058-1.278-.35-2.451-1.317-3.418C19.399.422 18.226.13 16.948.072 15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 11-2.881 0 1.44 1.44 0 012.881 0z"
                  />
                </svg>
              </a>
            </div>
          </div>
          <!-- Image Blaire Diams à droite -->
          <div class="flex justify-center items-center animate-fade-in">
            <img
              src="/src/assets/images2/1A4355DA-9A72-430C-854D-F1E4AE084A9D (1).jpg"
              alt="Blaire Diams"
              class="rounded-3xl shadow-2xl border-4 border-luxury-300/40 object-cover w-64 h-64"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section Immersive -->
    <section class="relative section-padding overflow-hidden">
      <!-- Fond image naturelle -->
      <div
        class="absolute inset-0 bg-cover bg-center"
        style="background-image: url('/src/assets/images/pexels-ron-lach-10273414.jpg')"
      ></div>
      <div class="absolute inset-0 bg-gradient-to-br from-black/90 via-black/70 to-black/90"></div>

      <div class="relative z-10 container-luxury">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          <div
            v-for="(stat, index) in stats"
            :key="stat.id"
            class="animate-fade-in"
            :style="{ animationDelay: `${index * 0.2}s` }"
          >
            <div
              class="glass-luxe-card p-8 rounded-2xl shadow-2xl border border-luxury-300/40 hover:shadow-gold transition-all duration-300"
            >
              <div
                class="text-5xl font-serif font-bold text-luxury-300 mb-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]"
              >
                {{ stat.value }}
              </div>
              <div class="text-xl text-[#f5ecd7] font-light">{{ stat.label }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Reconnaissances Section Premium -->
    <section class="relative section-padding overflow-hidden">
      <!-- Fond premium demandé + overlay luxe -->
      <div
        class="absolute inset-0 bg-cover bg-center"
        style="background-image: url('/src/assets/images/pexels-atccommphoto-306763.jpg')"
      ></div>
      <div
        class="absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 to-transparent"
      ></div>
      <div class="relative z-10 container-luxury">
        <div class="text-center mb-20">
          <div class="flex items-center justify-center gap-4 mb-6">
            <svg
              class="w-12 h-12 text-luxury-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
              />
            </svg>
            <h2
              class="text-5xl md:text-6xl font-serif font-bold text-white tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]"
            >
              Reconnaissances
            </h2>
          </div>
          <p class="text-2xl text-[#f5ecd7] max-w-3xl mx-auto font-serif">
            Les distinctions qui témoignent de notre excellence dans le domaine de la photographie
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(award, index) in awards"
            :key="award.id"
            class="glass-luxe-card p-8 text-center group hover:scale-105 transition-all duration-500 animate-fade-in"
            :style="{ animationDelay: `${index * 0.3}s` }"
          >
            <div
              class="w-20 h-20 bg-gradient-to-r from-luxury-500 to-luxury-300 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-gold transition-all duration-300"
            >
              <svg
                class="w-10 h-10 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>
            </div>
            <h3
              class="text-2xl font-serif font-bold text-white mb-3 drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]"
            >
              {{ award.title }}
            </h3>
            <p class="text-luxury-300 font-semibold text-lg mb-2">{{ award.organization }}</p>
            <p class="text-[#f5ecd7] text-lg">{{ award.year }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section Immersive -->
    <section class="relative section-padding overflow-hidden">
      <!-- Fond premium demandé + overlay luxe -->
      <div
        class="absolute inset-0 bg-cover bg-center"
        style="background-image: url('/src/assets/images2/pexels-belle-co-99483-1000445.jpg')"
      ></div>
      <div
        class="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-transparent"
      ></div>
      <div class="relative z-10 container-luxury text-center">
        <h2
          class="text-5xl md:text-6xl font-serif font-bold text-white mb-8 drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]"
        >
          Prêt à Travailler Ensemble ?
        </h2>
        <p class="text-2xl mb-12 max-w-3xl mx-auto text-[#f5ecd7] leading-relaxed">
          Découvrez comment AFLORA peut transformer vos moments précieux en souvenirs inoubliables.
        </p>
        <div class="flex flex-col sm:flex-row gap-6 justify-center">
          <router-link
            to="/portfolio"
            class="btn-luxury-outline text-white border-white hover:bg-white hover:text-dark-900 text-lg px-8 py-4 transform hover:scale-105 transition-all duration-300"
            aria-label="Voir le travail d'AFLORA"
          >
            Voir Notre Travail
          </router-link>
          <router-link
            to="/contact"
            class="btn-luxury text-lg px-8 py-4 transform hover:scale-105 transition-all duration-300"
            aria-label="Contacter AFLORA"
          >
            Nous Contacter
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const values = ref([
  {
    id: 1,
    title: 'Excellence',
    description:
      "Nous poursuivons l'excellence absolue dans chaque détail, de la composition initiale à la livraison finale. Chaque image doit être une œuvre d'art qui dépasse les attentes.",
  },
  {
    id: 2,
    title: 'Créativité',
    description:
      "Notre vision créative unique nous permet de révéler l'essence authentique de chaque moment et de chaque personne. Nous transformons l'ordinaire en extraordinaire.",
  },
  {
    id: 3,
    title: 'Professionnalisme',
    description:
      'Nous incarnons les plus hauts standards de professionnalisme dans chaque interaction. Ponctualité, discrétion et expertise technique garanties à chaque projet.',
  },
  {
    id: 4,
    title: 'Passion',
    description:
      'Notre passion dévorante pour la photographie se traduit dans chaque cliché. Nous ne capturons pas seulement des images, nous créons des émotions visuelles.',
  },
  {
    id: 5,
    title: 'Innovation',
    description:
      "Nous restons à la pointe de l'innovation technologique et artistique. Les dernières techniques et équipements pour des résultats toujours exceptionnels.",
  },
  {
    id: 6,
    title: 'Satisfaction Client',
    description:
      "La satisfaction totale de nos clients est notre raison d'être. Chaque décision, chaque action est guidée par notre engagement à dépasser vos attentes.",
  },
])

const stats = ref([
  {
    id: 1,
    value: '500+',
    label: 'Séances Réalisées',
  },
  {
    id: 2,
    value: '50+',
    label: 'Mariages Capturés',
  },
  {
    id: 3,
    value: '100%',
    label: 'Clients Satisfaits',
  },
  {
    id: 4,
    value: '5+',
    label: "Années d'Expérience",
  },
])

const awards = ref([
  {
    id: 1,
    title: 'Meilleur Photographe',
    organization: 'Festival Photo Kinshasa',
    year: '2024',
  },
  {
    id: 2,
    title: 'Excellence Artistique',
    organization: 'Association des Photographes RDC',
    year: '2023',
  },
  {
    id: 3,
    title: 'Prix du Public',
    organization: 'Salon de la Photo',
    year: '2022',
  },
])
</script>

<style scoped>
.btn-luxury:focus,
.btn-luxury-outline:focus,
a:focus {
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

.group:hover .shadow-gold {
  box-shadow:
    0 16px 48px 0 #bfa18199,
    0 0 0 6px #bfa18155;
}

.animate-fade-in {
  animation: fadeIn 1s cubic-bezier(0.23, 1, 0.32, 1) both;
}

.animate-slide-up {
  animation: slideUp 1s cubic-bezier(0.23, 1, 0.32, 1) both;
}

.animate-scale-in {
  animation: scaleIn 0.8s cubic-bezier(0.23, 1, 0.32, 1) both;
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
  }
  to {
    opacity: 1;
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
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

@media (max-width: 768px) {
  .container-luxury {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}
</style>
