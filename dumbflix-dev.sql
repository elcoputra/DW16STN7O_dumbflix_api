-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jul 19, 2020 at 03:13 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dumbflix-dev`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'Movies', '2020-06-20 06:44:31', '2020-06-20 06:44:31'),
(2, 'TV Series', '2020-06-20 06:44:37', '2020-06-20 06:44:37');

-- --------------------------------------------------------

--
-- Table structure for table `episodes`
--

CREATE TABLE `episodes` (
  `id` int(11) NOT NULL,
  `movieId` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `linkEpisode` varchar(255) DEFAULT NULL,
  `thumbnailEpisode` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `episodes`
--

INSERT INTO `episodes` (`id`, `movieId`, `title`, `linkEpisode`, `thumbnailEpisode`, `createdAt`, `updatedAt`) VALUES
(1, 2, '1. The End\'s Beginning', 'https://gdurl.com/A8Gf', 'https://sinopsisfilmindia.com/wp-content/uploads/2019/12/TheWitcherSeason1Episode1.jpg', '2020-06-20 06:47:50', '2020-07-16 08:38:09'),
(2, 2, '2.Four Marks', 'https://gdurl.com/i6Z9', 'https://www.tvinsider.com/wp-content/uploads/2019/12/Witcher_102_Unit_01196_RT.jpg', '2020-06-20 06:48:07', '2020-07-16 08:38:40'),
(30, 1, 'Your Name', 'https://gdurl.com/1pa4', 'https://i.imgur.com/SIuUBs2.jpg', '2020-06-22 07:52:12', '2020-07-16 09:04:22'),
(31, 2, '3.Betrayer Moon', 'https://gdurl.com/Hlzn', 'https://bit.ly/3j61fvt', '2020-06-22 04:10:16', '2020-07-16 08:39:12'),
(46, 2, '4. empat', 'https://gdurl.com/v58L', 'https://cdn.mos.cms.futurecdn.net/6tgHcMsVK7WoJ5pQH8WX8V.jpg', '2020-07-16 08:11:56', '2020-07-16 08:50:55'),
(47, 2, '5. lima', 'https://gdurl.com/IpoM', 'https://mycreativeramblings.files.wordpress.com/2020/01/3.jpg', '2020-07-16 08:40:42', '2020-07-16 08:51:57'),
(48, 2, '6. enam', 'https://gdurl.com/oFRC', 'https://cdn3-www.comingsoon.net/assets/uploads/2019/12/Screen-Shot-2019-12-31-at-2.29.44-PM.png', '2020-07-16 08:40:51', '2020-07-16 08:53:24'),
(49, 2, '7. tujuh', 'https://gdurl.com/VUdy', 'https://www.tvinsider.com/wp-content/uploads/2019/12/TheWitcher_Ep7_Ciri-1014x570.png', '2020-07-16 08:40:56', '2020-07-16 08:55:29'),
(50, 2, '8. delapan', 'https://gdurl.com/uSt0', 'https://summary.org/wp-content/uploads/2020/01/the-witcher-episode-8-explained-a4.jpg', '2020-07-16 08:41:01', '2020-07-17 19:20:03'),
(51, 39, '1. Satu', 'https://gdurl.com/A8Gf', 'https://i.ytimg.com/vi/I2OYtG1zPxY/maxresdefault.jpg', '2020-07-17 22:14:24', '2020-07-17 22:14:24'),
(52, 39, '2. Dua', 'https://gdurl.com/i6Z9', 'https://i.ytimg.com/vi/GGX6smdXTw4/maxresdefault.jpg', '2020-07-17 22:14:24', '2020-07-17 22:14:24'),
(53, 40, '1. Satu', 'https://gdurl.com/A8Gf', 'https://i.ytimg.com/vi/I2OYtG1zPxY/maxresdefault.jpg', '2020-07-17 22:16:55', '2020-07-17 22:16:55'),
(54, 40, '2. Dua', 'https://gdurl.com/i6Z9', 'https://i.ytimg.com/vi/GGX6smdXTw4/maxresdefault.jpg', '2020-07-17 22:16:55', '2020-07-17 22:16:55'),
(55, 41, '1. Satu', 'https://gdurl.com/A8Gf', 'https://i.ytimg.com/vi/I2OYtG1zPxY/maxresdefault.jpg', '2020-07-17 22:18:11', '2020-07-17 22:18:11'),
(56, 41, '2. Dua', 'https://gdurl.com/i6Z9', 'https://i.ytimg.com/vi/GGX6smdXTw4/maxresdefault.jpg', '2020-07-17 22:18:11', '2020-07-17 22:18:11'),
(57, 42, '1. Satu', 'https://gdurl.com/A8Gf', 'https://i.ytimg.com/vi/I2OYtG1zPxY/maxresdefault.jpg', '2020-07-17 22:19:29', '2020-07-17 22:19:29'),
(58, 42, '2. Dua', 'https://gdurl.com/i6Z9', 'https://i.ytimg.com/vi/GGX6smdXTw4/maxresdefault.jpg', '2020-07-17 22:19:29', '2020-07-17 22:19:29'),
(59, 43, '1. Satu', 'https://gdurl.com/A8Gf', 'https://i.ytimg.com/vi/I2OYtG1zPxY/maxresdefault.jpg', '2020-07-17 22:20:35', '2020-07-18 04:53:24'),
(60, 43, '2. Dua', 'https://gdurl.com/i6Z9', 'https://i.ytimg.com/vi/GGX6smdXTw4/maxresdefault.jpg', '2020-07-17 22:20:35', '2020-07-18 04:53:28'),
(61, 44, '1. Satu', 'https://gdurl.com/A8Gf', 'https://i.ytimg.com/vi/I2OYtG1zPxY/maxresdefault.jpg', '2020-07-17 22:21:54', '2020-07-17 22:21:54'),
(62, 44, '2. Dua', 'https://gdurl.com/i6Z9', 'https://i.ytimg.com/vi/GGX6smdXTw4/maxresdefault.jpg', '2020-07-17 22:21:54', '2020-07-17 22:21:54'),
(63, 45, '1. Satu', 'https://gdurl.com/A8Gf', 'https://i.ytimg.com/vi/I2OYtG1zPxY/maxresdefault.jpg', '2020-07-17 22:22:49', '2020-07-17 22:22:49'),
(64, 45, '2. Dua', 'https://gdurl.com/i6Z9', 'https://i.ytimg.com/vi/GGX6smdXTw4/maxresdefault.jpg', '2020-07-17 22:22:49', '2020-07-17 22:22:49'),
(65, 46, '1. Satu', 'https://gdurl.com/A8Gf', 'https://i.ytimg.com/vi/I2OYtG1zPxY/maxresdefault.jpg', '2020-07-17 22:24:05', '2020-07-17 22:24:05'),
(66, 46, '2. Dua', 'https://gdurl.com/i6Z9', 'https://i.ytimg.com/vi/GGX6smdXTw4/maxresdefault.jpg', '2020-07-17 22:24:05', '2020-07-17 22:24:05'),
(67, 47, '1. Satu', 'https://gdurl.com/A8Gf', 'https://i.ytimg.com/vi/I2OYtG1zPxY/maxresdefault.jpg', '2020-07-17 22:24:45', '2020-07-17 22:24:45'),
(68, 47, '2. Dua', 'https://gdurl.com/i6Z9', 'https://i.ytimg.com/vi/GGX6smdXTw4/maxresdefault.jpg', '2020-07-17 22:24:45', '2020-07-17 22:24:45'),
(69, 48, '1. Satu', 'https://gdurl.com/A8Gf', 'https://i.ytimg.com/vi/I2OYtG1zPxY/maxresdefault.jpg', '2020-07-17 22:25:22', '2020-07-17 22:25:22'),
(70, 48, '2. Dua', 'https://gdurl.com/i6Z9', 'https://i.ytimg.com/vi/GGX6smdXTw4/maxresdefault.jpg', '2020-07-17 22:25:22', '2020-07-17 22:25:22'),
(71, 49, '1. Satu', 'https://gdurl.com/A8Gf', 'https://i.ytimg.com/vi/I2OYtG1zPxY/maxresdefault.jpg', '2020-07-17 22:27:36', '2020-07-17 22:27:36'),
(72, 49, '2. Dua', 'https://gdurl.com/A8Gf', 'https://i.ytimg.com/vi/I2OYtG1zPxY/maxresdefault.jpg', '2020-07-17 22:27:36', '2020-07-17 22:27:36'),
(102, 77, 'The God father', 'https://gdurl.com/68Srz', 'https://mmc.tirto.id/image/otf/500x0/2020/05/08/godather_ratio-16x9.jpg', '2020-07-18 17:28:10', '2020-07-18 18:05:25'),
(106, 78, 'aaa', 'aaa', 'aaa', '2020-07-18 17:45:54', '2020-07-18 17:45:54'),
(107, 79, 'bbb', 'bbb', 'bbb', '2020-07-18 17:46:55', '2020-07-18 17:46:55'),
(108, 81, '', '', '', '2020-07-18 17:54:00', '2020-07-18 17:54:00'),
(109, 82, '', '', '', '2020-07-18 17:56:07', '2020-07-18 17:56:07'),
(110, 83, '', '', '', '2020-07-18 17:56:41', '2020-07-18 17:56:41'),
(111, 84, '', '', '', '2020-07-18 17:57:18', '2020-07-18 17:57:18'),
(112, 85, '', '', '', '2020-07-18 17:58:01', '2020-07-18 17:58:01'),
(113, 86, '', '', '', '2020-07-18 17:59:16', '2020-07-18 17:59:16'),
(114, 87, '', '', '', '2020-07-18 17:59:51', '2020-07-18 17:59:51'),
(115, 88, '', '', '', '2020-07-18 18:00:35', '2020-07-18 18:00:35'),
(116, 89, '', '', '', '2020-07-18 18:01:40', '2020-07-18 18:01:40');

-- --------------------------------------------------------

--
-- Table structure for table `movies`
--

CREATE TABLE `movies` (
  `id` int(11) NOT NULL,
  `categoryId` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `thumbnail` varchar(255) DEFAULT NULL,
  `year` varchar(255) DEFAULT NULL,
  `description` varchar(1000) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `movies`
--

INSERT INTO `movies` (`id`, `categoryId`, `title`, `thumbnail`, `year`, `description`, `createdAt`, `updatedAt`) VALUES
(1, 1, 'Your Name', 'https://i.imgur.com/pGTKlTo.jpg', '1999', 'Tells the story a high school boy in Tokyo and a high school girl in a rural town, who suddenly and inexplicably begin to swap bodies. The film stars the voices of Ryunosuke Kamiki, Mone Kamishiraishi, Masami Nagasawa and Etsuko Ichihara.', '2020-06-20 06:46:29', '2020-06-20 06:46:29'),
(2, 2, 'The Witcher', 'https://i.imgur.com/y3WDY0h.png', '1999', 'It is based on the book series of the same name by Polish writer Andrzej Sapkowski. The Witcher follows the story of Geralt of Rivia, a solitary monster hunter, who struggles to find his place in a world where people often prove more wicked than monsters and beasts. But when destiny hurtles him toward a powerful sorceress, and a young princess with a special gift, the three must learn to navigate independently the increasingly volatile Continent.', '2020-06-20 06:47:17', '2020-06-20 06:47:17'),
(39, 2, 'Persona 3', 'https://i.imgur.com/Fi9yNLu.png', '2016', 'Development of the film was first announced in a teaser trailer during the limited theatrical release of Persona 4 The Animation: The Factor of Hope on June 9, 2012. Aniplex later announced a Fall 2013 release date and that the main voice acting cast of the original PlayStation 2 game would reprise their roles in the film. ', '2020-07-17 22:14:23', '2020-07-17 22:14:23'),
(40, 2, 'Game Of Thrones', 'https://i.imgur.com/MsCpR19.png', '2011', 'Development of the film was first announced in a teaser trailer during the limited theatrical release of Persona 4 The Animation: The Factor of Hope on June 9, 2012. Aniplex later announced a Fall 2013 release date and that the main voice acting cast of the original PlayStation 2 game would reprise their roles in the film. ', '2020-07-17 22:16:54', '2020-07-17 22:16:54'),
(41, 2, 'Money Heist', 'https://i.imgur.com/Hy0kOeF.png', '2017', 'Development of the film was first announced in a teaser trailer during the limited theatrical release of Persona 4 The Animation: The Factor of Hope on June 9, 2012. Aniplex later announced a Fall 2013 release date and that the main voice acting cast of the original PlayStation 2 game would reprise their roles in the film. ', '2020-07-17 22:18:11', '2020-07-17 22:18:11'),
(42, 2, 'Touch', 'https://i.imgur.com/xwb4md2.png', '2020', 'Development of the film was first announced in a teaser trailer during the limited theatrical release of Persona 4 The Animation: The Factor of Hope on June 9, 2012. Aniplex later announced a Fall 2013 release date and that the main voice acting cast of the original PlayStation 2 game would reprise their roles in the film. ', '2020-07-17 22:19:29', '2020-07-17 22:19:29'),
(43, 2, 'Arrow', 'https://i.imgur.com/IlUBhLG.png', '2012', 'Development of the film was first announced in a teaser trailer during the limited theatrical release of Persona 4 The Animation: The Factor of Hope on June 9, 2012. Aniplex later announced a Fall 2013 release date and that the main voice acting cast of the original PlayStation 2 game would reprise their roles in the film. ', '2020-07-17 22:20:35', '2020-07-18 04:53:16'),
(44, 2, 'You', 'https://i.imgur.com/Q8PZWEp.png', '2018', 'Development of the film was first announced in a teaser trailer during the limited theatrical release of Persona 4 The Animation: The Factor of Hope on June 9, 2012. Aniplex later announced a Fall 2013 release date and that the main voice acting cast of the original PlayStation 2 game would reprise their roles in the film. ', '2020-07-17 22:21:54', '2020-07-17 22:21:54'),
(45, 2, 'Castlevania', 'https://i.imgur.com/wJER8FP.png', '2017', 'Development of the film was first announced in a teaser trailer during the limited theatrical release of Persona 4 The Animation: The Factor of Hope on June 9, 2012. Aniplex later announced a Fall 2013 release date and that the main voice acting cast of the original PlayStation 2 game would reprise their roles in the film. ', '2020-07-17 22:22:49', '2020-07-17 22:22:49'),
(46, 2, 'The Oa', 'https://i.imgur.com/ihFDUKT.png', '2016', 'Development of the film was first announced in a teaser trailer during the limited theatrical release of Persona 4 The Animation: The Factor of Hope on June 9, 2012. Aniplex later announced a Fall 2013 release date and that the main voice acting cast of the original PlayStation 2 game would reprise their roles in the film. ', '2020-07-17 22:24:05', '2020-07-17 22:24:05'),
(47, 2, 'Locke', 'https://i.imgur.com/J7QAQ6Z.png', '2020', 'Development of the film was first announced in a teaser trailer during the limited theatrical release of Persona 4 The Animation: The Factor of Hope on June 9, 2012. Aniplex later announced a Fall 2013 release date and that the main voice acting cast of the original PlayStation 2 game would reprise their roles in the film. ', '2020-07-17 22:24:45', '2020-07-17 22:24:45'),
(48, 2, 'Replay 1988', 'https://i.imgur.com/QM6oBTG.png', '2015', 'Development of the film was first announced in a teaser trailer during the limited theatrical release of Persona 4 The Animation: The Factor of Hope on June 9, 2012. Aniplex later announced a Fall 2013 release date and that the main voice acting cast of the original PlayStation 2 game would reprise their roles in the film. ', '2020-07-17 22:25:22', '2020-07-17 22:25:22'),
(49, 2, 'Panji Manusia Millenium', 'https://i.imgur.com/A3W6pzi.png', '1999', 'Panji Manusia Millenium Panji Manusia Millenium Panji Manusia Millenium Panji Manusia Millenium Panji Manusia Millenium Panji Manusia Millenium Panji Manusia Millenium Panji Manusia Millenium Panji Manusia Millenium Panji Manusia Millenium Panji Manusia Millenium Panji Manusia Millenium Panji Manusia Millenium', '2020-07-17 22:27:36', '2020-07-17 22:27:36'),
(77, 1, 'The God father', 'https://i.imgur.com/SHVRTef.png', '1972', 'It is based on the book series of the same name by Polish writer Andrzej Sapkowski. The Witcher follows the story of Geralt of Rivia, a solitary monster hunter, who struggles to find his place in a world where people often prove more wicked than monsters and beasts. But when destiny hurtles him toward a powerful sorceress, and a young princess with a special gift, the three must learn to navigate independently the increasingly volatile Continent.', '2020-07-18 17:28:09', '2020-07-18 18:05:53'),
(78, 1, 'Batman', 'https://i.imgur.com/iT6IhMK.png', '2008', 'It is based on the book series of the same name by Polish writer Andrzej Sapkowski. The Witcher follows the story of Geralt of Rivia, a solitary monster hunter, who struggles to find his place in a world where people often prove more wicked than monsters and beasts. But when destiny hurtles him toward a powerful sorceress, and a young princess with a special gift, the three must learn to navigate independently the increasingly volatile Continent.', '2020-07-19 23:58:01', '2020-07-19 23:58:01'),
(79, 1, 'End Game', 'https://i.imgur.com/gafS82d.png', '2019', 'Tells the story a high school boy in Tokyo and a high school girl in a rural town, who suddenly and inexplicably begin to swap bodies. The film stars the voices of Ryunosuke Kamiki, Mone Kamishiraishi, Masami Nagasawa and Etsuko Ichihara.', '2020-07-18 17:34:41', '2020-07-18 17:34:41'),
(81, 1, 'Joker', 'https://i.imgur.com/nK5DkSC.png', '2019', 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. ', '2020-07-18 17:54:00', '2020-07-18 17:54:00'),
(82, 1, 'Parasite', 'https://i.imgur.com/sgYHXLH.png', '2019', 'https://i.imgur.com/sgYHXLH.png', '2020-07-18 17:56:07', '2020-07-18 17:56:07'),
(83, 1, 'Chernobil', 'https://i.imgur.com/tMejaRa.png', '2020', 'https://i.imgur.com/tMejaRa.png', '2020-07-18 17:56:41', '2020-07-18 17:56:41'),
(84, 1, 'Serigala Terakhir', 'https://i.imgur.com/qF8GqQI.png', '2009', 'https://i.imgur.com/qF8GqQI.png', '2020-07-18 17:57:18', '2020-07-18 17:57:18'),
(85, 1, 'Grave', 'https://i.imgur.com/d0h1H24.png', '2012', 'https://i.imgur.com/d0h1H24.png', '2020-07-18 17:58:01', '2020-07-18 17:58:01'),
(86, 1, 'Tororo', 'https://i.imgur.com/3rgtEzA.png', '1988', 'https://i.imgur.com/3rgtEzA.png', '2020-07-18 17:59:16', '2020-07-18 17:59:16'),
(87, 1, 'Quite', 'https://i.imgur.com/vwvqMoZ.png', '2020', 'https://i.imgur.com/vwvqMoZ.png', '2020-07-18 17:59:51', '2020-07-18 17:59:51'),
(88, 1, 'Plojen 2', 'https://i.imgur.com/l84Wj3x.png', '2020', 'https://i.imgur.com/l84Wj3x.png', '2020-07-18 18:00:35', '2020-07-18 18:00:35'),
(89, 1, 'SSquad', 'https://i.imgur.com/FrkBwI3.png', '2016', 'https://i.imgur.com/FrkBwI3.png', '2020-07-18 18:01:40', '2020-07-18 18:01:40');

-- --------------------------------------------------------

--
-- Table structure for table `SequelizeMeta`
--

CREATE TABLE `SequelizeMeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `SequelizeMeta`
--

INSERT INTO `SequelizeMeta` (`name`) VALUES
('20200611223645-create-user.js'),
('20200611223702-create-transaction.js'),
('20200612171645-create-category.js'),
('20200612171721-create-movie.js'),
('20200612172012-create-episode.js');

-- --------------------------------------------------------

--
-- Table structure for table `transactions`
--

CREATE TABLE `transactions` (
  `id` int(11) NOT NULL,
  `userId` int(11) DEFAULT NULL,
  `startDate` datetime DEFAULT NULL,
  `dueDate` datetime DEFAULT NULL,
  `attachment` varchar(255) DEFAULT NULL,
  `bankAccount` varchar(255) DEFAULT NULL,
  `status` enum('Approved','Pending','Denied') DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `transactions`
--

INSERT INTO `transactions` (`id`, `userId`, `startDate`, `dueDate`, `attachment`, `bankAccount`, `status`, `createdAt`, `updatedAt`) VALUES
(7, 4, '2020-06-20 21:35:57', '2020-07-20 21:35:57', 'https://upload.wikimedia.org/wikipedia/commons/0/0b/ReceiptSwiss.jpg', '123123123123', 'Approved', '2020-06-20 21:35:57', '2020-06-20 21:35:57'),
(8, 2, '2020-06-20 22:16:23', '2020-07-20 22:16:23', 'https://3.bp.blogspot.com/-L1WPjh-8JuM/V307iWbspSI/AAAAAAAACCo/LrUa1YnCP0sIyqb9IdFCo4VZ5XvWbE4RwCLcB/s1600/struk+villa+dinning.jpg', '123123123123', 'Approved', '2020-06-20 22:16:23', '2020-06-21 04:00:39'),
(25, 1, '2020-06-21 04:44:00', '2020-07-21 04:44:00', 'https://cdn2.tstatic.net/tribunnews/foto/bank/images/20140222_223225_struk-tol_fantastis.jpg', '1231231231231', 'Approved', '2020-06-21 04:44:00', '2020-07-13 13:10:13'),
(26, 7, '2020-06-22 04:05:59', '2020-07-22 04:05:59', 'https://duwitmu.com/wp-content/uploads/2020/01/Gojek-PayLater-3-1024x853.png', '1234567', 'Denied', '2020-06-22 04:05:59', '2020-07-16 11:06:03'),
(27, 9, '2020-07-16 09:14:14', '2020-08-16 09:14:14', 'https://luckyaprilianapamella.files.wordpress.com/2016/04/wp-1460437332472.jpg', '12312412', 'Pending', '2020-07-16 09:14:14', '2020-07-16 09:14:14'),
(28, 13, '2020-07-18 15:29:23', '2020-08-18 15:29:23', 'https://media-cdn.tripadvisor.com/media/photo-s/16/48/8c/bf/struk-pembayaran-untuk.jpg', '1234123', 'Approved', '2020-07-18 15:29:23', '2020-07-18 15:30:27'),
(29, 14, '2020-07-19 07:51:25', '2020-08-19 07:51:25', '123', '123', 'Pending', '2020-07-19 07:51:26', '2020-07-19 07:51:26');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `fullName` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `isAdmin` tinyint(1) NOT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `subscribe` tinyint(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `fullName`, `email`, `password`, `isAdmin`, `gender`, `phone`, `address`, `subscribe`, `createdAt`, `updatedAt`) VALUES
(1, 'user', 'user@gmail.com', '$2b$10$IrzNipmAMM81h1jJGGIT9eQg7u6tl06fzCg0CYmV65.nEKpjJ4DcW', 0, 'Male', '08111111111', 'Jln. Marvel Universe, RT.21 RW.69', 1, '2020-06-19 13:33:15', '2020-07-13 13:10:13'),
(2, 'user2', 'user2@gmail.com', '$2b$10$nM.R3oBo3jzILOtEakKAQePu.F9Z.fzRyyEIQu3.pIUPjCjIc/1EW', 0, 'Male', '08111111111', 'Jln. Marvel Universe, RT.21 RW.69', 1, '2020-06-19 13:35:17', '2020-06-21 04:00:39'),
(3, 'user3', 'user3@gmail.com', '$2b$10$hXqwcs3NoRoEiBJUjp5nvu/MrTxmUkapuLYIsJLG4y1hF2Fe101PK', 0, 'Male', '08111111111', 'Jl. dadjkhvj,kMKJAW<NAWD', 0, '2020-06-20 02:52:11', '2020-06-20 02:52:11'),
(4, 'admin', 'admin@gmail.com', '$2b$10$wmowvKM6afbB421Aop7xi.6puxTz79NeU7XtctrtRQzRo9nzQYZO2', 1, 'Male', '088888888888', 'Jl. Server block database', 1, '2020-06-20 03:18:51', '2020-06-20 03:18:51'),
(5, 'elco ', 'elco@gmail.com', '$2b$10$n8IBAk3rKYUvpjh5Lae6zu.lrVW7fjXji8dSdp4p1O.Z8J40nlAa.', 0, 'Male', '082949192949', 'asdwdasawawd', 0, '2020-06-21 20:09:11', '2020-06-21 20:09:11'),
(6, 'user20', 'user20@gmail.com', '$2b$10$45rkObBJfjadiah6YeuFJeN2mIDRTlxzRz5caji1ExiHPUGdkSbky', 0, 'Male', '088888888888', 'Jl. kaskus', 0, '2020-06-22 03:21:38', '2020-06-22 03:21:38'),
(7, 'user20o0', 'user200@gmail.com', '$2b$10$PvHHRnOfSWdpPywylH7P8.Ka1T0FktI3M5H/G8Q4NQnv6cyFH8zkS', 0, 'Male', '088888888888', 'JL jalan', 0, '2020-06-22 04:01:14', '2020-07-16 11:06:03'),
(8, 'cobav2', 'cobav2@gmail.com', '$2b$10$f7hHcoLrf/vIoV/4DtitLOcCHKSha8h5cXcGTPvA19LywOb3DUxIu', 0, 'Female', '1234', '1234', 0, '2020-07-16 01:01:35', '2020-07-16 01:01:35'),
(9, 'v2', 'v2@gmail.com', '$2b$10$fyqcE0Mf6rSKzaPUigRUX.6ZGPf5TcDIacJzyxHgcBQqBHWGl0xYa', 0, 'Male', '1234', '1234', 0, '2020-07-16 09:13:10', '2020-07-16 09:14:14'),
(10, '1234', 'testplagiat@gmail.com', '$2b$10$rHaJdmwybYplr/wx37BzWeyfn2ha.Or2OYHYbLxf/pc3zAt5ovWzK', 0, 'Male', '1234', '1234', 0, '2020-07-17 10:01:09', '2020-07-17 10:01:09'),
(11, '1234', 'cobacoba@gmail.com', '$2b$10$XMlqCcj2F1DD3q2A7BKFbePiXoWrlAFX.hXZW/1m6ckWnRFVWnYA6', 0, 'Male', '1234', '1234', 0, '2020-07-17 19:23:29', '2020-07-17 19:23:29'),
(12, '1234', 'c@gmail.com', '$2b$10$ZfZGY2LG6v4SjPeC30YIRew9d0pXISUm8mOTgxxDZAYuEuvbWtMxy', 0, 'Male', '1234', '1234', 0, '2020-07-17 23:46:14', '2020-07-17 23:46:14'),
(13, 'presen', 'presen@gmail.com', '$2b$10$2aH36ZE/9X1SdXJH4R2UZedCF263tTvWBLOVa/LpQMHOshVXezSYq', 0, 'Female', '1234', '1234', 1, '2020-07-18 15:28:13', '2020-07-18 15:30:27'),
(14, 'Waw', 'Waw@gmail.com', '$2b$10$pMsl5s0YJnW.msQDvYM7BO9eYEAGK6z67SdiLWRO7rlkRy2eggOTG', 0, 'Female', '1234', '1234', 0, '2020-07-19 05:23:50', '2020-07-19 07:51:26');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `episodes`
--
ALTER TABLE `episodes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `movieId` (`movieId`);

--
-- Indexes for table `movies`
--
ALTER TABLE `movies`
  ADD PRIMARY KEY (`id`),
  ADD KEY `categoryId` (`categoryId`);

--
-- Indexes for table `SequelizeMeta`
--
ALTER TABLE `SequelizeMeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `transactions`
--
ALTER TABLE `transactions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `episodes`
--
ALTER TABLE `episodes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=117;

--
-- AUTO_INCREMENT for table `movies`
--
ALTER TABLE `movies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=90;

--
-- AUTO_INCREMENT for table `transactions`
--
ALTER TABLE `transactions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `episodes`
--
ALTER TABLE `episodes`
  ADD CONSTRAINT `episodes_ibfk_1` FOREIGN KEY (`movieId`) REFERENCES `movies` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `movies`
--
ALTER TABLE `movies`
  ADD CONSTRAINT `movies_ibfk_1` FOREIGN KEY (`categoryId`) REFERENCES `categories` (`id`);

--
-- Constraints for table `transactions`
--
ALTER TABLE `transactions`
  ADD CONSTRAINT `transactions_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
