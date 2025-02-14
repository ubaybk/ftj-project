// src/components/Loading.js
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Loading() {
  // State untuk mengontrol apakah loading masih berlangsung
  const [isLoading, setIsLoading] = useState(true);

  // Efek untuk menunda loading selama 3 detik
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Setelah 3 detik, ubah state menjadi false
    }, 5000); // 3000 ms = 3 detik

    // Membersihkan timer jika komponen dibongkar
    return () => clearTimeout(timer);
  }, []);

  // Jika loading selesai, tampilkan pesan "Loaded"
  if (!isLoading) {
    return <div className="text-center text-2xl font-bold">Loaded!</div>;
  }

  // Tampilan saat loading masih berlangsung
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
        className="absolute inset-0 bg-black opacity-90" // Redupan lebih kuat
      ></div>

      {/* Konten loading di tengah layar */}
      <div className="relative z-10 text-center animate-pulse">
        <Image
          src="/images/logoFTJ.png" // Path ke gambar loading
          alt="Loading..."
          width={100} // Sesuaikan ukuran gambar
          height={100}
          unoptimized // Jika gambar GIF, tambahkan ini
        />
        {/* Teks Loading */}
        <p className="mt-4 text-white text-lg font-semibold">Loading...</p>
      </div>
    </div>
  );
}