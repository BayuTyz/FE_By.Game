import React, { useEffect, useState } from "react";
import gbr1 from "../assets/bg_ml.png";
import gbr2 from "../assets/bg_aov.png";
import gbr3 from "../assets/bg_ff.png";
import gbr4 from "../assets/bg_hok.png";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { TrendingGame } from "../Components/card_game";

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [gbr1, gbr2, gbr3, gbr4];
  const [pilihgame, setPilihgame] = useState([]); // State untuk menyimpan data game
  const [loading, setLoading] = useState(true); // State untuk loading
  const [error, setError] = useState<string | null>(null);
  const fetchGameData = async () => {
    try {
      const response = await axios.get(
        `https://px973nrz-3002.asse.devtunnels.ms/games/tampil`
      );
      setPilihgame(response.data.data); // Set data yang diterima dari backend
      setLoading(false); // Matikan loading saat data sudah didapat
    } catch (error) {
      console.error("Error fetching game data:", error);
      setError("Failed to load game data, please try again later.");
      setLoading(false); // Matikan loading meski terjadi error
    }
  };
  useEffect(() => {
    fetchGameData();
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  const location = useLocation();
  console.log(location.pathname);
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
      </div>
    );
  }

  // Jika ada error, tampilkan pesan error
  if (error) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="">
      <div className="flex justify-center items-center mt-20 mb-20">
        <img
          src={images[currentImage]}
          alt="gambar jalan"
          className="w-[1000px] h-[375px]"
        />
      </div>
      <div className="flex font-righteous font-normal text-[48px] leading-[60px] uppercase text-[#FAF9F0]">
        <h1>Trending Now</h1>
      </div>

      <TrendingGame data={pilihgame} />
    </div>
  );
};

export default Home;
