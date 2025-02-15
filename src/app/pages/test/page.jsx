"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import contentfullMedia from "@/contentful/contentfullMedia";

const Articles = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
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
        }));

        console.log("Mapped Entries:", entries);
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

  if (loading) return <div className="text-white text-center">Loading...</div>;
  if (error) return <div className="text-red-500 text-center">{error}</div>;

  return (
    <div className="min-h-screen bg-cover bg-center relative" style={{ backgroundImage: "url('/images/bgFtj.jpg')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      <div className="relative z-10 p-8">
        <h1 className="text-4xl font-bold text-white mb-6 text-center">Articles</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <Link
              key={index}
              href={`/pages/articles/${article.slug}`} // Perbaiki path slug
              className="bg-white text-black rounded-lg shadow-md overflow-hidden transition duration-300 hover:shadow-lg block"
            >
              {article.image && (
                <img src={article.image} alt={`Article ${index + 1}`} className="w-full h-48 object-cover" />
              )}
              <div className="p-4">
                <h2 className="text-lg font-semibold mb-2">{article.title}</h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Articles;
