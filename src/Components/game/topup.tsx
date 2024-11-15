import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import img from "../../assets/bg_hok.png"; // Ensure the path is correct
import ItemPembelianCard from "../Component_topup/items_Pembelian"; // Ensure the import path is correct
import ImputIdCard from "../Component_topup/idPlayer"; // Ensure the import path is correct
import PembayaranCard from "../Component_topup/pembayaran"; // Ensure the import path is correct

const TopUp = () => {
  const { gameId } = useParams(); // Ensure `gameId` is correctly retrieved from the URL
  const navigate = useNavigate();
  const [products, setProducts] = useState([]); // State for storing products
  const [gameTitle, setGameTitle] = useState("");
  const [gameImage, setGameImage] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://px973nrz-3002.asse.devtunnels.ms/games/tampil_prdct/${gameId}`
      )
      .then((response) => {
        const productsData = response.data.data.map(
          (product: { image: any; name_product: any; items_price: any }) => ({
            img: `https://px973nrz-3002.asse.devtunnels.ms/uploads/${product.image}`, // Check this URL structure
            name_items: product.name_product, // Ensure these keys match the API response
            harga: product.items_price,
          })
        );
        setProducts(productsData);
        if (response.data.data[0]?.games) {
          setGameTitle(response.data.data[0].games.title);
          setGameImage(
            `https://px973nrz-3002.asse.devtunnels.ms/${response.data.data[0].games.image}`
          );
        }
      })
      .catch(() => {
        setProducts([]); // Avoiding debug display as per your preference
      });
  }, [gameId]);

  return (
    <div className="flex mt-20 flex-col items-right justify-center font-Alegreya Sans font-bold text-[#FAF9F0]">
      <div className="flex text-[36px] leading-[60px] uppercase">
        <button onClick={() => navigate("/")}>
          <img src="back.png" alt="Back" />{" "}
          {/* Verify back.png is in the correct folder */}
        </button>
        <h1 className="">Top Up</h1>
      </div>
      <div className="grid grid-flow-row-col grid-cols-3 gap-4 mt-10">
        <div className="ml-5 col-span-1 flex flex-col">
          <img src={gameImage} alt="{gameTitle}" />{" "}
          {/* Check the image path for bg_hok.png */}
          <h2 className="mt-5 text-xl font-bold">Top Up {gameTitle}</h2>
          <p className="mt-3 text-[13] font-light">
            By.Game menawarkan top up {gameTitle} yang mudah, aman, dan instan.
            Pembayaran tersedia melalui QRIS, GoPay, dan DANA.
          </p>
          <p className="mt-3 text-[13] font-light">
            Cukup masukkan user ID anda, pilih jumlah Token yang ingin anda
            beli, pilih metode pembayaran yang anda inginkan, selesaikan
            pembayaran, dan Token anda akan segera ditambahkan ke {gameTitle}.
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
            <ItemPembelianCard
              title="Pilih Jumlah Token"
              data={products} // Directly passing products array to `ItemPembelianCard`
            />
          </div>
          <div className="mb-16">
            <PembayaranCard
              title="Pilih Metode Pembayaran"
              data={[
                {
                  img: "gopay.png", // Ensure these images are correctly placed and accessible
                  name_items: "Bayar Menggunakan Gopay",
                },
                {
                  img: "dana.png",
                  name_items: "Bayar Menggunakan Dana",
                },
                {
                  img: "qris.png",
                  name_items: "Bayar Menggunakan QRIS",
                },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopUp;
