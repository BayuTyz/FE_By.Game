import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation, useNavigation } from "react-router-dom";
import axios from "axios";
import { Akun, IsiNavbar } from "../component_navbar";
import modalLogin from "../ModalLogin";

const Layout = () => {
  const navigation = useNavigation();
  // const [collapsed, setCollapsed] = useState(false);
  const [userData, setUserData] = useState({
    image: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      setError("Token not found. Please login.");
      setLoading(false);
      return;
    }
    axios
      .get("https://px973nrz-3002.asse.devtunnels.ms/select", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setUserData({
          image: `https://px973nrz-3002.asse.devtunnels.ms/${response.data.data.image}`, // URL gambar
        });
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
        setError("Failed to fetch user data.");
        setLoading(false);
      });
  }, []);

  return (
    <div className="flex h-screen bg-[#bdbdbd] w-full">
      {/* Main content */}
      <div className={`flex-1 flex flex-col transition-all duration-300`}>
        {/* Header */}
        <header className="bg-[#D9D9D9] fixed shadow-sm w-full z-10">
          <nav className="container mx-auto py-2 flex justify-between items-center">
            <h1 className="text-2xl font-bold">By.Game</h1>
            <div className="flex items-center">
              <input
                type="text"
                className="border border-gray-300 rounded-md p-2 w-64"
                placeholder="Cari"
              />
            </div>
            <IsiNavbar
              data={[
                {
                  title: "Home",
                  path: "/",
                },
                { title: "Game", path: "/game" },
                { title: "Login", path: "/modalLogin" },
              ]}
              data2={[]}
            />
            <Akun
              data2={[
                {
                  image: userData.image || "people.png",
                  path: "/account",
                },
              ]}
              data={[]}
            />
          </nav>
        </header>

        {/* Main content area */}
        <main className={"flex flex-col bg-[#000249]"}>
          {navigation.state !== "idle" && (
            <p className="fixed top-0 right-0 bg-yellow-100 p-2 rounded">
              Navigation in progress...
            </p>
          )}
          <Outlet />
        </main>
        <footer>
          <div className="container mx-auto py-4 flex justify-center items-center">
            Untuk keluhan dan saran bisa hunbungi:
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Layout;
