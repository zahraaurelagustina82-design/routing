export interface Produk {
  id: number;
  nama: string;
  harga: number;
  stok: number;
  deskripsi: string;
  gambar: string;
}
export const produkList: Produk[] = [
    {
        id: 1,
        nama: "Topi Baret Motif Kotak-Kotak",
        harga: 85000,
        stok: 10,
        deskripsi: "Topi baret berpenutup telinga dengan motif kotak-kotak klasik yang hangat dan stylish untuk outfit harian.",
        gambar: "/images/topi.jpg"
    },
    {
        id: 2,
        nama: "Jam Dinding Bentuk Kucing",
        harga: 65000,
        stok: 7,
        deskripsi: "Jam dinding dekoratif berbentuk karakter kucing lucu dengan ekor unik, cocok untuk menghias dinding kamar.",
        gambar: "/images/jamDinding.jpg"
    },
    {
        id: 3,
        nama: "Tas Selempang Pastel Mini",
        harga: 95000,
        stok: 12,
        deskripsi: "Tas selempang kasual kombinasi warna pastel yang menggemaskan, dilengkapi gantungan lucu untuk jalan-jalan.",
        gambar: "/images/tas.jpg"
    },
    {
        id: 4,
        nama: "Lampu Meja Klasik Pink",
        harga: 120000,
        stok: 9,
        deskripsi: "Lampu meja tidur dengan kap warna pink berdesain klasik yang memberikan pencahayaan hangat dan nyaman di kamar.",
        gambar: "/images/lampu.jpg"
    },
    {
        id: 5,
        nama: "Kipas Angin Mini Portable",
        harga: 45000,
        stok: 4,
        deskripsi: "Kipas angin genggam karakter lucu yang praktis dibawa bepergian, bisa diisi ulang menggunakan kabel USB.",
        gambar: "/images/kipas.jpg"
    },
    {
        id: 6,
        nama: "Tumbler Stainless Steel Pastel",
        harga: 85000,
        stok: 10,
        deskripsi: "Botol minum thermal pastel lengkap dengan tali strap dan aksesori gantungan, menjaga suhu minuman tetap dingin atau hangat.",
        gambar: "/images/tumbler.jpg"
    },
    {
        id: 7,
        nama: "Piring Keramik Keramik Vintage",
        harga: 55000,
        stok: 23,
        deskripsi: "Piring makan keramik dengan motif bunga ala vintage, cocok untuk menyajikan makanan manis atau estetika foto produk.",
        gambar: "/images/piring.jpg"
    },
    {
        id: 8,
        nama: "Sepatu Flat Polkadot Retro",
        harga: 135000,
        stok: 40,
        deskripsi: "Sepatu flat mary jane motif polkadot klasik dengan strap gesper ganda yang nyaman dan fleksibel dipakai harian.",
        gambar: "/images/sepatu.jpg"
    },
    {
        id: 9,
        nama: "Vas Bunga Teko Shabby Chic",
        harga: 75000,
        stok: 20,
        deskripsi: "Vas bunga unik berbentuk teko penyiram tanaman bergaya shabby chic untuk mempercantik meja tamu atau jendela.",
        gambar: "/images/vasbunga.jpg"
    },
    {
        id: 10,
        nama: "Meja Nakas Minimalis European Style",
        harga: 450000,
        stok: 8,
        deskripsi: "Meja nakas samping tempat tidur dengan 3 laci bertema klasik Eropa, cocok untuk menyimpan barang berharga dan dekorasi kamar.",
        gambar: "/images/lacikecil.jpg"
    },
    {
        id: 11,
        nama: "Casing HP Motif Kucing Striped",
        harga: 35000,
        stok: 15,
        deskripsi: "Casing pelindung handphone dengan motif garis-garis dan gambar kucing tidur yang lucu, bahan silikon lentur dan tahan benturan.",
        gambar: "/images/caseHP.jpg"
    },
    {
        id: 12,
        nama: "Cangkir Keramik Motif Kotak Pastel",
        harga: 65000,
        stok: 22,
        deskripsi: "Set cangkir teh dan tatakan keramik dengan bentuk unik serta motif kotak-kotak pastel aesthetic untuk menemani waktu santai.",
        gambar: "/images/mug.jpg"
    },
];