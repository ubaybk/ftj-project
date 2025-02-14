// src/components/Loading.js
import Image from 'next/image';

export default function Loading() {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50"
      style={{
        backgroundImage: "url('/images/bgFtj.jpg')", // Path ke gambar background
        backgroundSize: 'cover', // Menutupi seluruh area
        backgroundPosition: 'center', // Memusatkan gambar
        backgroundRepeat: 'no-repeat', // Tidak mengulang gambar
      }}
    >
      {/* Overlay untuk meredupkan gambar */}
      <div
        className="absolute inset-0 bg-black opacity-90"
      ></div>

      {/* Konten loading di tengah layar */}
      <div className="relative z-10 animate-pulse">
        <Image
          src="/images/logoFTJ.png" // Path ke gambar loading
          alt="Loading..."
          width={100} // Sesuaikan ukuran gambar
          height={100}
          unoptimized // Jika gambar GIF, tambahkan ini
        />
         <p className="mt-4 text-white text-lg font-semibold text-center">Loading...</p>
      </div>
    </div>
  );
}