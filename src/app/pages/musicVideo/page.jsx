"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/app/components/Navbar";
import SidebarMenu from "@/app/components/SidebarMenu";
import contentfullMedia from "@/contentful/contentfullMedia";
// Impor ikon dari React Icons
import { FaYoutube } from "react-icons/fa"; // Ikon YouTube
import { SiSpotify } from "react-icons/si"; // Ikon Spotify
import Footer from "@/app/components/Footer";

const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-900">
    <div className="w-16 h-16 border-4 border-blue-500 rounded-full border-t-transparent animate-spin" />
  </div>
);

const MusicVideo = () => {
  const [musicVideos, setMusicVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState(null); // State untuk melacak item yang diperluas

  useEffect(() => {
    setIsMounted(true);
    const fetchData = async () => {
      try {
        const response = await contentfullMedia.getEntries({
          content_type: "musicVideo",
        });
        if (!response.items || response.items.length === 0) {
          throw new Error("No data found in Contentful");
        }
        const entries = response.items.map((item) => {
          const imageAsset = response.includes.Asset.find(
            (asset) => asset.sys.id === item.fields.imgMusicVideo.sys.id
          );
          return {
            title: item.fields.judulMusic,
            image: imageAsset?.fields?.file?.url,
            youtubeUrl: item.fields.linkYt,
            spotifyUrl: item.fields.linkSpotify,
            description: item.fields.descSong, // Menambahkan deskripsi
          };
        });
        setMusicVideos(entries);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching data from Contentful:", err);
        setError(err.message || "An error occurred while fetching data.");
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (!isMounted) {
    return <LoadingSpinner />;
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-red-500 text-center p-8 bg-white rounded-lg shadow-xl"
        >
          <h2 className="text-2xl font-bold mb-4">Error</h2>
          <p>{error}</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="fixed inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('/images/bgFtj.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50 backdrop-blur-sm" />
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <AnimatePresence>
        <div className="relative z-10 container mx-auto px-4 py-16">
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white mb-16"
          >
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Music & Video
            </h1>
            <p className="text-xl max-w-3xl mx-auto text-gray-200">
              Family to Jannah presents a collection of music and videos inspired by love and compassion.
            </p>
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {musicVideos.map((video, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group block bg-white/10 backdrop-blur-md rounded-xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 relative cursor-pointer"
                onMouseEnter={() => setExpandedIndex(index)} // Hover untuk memperluas deskripsi
                onMouseLeave={() => setExpandedIndex(null)} // Keluar hover untuk menyembunyikan deskripsi
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)} // Klik untuk toggle deskripsi
              >
                {/* Gambar */}
                <div className="relative aspect-video overflow-hidden">
                  <motion.img
                    src={video.image || "/images/default.jpg"}
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center space-y-4">
                    {/* Tombol YouTube */}
                    <a
                      href={video.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-2 bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors duration-300"
                    >
                      <FaYoutube className="w-6 h-6" />
                      <span>YouTube</span>
                    </a>
                    {/* Tombol Spotify */}
                    <a
                      href={video.spotifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-2 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors duration-300"
                    >
                      <SiSpotify className="w-6 h-6" />
                      <span>Spotify</span>
                    </a>
                  </div>
                </div>
                {/* Judul dan Deskripsi */}
                <div className="p-6 space-y-2">
                  <h3 className="text-lg font-semibold text-white line-clamp-2 group-hover:text-blue-400 transition-colors duration-300 text-center">
                    {video.title}
                  </h3>
                  {/* Deskripsi */}
                  <p
                    className={`text-sm text-gray-300 text-center ${
                      expandedIndex === index ? "line-clamp-none" : "line-clamp-2"
                    } transition-all duration-300`}
                  >
                    {video.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatePresence>
      <SidebarMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Footer/>
    </div>
  );
};

export default MusicVideo;