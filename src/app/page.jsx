"use client"; // Pastikan menggunakan 'use client' untuk menggunakan hooks
import { useState, useEffect } from "react";
import Loading from "./components/Loading";
import { GiHamburgerMenu } from "react-icons/gi";

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
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center relative"
      style={{ backgroundImage: "url('/images/bgFtj.jpg')" }}
    >
      {/* Overlay gelap */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Konten di atas overlay */}
      <div className="relative z-10 p-8 flex justify-between">
        <div>
          <h1 className="text-white text-2xl font-bold">
            Welcome to Family To Jannah
          </h1>
          <p className="text-white mt-4">Enjoy your favorite music!</p>
        </div>
        <div className="text-white text-4xl cursor-pointer md:hidden" onClick={toggleMenu}>
          <GiHamburgerMenu />
        </div>
      </div>

      {/* Menu dropdown */}
      {isMenuOpen && (
        <div className="absolute top-20 right-8 bg-white text-black p-4 rounded shadow-lg z-20">
          <ul>
            <li className="mb-2 cursor-pointer">Home</li>
            <li className="mb-2 cursor-pointer">About</li>
            <li className="mb-2 cursor-pointer">Contact</li>
          </ul>
        </div>
      )}
    </div>
  );
}