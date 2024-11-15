import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import { AiFillEdit } from "react-icons/ai";
import Modal from "../Components/profilChange";

const Account: React.FC = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    image: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    axios
      .get("https://px973nrz-3002.asse.devtunnels.ms/users/show", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setUserData({
          name: response.data.data.username,
          email: response.data.data.email,
          image: `https://px973nrz-3002.asse.devtunnels.ms/${response.data.data.image}`,
        });
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
        setError("Failed to fetch user data.");
        setLoading(false);
      });
  }, []);

  const handleProfileUpdate = (newImage: string) => {
    setUserData((prevData) => ({
      ...prevData,
      image: newImage,
    }));
    setIsModalOpen(false);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2 justify-center h-screen">
      <div className="flex flex-left items-left text-[36px] text-[#FAF9F0] leading-[60px] uppercase">
        <button onClick={() => navigate("/")} className="flex items-center">
          <IoMdArrowBack size={40} />
          <h1>Back</h1>
        </button>
      </div>
      <div className="flex items-center justify-center">
        <div className="flex justify-center items-center w-[200px] h-[200px] bg-[#D9D9D9] rounded-full overflow-hidden">
          <img
            src={userData.image || "people.png"}
            alt="Profile"
            className="rounded-full w-full h-full object-cover"
          />
        </div>
        <button
          className="flex w-[38px] h-[38px] mt-28 transform -translate-x-1/2 items-center justify-center bg-[#D9D9D9] rounded-full"
          onClick={() => setIsModalOpen(true)}
        >
          <AiFillEdit size={30} />
        </button>
        {isModalOpen && (
          <Modal
            user={userData}
            onClose={() => setIsModalOpen(false)}
            isOpen={isModalOpen}
          />
        )}
      </div>
      <div className="flex flex-col justify-center items-center gap-4">
        <div className="flex">
          <p className="w-[269px] h-[50px] bg-[#D9D9D9] rounded-[30px] font-righteous font-normal text-[24px] leading-[30px] uppercase text-black flex items-center justify-center">
            {userData.name || "Nama"}
          </p>
        </div>
        <div className="flex ml-4">
          <p className="w-[400px] h-[50px] bg-[#D9D9D9] rounded-[30px] font-righteous font-normal text-[24px] leading-[30px] uppercase text-black flex items-center justify-center">
            {userData.email || "Email"}
          </p>
        </div>
        <button
          onClick={() => {
            localStorage.removeItem("token");
            navigate("/");
          }}
          className="w-[400px] h-[50px] bg-[#D9D9D9] rounded-[30px] font-righteous font-normal text-[24px] leading-[30px] uppercase text-black flex items-center justify-center"
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Account;
