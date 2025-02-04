"use client"; // Pastikan menggunakan 'use client' untuk menggunakan hooks
import { useState, useEffect } from "react";
import Loading from "./components/Loading";
import SidebarMenu from "./components/SidebarMenu";

import Navbar from "./components/Navbar";


export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State untuk hamburger menu

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Handler untuk toggle menu
  

  return (
    <div
      className="min-h-screen bg-cover bg-center relative"
      style={{ backgroundImage: "url('/images/bgFtj.jpg')" }}
    >
      {/* Overlay gelap */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Header dengan efek blur dan transparan */}
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
     

      {/* Hero Section */}
      <div className="relative z-10 mt-8 p-8">
        {/* Judul Hero Section */}
        <h2 className="text-white text-3xl font-bold mb-4">WHO WE ARE</h2>

        {/* Deskripsi */}
        <p className="text-white text-lg mb-8">
          Family to Jannah (FTJ) is a unique group of family who use their
          musical talents to spread kindness, empathy, and love to children and
          families around the world. Through their harmonious voices, they
          create and sing uplifting songs that promote positive values and
          inspire young hearts to be good friends to one another. Spreading
          Dakwah and Islamic values including awareness about Palestine through
          music. With a focus on providing high-quality content, FTJ strives to
          create music that is both entertaining and educational, serving as a
          positive role model for children to look up to and learn from.
        </p>

        {/* Gambar dalam Layout Horizontal */}
        <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
          {/* Gambar 1 */}
          <img
            src="/images/photo1.jpg"
            alt="Family To Jannah 1"
            className="w-full md:w-1/3 rounded-lg shadow-md object-cover h-64"
          />
          {/* Gambar 2 */}
          <img
            src="/images/photo2.jpg"
            alt="Family To Jannah 2"
            className="w-full md:w-1/3 rounded-lg shadow-md object-cover h-64"
          />
          {/* Gambar 3 */}
          <img
            src="/images/photo3.jpg"
            alt="Family To Jannah 3"
            className="w-full md:w-1/3 rounded-lg shadow-md object-cover h-64"
          />
        </div>
      </div>

      {/* Gunakan komponen SidebarMenu */}
      <SidebarMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </div>
  );
}
