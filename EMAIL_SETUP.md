# Configuration Email - FK EXPRESS

## Configuration des Variables d'Environnement

Pour activer l'envoi d'emails en production, vous devez configurer les variables d'environnement suivantes :

### 1. Créer un fichier `.env.local`

```bash
# Variables d'environnement pour l'envoi d'emails
EMAIL_USER=votre-email@gmail.com
EMAIL_PASSWORD=votre-mot-de-passe-app-gmail
```

### 2. Configuration Gmail

#### Étape 1: Activer l'authentification à 2 facteurs
1. Allez dans votre compte Google
2. Sécurité → Authentification à 2 facteurs
3. Activez l'authentification à 2 facteurs

#### Étape 2: Créer un mot de passe d'application
1. Allez dans Sécurité → Authentification à 2 facteurs
2. Cliquez sur "Mots de passe des applications"
3. Sélectionnez "Autre (nom personnalisé)"
4. Tapez "FK EXPRESS"
5. Copiez le mot de passe généré (16 caractères)

#### Étape 3: Mettre à jour .env.local
```bash
EMAIL_USER=votre-email@gmail.com
EMAIL_PASSWORD=abcd-efgh-ijkl-mnop  # Mot de passe d'application
```

### 3. Autres Services Email

#### Outlook/Hotmail
```bash
EMAIL_USER=votre-email@outlook.com
EMAIL_PASSWORD=votre-mot-de-passe
```

#### Configuration SMTP personnalisée
```bash
# Modifier le fichier route.ts pour utiliser des paramètres SMTP personnalisés
const transporter = nodemailer.createTransport({
  host: 'votre-serveur-smtp.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
})
```

## Test du Système

### Mode Test (Développement)
- Sans variables d'environnement : Le système fonctionne en mode simulation
- Aucun email n'est envoyé réellement
- Les logs montrent le contenu des emails

### Mode Production
- Avec variables d'environnement configurées : Les emails sont envoyés
- Les formulaires contact et devis fonctionnent normalement

## Vérification

### Test API Direct
```bash
curl -X POST http://localhost:3001/api/send-email \
  -H "Content-Type: application/json" \
  -d '{
    "type": "contact",
    "name": "Test",
    "email": "test@example.com",
    "subject": "Test",
    "message": "Message de test"
  }'
```

### Réponse Attendue
```json
{
  "success": true,
  "message": "Email envoyé avec succès"
}
```

## Sécurité

⚠️ **IMPORTANT** : 
- Ne commitez JAMAIS le fichier `.env.local` 
- Utilisez des mots de passe d'application, pas vos mots de passe principaux
- Le fichier `.env.local` est automatiquement ignoré par Git

## Dépannage

### Erreur "Invalid login"
- Vérifiez que l'authentification à 2 facteurs est activée
- Utilisez un mot de passe d'application, pas votre mot de passe principal
- Vérifiez que l'email est correct

### Erreur "Connection timeout"
- Vérifiez votre connexion internet
- Essayez avec un autre service email (Outlook, etc.)

### Mode test ne s'arrête pas
- Vérifiez que les variables EMAIL_USER et EMAIL_PASSWORD sont bien définies
- Redémarrez le serveur après modification de .env.local