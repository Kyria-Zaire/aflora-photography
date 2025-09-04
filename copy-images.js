import { copyFileSync, mkdirSync, readdirSync, statSync } from 'fs'
import { join } from 'path'

// Fonction pour copier récursivement les fichiers
function copyDir(src, dest) {
  mkdirSync(dest, { recursive: true })
  
  const entries = readdirSync(src, { withFileTypes: true })
  
  for (const entry of entries) {
    const srcPath = join(src, entry.name)
    const destPath = join(dest, entry.name)
    
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath)
    } else {
      copyFileSync(srcPath, destPath)
    }
  }
}

// Copier toutes les images
console.log('🖼️  Copie des images...')

// Copier le dossier images
copyDir('src/assets/images', 'dist/assets/images')
console.log('✅ Images copiées')

// Copier le dossier images2
copyDir('src/assets/images2', 'dist/assets/images2')
console.log('✅ Images2 copiées')

console.log('🎉 Toutes les images ont été copiées !')
