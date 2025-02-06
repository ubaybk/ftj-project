import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const PhotoCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const photos = [
    { src: '/images/photo1.jpg', alt: 'Family To Jannah 1' },
    { src: '/images/photo2.jpg', alt: 'Family To Jannah 2' },
    { src: '/images/photo3.jpg', alt: 'Family To Jannah 3' }
  ];

  const nextPhoto = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % photos.length
    );
  };

  const prevPhoto = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex - 1 + photos.length) % photos.length
    );
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Carousel Container */}
      <div className="relative overflow-hidden rounded-lg shadow-lg">
        {/* Foto Aktif */}
        <img 
          src={photos[currentIndex].src} 
          alt={photos[currentIndex].alt}
          className="w-full h-96 object-cover transition-all duration-500 ease-in-out"
        />

        {/* Tombol Navigasi */}
        <button 
          onClick={prevPhoto} 
          className="absolute top-1/2 left-4 transform -translate-y-1/2 
                     bg-white/50 rounded-full p-2 hover:bg-white/75 
                     transition-all duration-300"
        >
          <ChevronLeft className="text-black" />
        </button>
        <button 
          onClick={nextPhoto} 
          className="absolute top-1/2 right-4 transform -translate-y-1/2 
                     bg-white/50 rounded-full p-2 hover:bg-white/75 
                     transition-all duration-300"
        >
          <ChevronRight className="text-black" />
        </button>
      </div>

      {/* Indikator Foto */}
      <div className="flex justify-center mt-4 space-x-2">
        {photos.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex 
                ? 'bg-blue-600' 
                : 'bg-gray-300 hover:bg-gray-400'
            } transition-all duration-300`}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoCarousel;