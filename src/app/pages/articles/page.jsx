"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/app/components/Navbar";
import contentfullMedia from "@/contentful/contentfullMedia";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-900">
    <div className="w-16 h-16 border-4 border-blue-500 rounded-full border-t-transparent animate-spin" />
  </div>
);

const Articles = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const fetchData = async () => {
      try {
        const response = await contentfullMedia.getEntries({
          content_type: "articles",
        });

        if (!response.items || response.items.length === 0) {
          throw new Error("No data found in Contentful");
        }

        const entries = response.items.map((item) => ({
          title: item.fields.articlesTitle?.content?.[0]?.content?.[0]?.value || "No Title",
          image: item.fields.imgArticles?.fields?.file?.url || "/images/default.jpg",
          slug: item.fields.slug || "",
          content: item.fields.content || null, // Simpan sebagai objek Rich Text
        }));

        setArticles(entries);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError(err.message || "An error occurred.");
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
              Articles
            </h1>
            <p className="text-xl max-w-3xl mx-auto text-gray-200">
              Discover insightful articles from Family to Jannah
            </p>
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {articles.map((article, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={`/pages/articles/${article.slug}`}
                  className="block bg-white/10 backdrop-blur-md rounded-xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20"
                >
                  <div className="relative p-4 flex justify-center items-center bg-black/20">
                    <div className="w-full max-w-[250px] mx-auto aspect-square overflow-hidden rounded-lg">
                      <motion.img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                  <div className="p-6">
                    <h2 className="text-lg font-semibold text-white line-clamp-2 group-hover:text-blue-400 transition-colors duration-300">
                      {article.title}
                    </h2>
                    {/* Perbaikan: Hapus <p> wrapper */}
                    <div className="text-sm text-gray-300 mt-2 line-clamp-3">
                      {article.content ? (
                        documentToReactComponents(article.content)
                      ) : (
                        <span>No description available.</span>
                      )}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatePresence>
    </div>
  );
};

export default Articles;