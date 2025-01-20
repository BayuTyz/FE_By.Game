import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CardGame } from "../Components/card_game";
import axios from "axios"; // Import Axios
import { IoMdArrowBack } from "react-icons/io";

const Game = () => {
  const navigate = useNavigate();
  const [pilihgame, setPilihgame] = useState([]); // State untuk menyimpan data game
  const [loading, setLoading] = useState(true); // State untuk loading
  const [error, setError] = useState<string | null>(null); // Bisa menerima string atau null

  // Function untuk mengambil data game dari backend
  const fetchGameData = async () => {
    try {
      const response = await axios.get(
        `https://bg8tgnl0-3002.asse.devtunnels.ms/games/tampil`
      );
      setPilihgame(response.data.data); // Set data yang diterima dari backend
      setLoading(false); // Matikan loading saat data sudah didapat
    } catch (error) {
      console.error("Error fetching game data:", error);
      setError("Failed to load game data, please try again later.");
      setLoading(false); // Matikan loading meski terjadi error
    }
  };

  // Panggil function untuk mendapatkan data game saat komponen dimuat
  useEffect(() => {
    fetchGameData();
  }, []); // Dependency array kosong supaya hanya dipanggil sekali

  // Jika masih loading, tampilkan loading
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
    <div className="flex flex-col font-Alegreya Sans font-bold text-[#FAF9F0] mt-16">
      <div className="flex text-[36px] leading-[60px] uppercase">
        <button onClick={() => navigate("/")}>
          <IoMdArrowBack size={40} />
        </button>
        <h1 className="">Game</h1>
      </div>
      <div className="flex flex-start mt-10">
        {/* Tampilkan data game yang sudah di-fetch */}
        <CardGame data={pilihgame} />
      </div>
    </div>
  );
};

export default Game;
