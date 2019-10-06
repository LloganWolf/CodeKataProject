-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le :  Dim 06 oct. 2019 à 12:58
-- Version du serveur :  5.7.26
-- Version de PHP :  7.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `katacode`
--

-- --------------------------------------------------------

--
-- Structure de la table `links`
--

DROP TABLE IF EXISTS `links`;
CREATE TABLE IF NOT EXISTS `links` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `from_user_id` int(11) NOT NULL,
  `to_user_id` int(11) NOT NULL,
  `is_active` int(11) NOT NULL,
  `is_suspended` int(11) NOT NULL,
  `is_closed` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='Table des relations entre utilisateurs';

-- --------------------------------------------------------

--
-- Structure de la table `recipes`
--

DROP TABLE IF EXISTS `recipes`;
CREATE TABLE IF NOT EXISTS `recipes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `ingredient` text NOT NULL,
  `description` text NOT NULL,
  `category` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Table des recettes';

-- --------------------------------------------------------

--
-- Structure de la table `shares`
--

DROP TABLE IF EXISTS `shares`;
CREATE TABLE IF NOT EXISTS `shares` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `recipe_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `created_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Tableau des partages';

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `login` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `email` varchar(255) NOT NULL,
  `firstname` varchar(100) NOT NULL,
  `lastname` varchar(100) NOT NULL,
  `description` text,
  `image` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL,
  `connected_at` datetime NOT NULL,
  `active` int(11) NOT NULL,
  `role` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COMMENT='Table des utilisateurs';

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `login`, `password`, `email`, `firstname`, `lastname`, `description`, `image`, `created_at`, `connected_at`, `active`, `role`) VALUES
(4, 'Jlucien', '$2b$05$TKZK3POtEZE9Tz8u3D1go.kxy04kV623KPxJYGj302xMuPHf.d0CS', 'jeremie.lucien@hotmail.fr', 'Jérémie', 'Lucien', 'Ceci est ma biographie. Je m\'appelle Jérémie et j\'aimerais vraiment utiliser votre application. Je viens de modifier ma biographie', 'default.jpg', '2019-10-06 14:28:10', '2019-10-06 14:31:42', 1, 'ROLE_LVL_1');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
