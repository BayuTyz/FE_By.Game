import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const LoginModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const formRef = React.useRef(null);
  const pindah = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
      <div className="relative flex items-stretch w-[900px] h-[540px] rounded-[50px] overflow-hidden bg-white shadow-lg">
        {/* Background Login */}
        <div className="w-[450px] bg-[#F6490D] flex flex-col justify-center items-center text-white">
          <div className="text-center">
            <h1 className="text-[36px] font-['Alegreya_Sans'] font-bold">
              Login
            </h1>
            <h2 className="text-[40px] font-['Alegreya_Sans'] font-bold mt-4">
              By.Game
            </h2>
          </div>
        </div>

        {/* Form Login */}
        <div className="w-[450px] bg-white flex flex-col justify-center items-center p-8 relative">
          {/* Tombol Tutup Modal */}
          <button
            className="absolute top-4 right-4 text-gray-500 text-2xl"
            onClick={onClose}
          >
            &times;
          </button>
          <form
            ref={formRef}
            onSubmit={(e: React.SyntheticEvent) => {
              e.preventDefault();
              const target = e.target as typeof e.target & {
                email: { value: string };
                password: { value: string };
              };
              const email = target.email.value;
              const password = target.password.value;
              axios
                .post("https://bg8tgnl0-3002.asse.devtunnels.ms/login", {
                  Headers: {
                    "Content-Type": "application/json",
                  },
                  email,
                  password,
                })
                .then((response) => {
                  console.log("User logged in:", response.data);
                  alert("Login Sukses");
                  localStorage.setItem("token", response.data.token);
                  pindah("/account");
                  onClose();
                })
                .catch((error) => {
                  console.error("Error logging in:", error.response.data);
                  alert(error.response.data.message);
                });
            }}
            className="w-full max-w-[409px] space-y-4"
          >
            {/* Kolom Email */}
            <div className="flex flex-col">
              <label htmlFor="email" className="text-[#2D2D2D85] text-[24px]">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                className="w-full h-[54px] bg-[#D9D9D9] border-2 border-black rounded-full px-6"
              />
            </div>

            {/* Kolom Sandi */}
            <div className="flex flex-col relative">
              <label
                htmlFor="password"
                className="text-[#2D2D2D85] text-[24px]"
              >
                Kata Sandi
              </label>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                name="password"
                className="w-full h-[55px] bg-[#D9D9D9] border-2 border-black rounded-full px-6"
              />
              <div
                className="absolute top-2/4 right-3 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <AiFillEyeInvisible size={30} />
                ) : (
                  <AiFillEye size={30} />
                )}
              </div>
            </div>
            <a
              onClick={() => pindah("/Signup")}
              className="text-blue-400 cursor-pointer"
            >
              Belum punya akun
            </a>
            {/* Tombol Login */}
            <button
              type="submit"
              className="w-full h-[51px] bg-blue-400 text-white rounded-full hover:bg-blue-500"
              value="Login"
            >
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const Login = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex items-center justify-center h-screen">
      {/* Tombol untuk membuka modal login */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600"
      >
        Open Login Modal
      </button>

      {/* Modal Login */}
      <LoginModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default Login;
