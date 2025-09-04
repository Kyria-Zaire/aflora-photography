import { copyFileSync, mkdirSync, readdirSync, existsSync } from 'fs'
import { join } from 'path'

console.log('🖼️  Début de la copie des images...')

// Fonction pour copier récursivement les fichiers
function copyDir(src, dest) {
  if (!existsSync(src)) {
    console.log(`❌ Dossier source introuvable: ${src}`)
    return
  }
  
  if (!existsSync(dest)) {
    mkdirSync(dest, { recursive: true })
    console.log(`📁 Dossier créé: ${dest}`)
  }
  
  const entries = readdirSync(src, { withFileTypes: true })
  let copiedCount = 0
  
  for (const entry of entries) {
    const srcPath = join(src, entry.name)
    const destPath = join(dest, entry.name)
    
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath)
    } else {
      try {
        copyFileSync(srcPath, destPath)
        copiedCount++
        console.log(`✅ Copié: ${entry.name}`)
      } catch (error) {
        console.log(`❌ Erreur copie ${entry.name}:`, error.message)
      }
    }
  }
  
  return copiedCount
}

// Copier toutes les images
console.log('\n📸 Copie du dossier images...')
const imagesCount = copyDir('src/assets/images', 'dist/assets/images')
console.log(`📊 Images copiées: ${imagesCount || 0}`)

console.log('\n🖼️  Copie du dossier images2...')
const images2Count = copyDir('src/assets/images2', 'dist/assets/images2')
console.log(`📊 Images2 copiées: ${images2Count || 0}`)

// Vérifier le résultat final
console.log('\n🔍 Vérification finale...')
if (existsSync('dist/assets/images')) {
  const finalImages = readdirSync('dist/assets/images', { withFileTypes: true })
    .filter(entry => !entry.isDirectory())
    .filter(entry => /\.(jpg|jpeg|png|gif|webp)$/i.test(entry.name))
  console.log(`📸 Total images dans dist/assets/images: ${finalImages.length}`)
}

if (existsSync('dist/assets/images2')) {
  const finalImages2 = readdirSync('dist/assets/images2', { withFileTypes: true })
    .filter(entry => !entry.isDirectory())
    .filter(entry => /\.(jpg|jpeg|png|gif|webp)$/i.test(entry.name))
  console.log(`🖼️  Total images dans dist/assets/images2: ${finalImages2.length}`)
}

console.log('\n🎉 Processus de copie terminé !')
