import React from "react";
import { useNavigate } from "react-router-dom";
import img from "../../assets/bg_ml.png";
import ItemPembelian from "../Component_topup/items_Pembelian";
import ImputIdCard from "../Component_topup/idPlayer";
import PembayaranCard from "../Component_topup/pembayaran";

const Mobile_Legend = () => {
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
          <h2 className="mt-5 text-xl font-bold">Top Up Mobile Legend</h2>
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
              title="Pilih Jumlah Diamond"
              data={[
                {
                  img: "diamond/1ormore_MLBB_Diamonds.png",
                  name_items: "5 Diamonds",
                  harga: "Rp 2.000",
                },
                {
                  img: "diamond/1ormore_MLBB_Diamonds.png",
                  name_items: "12 Diamonds",
                  harga: "Rp 3.000",
                },
                {
                  img: "diamond/1ormore_MLBB_Diamonds.png",
                  name_items: "28 Diamonds",
                  harga: "Rp 7.000",
                },
                {
                  img: "diamond/50ormore_MLBB_Diamonds.png",
                  name_items: "50 Diamonds",
                  harga: "Rp 12.000",
                },
                {
                  img: "diamond/50ormore_MLBB_Diamonds.png",
                  name_items: "85 Diamonds",
                  harga: "Rp 22.000",
                },
                {
                  img: "diamond/150orMore_MLBB_Diamonds.png",
                  name_items: "170 Diamonds",
                  harga: "Rp 50.000",
                },
                {
                  img: "diamond/150orMore_MLBB_Diamonds.png",
                  name_items: "250 Diamonds",
                  harga: "Rp 65.000",
                },
                {
                  img: "diamond/500orMore_MLBB_Diamonds.png",
                  name_items: "500 Diamonds",
                  harga: "Rp 120.000",
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

export default Mobile_Legend;
