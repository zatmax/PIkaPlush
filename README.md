# Pikaplush

## (っ▀¯▀)つ Le nouveau site de vente des fans de pokémon
<img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c325.png" width="300px">

## (ﾉ◕ヮ◕)ﾉ*:・ﾟ Informations importantes :

### Découpage du projet :
- Front : Angular
- Back : API Nest avec utilisation d'ORMs

### A télécharger avant de lancer le projet :
- Si vous êtes sur Windows afin d'avoir un environement Apache HTTP Server et une base de données MariaDB via phpMyAdmin téléchagez XAMPP ici : [telecharger XAMPP](https://www.apachefriends.org/download.html)
- Si vous êtes sur Linux installez MariaDB. Vous pouvez suivre cette doc : [Installer MariaDB sur Linux](https://www.cherryservers.com/blog/how-to-install-and-start-using-mariadb-on-ubuntu-20-04)
- Si vous êtes sur Mac, il faudra installer MariaDB avec les commande suivantes:
  - Installer homebrew pour macos : `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`
  - Installer MariaDB : `brew install mariadb`
  - Lancer MariaDB : `brew services start mariadb`
  
  Il faudra également avoir un environnement de développement complet (apache, phpmyadmin, mysql/mariadb)
- Installez aussi nodejs, typescipt, angular et nestjs

### Mise en place du projet:
- Récupérer le front Angular et l'API Nest en clonnant les repots
- Créez une base de donnée nommée `pikaplush` au format utf8mb4_general_ci avec PHPMYADMIN
- Si vous avez un mot de passe sur votre phpMyAdmin veuillez modifier dans l'API Nest le fichier `app.module.ts` et ajouter ce dernier dans l'emplacement prevu a cet effet
- Ouvrez le front et le back, faites un `npm install` des 2 cotés.
- Si vous etes sur Windows lancez le serveur mySQL et Apache depuis le control Panel de XAMPP (si vous etes sur Linux ou Mac les serveurs tourne normalement en fond)
- Lancez l'API avec un `npm run start` (elle sera lancée sur le port 3000)
- Les entitées de votre base de données ont du se créer
- Importer ensuite le fichier `pikaplush.sql` afin de remplir les tables de données.
- Lancez maintenant le front Angular avec un `ng serve`
- Si vous avez bien suivi toutes les étapes le projet se lancera à l'adresse suivante : [http://localhost:4200/home](http://localhost:4200/home)

N.B. Ce projet a été réalisé en utilisant XAMPP mais peut etre lancé avec n'import quel type de plateforme de serveur web

## ༼ つ ◕_◕ ༽つ Explications :

### Objectif & fonctionnalités
Création d'un site marchant Pokémon

Sur ce site vous pouvez :
- Vous inscrire
- Vous connecter
- Accéder à tous les produits et les filtrer
- Voir le détail d'un produit
- Accéder à toutes les entreprises partenaires et les filtrer
- Voir le détail d'une entreprise partenaire
- Envoyer un message via un formulaire de contact

Si vous connectés (client ou vendeur) vous pouvez :
- Ajouter des produits au panier de la page des produits ou de la page de detail produit
- Accéder à votre panier et en supprimer, ajouter des articles, vous pouvez également vider votre panier.
- Si vous décidez de commander les articles de votre panier vous avez accez a un recapitulatif de votre commande avec le prix total
- Vous pouvez ensuite valider votre panier et payer via la page de payement.
- Vous avez aussi accès à vos informations via la page Mon Compte
- Vous avez aussi la possibilité de créer votre entreprise depuis votre compte

Si vous êtes vendeur, vous pouvez:
- Dans votre page Mon entreprise accessible depuis votre page Mon Compte, vous pouvez voir les informations de votre entreprise, ajouter, supprimer, et modifier vos produits à la vente.

### Utilisateurs et mots de passe

Utilisateurs type vendeur
- kate.diaz@gmail.com
- jayce.brown@gmail.com
- will.john@gmail.com
- rosalia.smith@gmail.com

Mdp pour tous : mdpvendeur

Utilisateur type client (type de base lors de l'inscription)
- lucio.ricci@gmail.com

Mdp : mdpclient

## (づ ￣ ³￣)づ Liens:
- Retrouvez le site en cliquant [ici](https://pikaplush.jsmb.fr/home)
(N'hesitez pas, le site est responsive et accessible sur téléphone)
