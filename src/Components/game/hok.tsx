import React from "react";
import { useNavigate } from "react-router-dom";
import img from "../../assets/bg_hok.png";
import ItemPembelian from "../Component_topup/items_Pembelian";
import ImputIdCard from "../Component_topup/idPlayer";
import PembayaranCard from "../Component_topup/pembayaran";

const Honor_OfKings = () => {
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
          <h2 className="mt-5 text-xl font-bold">Top Up Honor Of Kings</h2>
          <p className="mt-3 text-[13] font-light">
            By.Game menawarkan top up Mobile Legend yang mudah, aman, dan
            instan.Pembayaran tersedia melalui QRIS, GoPay, dan DANA
          </p>
          <p className="mt-3 text-[13] font-light">
            Cukup masukkan user ID anda, Pilih jumlah Diamond yang ingin anda
            beli, pilih metode pembayaran yang anda inginkan, selesaikan
            pembayaran, dan Diamonds anda akan segera ditambahkan ke akun Mobile
            Legend anda.
          </p>
        </div>
        <div className="col-span-2 ml-10">
          <div className="mb-16">
            <ImputIdCard
              title="Masukkan Id Player dan Id Zone"
              placeholder="Masukkan User ID"
            />
          </div>
          <div className="mb-16">
            <ItemPembelian
              title="Pilih Jumlah Token"
              data={[
                {
                  img: "Token/token hok.png",
                  name_items: "8 Token",
                  harga: "Rp 1.600",
                },
                {
                  img: "Token/token hok 2.png",
                  name_items: "16 Token",
                  harga: "Rp 3.200",
                },
                {
                  img: "Token/token hok 3.png",
                  name_items: "24 Token",
                  harga: "Rp 4.500",
                },
                {
                  img: "Token/token hok 4.png",
                  name_items: "80 Diamonds",
                  harga: "Rp 16.000",
                },
                {
                  img: "Token/token hok 5.png",
                  name_items: "240 Token",
                  harga: "Rp 47.000",
                },
                {
                  img: "Token/token hok 5.png",
                  name_items: "400 Token",
                  harga: "Rp 80.000",
                },
                {
                  img: "Token/token hok 6.png",
                  name_items: "560 Token",
                  harga: "Rp 109.000",
                },
                {
                  img: "Token/token hok 6.png",
                  name_items: "1200 Token",
                  harga: "Rp 235.000",
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

export default Honor_OfKings;
