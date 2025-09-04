<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="relative py-32 text-white overflow-hidden">
      <!-- Fond image naturelle avec parallaxe -->
      <div class="absolute inset-0 w-full h-full">
        <img
          src="/src/assets/images2/pexels-pankajbiswas-57542.jpg"
          alt="Fond Nos Services"
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
        <h1
          class="text-5xl md:text-6xl font-serif font-bold mb-4 fade-in text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]"
        >
          Nos Services
        </h1>
        <p class="text-xl text-high-contrast-dark-light fade-in text-white">
          Une gamme complète de services photographiques professionnels pour immortaliser vos
          moments précieux
        </p>
      </div>
    </section>

    <!-- Services Grid -->
    <section class="relative section-padding slide-up overflow-hidden">
      <!-- Fond premium demandé + overlay sombre luxe -->
      <div
        class="absolute inset-0 bg-cover bg-center"
        style="
          background-image: url('/src/assets/images2/pexels-prime-cinematics-1005175-2057427.jpg');
        "
      ></div>
      <div
        class="absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 to-transparent"
      ></div>
      <div class="relative z-10 container-luxury">
        <!-- Grille premium des tarifs/services regroupée en 4 cartes -->
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mt-16">
          <!-- Carte Mariage -->
          <div
            class="glass-luxe-card group relative p-8 rounded-2xl shadow-2xl border border-luxury-300/40 animate-fade-in hover:shadow-gold hover:ring-4 hover:ring-luxury-300/40 hover:scale-105 transition-all duration-300 animate-slide-up"
          >
            <span
              class="absolute top-4 left-4 bg-gradient-to-r from-luxury-500 to-luxury-300 text-dark-900 font-bold px-2 py-0.5 rounded-full shadow text-[10px] tracking-widest uppercase z-10"
              >Best Seller</span
            >
            <div class="flex items-center justify-center mb-2">
              <!-- Icône alliance -->
              <svg
                class="w-8 h-8 text-luxury-300 mr-2"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <circle cx="8" cy="12" r="4" />
                <circle cx="16" cy="12" r="4" />
              </svg>
              <h3 class="text-2xl font-serif font-bold text-luxury-300 text-center">Mariage</h3>
            </div>
            <ul class="space-y-3">
              <li
                class="flex justify-between items-center"
                v-for="tarif in tarifs.filter((t) => t.categorie === 'Mariage')"
                :key="tarif.service"
              >
                <span class="text-[#f5ecd7]">{{ tarif.service }}</span>
                <span v-if="!tarif.masque" class="text-luxury-300 font-bold">{{ tarif.prix }}</span>
                <button
                  v-else
                  @click="contacterPourTarif(tarif)"
                  class="btn-luxury-outline text-xs px-3 py-1"
                >
                  Voir le tarif
                </button>
              </li>
            </ul>
          </div>
          <!-- Carte Événementiel -->
          <div
            class="glass-luxe-card group relative p-8 rounded-2xl shadow-2xl border border-luxury-300/40 animate-fade-in hover:shadow-gold hover:ring-4 hover:ring-luxury-300/40 hover:scale-105 transition-all duration-300 animate-scale-in"
          >
            <span
              class="absolute top-4 left-4 bg-gradient-to-r from-luxury-300 to-luxury-100 text-dark-900 font-bold px-2 py-0.5 rounded-full shadow text-[10px] tracking-widest uppercase z-10"
              >Coup de cœur</span
            >
            <div class="flex items-center justify-center mb-2">
              <!-- Icône micro -->
              <svg
                class="w-8 h-8 text-luxury-300 mr-2"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <rect x="9" y="2" width="6" height="12" rx="3" />
                <path d="M5 10v2a7 7 0 0014 0v-2" />
              </svg>
              <h3 class="text-2xl font-serif font-bold text-luxury-300 text-center">
                Événementiel
              </h3>
            </div>
            <ul class="space-y-3">
              <li
                class="flex justify-between items-center"
                v-for="tarif in tarifs.filter((t) =>
                  [
                    'Conférence',
                    'Réunion',
                    'Anniversaire',
                    'Baptêmes + réception',
                    'Religieux et soirées',
                    'Dot',
                    'Pré dot Présentation',
                  ].includes(t.service),
                )"
                :key="tarif.service"
              >
                <span class="text-[#f5ecd7]">{{ tarif.service }}</span>
                <span v-if="!tarif.masque" class="text-luxury-300 font-bold">{{ tarif.prix }}</span>
                <button
                  v-else
                  @click="contacterPourTarif(tarif)"
                  class="btn-luxury-outline text-xs px-3 py-1"
                >
                  Voir le tarif
                </button>
              </li>
            </ul>
          </div>
          <!-- Carte Scolaire & Étude -->
          <div
            class="glass-luxe-card group relative p-8 rounded-2xl shadow-2xl border border-luxury-300/40 animate-fade-in hover:shadow-gold hover:ring-4 hover:ring-luxury-300/40 hover:scale-105 transition-all duration-300 animate-fade-in"
          >
            <div class="flex items-center justify-center mb-2">
              <!-- Icône chapeau diplômé -->
              <svg
                class="w-8 h-8 text-luxury-300 mr-2"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <path d="M12 3L2 9l10 6 10-6-10-6z" />
                <path d="M2 9v6a10 5 0 0020 0V9" />
              </svg>
              <h3 class="text-2xl font-serif font-bold text-luxury-300 text-center">
                Scolaire & Étude
              </h3>
            </div>
            <ul class="space-y-3">
              <li
                class="flex justify-between items-center"
                v-for="tarif in tarifs.filter((t) =>
                  [
                    'Défense académique',
                    'Collation académique',
                    'Réception de la collation',
                  ].includes(t.service),
                )"
                :key="tarif.service"
              >
                <span class="text-[#f5ecd7]">{{ tarif.service }}</span>
                <span v-if="!tarif.masque" class="text-luxury-300 font-bold">{{ tarif.prix }}</span>
                <button
                  v-else
                  @click="contacterPourTarif(tarif)"
                  class="btn-luxury-outline text-xs px-3 py-1"
                >
                  Voir le tarif
                </button>
              </li>
            </ul>
          </div>
          <!-- Carte Autres Prestations -->
          <div
            class="glass-luxe-card group relative p-8 rounded-2xl shadow-2xl border border-luxury-300/40 animate-fade-in hover:shadow-gold hover:ring-4 hover:ring-luxury-300/40 hover:scale-105 transition-all duration-300 animate-fade-in"
          >
            <div class="flex items-center justify-center mb-2">
              <!-- Icône étoile -->
              <svg
                class="w-8 h-8 text-luxury-300 mr-2"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <polygon
                  points="12 2 15 8.5 22 9.3 17 14.1 18.5 21 12 17.8 5.5 21 7 14.1 2 9.3 9 8.5 12 2"
                />
              </svg>
              <h3 class="text-2xl font-serif font-bold text-luxury-300 text-center">
                Autres Prestations
              </h3>
            </div>
            <ul class="space-y-3">
              <li
                class="flex justify-between items-center"
                v-for="tarif in tarifs.filter((t) =>
                  ['Tourisme', 'Visite', 'Clip', 'Deuil', 'Spot Publicitaire'].includes(
                    t.categorie,
                  ),
                )"
                :key="tarif.service"
              >
                <span class="text-[#f5ecd7]">{{ tarif.service }}</span>
                <span v-if="!tarif.masque" class="text-luxury-300 font-bold">{{ tarif.prix }}</span>
                <button
                  v-else
                  @click="contacterPourTarif(tarif)"
                  class="btn-luxury-outline text-xs px-3 py-1"
                >
                  Voir le tarif
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Process Section -->
    <section class="section-padding bg-pattern-luxury slide-up">
      <div class="container-luxury">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-serif font-bold text-emphasis mb-4">Notre Processus</h2>
          <p class="text-xl text-high-contrast-light max-w-2xl mx-auto">
            Une approche structurée pour garantir des résultats exceptionnels
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="(step, index) in processSteps" :key="step.id" class="text-center">
            <div class="relative">
              <div
                class="w-16 h-16 bg-luxury-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl"
              >
                {{ index + 1 }}
              </div>

              <!-- Connector line -->
              <div
                v-if="index < processSteps.length - 1"
                class="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-luxury-200 transform -translate-y-1/2"
                style="width: calc(100% - 2rem)"
              ></div>
            </div>

            <h3 class="text-xl font-serif font-semibold text-emphasis mb-4">
              {{ step.title }}
            </h3>

            <p class="text-high-contrast-light">
              {{ step.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Equipment Section immersive luxe -->
    <section class="relative section-padding overflow-hidden">
      <div
        class="absolute inset-0 bg-cover bg-center"
        style="background-image: url('/src/assets/images/pexels-brett-sayles-2445781.jpg')"
      ></div>
      <div
        class="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-transparent"
      ></div>
      <div class="container-luxury relative z-10">
        <div class="flex flex-col lg:flex-row gap-12 items-center">
          <!-- Colonne image immersive -->
          <div class="w-full lg:w-1/2 flex flex-col items-center justify-center">
            <div class="relative w-full max-w-md mx-auto">
              <img
                src="/src/assets/images/pexels-brett-sayles-2445781.jpg"
                alt="Studio AFLORA"
                class="rounded-3xl shadow-2xl border-4 border-luxury-300/40 object-cover aspect-square"
              />
              <span
                class="absolute top-4 right-4 bg-gradient-to-r from-luxury-500 to-luxury-300 text-dark-900 font-bold px-4 py-2 rounded-full shadow-lg text-xs tracking-widest uppercase"
                >Matériel haut de gamme</span
              >
            </div>
          </div>
          <!-- Colonne équipements -->
          <div class="w-full lg:w-1/2 space-y-8">
            <h2
              class="text-4xl md:text-5xl font-serif font-bold text-luxury-200 mb-6 flex items-center gap-4"
            >
              <svg
                class="w-10 h-10 text-luxury-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="10" stroke-width="2" />
                <rect x="8" y="8" width="8" height="8" rx="2" stroke-width="2" />
              </svg>
              Équipement Professionnel
            </h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div
                class="glass-luxe-card p-6 flex items-center gap-4 shadow-lg border border-luxury-300/30 hover:bg-luxury-900/30 transition"
              >
                <svg
                  class="w-8 h-8 text-luxury-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 7h2a2 2 0 012 2v6a2 2 0 01-2 2H3m0-10v10m0-10a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2z"
                  />
                </svg>
                <div>
                  <div class="text-lg font-bold text-luxury-100 text-white">
                    Canon EOS R5 & Sony A7R IV
                  </div>
                  <div style="color: #f5ecd7" class="text-sm">
                    Boîtiers professionnels pour une qualité d’image inégalée.
                  </div>
                </div>
              </div>
              <div
                class="glass-luxe-card p-6 flex items-center gap-4 shadow-lg border border-luxury-300/30 hover:bg-luxury-900/30 transition"
              >
                <svg
                  class="w-8 h-8 text-luxury-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="10" stroke-width="2" />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <div>
                  <div class="text-lg font-bold text-luxury-100 text-white">Objectifs RF & FE</div>
                  <div style="color: #f5ecd7" class="text-sm">
                    Optiques haut de gamme pour une netteté et un bokeh exceptionnels.
                  </div>
                </div>
              </div>
              <div
                class="glass-luxe-card p-6 flex items-center gap-4 shadow-lg border border-luxury-300/30 hover:bg-luxury-900/30 transition"
              >
                <svg
                  class="w-8 h-8 text-luxury-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
                <div>
                  <div class="text-lg font-bold text-luxury-100 text-white">Éclairage Profoto</div>
                  <div style="color: #f5ecd7" class="text-sm">
                    Lumières professionnelles pour un rendu studio parfait en toute situation.
                  </div>
                </div>
              </div>
              <div
                class="glass-luxe-card p-6 flex items-center gap-4 shadow-lg border border-luxury-300/30 hover:bg-luxury-900/30 transition"
              >
                <svg
                  class="w-8 h-8 text-luxury-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <rect x="4" y="4" width="16" height="16" rx="2" stroke-width="2" />
                </svg>
                <div>
                  <div class="text-lg font-bold text-luxury-100 text-white">Studio équipé</div>
                  <div style="color: #f5ecd7" class="text-sm">
                    Fonds, accessoires et environnement contrôlé pour des créations uniques.
                  </div>
                </div>
              </div>
            </div>
            <div class="mt-8 text-center">
              <span
                class="inline-block bg-white/80 text-dark-900 font-semibold px-6 py-3 rounded-full shadow-lg text-lg tracking-wide"
                >Parce que chaque détail compte, nous investissons dans l’excellence pour sublimer
                vos souvenirs.</span
              >
            </div>
          </div>
        </div>
        <!-- Halo doré décoratif -->
        <div
          class="absolute -top-32 -left-32 w-96 h-96 bg-gradient-radial from-luxury-300/40 to-transparent rounded-full blur-3xl opacity-70 pointer-events-none"
        ></div>
        <div
          class="absolute -bottom-32 -right-32 w-96 h-96 bg-gradient-radial from-luxury-500/30 to-transparent rounded-full blur-3xl opacity-60 pointer-events-none"
        ></div>
      </div>
    </section>

    <!-- Section Nos Garanties & Engagements -->
    <section class="relative section-padding overflow-hidden">
      <div
        class="absolute inset-0 bg-cover bg-center"
        style="background-image: url('/src/assets/images2/pexels-hoover-tung-153639-1980870.jpg')"
      ></div>
      <div
        class="absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 to-transparent"
      ></div>
      <div class="relative z-10 container-luxury">
        <div class="text-center mb-16">
          <div class="flex items-center justify-center gap-4 mb-4">
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
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h2
              class="text-4xl md:text-5xl font-serif font-bold text-white tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]"
            >
              Nos Garanties & Engagements
            </h2>
          </div>
          <p class="text-xl text-[#f5ecd7] max-w-3xl mx-auto font-serif">
            Votre confiance est notre priorité. Nous nous engageons à vous offrir une expérience
            premium et des résultats exceptionnels.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Garantie Satisfaction -->
          <div
            class="glass-luxe-card p-8 text-center rounded-2xl shadow-2xl border border-luxury-300/40 hover:border-luxury-300 transition-all duration-300 group"
          >
            <div class="flex justify-center mb-6">
              <div
                class="w-16 h-16 bg-gradient-to-r from-luxury-500 to-luxury-300 rounded-full flex items-center justify-center shadow-lg"
              >
                <svg
                  class="w-8 h-8 text-white"
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
              </div>
            </div>
            <h3
              class="text-2xl font-serif font-bold text-white mb-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]"
            >
              Satisfaction Garantie
            </h3>
            <p class="text-[#f5ecd7] text-lg font-light">
              Nous ne livrons que des images parfaites. Si vous n'êtes pas entièrement satisfait,
              nous retravaillons jusqu'à votre entière satisfaction.
            </p>
          </div>

          <!-- Livraison Rapide -->
          <div
            class="glass-luxe-card p-8 text-center rounded-2xl shadow-2xl border border-luxury-300/40 hover:border-luxury-300 transition-all duration-300 group"
          >
            <div class="flex justify-center mb-6">
              <div
                class="w-16 h-16 bg-gradient-to-r from-luxury-500 to-luxury-300 rounded-full flex items-center justify-center shadow-lg"
              >
                <svg
                  class="w-8 h-8 text-white"
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
              </div>
            </div>
            <h3
              class="text-2xl font-serif font-bold text-white mb-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]"
            >
              Livraison Rapide
            </h3>
            <p class="text-[#f5ecd7] text-lg font-light">
              Respect des délais annoncés. Portraits en 1-2 semaines, mariages en 3-4 semaines avec
              retouche professionnelle soignée.
            </p>
          </div>

          <!-- Retouche Professionnelle -->
          <div
            class="glass-luxe-card p-8 text-center rounded-2xl shadow-2xl border border-luxury-300/40 hover:border-luxury-300 transition-all duration-300 group"
          >
            <div class="flex justify-center mb-6">
              <div
                class="w-16 h-16 bg-gradient-to-r from-luxury-500 to-luxury-300 rounded-full flex items-center justify-center shadow-lg"
              >
                <svg
                  class="w-8 h-8 text-white"
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
              </div>
            </div>
            <h3
              class="text-2xl font-serif font-bold text-white mb-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]"
            >
              Retouche Professionnelle
            </h3>
            <p class="text-[#f5ecd7] text-lg font-light">
              Chaque image bénéficie d'une retouche artistique soignée pour sublimer votre beauté
              naturelle et créer des œuvres d'art uniques.
            </p>
          </div>

          <!-- Accompagnement Personnalisé -->
          <div
            class="glass-luxe-card p-8 text-center rounded-2xl shadow-2xl border border-luxury-300/40 hover:border-luxury-300 transition-all duration-300 group"
          >
            <div class="flex justify-center mb-6">
              <div
                class="w-16 h-16 bg-gradient-to-r from-luxury-500 to-luxury-300 rounded-full flex items-center justify-center shadow-lg"
              >
                <svg
                  class="w-8 h-8 text-white"
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
              </div>
            </div>
            <h3
              class="text-2xl font-serif font-bold text-white mb-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]"
            >
              Accompagnement Personnalisé
            </h3>
            <p class="text-[#f5ecd7] text-lg font-light">
              Du premier contact à la livraison, nous vous accompagnons avec bienveillance et
              professionnalisme pour une expérience sur-mesure.
            </p>
          </div>

          <!-- Confidentialité Assurée -->
          <div
            class="glass-luxe-card p-8 text-center rounded-2xl shadow-2xl border border-luxury-300/40 hover:border-luxury-300 transition-all duration-300 group"
          >
            <div class="flex justify-center mb-6">
              <div
                class="w-16 h-16 bg-gradient-to-r from-luxury-500 to-luxury-300 rounded-full flex items-center justify-center shadow-lg"
              >
                <svg
                  class="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
            </div>
            <h3
              class="text-2xl font-serif font-bold text-white mb-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]"
            >
              Confidentialité Assurée
            </h3>
            <p class="text-[#f5ecd7] text-lg font-light">
              Vos photos et informations personnelles sont protégées. Nous respectons votre vie
              privée et ne partageons rien sans votre accord.
            </p>
          </div>

          <!-- Qualité Premium -->
          <div
            class="glass-luxe-card p-8 text-center rounded-2xl shadow-2xl border border-luxury-300/40 hover:border-luxury-300 transition-all duration-300 group"
          >
            <div class="flex justify-center mb-6">
              <div
                class="w-16 h-16 bg-gradient-to-r from-luxury-500 to-luxury-300 rounded-full flex items-center justify-center shadow-lg"
              >
                <svg
                  class="w-8 h-8 text-white"
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
            </div>
            <h3
              class="text-2xl font-serif font-bold text-white mb-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]"
            >
              Qualité Premium
            </h3>
            <p class="text-[#f5ecd7] text-lg font-light">
              Matériel professionnel, techniques avancées et expertise artistique pour des images
              d'exception qui dépassent vos attentes.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section immersive luxe -->
    <section class="relative section-padding slide-up overflow-hidden faq-section-white-text">
      <!-- Fond test pexels-atccommphoto-952260.jpg + overlay luxe -->
      <div
        class="absolute inset-0 bg-cover bg-center"
        style="background-image: url('/src/assets/images/pexels-atccommphoto-952260.jpg')"
      ></div>
      <div
        class="absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 to-transparent"
      ></div>
      <div class="container-luxury max-w-5xl mx-auto relative z-10">
        <div class="text-center mb-16">
          <div class="flex items-center justify-center gap-4 mb-2">
            <svg
              class="w-10 h-10 text-luxury-300 animate-float"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="10" stroke-width="2" />
              <text
                x="12"
                y="17"
                text-anchor="middle"
                font-size="14"
                fill="#bfa181"
                font-family="serif"
              >
                ?
              </text>
            </svg>
            <h2 class="text-4xl md:text-5xl font-serif font-bold text-emphasis tracking-wide">
              Questions Fréquentes
            </h2>
          </div>
          <p class="text-xl text-high-contrast-light max-w-2xl mx-auto font-serif">
            Tout ce que vous devez savoir sur nos services
          </p>
        </div>
        <div class="space-y-6">
          <div
            v-for="faq in faqs"
            :key="faq.id"
            class="glass-luxe-card rounded-2xl shadow-2xl border border-luxury-300/40 overflow-hidden transition hover:shadow-gold hover:border-luxury-300 animate-fade-in"
          >
            <button
              class="w-full flex items-center justify-between px-8 py-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-luxury-500 transition-colors duration-300 group"
              :aria-expanded="openedFaq === faq.id"
              :aria-controls="'faq-panel-' + faq.id"
              @click="toggleFaq(faq.id)"
              @keydown.enter.prevent="toggleFaq(faq.id)"
              @keydown.space.prevent="toggleFaq(faq.id)"
            >
              <span
                class="text-2xl font-serif font-semibold text-white group-hover:text-luxury-300 transition drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]"
                >{{ faq.question }}</span
              >
              <svg
                :class="openedFaq === faq.id ? 'rotate-45 text-luxury-300' : 'text-white'"
                class="w-7 h-7 transition-transform duration-300 drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </button>
            <transition name="fade">
              <div
                v-if="openedFaq === faq.id"
                :id="'faq-panel-' + faq.id"
                class="px-8 pb-8 pt-2 text-[#f5ecd7] text-lg font-serif animate-fade-in"
              >
                <p>{{ faq.answer }}</p>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const processSteps = ref([
  {
    id: 1,
    title: 'Consultation',
    description:
      'Une rencontre personnalisée pour comprendre votre vision, vos attentes et créer un plan sur mesure qui reflète parfaitement votre style et vos objectifs.',
  },
  {
    id: 2,
    title: 'Planification',
    description:
      'Orchestration méticuleuse de chaque détail : sélection du lieu parfait, timing optimal, style photographique et équipement de pointe pour des résultats exceptionnels.',
  },
  {
    id: 3,
    title: 'Séance Photo',
    description:
      "Le moment de la magie : capture professionnelle avec créativité artistique, où chaque cliché devient une œuvre d'art qui raconte votre histoire unique.",
  },
  {
    id: 4,
    title: 'Livraison',
    description:
      "Transformation de vos images en véritables œuvres d'art grâce à notre retouche professionnelle, suivie d'une livraison soignée dans les délais promis.",
  },
])

const faqs = ref([
  {
    id: 1,
    question: 'Combien de temps faut-il pour recevoir les photos ?',
    answer:
      'Nos délais de livraison sont optimisés pour garantir la qualité tout en respectant vos attentes. Portraits : 1-2 semaines avec retouche soignée. Mariages : 3-4 semaines avec traitement artistique complet. Nous vous tenons informés à chaque étape du processus.',
  },
  {
    id: 2,
    question: 'Proposez-vous des forfaits personnalisés ?',
    answer:
      "Absolument ! Chaque projet est unique, c'est pourquoi nous créons des forfaits sur mesure adaptés à vos besoins spécifiques. Notre équipe vous accompagne dans la conception d'un package parfaitement adapté à votre vision et votre budget.",
  },
  {
    id: 3,
    question: 'Travaillez-vous en extérieur et en studio ?',
    answer:
      "Nous maîtrisons parfaitement les deux environnements. Notre studio professionnel offre un contrôle total de l'éclairage et des conditions, tandis que nos séances extérieures capturent la beauté naturelle et l'authenticité des moments spontanés.",
  },
  {
    id: 4,
    question: 'Que se passe-t-il en cas de mauvais temps ?',
    answer:
      'Nous proposons une politique flexible : report gratuit en cas de conditions météorologiques défavorables, ou basculement vers notre studio équipé professionnellement. Votre satisfaction et la qualité de vos photos restent notre priorité absolue.',
  },
  {
    id: 5,
    question: "Les droits d'utilisation sont-ils inclus ?",
    answer:
      "Oui, tous nos forfaits incluent les droits d'utilisation personnels. Pour un usage commercial ou éditorial, nous proposons des licences professionnelles adaptées à vos besoins spécifiques, garantissant une utilisation optimale de vos images.",
  },
])

const openedFaq = ref<number | null>(null)
function toggleFaq(id: number) {
  openedFaq.value = openedFaq.value === id ? null : id
}

const tarifs = [
  { service: 'Coutumier', categorie: 'Mariage', prix: '150 $' },
  { service: 'Civils', categorie: 'Mariage', prix: '140 $' },
  { service: 'Religieux et soirées', categorie: 'Mariage', prix: '300 $' },
  { service: 'Dot', categorie: 'Mariage', prix: '80 $' },
  { service: 'Pré dot Présentation', categorie: 'Mariage', prix: '', masque: true },
  { service: 'Conférence', categorie: 'Conférence', prix: '100 $' },
  { service: 'Excursion', categorie: 'Tourisme', prix: '120 $' },
  { service: 'Visite', categorie: 'Visite', prix: '120 $' },
  { service: 'Défense académique', categorie: 'Etude', prix: '', masque: true },
  { service: 'Collation académique', categorie: 'Etude', prix: '', masque: true },
  { service: 'Baptêmes + réception', categorie: 'Religion', prix: '100 $' },
  { service: 'Anniversaire', categorie: 'Fête', prix: '100 $' },
  { service: 'Réception de la collation', categorie: 'Fête', prix: '', masque: true },
  { service: 'Réunion', categorie: 'Réunion', prix: '', masque: true },
  { service: 'Clip', categorie: 'Clip', prix: '', masque: true },
  { service: 'Deuil', categorie: 'Deuil', prix: '', masque: true },
  { service: 'Spot Publicitaire', categorie: 'Publicité', prix: '', masque: true },
]

function contacterPourTarif(tarif: { service: string; categorie: string }) {
  // Redirige vers WhatsApp avec un message pré-rempli
  const message = encodeURIComponent(
    `Bonjour, je souhaite connaître le tarif pour le service : ${tarif.service} (${tarif.categorie})`,
  )
  window.open(`https://wa.me/243833055164?text=${message}`, '_blank')
}
</script>

<style scoped>
.btn-luxury:focus {
  outline: 2px solid #bfa181;
  outline-offset: 2px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
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
.faq-section-white-text h2,
.faq-section-white-text p,
.faq-section-white-text span,
.faq-section-white-text button,
.faq-section-white-text .text-emphasis,
.faq-section-white-text .text-high-contrast-light,
.faq-section-white-text .font-serif,
.faq-section-white-text .glass-luxe-card {
  color: #fff !important;
}
.faq-section-white-text .glass-luxe-card {
  background: rgba(34, 34, 34, 0.45);
}
</style>
