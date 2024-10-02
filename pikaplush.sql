-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le : dim. 18 juin 2023 à 13:31
-- Version du serveur : 10.11.2-MariaDB
-- Version de PHP : 8.2.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `pikaplush`
--

--
-- Déchargement des données de la table `categorie_entity`
--

INSERT INTO `categorie_entity` (`id`, `nom`) VALUES
(1, 'Peluche'),
(2, 'Figurine'),
(3, 'Cartes'),
(4, 'Jeux vidéos');

--
-- Déchargement des données de la table `entreprise_entity`
--

INSERT INTO `entreprise_entity` (`id`, `nom`, `adresse`, `spe`, `siret`, `type`) VALUES
(6, 'Pokémon Center', '17 rue Toshima, 100-1014 Tokyo', 'Peluches et figurines', '59322976796227', 'PME'),
(7, 'Poké Pop', '57 rue du temple, 75004 Paris', 'Jeux vidéos', '45484090407779', 'SA'),
(8, 'Poké boutique', '77 rue croix-rousse, 69004 Lyon', 'Produits dérivés', '46632947284663', 'SARL'),
(9, 'Poké plush', '36 rue sphères, 98101 Seattle', 'Peluches et figurines', '78615002747069', 'SA');

--
-- Déchargement des données de la table `produit_entity`
--

INSERT INTO `produit_entity` (`id`, `nom`, `desc`, `prix`, `dispo`, `taille`, `image`, `entrepriseId`, `categorieId`) VALUES
(10, 'Ectoplasma', 'Cette peluche, quelque peu effrayante, vous accompagnera dans toutes vos aventures. Douce et ornée d\'un sombre violet, elle saura ravir tout le monde. ', 19.99, 1, '20cm', 'http://localhost:3000/produits/pictures/ectoplasma.png', 6, 1),
(11, 'Togekiss', 'Togekiss incarne la grâce et l\'élégance. Incarnez Aurore et participez à vos plus beaux concours pokémon. ', 22.99, 1, '22cm', 'http://localhost:3000/produits/pictures/togekiss.png', 6, 1),
(12, 'Jeux pokémon Diamant', 'L\'aventure se passe cette fois-ci dans la région de Sinnoh, située au nord de Kanto. Affrontez la ligue et devenez le meilleur dresser. Les 3 starters sont tiplouf, ousticram et tortipouss. ', 25.99, 1, '15cm', 'http://localhost:3000/produits/pictures/diamantds.png', 7, 4),
(13, 'Jeux pokémon Soleil', 'Le jeu se déroule dans la région insulaire et paradisiaque d\'Alola, inspirée de l\'île d\'Oahu, dans l\'archipel d\'Hawaï. Cette région est composée de quatre îles, ainsi que d\'une île artificielle, le paradis Æther. Chacune des îles naturelles est sous la surveillance de Pokémon protecteurs, appelés les Toko ; vénérés par les habitants, ce sont eux aussi qui choisissent les doyens. L\'histoire débute par le déménagement du personnage principal de la région de Kanto vers celle d\'Alola. Il y rencontre d\'autres enfants et adultes le poussant à réaliser le « Tour des Îles », une épreuve équivalente à la collecte des Badges dans les précédents jeux de la série.', 39.99, 1, '15cm', 'http://localhost:3000/produits/pictures/soleilds.png', 7, 4),
(14, 'Jeux pokémon version blanche', 'L\'histoire prend place dans la région fictive d\'Unys, inspirée sur la ville de New York aux États-Unis. Elle comporte un total de dix villes reliées entre elles par des routes. Certaines zones ne sont accessibles que quand le joueur apprend une capacité spéciale à son Pokémon.', 25.99, 1, '15cm', 'http://localhost:3000/produits/pictures/blancheds.png', 7, 4),
(15, 'Mimiqui et baudrive', 'Adorable figurine composé de deux pokémon de type spectre. Une terrifante plongée dans le monde des pokémons. ', 49.99, 1, '15cm', 'http://localhost:3000/produits/pictures/mimiqui_baudrive.png', 8, 2),
(16, 'Cartes', 'Jeux de cartes à collectionner pokémon.', 5.99, 1, '7cm', 'http://localhost:3000/produits/pictures/carte.png', 8, 3),
(17, 'Bulbizarre', 'Emmenez votre adorable compagnon vert dans toutes vos aventures.  Adapté pour tous les âges. ', 15.99, 1, '15cm', 'http://localhost:3000/produits/pictures/bulbizarre.png', 9, 1),
(18, 'Tiplouf', 'Fidèle compagnon d\'Aurore dans la série pokémon, vous le trouverez à tous les coups super mignon. Son bleu et sa douceur vous feront chavirer. ', 21.99, 1, '20cm', 'http://localhost:3000/produits/pictures/tiplouf.png', 9, 1),
(19, 'Voltali', 'Il n\'a rien à envier à son rival, Pikachu. Doté d\'une grande puissance mais d\'une douceur inégalée, sa couleur soleil vous mettra de bonne humeur. ', 17.99, 1, '20cm', 'http://localhost:3000/produits/pictures/voltali.png', 9, 1),
(20, 'Jeux de cartes', 'Jeux de cartes à collectionner pokémon.', 5.99, 1, '7cm', 'http://localhost:3000/produits/pictures/carteetincelant.png', 8, 3);

--
-- Déchargement des données de la table `user_entity`
--

INSERT INTO `user_entity` (`id`, `nom`, `prenom`, `email`, `pwd`, `role`, `entrepriseId`) VALUES
(11, 'Diaz', 'Kate', 'kate.diaz@gmail.com', '$2b$10$UDMoO5X2jhx1xEEcOziYgu4zDNNAfYdLhoOHSZo7nei8S5A366y7W', 'vendeur', 6),
(12, 'Brown', 'Jayce', 'jayce.brown@gmail.com', '$2b$10$VGHzg6ghRYEth4wxw75N9uXN8WuzAX9r1ByVw2SfDYc7pJZ1sIbVO', 'vendeur', 7),
(13, 'John', 'Will', 'will.john@gmail.com', '$2b$10$MdtouBOyAKwG8oQBb5Eu/evHF8QrAYGVsii6P99SFaGWMqIKrIcke', 'vendeur', 8),
(14, 'Smith', 'Rosalia', 'rosalia.smith@gmail.com', '$2b$10$ZF3ac3wevEFE4FQGTGeVFePryS/b6s8BRqWKoye6LIIv7CBRRO2lu', 'vendeur', 9),
(15, 'Ricci', 'Lucio', 'lucio.ricci@gmail.com', '$2b$10$72F0tM5mvIUWRjPDhGn8Oub3KHd8kxKNVmEpEoD9QLoqSyESgmlqe', 'client', NULL);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
