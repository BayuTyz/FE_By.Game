import React from "react";
import { useNavigate } from "react-router-dom";
import img from "../../assets/bg HSR.jpg";
import ItemPembelian from "../Component_topup/items_Pembelian";
import ImputIdCard from "../Component_topup/idPlayer";
import PembayaranCard from "../Component_topup/pembayaran";

const Honkai_SR = () => {
  const navigation = useNavigate();

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
          <h2 className="mt-5 text-xl font-bold">Top Up Honkai: Star Rail</h2>
          <p className="mt-3 text-[13] font-light">
            By.Game menawarkan top up Honkai: Star Rail yang mudah, aman, dan
            instan.Pembayaran tersedia melalui QRIS, GoPay, dan DANA
          </p>
          <p className="mt-3 text-[13] font-light">
            Cukup masukkan user ID anda, Pilih jumlah Diamond yang ingin anda
            beli, pilih metode pembayaran yang anda inginkan, selesaikan
            pembayaran, dan Diamonds anda akan segera ditambahkan ke akun
            Honkai: Star Rail anda.
          </p>
        </div>
        <div className="col-span-2 ml-10">
          <div className="mb-16">
            <ImputIdCard
              title="Masukkan Id Player dan Pilih Server"
              placeholder="Masukkan User ID"
            />
          </div>
          <div className="mb-16">
            <ItemPembelian
              title="Pilih Jumlah Oneiric Shard"
              data={[
                {
                  img: "Shard/O_Shard.png",
                  name_items: "60 Shards",
                  harga: "Rp 16.000",
                },
                {
                  img: "Shard/O_Shard.png",
                  name_items: "300 Shards",
                  harga: "Rp 79.000",
                },
                {
                  img: "Shard/O_Shard.png",
                  name_items: "980 Shards",
                  harga: "Rp 249.000",
                },
                {
                  img: "Shard/O_Shard.png",
                  name_items: "1980 Shards",
                  harga: "Rp 479.000",
                },
                {
                  img: "Shard/O_Shard.png",
                  name_items: "3280 Shards",
                  harga: "Rp 799.000",
                },
                {
                  img: "Shard/O_Shard.png",
                  name_items: "6480 Shards",
                  harga: "Rp 1.599.000",
                },
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

export default Honkai_SR;
