/* ===================================
   AFLORA - Portfolio Gallery
   JavaScript spécifique pour la galerie
   =================================== */

class PortfolioGallery {
    constructor() {
        this.currentFilter = 'all';
        this.items = [];
        this.filterButtons = [];
        this.init();
    }

    init() {
        this.loadItems();
        this.setupFilterButtons();
        this.setupLightbox();
        this.setupLazyLoading();
    }

    loadItems() {
        // Récupérer tous les éléments du portfolio
        this.items = Array.from(document.querySelectorAll('.portfolio-item'));
    }

    setupFilterButtons() {
        this.filterButtons = Array.from(document.querySelectorAll('.filter-btn'));
        
        this.filterButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const filter = button.getAttribute('data-filter');
                this.filterItems(filter);
                this.updateActiveButton(button);
            });
        });
    }

    filterItems(filter) {
        this.currentFilter = filter;
        
        this.items.forEach(item => {
            const category = item.getAttribute('data-category');
            const shouldShow = filter === 'all' || category === filter;
            
            if (shouldShow) {
                this.showItem(item);
            } else {
                this.hideItem(item);
            }
        });

        // Réorganiser la grille après filtrage
        this.reflowGrid();
    }

    showItem(item) {
        item.style.display = 'block';
        item.classList.add('fade-in');
        
        // Animation d'apparition
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, 100);
    }

    hideItem(item) {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            item.style.display = 'none';
            item.classList.remove('fade-in');
        }, 300);
    }

    updateActiveButton(activeButton) {
        this.filterButtons.forEach(button => {
            button.classList.remove('active');
        });
        activeButton.classList.add('active');
    }

    reflowGrid() {
        // Utiliser Masonry ou CSS Grid pour réorganiser
        const grid = document.getElementById('portfolio-grid');
        if (grid) {
            // Forcer un reflow
            grid.style.display = 'none';
            grid.offsetHeight; // Force reflow
            grid.style.display = 'grid';
        }
    }

    setupLightbox() {
        // Créer un lightbox simple pour les images
        this.items.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                this.openLightbox(item);
            });
        });
    }

    openLightbox(item) {
        const image = item.querySelector('img');
        if (!image) return;

        // Créer le lightbox
        const lightbox = document.createElement('div');
        lightbox.className = 'fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center';
        lightbox.innerHTML = `
            <div class="relative max-w-4xl max-h-full p-4">
                <button class="absolute top-4 right-4 text-white text-2xl hover:text-yellow-400 transition-colors" onclick="this.parentElement.parentElement.remove()">
                    ✕
                </button>
                <img src="${image.src}" alt="${image.alt}" class="max-w-full max-h-full object-contain">
                <div class="text-white text-center mt-4">
                    <h3 class="text-xl font-semibold">${item.getAttribute('data-title') || 'Image'}</h3>
                    <p class="text-gray-300">${item.getAttribute('data-description') || ''}</p>
                </div>
            </div>
        `;

        // Ajouter au DOM
        document.body.appendChild(lightbox);

        // Fermer avec Escape
        document.addEventListener('keydown', function closeOnEscape(e) {
            if (e.key === 'Escape') {
                lightbox.remove();
                document.removeEventListener('keydown', closeOnEscape);
            }
        });

        // Fermer en cliquant à l'extérieur
        lightbox.addEventListener('click', function(e) {
            if (e.target === lightbox) {
                lightbox.remove();
            }
        });
    }

    setupLazyLoading() {
        const images = document.querySelectorAll('.portfolio-item img[data-src]');
        
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        imageObserver.unobserve(img);
                    }
                });
            });

            images.forEach(img => imageObserver.observe(img));
        }
    }

    // Méthode pour ajouter dynamiquement des éléments
    addItem(itemData) {
        const item = this.createPortfolioItem(itemData);
        document.getElementById('portfolio-grid').appendChild(item);
        this.items.push(item);
    }

    createPortfolioItem(data) {
        const item = document.createElement('div');
        item.className = 'portfolio-item';
        item.setAttribute('data-category', data.category);
        item.setAttribute('data-title', data.title);
        item.setAttribute('data-description', data.description);
        
        item.innerHTML = `
            <div class="group relative overflow-hidden rounded-lg">
                <div class="aspect-[4/5] bg-gradient-to-br from-yellow-400 to-yellow-600 p-1">
                    <div class="w-full h-full bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-gray-700 transition-all duration-300">
                        <img src="${data.image}" alt="${data.title}" class="w-full h-full object-cover rounded-lg">
                    </div>
                </div>
                <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <div class="text-center">
                        <h3 class="text-white font-semibold text-lg mb-2">${data.title}</h3>
                        <p class="text-gray-300 text-sm">${data.description}</p>
                    </div>
                </div>
            </div>
        `;

        return item;
    }

    // Méthode pour rechercher dans le portfolio
    search(query) {
        const searchTerm = query.toLowerCase();
        
        this.items.forEach(item => {
            const title = item.getAttribute('data-title')?.toLowerCase() || '';
            const description = item.getAttribute('data-description')?.toLowerCase() || '';
            const category = item.getAttribute('data-category')?.toLowerCase() || '';
            
            const matches = title.includes(searchTerm) || 
                           description.includes(searchTerm) || 
                           category.includes(searchTerm);
            
            if (matches) {
                this.showItem(item);
            } else {
                this.hideItem(item);
            }
        });
    }

    // Méthode pour obtenir les statistiques
    getStats() {
        const stats = {
            total: this.items.length,
            byCategory: {}
        };

        this.items.forEach(item => {
            const category = item.getAttribute('data-category');
            stats.byCategory[category] = (stats.byCategory[category] || 0) + 1;
        });

        return stats;
    }
}

// Initialiser la galerie quand le DOM est prêt
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('portfolio-grid')) {
        window.portfolioGallery = new PortfolioGallery();
    }
});

// Fonctions utilitaires pour la galerie
window.PortfolioUtils = {
    // Ajouter un nouvel élément
    addPortfolioItem: function(data) {
        if (window.portfolioGallery) {
            window.portfolioGallery.addItem(data);
        }
    },

    // Rechercher dans le portfolio
    searchPortfolio: function(query) {
        if (window.portfolioGallery) {
            window.portfolioGallery.search(query);
        }
    },

    // Obtenir les statistiques
    getPortfolioStats: function() {
        if (window.portfolioGallery) {
            return window.portfolioGallery.getStats();
        }
        return null;
    },

    // Filtrer par catégorie
    filterPortfolio: function(category) {
        if (window.portfolioGallery) {
            window.portfolioGallery.filterItems(category);
        }
    }
}; 