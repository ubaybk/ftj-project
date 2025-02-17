"use client";
import React from 'react';
import { 
  Instagram, Video, Music, Mail, MessageCircle, 
  Home, FileText, Phone, User, Users, PlayCircle, ShoppingCart, Store 
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative z-20 bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        {/* Logo and Description Section */}
        <div className="flex flex-col items-center mb-8 animate-fadeIn">
          <div className="mb-4 transform hover:scale-105 transition-transform duration-300 flex gap-3">
            <img
              src="/images/logoFtj.png"
              alt="Company Logo"
              className="h-12 w-auto"
            />
            <img
              src="/images/fontFtj.png"
              alt="Company Logo"
              className="h-12 w-auto"
            />
          </div>
          <p className="text-gray-200 text-center max-w-xl">
          Bringing happiness through children's music. Together, let's create little notes that bring big joy!
          </p>
        </div>
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Navigation Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold mb-4 pb-2 border-b border-purple-500 text-purple-300">
              Navigation
            </h3>
            <ul className="grid grid-cols-2 sm:grid-cols-2 gap-3">
              {[
                ['Home', '/', 'bg-blue-500', <Home size={20} />],
                ['Articles', '/pages/articles', 'bg-green-500', <FileText size={20} />],
                ['Contact', '/pages/contact', 'bg-yellow-500', <Phone size={20} />],
                ['Member', '/pages/members', 'bg-purple-500', <User size={20} />],
                ['Media & Collaborations', '/pages/mediaCollaboration', 'bg-pink-500', <Users size={20} />],
                ['Music & Video', '/pages/musicVideo', 'bg-indigo-500', <PlayCircle size={20} />],
                ['Merchandise', '/pages/merchandise', 'bg-red-500', <ShoppingCart size={20} />],
              ].map(([title, url, bgColor, icon]) => (
                <li key={title}>
                  <a 
                    href={url} 
                    className={`hover:text-white transition-all duration-300 flex items-center space-x-2 p-2 rounded-lg 
                              hover:translate-x-1 group relative overflow-hidden`}
                  >
                    <span className={`absolute inset-0 ${bgColor} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></span>
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full group-hover:scale-150 transition-transform duration-300"></span>
                    <span className="relative z-10">{icon}</span>
                    <span className="relative z-10">{title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Social Media Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold mb-4 pb-2 border-b border-purple-500 text-purple-300">
              Follow Us
            </h3>
            <ul className="grid grid-cols-2 sm:grid-cols-2 gap-3">
              {[
                ['Instagram', 'https://www.instagram.com', 'bg-pink-500', <Instagram size={20} />],
                ['TikTok', 'https://www.tiktok.com', 'bg-gray-600', <Video size={20} />],
                ['Spotify', 'https://open.spotify.com', 'bg-green-600', <Music size={20} />],
              ].map(([title, url, bgColor, icon]) => (
                <li key={title}>
                  <a 
                    href={url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`hover:text-white transition-all duration-300 flex items-center space-x-2 p-2 rounded-lg 
                              hover:translate-x-1 group relative overflow-hidden`}
                  >
                    <span className={`absolute inset-0 ${bgColor} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></span>
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full group-hover:scale-150 transition-transform duration-300"></span>
                    <span className="relative z-10">{icon}</span>
                    <span className="relative z-10">{title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Contact Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold mb-4 pb-2 border-b border-purple-500 text-purple-300">
              Contact Us
            </h3>
            <ul className="grid grid-cols-2 sm:grid-cols-2 gap-3">
              {[
                ['Email', 'mailto:familytojannah@gmail.com', 'bg-yellow-500', <Mail size={20} />],
                ['WhatsApp', 'https://wa.me/6289526603943', 'bg-green-500', <MessageCircle size={20} />],
              ].map(([title, url, bgColor, icon]) => (
                <li key={title}>
                  <a 
                    href={url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`hover:text-white transition-all duration-300 flex items-center space-x-2 p-2 rounded-lg 
                              hover:translate-x-1 group relative overflow-hidden`}
                  >
                    <span className={`absolute inset-0 ${bgColor} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></span>
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full group-hover:scale-150 transition-transform duration-300"></span>
                    <span className="relative z-10">{icon}</span>
                    <span className="relative z-10">{title}</span>
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-6 border-t border-purple-500">
              <h4 className="text-lg font-bold mb-4 text-purple-300">Marketplace</h4>
              <div className="flex flex-wrap gap-4">
                <a href="https://id.shp.ee/PVejyU1" target="_blank" rel="noopener noreferrer"
                   className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-700 text-white rounded-lg 
                            hover:shadow-lg hover:shadow-orange-500/50 transform hover:-translate-y-1 transition-all duration-300 flex items-center space-x-2">
                  <ShoppingCart size={20} className="text-white" />
                  <span>Shopee</span>
                </a>
                <a href="https://tokopedia.link/HRYMSL6T3Qb" target="_blank" rel="noopener noreferrer"
                   className="px-6 py-3 bg-gradient-to-r from-green-500 to-green-700 text-white rounded-lg 
                            hover:shadow-lg hover:shadow-green-500/50 transform hover:-translate-y-1 transition-all duration-300 flex items-center space-x-2">
                  <Store size={20} className="text-white" />
                  <span>Tokopedia</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Copyright Section */}
        <div className="mt-12 pt-8 border-t border-purple-500/30 text-center">
          <p className="text-gray-300">
            &copy; {new Date().getFullYear()} Family To Jannah. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;