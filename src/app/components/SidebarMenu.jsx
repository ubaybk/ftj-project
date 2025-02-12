"use client";

import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { motion } from "framer-motion";
import { useState } from "react";

export default function SidebarMenu({ isMenuOpen, setIsMenuOpen }) {
  const menuItems = [
    { title: "Home", path: "/" },
    { title: "About", path: "/pages/about" },
    { title: "Contact", path: "/pages/contact" },
    { title: "Member", path: "/pages/members" },
    { title: "Media & Collaborations", path: "/pages/mediaCollaboration" },
  ];

  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <>
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 transition-all duration-300"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-72 bg-gradient-to-b from-white to-gray-50 shadow-2xl z-40 transform transition-all duration-500 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 h-full">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Menu
            </h2>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <nav className="space-y-2">
            {menuItems.map((item, index) => (
              <Link href={item.path} key={index}>
                <div
                  className="relative w-full"
                  onMouseEnter={() => setHoveredItem(index)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <div
                    className={`p-3 rounded-lg transition-all duration-300 cursor-pointer relative z-10 ${
                      hoveredItem === index
                        ? "text-white"
                        : "text-gray-700 hover:text-gray-900"
                    }`}
                  >
                    {hoveredItem === index && (
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg -z-10 animate-fade-in" />
                    )}
                    {item.title}
                  </div>
                </div>
              </Link>
            ))}
          </nav>

          <div className="absolute bottom-8 left-6 right-6">
            <div className="p-4 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 border border-gray-100">
              <p className="text-sm text-gray-600 font-medium">
                Need help? Contact us
              </p>
              <p className="text-xs text-gray-500 mt-1">
                support@yourwebsite.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}