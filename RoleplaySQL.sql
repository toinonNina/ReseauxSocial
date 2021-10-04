CREATE DATABASE  IF NOT EXISTS `roleplay`;
USE `roleplay`;


DROP TABLE IF EXISTS `dislikes`;
DROP TABLE IF EXISTS `likes`;
DROP TABLE IF EXISTS `friends`;
DROP TABLE IF EXISTS `usersgroup`;
DROP TABLE IF EXISTS `groupes`;
DROP TABLE IF EXISTS `comment`;
DROP TABLE IF EXISTS `posts`;
DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `mail` varchar(150) NOT NULL,
  `password` varchar(150) NOT NULL,
  `profilPicture` varchar(250) NOT NULL,
  `firstname` varchar(150) NOT NULL,
  `lastname` varchar(150) NOT NULL,
  `job` varchar(150) DEFAULT NULL,
  `status` varchar(100) DEFAULT '0',
  `Race` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`,`firstname`,`lastname`,`password`,`mail`),
  UNIQUE KEY `mail_UNIQUE` (`mail`)
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `posts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `body` varchar(255) DEFAULT NULL,
  `picture` varchar(255) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `time` time DEFAULT NULL,
  `users_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_posts_users1_idx` (`users_id`),
  CONSTRAINT `fk_posts_users1` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


CREATE TABLE `comment` (
  `id` int NOT NULL AUTO_INCREMENT,
  `content` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `dateCreate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `users_id` int NOT NULL,
  `posts_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_comment_users1_idx` (`users_id`),
  KEY `fk_comment_posts1_idx` (`posts_id`),
  CONSTRAINT `fk_comment_posts1` FOREIGN KEY (`posts_id`) REFERENCES `posts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_comment_users1` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `groupes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `users_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_groupes_users1_idx` (`users_id`),
  CONSTRAINT `fk_groupes_users1` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `usersgroup` (
  `id` int NOT NULL AUTO_INCREMENT,
  `users_id` int NOT NULL,
  `groupes_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_usersgroup_users1_idx` (`users_id`),
  KEY `fk_usersgroup_groupes1_idx` (`groupes_id`),
  CONSTRAINT `fk_usersgroup_groupes1` FOREIGN KEY (`groupes_id`) REFERENCES `groupes` (`id`),
  CONSTRAINT `fk_usersgroup_users1` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;



CREATE TABLE `friends` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id2` int NOT NULL,
  `users_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_friends_users1_idx` (`users_id`),
  CONSTRAINT `fk_friends_users1` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `likes` (
  `likeId` int unsigned NOT NULL AUTO_INCREMENT,
  `users_id` int NOT NULL,
  `posts_id` int NOT NULL,
  PRIMARY KEY (`likeId`),
  KEY `fk_likes_users1_idx` (`users_id`),
  KEY `fk_likes_posts1_idx` (`posts_id`),
  CONSTRAINT `fk_likes_posts1` FOREIGN KEY (`posts_id`) REFERENCES `posts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_likes_users1` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


CREATE TABLE `dislikes` (
  `dislikeId` int unsigned NOT NULL AUTO_INCREMENT,
  `users_id` int NOT NULL,
  `posts_id` int NOT NULL,
  PRIMARY KEY (`dislikeId`),
  KEY `fk_dislikes_users1_idx` (`users_id`),
  KEY `fk_dislikes_posts1_idx` (`posts_id`),
  CONSTRAINT `fk_dislikes_posts1` FOREIGN KEY (`posts_id`) REFERENCES `posts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_dislikes_users1` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

