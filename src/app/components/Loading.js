// src/components/Loading.js
import Image from 'next/image';

export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-purple-500 bg-opacity-75 z-50">
      <div className="animate-pulse">
        <Image
          src="/images/dash.WEBP" // Path ke gambar loading
          alt="Loading..."
          width={100} // Sesuaikan ukuran gambar
          height={100}
          unoptimized // Jika gambar GIF, tambahkan ini
        />
      </div>
    </div>
  );
}