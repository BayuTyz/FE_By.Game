import React, { useEffect, useState } from "react"; // Import useEffect dan useState
import { useNavigate } from "react-router-dom";
import img from "../../assets/bg_ff.png";
import ItemPembelian from "../Component_topup/items_Pembelian";
import ImputIdCard from "../Component_topup/idPlayer";
import PembayaranCard from "../Component_topup/pembayaran";

const Free_Fire = () => {
  const navigation = useNavigate();
  const [produk, setProduk] = useState([]); // State untuk menyimpan data produk

  useEffect(() => {
    const fetchProduk = async () => {
      try {
        const response = await fetch(
          "/https://px973nrz-3002.asse.devtunnels.ms/tampil_prdct/:gameId');"
        ); // Ganti 1 dengan gameId yang sesuai
        if (!response.ok) {
          throw new Error("Gagal memuat produk");
        }
        const data = await response.json();
        setProduk(data.data); // Mengambil data produk dari response
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProduk(); // Panggil fungsi untuk mengambil produk
  }, []); // Dependency array kosong agar hanya dijalankan saat pertama kali render

  return (
    <div className="flex mt-20 flex-col items-right justify-center font-Alegreya Sans font-bold text-[#FAF9F0]">
      <div className="flex text-[36px] leading-[60px] uppercase">
        <button onClick={() => navigation("/")}>
          <img src="back.png" alt="" />
        </button>
        <h1 className=""> Top Up</h1>
      </div>
      <div className="grid grid-flow-row-col grid-cols-3 gap-4 mt-10">
        <div className="ml-5 col-span-1 flex flex-col">
          <img src={img} alt="" />
          <h2 className="mt-5 text-xl font-bold">Free Fire</h2>
          <p className="mt-3 text-[13] font-light">
            By.Game menawarkan top up Free Fire yang mudah, aman, dan
            instan.Pembayaran tersedia melalui QRIS, GoPay, dan DANA
          </p>
          <p className="mt-3 text-[13] font-light">
            Cukup masukkan user ID anda, Pilih jumlah Diamond yang ingin anda
            beli, pilih metode pembayaran yang anda inginkan, selesaikan
            pembayaran, dan Diamonds anda akan segera ditambahkan ke akun Free
            Fire.
          </p>
        </div>
        <div className="col-span-2 ml-10">
          <div className="mb-16">
            <ImputIdCard
              title="Masukkan User ID"
              placeholder="Masukkan User ID"
            />
          </div>
          <div className="mb-16">
            <ItemPembelian
              title="Pilih Jumlah Diamond"
              data={[
                ...produk.map((item) => ({
                  img: "diamond/Freefire_diamonds.png", // Ganti ini jika ada atribut gambar di produk
                  name_items: item.name_product, // Menggunakan nama produk dari API
                  harga: item.items_price, // Menggunakan harga dari API
                })),
              ]}
            />
          </div>
          <div className="mb-16">
            <PembayaranCard
              title="Pilih Metode Pembayaran"
              data={[
                {
                  img: "gopay.png",
                  name_items: "Bayar Mengunakan Gopay",
                },
                {
                  img: "dana.png",
                  name_items: "Bayar Mengunakan Dana",
                },
                {
                  img: "qris.png",
                  name_items: "Bayar Mengunakan QRIS",
                },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Free_Fire;
