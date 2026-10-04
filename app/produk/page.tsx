import Link from 'next/link';
import { produkList } from '@/data/produk';

export default function ListProdukPage() {
    return (
    <div className="flex flex-col gap-5">
        <h1 className="text-blue-500 text-4xl font-bold">Daftar Produk</h1>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
            {produkList.map((item) => (
            <div key={item.id} className="ooverflow-hidden rounded-2xl border border-blue-100 bg-white p-4 shadow-sm flex flex-col justify-between h-full">
                <img
                src={item.gambar}
                alt={item.nama}
                className="h-52 w-full object-contain"
                />
                <div className="p-7">
                    <h3 className="text-blue-500 text-xl font-semibold mt-2 line-clamp-2 h-14 flex items-center">{item.nama}</h3>
                    <p className="text-sm text-gray-600 my-3 line-clamp-2 h-10">{item.deskripsi.substring(0, 50)}...</p>
                    <p className="text-blue-950 font-bold text-2xl my-1">Rp {item.harga.toLocaleString('id-ID')}</p>
                    <Link href={`/produk/${item.id}`} className="text-blue-500 font-medium text-sm">Lihat Detail</Link>
                </div>
            </div>
        ))}
      </div>
    </div>
  );
}