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

      {/* Header dengan efek blur dan transparan */}
      <div
        className="relative z-10 p-4 flex justify-between items-center backdrop-blur-md bg-black bg-opacity-50 rounded-lg"
      >
        {/* Logo atau Judul */}
        <div>
          <h1 className="text-white text-2xl font-bold">
            Family To Jannah
          </h1>
          
        </div>

        {/* Hamburger menu */}
        <div
          className="text-white text-4xl cursor-pointer md:hidden"
          onClick={toggleMenu}
        >
          <GiHamburgerMenu />
        </div>
      </div>

      {/* Sidebar menu dengan slide horizontal */}
      {isMenuOpen && (
        <>
          {/* Overlay untuk menutup menu */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-30"
            onClick={() => setIsMenuOpen(false)}
          ></div>

          {/* Sidebar */}
          <div
            className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-40 transform transition-transform duration-300 ${
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="p-4">
              <h2 className="text-xl font-bold mb-4">Menu</h2>
              <ul>
                <li className="mb-2 cursor-pointer">Home</li>
                <li className="mb-2 cursor-pointer">About</li>
                <li className="mb-2 cursor-pointer">Contact</li>
              </ul>
            </div>
          </div>
        </>
      )}
    </div>
  );
}