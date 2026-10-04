import { produkList } from '@/data/produk';
import Link from 'next/link';

const DetailProdukPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const produk = produkList.find((item) => item.id === Number(id));

  if (!produk) {
    return <h2 className="text-xl font-bold text-red-500">Produk tidak ditemukan!</h2>;
  }
  return (
    <div>
      <Link href="/produk" className="text-black hover:text-blue-600 underline">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
        </svg>
      </Link>
      <div className="mt-5 flex gap-5">
        <img 
          src={produk.gambar} 
          alt={produk.nama} 
          className="w-90 h-90 object-cover rounded-lg" 
        />
        <div>
          <h1 className="text-blue-500 text-3xl font-bold">{produk.nama}</h1>
          <p className="text-gray-700 mb-3 text-lg">{produk.deskripsi}</p>
          <p className="text-sm text-gray-500 mb-3">Stok: {produk.stok}</p>
          <h2 className="text-2xl text-blue-950 font-bold my-2">Rp {produk.harga.toLocaleString('id-ID')}</h2>
          <button className="px-5 py-2.5 bg-blue-500 text-white border-none cursor-pointer rounded-lg">
            Beli Sekarang
          </button>
        </div>
      </div>
    </div>
  );
}
export default DetailProdukPage;