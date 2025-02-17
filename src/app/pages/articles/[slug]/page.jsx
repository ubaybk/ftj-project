"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import contentfullMedia from "@/contentful/contentfullMedia";
import Navbar from "@/app/components/Navbar";
import { ArrowLeft } from "lucide-react";
import Footer from "@/app/components/Footer";

const DetailArticles = () => {
  const router = useRouter();
  const { slug } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const fetchArticle = async () => {
      if (!slug) return;
      try {
        const response = await contentfullMedia.getEntries({
          content_type: "articles",
          "fields.slug": slug,
        });

        if (!response.items || response.items.length === 0) {
          throw new Error("Article not found");
        }

        const item = response.items[0];
        setArticle({
          title: item.fields.articlesTitle || null,
          image: item.fields.imgArticles?.fields?.file?.url || "/images/default.jpg",
          content: item.fields.content || null,
        });
      } catch (err) {
        setError(err.message || "An error occurred.");
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-8 w-8 border-4 border-t-blue-500 border-b-blue-500 rounded-full animate-spin mb-4" />
          <div className="text-white text-lg">Loading article...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="bg-red-500 text-white px-6 py-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-2">Error</h2>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-gray-900">
      {/* Background with overlay */}
      <div
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/bgFtj.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      </div>

      {/* Content */}
      <div className="relative z-20">
        <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        
        <main className="container mx-auto px-4 py-8 max-w-4xl">
          {/* Back Button */}
          <button
            onClick={() => router.back()}
            className="mb-6 flex items-center gap-2 text-white hover:text-blue-400 transition-colors duration-200"
          >
            <ArrowLeft size={20} />
            <span>Back</span>
          </button>

          {/* Article Content */}
          <article className="bg-gray-800/50 rounded-xl shadow-xl backdrop-blur-sm p-6 md:p-8">
            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">
              {article.title ? documentToReactComponents(article.title) : "Untitled Article"}
            </h1>

            {/* Featured Image */}
            {article.image && (
              <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
                <img
                  src={article.image}
                  alt="Article Cover"
                  className="w-full h-64 md:h-96 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            )}

            {/* Content */}
            <div className="prose prose-lg prose-invert max-w-none text-white">
              {article.content ? (
                documentToReactComponents(article.content)
              ) : (
                <p className="text-gray-300 italic">No content available.</p>
              )}
            </div>
          </article>
        </main>
      </div>
      <Footer/>
    </div>
  );
};

export default DetailArticles;