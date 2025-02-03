// app/page.jsx
'use client'; // Pastikan menggunakan 'use client' untuk menggunakan hooks

import { useState, useEffect } from 'react';
import Loading from './components/Loading';


export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
    className="min-h-screen bg-cover bg-center relative" 
    style={{ backgroundImage: "url('/images/bgFtj.jpg')" }}
  >
    {/* Overlay gelap */}
    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
  
    {/* Konten di atas overlay */}
    <div className="relative z-10 p-8">
      <h1 className="text-white text-4xl font-bold">Welcome to My Music App</h1>
      <p className="text-white mt-4">Enjoy your favorite music!</p>
    </div>
  </div>
  );
}