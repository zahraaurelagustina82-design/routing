import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-3xl font-bold text-gray-900 mb-3">Selamat Datang di <span className="text-blue-500">TokoOnlineKu</span></h1>
      <h2 className="text-3xl font-bold text-gray-900 mb-3">Silakan pilih menu <span className="font-medium">Katalog Produk</span> untuk melihat produk yang tersedia.</h2>
      <span className="text-gray-600 text-lg leading-relaxed mb-6">Temukan berbagai macam produk pilihan terbaik hanya disini</span>
    </div>
  );
}
