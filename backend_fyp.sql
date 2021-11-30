-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Nov 30, 2021 at 04:36 AM
-- Server version: 10.4.18-MariaDB
-- PHP Version: 7.4.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `backend_fyp`
--

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `id` int(11) NOT NULL,
  `username` varchar(100) NOT NULL,
  `comment` text NOT NULL,
  `platform_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `comments`
--

INSERT INTO `comments` (`id`, `username`, `comment`, `platform_id`) VALUES
(1, 'Paul McCarney', 'Ini bagus banget ', 1),
(2, 'Ringgo Star', 'Sekolahkoding buat saya makin semangat buat belajar koding', 1);

-- --------------------------------------------------------

--
-- Table structure for table `passions`
--

CREATE TABLE `passions` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `passions`
--

INSERT INTO `passions` (`id`, `name`) VALUES
(1, 'Programming'),
(2, 'Melukis'),
(5, 'Melukis'),
(6, 'Designer'),
(7, 'Olahraga'),
(8, 'Pastry');

-- --------------------------------------------------------

--
-- Table structure for table `platforms`
--

CREATE TABLE `platforms` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `name` varchar(100) NOT NULL,
  `url` text NOT NULL,
  `url_image` text NOT NULL,
  `description` text NOT NULL,
  `passion_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `platforms`
--

INSERT INTO `platforms` (`id`, `username`, `name`, `url`, `url_image`, `description`, `passion_id`) VALUES
(1, 'Randynetworks', 'Sekolahkoding', 'https://sekolahkoding.com/', 'https://skspace.sgp1.cdn.digitaloceanspaces.com/webAssets/logo-with-text.png', 'Video tutorial web development dan programming dalam bahasa Indonesia.', 1),
(2, 'Randynetworks', 'Dicoding', 'https://www.dicoding.com/', 'https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/commons/dicoding-logo-full.png', 'Dicoding hadir sebagai platform pendidikan teknologi yang membantu menghasilkan talenta digital berstandar global. Semua demi mengakselerasi Indonesia agar menjadi yang terdepan. ', 1),
(3, 'Randynetworks', 'Ayoboga Education', 'https://www.ayoboga.com/', 'https://www.ayoboga.com/static/media/logo.3df1176a.png', 'Ayoboga adalah website pembelajaran online tentang jasa boga, Bahasa Indonesia. Tetap Belajar Masak untuk Investasi Di masa depan', 4),
(4, 'Randynetworks', 'Web Programing Unpas', 'https://www.webprogrammingunpas.com/', 'https://i.ytimg.com/vi/NBZ9Ro6UKV8/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDEUWWKrv8zhAFQAyRUbTXTBwviGg', 'Website pembelajaran yang dari UNPAS', 1),
(5, 'Randynetworks', 'Web Programing Unpas', 'https://www.webprogrammingunpas.com/', 'data:image/jpeg;base64,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', 'Website pembelajaran yang dari UNPAS', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `passions`
--
ALTER TABLE `passions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `platforms`
--
ALTER TABLE `platforms`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `passions`
--
ALTER TABLE `passions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `platforms`
--
ALTER TABLE `platforms`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
