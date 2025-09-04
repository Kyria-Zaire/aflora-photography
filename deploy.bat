@echo off
echo ========================================
echo    DEPLOIEMENT AFLORA - PHOTOGRAPHE
echo ========================================
echo.

echo [1/4] Verification de la configuration...
if not exist "dist" (
    echo ERREUR: Dossier dist manquant. Lancement du build...
    npm run build
    if errorlevel 1 (
        echo ERREUR: Build echoue. Verifiez la configuration.
        pause
        exit /b 1
    )
)

echo [2/4] Installation de Vercel CLI...
npm install -g vercel
if errorlevel 1 (
    echo ERREUR: Impossible d'installer Vercel CLI.
    pause
    exit /b 1
)

echo [3/4] Connexion a Vercel...
vercel login
if errorlevel 1 (
    echo ERREUR: Connexion echouee.
    pause
    exit /b 1
)

echo [4/4] Deploiement en production...
vercel --prod

echo.
echo ========================================
echo    DEPLOIEMENT TERMINE !
echo ========================================
echo.
echo Votre site est maintenant en ligne !
echo Consultez l'URL fournie par Vercel.
echo.
pause
