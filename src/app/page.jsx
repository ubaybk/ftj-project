"use client";
import { useState, useEffect } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Loading from "./components/Loading";
import SidebarMenu from "./components/SidebarMenu";
import Navbar from "./components/Navbar";
import contentfullMedia from "@/contentful/contentfullMedia";
import Footer from "./components/Footer";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [carouselData, setCarouselData] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Popup state — selalu tampilkan saat data ada
  const [popupData, setPopupData] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  // Fetch carousel (musicVideo)
  useEffect(() => {
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
            image: imageAsset?.fields?.file?.url
              ? `https:${imageAsset.fields.file.url}`
              : null,
            youtubeUrl: item.fields.linkYt,
          };
        });

        setCarouselData(entries);
        setIsLoading(false);
      } catch (err) {
        console.error("Error fetching carousel data:", err);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  // Fetch popup (popUp) — TAMPILKAN SETIAP KALI
  useEffect(() => {
    const fetchPopup = async () => {
      try {
        const popupResponse = await contentfullMedia.getEntries({
          content_type: "popUp",
          limit: 1,
        });

        if (popupResponse.items.length > 0) {
          const item = popupResponse.items[0];
          const imageAsset = popupResponse.includes?.Asset?.find(
            (asset) => asset.sys.id === item.fields.popUpImg?.sys?.id
          );

          const popup = {
            judul: item.fields.popUpJudul, // rich text object
            url: item.fields.popUpUrl || "#",
            image: imageAsset?.fields?.file?.url
              ? `https:${imageAsset.fields.file.url}`
              : null,
          };

          setPopupData(popup);
          setShowPopup(true); // langsung tampilkan
        }
      } catch (err) {
        console.error("Error fetching popup:", err);
      }
    };

    fetchPopup();
  }, []);

  // Auto-slide carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === carouselData.length - 1 ? 0 : prevSlide + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [carouselData]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === carouselData.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? carouselData.length - 1 : prevSlide - 1
    );
  };

  const closePopup = () => {
    setShowPopup(false);
    // TIDAK ADA localStorage — popup akan muncul lagi saat refresh
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div
      className="min-h-screen bg-cover bg-center relative"
      style={{ backgroundImage: "url('/images/bgFtj.jpg')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      <div className="relative z-10">
        <div className="relative w-full h-96 overflow-hidden rounded-lg shadow-md mx-auto max-w-4xl">
          {carouselData.map((item, index) => (
            <a
              key={index}
              href={item.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`absolute w-full h-full transition-transform duration-500 ease-in-out ${
                index === currentSlide ? "translate-x-0" : "translate-x-full"
              }`}
            >
              <img
                src={item.image || "/images/default.jpg"}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 text-white text-lg font-bold bg-black bg-opacity-50 px-4 py-2 rounded">
                {item.title}
              </div>
            </a>
          ))}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
          >
            &lt;
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
          >
            &gt;
          </button>
        </div>
      </div>

      <div className="relative z-10 mt-8 px-8">
        <h2 className="text-white text-3xl font-bold mb-4">WHO WE ARE</h2>
        <p className="text-white text-lg mb-8">
          "Family to Jannah (FTJ) is a unique group of family who uses their
          musical talents to spread kindness, empathy, and love to children and
          families around the world. Through their harmonious voices, they
          create and sing uplifting songs that promote positive values and
          inspire young hearts to be good friends to one another. Spreading
          Dawah and Islamic values including awareness about Palestine through
          music. With a focus on providing high-quality content, FTJ strives to
          create music that is both entertaining and educational, serving as a
          positive role model for families , especially for children, to look up
          to and learn from."
        </p>
      </div>

      <div className="relative z-10 py-8">
        <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
          <img
            src="/images/photo1.jpg"
            alt="Family To Jannah 1"
            className="w-full md:w-1/3 rounded-lg shadow-md object-cover h-64 transform transition duration-500 hover:scale-105"
          />
          <img
            src="/images/photo2.jpg"
            alt="Family To Jannah 2"
            className="w-full md:w-1/3 rounded-lg shadow-md object-cover h-64 transform transition duration-500 hover:scale-105"
          />
          <img
            src="/images/photo3.jpg"
            alt="Family To Jannah 3"
            className="w-full md:w-1/3 rounded-lg shadow-md object-cover h-64 transform transition duration-500 hover:scale-105"
          />
        </div>
      </div>

      <SidebarMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Footer />

      {/* POPUP MODAL — MUNCUL SETIAP KALI HALAMAN DIMUAT */}
      {showPopup && popupData && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
          <div className="relative bg-white rounded-lg shadow-xl max-w-md w-full mx-4 p-6">
            <button
              onClick={closePopup}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl"
            >
              &times;
            </button>

            {popupData.image && (
              <img
                src={popupData.image}
                alt="Popup"
                className="w-full h-auto rounded-md mb-4"
              />
            )}

           {popupData.judul && (
 <div className="mb-4 text-gray-800 space-y-1 text-sm leading-tight">
  {documentToReactComponents(popupData.judul)}
</div>
)}

            {popupData.url && popupData.url !== "#" && (
              <a
                href={popupData.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
              >
                Selengkapnya
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
}