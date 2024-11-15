import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const SignUp = () => {
  const formRef = React.useRef(null);
  const [showPassword, setShowPassword] = useState(false);
  const pindah = useNavigate();
  return (
    <div className="relative flex items-center justify-center h-screen">
      {/* Container utama */}
      <div className="relative flex items-stretch w-[900px] h-[540px] rounded-[50px] overflow-hidden">
        {/* Background SignUp */}
        <div className="w-[450px] bg-[#F6490D] flex flex-col justify-center items-center text-white">
          <div className="text-center">
            <h1 className="text-[36px] font-['Alegreya_Sans'] font-bold">
              Sign Up
            </h1>
            <h2 className="text-[40px] font-['Alegreya_Sans'] font-bold mt-4">
              By.Game
            </h2>
          </div>
        </div>

        {/* Form Sign Up */}
        <div className="w-[450px] bg-white flex flex-col justify-center items-center p-8">
          <form
            ref={formRef}
            onSubmit={(e: React.SyntheticEvent) => {
              e.preventDefault();
              const target = e.target as typeof e.target & {
                username: { value: string };
                email: { value: string };
                password: { value: string };
              };
              const username = target.username.value;
              const email = target.email.value;
              const password = target.password.value;
              axios
                .post("https://px973nrz-3002.asse.devtunnels.ms/register", {
                  username,
                  email,
                  password,
                })
                .then((response) => {
                  console.log("User created:", response.data);
                  pindah("/login");
                })
                .catch((error) => {
                  console.error("Error creating user:", error.response.data);
                  alert(error.response.data.message);
                });
            }}
            className="w-full max-w-[409px] space-y-4"
          >
            {/* Kolom Username */}
            <div className="flex flex-col">
              <label
                htmlFor="username"
                className="text-[#2D2D2D85] text-[24px]"
              >
                Username
              </label>
              <input
                id="username"
                type="text"
                name="username"
                className="w-full h-[54px] bg-[#D9D9D9] border-2 border-black rounded-full px-6"
              />
            </div>

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
                className="absolute top-1/2 right-3  cursor-pointer"
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
              onClick={() => pindah("/Login")}
              className="text-blue-400 cursor-pointer"
            >
              Sudah punya akun
            </a>
            {/* Tombol SignUp */}
            <button
              type="submit"
              className="w-full h-[51px] bg-blue-400 text-white rounded-full"
              value="Sign Up"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
