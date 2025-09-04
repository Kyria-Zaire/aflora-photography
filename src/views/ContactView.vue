<template>
  <div class="min-h-screen relative contact-immersive-bg">
    <!-- Fond immersif + overlay -->
    <div
      class="absolute inset-0 bg-cover bg-center z-0"
      style="background-image: url('/src/assets/images2/pexels-taryn-elliott-4340785.jpg')"
    ></div>
    <div
      class="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-transparent z-0"
    ></div>
    <div class="relative z-10">
      <!-- Hero Section -->
      <section class="relative py-32 bg-transparent text-white">
        <div class="container-luxury text-center">
          <h1 class="text-5xl md:text-6xl font-serif font-bold mb-6">Contact</h1>
          <p class="text-xl text-readable-dark-light max-w-2xl mx-auto">
            Prêt à créer des souvenirs inoubliables ? Contactez-nous pour discuter de votre projet
          </p>
        </div>
      </section>

      <!-- Contact Section -->
      <section class="section-padding bg-transparent">
        <div class="container-luxury">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <!-- Contact Form -->
            <div class="animate-slide-up glass-luxe-card-contact">
              <h2 class="text-3xl font-serif font-bold text-emphasis mb-8">
                Envoyez-nous un Message
              </h2>

              <form
                @submit.prevent="submitForm"
                class="space-y-6"
                aria-label="Formulaire de contact AFLORA"
              >
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label for="firstName" class="block text-sm font-medium text-readable mb-2">
                      Prénom *
                    </label>
                    <input
                      id="firstName"
                      v-model="form.firstName"
                      type="text"
                      required
                      class="form-input"
                      placeholder="Votre prénom"
                    />
                  </div>

                  <div>
                    <label for="lastName" class="block text-sm font-medium text-readable mb-2">
                      Nom *
                    </label>
                    <input
                      id="lastName"
                      v-model="form.lastName"
                      type="text"
                      required
                      class="form-input"
                      placeholder="Votre nom"
                    />
                  </div>
                </div>

                <div>
                  <label for="email" class="block text-sm font-medium text-readable mb-2">
                    Email *
                  </label>
                  <input
                    id="email"
                    v-model="form.email"
                    type="email"
                    required
                    class="form-input"
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label for="phone" class="block text-sm font-medium text-readable mb-2">
                    Téléphone
                  </label>
                  <input
                    id="phone"
                    v-model="form.phone"
                    type="tel"
                    class="form-input"
                    placeholder="+243 XXX XXX XXX"
                  />
                </div>

                <div>
                  <label for="service" class="block text-sm font-medium text-readable mb-2">
                    Service Intéressé *
                  </label>
                  <select id="service" v-model="form.service" required class="form-input">
                    <option value="">Sélectionnez un service</option>
                    <option value="wedding">Photographie de Mariage</option>
                    <option value="portrait">Portraits Professionnels</option>
                    <option value="corporate">Événements Corporatifs</option>
                    <option value="fashion">Photographie de Mode</option>
                    <option value="studio">Séances en Studio</option>
                    <option value="events">Événements Privés</option>
                    <option value="other">Autre</option>
                  </select>
                </div>

                <div>
                  <label for="date" class="block text-sm font-medium text-readable mb-2">
                    Date Souhaitée
                  </label>
                  <input id="date" v-model="form.date" type="date" class="form-input" />
                </div>

                <div>
                  <label for="message" class="block text-sm font-medium text-readable mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    v-model="form.message"
                    rows="6"
                    required
                    class="form-textarea"
                    placeholder="Décrivez votre projet, vos attentes et toute information pertinente..."
                  ></textarea>
                </div>

                <div class="flex items-center">
                  <input
                    id="newsletter"
                    v-model="form.newsletter"
                    type="checkbox"
                    class="w-4 h-4 text-luxury-500 border-gray-300 rounded focus:ring-luxury-500"
                  />
                  <label for="newsletter" class="ml-2 text-sm text-readable-light">
                    Je souhaite recevoir la newsletter AFLORA
                  </label>
                </div>

                <button
                  type="submit"
                  :disabled="isSubmitting"
                  class="btn-luxury w-full"
                  aria-label="Envoyer le message de contact"
                >
                  <span v-if="isSubmitting">Envoi en cours...</span>
                  <span v-else>Envoyer le Message</span>
                </button>
              </form>
              <!-- Bouton WhatsApp premium -->
              <a
                href="https://wa.me/243833055164"
                target="_blank"
                rel="noopener"
                class="btn-whatsapp-premium mt-6 w-full flex items-center justify-center gap-2"
                aria-label="Discuter sur WhatsApp"
              >
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M20.52 3.48A12 12 0 003.48 20.52l-1.32 4.84a1 1 0 001.22 1.22l4.84-1.32A12 12 0 0020.52 3.48zm-8.52 17a10 10 0 1110-10 10 10 0 01-10 10zm5.2-7.6l-2.2-.6a1 1 0 00-1.1.3l-.7.7a7.72 7.72 0 01-3.6-3.6l.7-.7a1 1 0 00.3-1.1l-.6-2.2a1 1 0 00-1-.7H7a1 1 0 00-1 1A9 9 0 0017 17a1 1 0 001-1v-1.1a1 1 0 00-.7-1z"
                  />
                </svg>
                Discuter sur WhatsApp
              </a>
              <!-- Message de réassurance -->
              <div class="mt-6 text-center text-white/90 text-base font-serif italic">
                Nous répondons sous 24h. Votre projet mérite toute notre attention.
              </div>
            </div>

            <!-- Contact Info -->
            <div class="animate-slide-up glass-luxe-card-contact">
              <h2 class="text-3xl font-serif font-bold text-emphasis mb-8">
                Informations de Contact
              </h2>

              <div class="space-y-8">
                <!-- Address -->
                <div class="flex items-start space-x-4">
                  <div
                    class="w-12 h-12 bg-luxury-100 rounded-full flex items-center justify-center flex-shrink-0"
                  >
                    <svg
                      class="w-6 h-6 text-luxury-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-lg font-semibold text-dark-900 mb-2">Adresse</h3>
                    <p class="text-readable-light">
                      Kinshasa, République Démocratique du Congo<br />
                      Studio disponible sur rendez-vous
                    </p>
                  </div>
                </div>

                <!-- Phone -->
                <div class="flex items-start space-x-4" role="region" aria-label="Téléphone">
                  <div
                    class="w-12 h-12 bg-luxury-100 rounded-full flex items-center justify-center flex-shrink-0"
                  >
                    <svg
                      class="w-6 h-6 text-luxury-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-lg font-semibold text-dark-900 mb-2">Téléphone</h3>
                    <p class="text-readable-light">
                      <a
                        href="tel:+243833055164"
                        class="hover:text-luxury-600 transition-colors duration-300"
                        aria-describedby="desc-tel"
                      >
                        +243 833 055 164
                      </a>
                      <span id="desc-tel" class="sr-only">Appeler Blair Diam's</span>
                    </p>
                    <p class="text-sm text-readable-light mt-1">Lun-Ven: 9h-18h</p>
                  </div>
                </div>

                <!-- Email -->
                <div class="flex items-start space-x-4" role="region" aria-label="Email">
                  <div
                    class="w-12 h-12 bg-luxury-100 rounded-full flex items-center justify-center flex-shrink-0"
                  >
                    <svg
                      class="w-6 h-6 text-luxury-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-lg font-semibold text-dark-900 mb-2">Email</h3>
                    <p class="text-readable-light">
                      <a
                        href="mailto:contact@aflora.photo"
                        class="hover:text-luxury-600 transition-colors duration-300"
                        aria-describedby="desc-mail"
                      >
                        contact@aflora.photo
                      </a>
                      <span id="desc-mail" class="sr-only">Envoyer un email à AFLORA</span>
                    </p>
                    <p class="text-sm text-readable-light mt-1">Réponse sous 24h</p>
                  </div>
                </div>

                <!-- Social Media -->
                <div class="flex items-start space-x-4">
                  <div
                    class="w-12 h-12 bg-luxury-100 rounded-full flex items-center justify-center flex-shrink-0"
                  >
                    <svg
                      class="w-6 h-6 text-luxury-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-lg font-semibold text-dark-900 mb-2">Réseaux Sociaux</h3>
                    <div class="flex space-x-4">
                      <a
                        href="https://facebook.com/Blair.Diams"
                        target="_blank"
                        rel="noopener"
                        class="text-readable-light hover:text-luxury-600 transition-colors duration-300"
                        aria-label="Facebook Blair Diam's"
                      >
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path
                            d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.326 24h11.495v-9.294H9.691v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0z"
                          />
                        </svg>
                      </a>
                      <a
                        href="https://instagram.com/blair.diansiwa"
                        target="_blank"
                        rel="noopener"
                        class="text-readable-light hover:text-luxury-600 transition-colors duration-300"
                        aria-label="Instagram Blair Diansiwa"
                      >
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path
                            d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                          />
                        </svg>
                      </a>
                      <a
                        href="https://wa.me/243833055164"
                        target="_blank"
                        rel="noopener"
                        class="text-readable-light hover:text-luxury-600 transition-colors duration-300"
                        aria-label="WhatsApp Blair Diam's"
                      >
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path
                            d="M20.52 3.48A12 12 0 003.48 20.52l-1.32 4.84a1 1 0 001.22 1.22l4.84-1.32A12 12 0 0020.52 3.48zm-8.52 17a10 10 0 1110-10 10 10 0 01-10 10zm5.2-7.6l-2.2-.6a1 1 0 00-1.1.3l-.7.7a7.72 7.72 0 01-3.6-3.6l.7-.7a1 1 0 00.3-1.1l-.6-2.2a1 1 0 00-1-.7H7a1 1 0 00-1 1A9 9 0 0017 17a1 1 0 001-1v-1.1a1 1 0 00-.7-1z"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Map Placeholder -->
              <div class="mt-12">
                <h3 class="text-lg font-semibold text-white mb-4">Notre Localisation à Kinshasa</h3>
                <div class="rounded-lg overflow-hidden shadow-2xl border-2 border-luxury-300/40">
                  <iframe
                    title="Carte de Kinshasa"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.01907396413!2d15.2662936!3d-4.325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a317d2e2e2e2b%3A0x7e7e7e7e7e7e7e7e!2sKinshasa!5e0!3m2!1sfr!2scd!4v1680000000000!5m2!1sfr!2scd"
                    width="100%"
                    height="350"
                    style="border: 0; min-width: 250px"
                    allowfullscreen
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>

            <!-- Devis Form -->
            <div class="mt-16 animate-slide-up glass-luxe-card-contact">
              <h2 class="text-3xl font-serif font-bold text-emphasis mb-8">
                Demander un Devis Personnalisé
              </h2>
              <form
                @submit.prevent="submitQuote"
                class="space-y-6"
                aria-label="Formulaire de devis AFLORA"
              >
                <div>
                  <label for="quote-service" class="block text-sm font-medium text-readable mb-2"
                    >Type de prestation *</label
                  >
                  <select
                    id="quote-service"
                    v-model="quoteForm.service"
                    required
                    class="form-input"
                  >
                    <option value="">Sélectionnez un service</option>
                    <option value="mariage">Photographie de Mariage</option>
                    <option value="portrait">Portraits Professionnels</option>
                    <option value="corporate">Événement d'Entreprise</option>
                    <option value="mode">Photographie de Mode</option>
                    <option value="studio">Séance en Studio</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label for="quote-date" class="block text-sm font-medium text-readable mb-2"
                      >Date souhaitée</label
                    >
                    <input
                      id="quote-date"
                      v-model="quoteForm.date"
                      type="date"
                      class="form-input"
                    />
                  </div>
                  <div>
                    <label for="quote-location" class="block text-sm font-medium text-readable mb-2"
                      >Lieu</label
                    >
                    <input
                      id="quote-location"
                      v-model="quoteForm.location"
                      type="text"
                      class="form-input"
                      placeholder="Ville, lieu, etc."
                    />
                  </div>
                </div>
                <div>
                  <label for="quote-budget" class="block text-sm font-medium text-readable mb-2"
                    >Budget estimé</label
                  >
                  <input
                    id="quote-budget"
                    v-model="quoteForm.budget"
                    type="text"
                    class="form-input"
                    placeholder="Ex : 500€ - 2000€"
                  />
                </div>
                <div>
                  <label for="quote-details" class="block text-sm font-medium text-readable mb-2"
                    >Détail du projet *</label
                  >
                  <textarea
                    id="quote-details"
                    v-model="quoteForm.details"
                    rows="5"
                    required
                    class="form-textarea"
                    placeholder="Décrivez votre projet, vos attentes, le nombre de personnes, etc."
                  ></textarea>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label for="quote-name" class="block text-sm font-medium text-readable mb-2"
                      >Nom *</label
                    >
                    <input
                      id="quote-name"
                      v-model="quoteForm.name"
                      type="text"
                      required
                      class="form-input"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label for="quote-email" class="block text-sm font-medium text-readable mb-2"
                      >Email *</label
                    >
                    <input
                      id="quote-email"
                      v-model="quoteForm.email"
                      type="email"
                      required
                      class="form-input"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label for="quote-phone" class="block text-sm font-medium text-readable mb-2"
                    >Téléphone</label
                  >
                  <input
                    id="quote-phone"
                    v-model="quoteForm.phone"
                    type="tel"
                    class="form-input"
                    placeholder="+243 XXX XXX XXX"
                  />
                </div>
                <button
                  type="submit"
                  class="btn-luxury w-full"
                  :disabled="isQuoteSubmitting"
                  aria-label="Envoyer la demande de devis"
                >
                  <span v-if="isQuoteSubmitting">Envoi en cours...</span>
                  <span v-else>Envoyer la Demande de Devis</span>
                </button>
              </form>
              <!-- Message de réassurance -->
              <div class="mt-6 text-center text-white/90 text-base font-serif italic">
                Nous répondons sous 24h. Votre projet mérite toute notre attention.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isSubmitting = ref(false)

const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  service: '',
  date: '',
  message: '',
  newsletter: false,
})

const quoteForm = ref({
  service: '',
  date: '',
  location: '',
  budget: '',
  details: '',
  name: '',
  email: '',
  phone: '',
})
const isQuoteSubmitting = ref(false)

const submitForm = async () => {
  isSubmitting.value = true

  // Simuler l'envoi du formulaire
  await new Promise((resolve) => setTimeout(resolve, 2000))

  // TODO: Implémenter l'envoi réel du formulaire
  console.log('Formulaire soumis:', form.value)

  // Réinitialiser le formulaire
  form.value = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    message: '',
    newsletter: false,
  }

  isSubmitting.value = false

  // TODO: Afficher un message de succès
  alert('Message envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.')
}

function submitQuote() {
  isQuoteSubmitting.value = true
  // Ici tu peux envoyer les données à une API ou par email
  setTimeout(() => {
    isQuoteSubmitting.value = false
    alert('Votre demande de devis a bien été envoyée !')
    quoteForm.value = {
      service: '',
      date: '',
      location: '',
      budget: '',
      details: '',
      name: '',
      email: '',
      phone: '',
    }
  }, 1500)
}
</script>

<style scoped>
.form-input:focus,
.form-textarea:focus,
.btn-luxury:focus {
  outline: 2px solid #bfa181;
  outline-offset: 2px;
}
.contact-immersive-bg {
  min-height: 100vh;
  position: relative;
  overflow: hidden;
}
.glass-luxe-card-contact {
  background: rgba(30, 20, 10, 0.55);
  backdrop-filter: blur(14px);
  border-radius: 1.5rem;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.18);
  border: 1.5px solid rgba(191, 161, 129, 0.18);
  padding: 2.5rem 2rem;
}
.btn-whatsapp-premium {
  background: linear-gradient(90deg, #25d366 0%, #bfa181 100%);
  color: #fff;
  font-weight: 600;
  border-radius: 9999px;
  padding: 0.75rem 1.5rem;
  font-size: 1.1rem;
  box-shadow: 0 4px 24px 0 #25d36633;
  transition:
    transform 0.2s,
    box-shadow 0.2s;
}
.btn-whatsapp-premium:hover {
  transform: scale(1.04);
  box-shadow: 0 8px 32px 0 #25d36655;
  color: #fff;
}
.contact-immersive-bg,
.contact-immersive-bg h1,
.contact-immersive-bg h2,
.contact-immersive-bg h3,
.contact-immersive-bg label,
.contact-immersive-bg p,
.contact-immersive-bg span,
.contact-immersive-bg a,
.contact-immersive-bg .text-readable,
.contact-immersive-bg .text-readable-light,
.contact-immersive-bg .text-readable-dark-light,
.contact-immersive-bg .form-input,
.contact-immersive-bg .form-textarea,
.contact-immersive-bg .text-emphasis {
  color: #fff !important;
}
.contact-immersive-bg input,
.contact-immersive-bg textarea,
.contact-immersive-bg select {
  background: rgba(30, 20, 10, 0.25);
  color: #fff;
  border-color: #bfa181;
}
.contact-immersive-bg input::placeholder,
.contact-immersive-bg textarea::placeholder {
  color: #fff9;
}
</style>
