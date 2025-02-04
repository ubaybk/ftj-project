"use client"; // Pastikan menggunakan 'use client' karena menggunakan state

import { GiHamburgerMenu } from "react-icons/gi";

export default function SidebarMenu({ isMenuOpen, setIsMenuOpen }) {
  return (
    <>
      {/* Overlay untuk menutup menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
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
            <li className="mb-2 cursor-pointer">Member</li>
          </ul>
        </div>
      </div>
    </>
  );
}