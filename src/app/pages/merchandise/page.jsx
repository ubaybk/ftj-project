"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/app/components/Navbar";
import SidebarMenu from "@/app/components/SidebarMenu";
import contentfullMedia from "@/contentful/contentfullMedia";
import Footer from "@/app/components/Footer";

const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-900">
    <div className="w-16 h-16 border-4 border-blue-500 rounded-full border-t-transparent animate-spin" />
  </div>
);

const Merchandise = () => {
  const [merchandises, setMerchandises] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const fetchData = async () => {
      try {
        const response = await contentfullMedia.getEntries({
          content_type: "merchandise",
        });
        if (!response.items || response.items.length === 0) {
          throw new Error("No data found in Contentful");
        }
        const entries = response.items.map((item) => {
          const imageAsset = response.includes.Asset.find(
            (asset) => asset.sys.id === item.fields.imgMerchandise.sys.id
          );
          return {
            title: item.fields.titleMerchandise,
            size: item.fields.sizeMerchandise,
            price: item.fields.prizeMerchandise,
            tokpedLink: item.fields.linkMerchandise,
            shoopeLink: item.fields.shoopeLinkMarchendise,
            image: imageAsset?.fields?.file?.url,
          };
        });
        setMerchandises(entries);
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
              Merchandise
            </h1>
            <p className="text-xl max-w-3xl mx-auto text-gray-200">
              Explore our exclusive Family to Jannah merchandise collection.
            </p>
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {merchandises.map((merch, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group block bg-white/10 backdrop-blur-md rounded-xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 relative cursor-pointer"
              >
                {/* Gambar */}
                <div className="relative aspect-video overflow-hidden">
                  <motion.img
                    src={merch.image || "/images/default.jpg"}
                    alt={merch.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center space-y-4">
                    {/* Tombol Tokopedia */}
                    <a
                      href={merch.tokpedLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-2 bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors duration-300"
                    >
                      <img
                        src="/images/marketplace/tokopedia.svg"
                        alt="Tokopedia Logo"
                        className="w-6 h-6"
                      />
                      <span>Buy on Tokopedia</span>
                    </a>
                    {/* Tombol Shopee */}
                    <a
                      href={merch.shoopeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-2 bg-orange-400 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors duration-300"
                    >
                      <img
                        src="/images/marketplace/shopee.png"
                        alt="Shopee Logo"
                        className="w-6 h-6"
                      />
                      <span>Buy on Shopee</span>
                    </a>
                  </div>
                </div>
                {/* Judul, Ukuran, dan Harga */}
                <div className="p-6 space-y-2">
                  <h3 className="text-lg font-semibold text-white line-clamp-2 group-hover:text-blue-400 transition-colors duration-300 text-center">
                    {merch.title}
                  </h3>
                  <p className="text-sm text-gray-300 text-center">{merch.size}</p>
                  <p className="text-base font-bold text-blue-400 text-center">{merch.price}</p>
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

export default Merchandise;