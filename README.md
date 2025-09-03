# FK EXPRESS - Site Web Transport & Logistique

Site web professionnel pour FK EXPRESS, spécialiste du transport et de la logistique en Île-de-France et national.

## 🚀 Fonctionnalités

### ✅ Services de Transport
- **Transport National** - Livraisons dans toute la France
- **Express Île-de-France** - Livraison 2h chrono
- **Location Véhicules** - Flotte de 45+ véhicules
- **Transport International** - Europe et Maghreb
- **Stockage Sécurisé** - Entrepôt 5000m²
- **Dépannage Express** - Intervention urgente 24/7

### ✅ Système de Contact
- **Formulaire de contact** avec notifications modernes
- **Popup devis** sur toutes les pages
- **Envoi d'emails automatique** via SMTP OVH
- **Templates HTML professionnels**
- **Notifications élégantes** (plus de popups basiques)

### ✅ Interface Moderne
- **Design responsive** mobile-first
- **Mode sombre/clair** automatique
- **Animations fluides** et professionnelles
- **SEO optimisé** avec données structurées
- **Performance optimisée** avec Next.js 14

## 🛠️ Technologies

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Email**: Nodemailer + SMTP OVH
- **Deployment**: Docker + Nginx ready

## 📦 Installation

### Prérequis
- Node.js 18+
- npm ou yarn

### Installation locale
```bash
# Cloner le repository
git clone https://github.com/votre-username/fkexpress.git
cd fkexpress

# Installer les dépendances
npm install

# Configurer les variables d'environnement
cp .env.example .env.local
# Éditer .env.local avec vos credentials email

# Lancer en développement
npm run dev

# Ou lancer en production
npm run build
npm start
```

## ⚙️ Configuration Email

### Variables d'environnement
Créer un fichier `.env.local` :

```bash
# Configuration SMTP OVH
EMAIL_USER=contact@fkexpress.pro
EMAIL_PASSWORD=votre-mot-de-passe
```

### Configuration SMTP
Le système utilise le serveur SMTP OVH (`ssl0.ovh.net:587`) configuré dans :
- `src/app/api/send-email/route.ts`

## 🐳 Déploiement Docker

### Dockerfile inclus
```bash
# Build de l'image
docker build -t fkexpress .

# Run du conteneur
docker run -p 3000:3000 --env-file .env.local fkexpress
```

### Docker Compose avec Nginx
```yaml
version: '3.8'
services:
  fkexpress:
    build: .
    env_file: .env.local
  
  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf
```

## 📁 Structure du Projet

```
src/
├── app/                    # Pages (App Router)
│   ├── page.tsx           # Page d'accueil
│   ├── contact/           # Page contact
│   ├── services/          # Pages services
│   └── api/
│       └── send-email/    # API endpoint email
├── components/            # Composants réutilisables
│   ├── Header.tsx         # Navigation
│   ├── DevisPopup.tsx     # Popup devis
│   ├── Notification.tsx   # Notifications modernes
│   └── ...
public/
├── element/               # Images et assets
└── ...
```

## 🎨 Composants Clés

### DevisPopup
- Popup universel pour demandes de devis
- Intégré sur toutes les pages
- Formulaire multi-étapes
- Notifications modernes intégrées

### Notification
- Remplacement des `alert()` JavaScript
- Design moderne avec animations
- Auto-fermeture après 5s
- Gestion succès/erreur

### Header
- Navigation responsive
- Menu services
- Toggle dark/light mode
- Logo animé

## 📧 Système Email

### Templates HTML
- **Contact** : Template professionnel avec logo
- **Devis** : Template détaillé avec infos service
- **Styling** : CSS inline pour compatibilité email

### Fonctionnalités
- Envoi vers `contact@fkexpress.pro`
- Gestion des demandes urgentes
- Validation des formulaires
- Retours utilisateur avec notifications

## 🔧 Scripts Disponibles

```bash
# Développement
npm run dev

# Build production
npm run build

# Démarrer production
npm start

# Linter
npm run lint

# Type checking
npm run type-check
```

## 🚀 Déploiement Production

### Optimisations incluses
- **Images optimisées** avec Next.js Image
- **CSS/JS minifié** automatiquement
- **Caching** optimal des assets
- **SEO** avec métadonnées dynamiques

### Variables d'environnement production
```bash
# .env.production
EMAIL_USER=contact@fkexpress.pro
EMAIL_PASSWORD=mot-de-passe-production
NEXT_PUBLIC_SITE_URL=https://fkexpress.pro
```

## 📞 Support

### Informations FK EXPRESS
- **Téléphone** : 01 85 78 43 53
- **Email** : contact@fkexpress.pro
- **Adresse** : 427 Bis route Conflans, 95220 Herblay sur Seine
- **SIRET** : 52188652300047

### Contact Développeur
Pour le support technique du site web, contactez l'équipe de développement.

## 📄 Licence

Tous droits réservés © 2024 FK EXPRESS

---

**Version actuelle** : 2.0.0 - Système email intégré + notifications modernes
**Dernière mise à jour** : Septembre 2024