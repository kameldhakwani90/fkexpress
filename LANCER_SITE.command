#!/bin/bash
cd "$(dirname "$0")"
echo "🚀 Lancement de FKExpress..."
npm install
echo "✅ Dépendances installées"
echo "🌐 Démarrage du serveur sur http://localhost:3000"
npm run dev