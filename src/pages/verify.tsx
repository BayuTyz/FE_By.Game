import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai"; // Import icon mata

const verify_admins = () => {
  const formRef = React.useRef(null);
  const pindah = useNavigate();
  const [showPassword, setShowPassword] = useState(false); // State untuk mengontrol tampilan password

  return (
    <div className="relative flex items-center justify-center h-screen">
      {/* Container utama */}
      <div className="relative flex items-stretch w-[900px] h-[540px] rounded-[50px] overflow-hidden">
        {/* Background verify_admins */}
        <div className="w-[450px] bg-[#F6490D] flex flex-col justify-center items-center text-white">
          <div className="text-center">
            <h1 className="text-[36px] font-['Alegreya_Sans'] font-bold">
              Cek Sandi
            </h1>
          </div>
        </div>

        {/* Form verify_admins */}
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
                .post(
                  "https://bg8tgnl0-3002.asse.devtunnels.ms/users/show_pw",
                  {
                    Headers: {
                      "Content-Type": "application/json",
                    },
                    username,
                    email,
                    password,
                  }
                )
                .then((response) => {
                  localStorage.setItem("token", response.data.token);
                  pindah("/account");
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
            <a onClick={() => pindah("/Sigup")} className="text-blue-400">
              Belum punya akun
            </a>
            {/* Tombol verify_admins */}
            <button
              type="submit"
              className="w-full h-[51px] bg-blue-400 text-white rounded-full hover:bg-blue-500"
              value="verify_admins"
            >
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default verify_admins;
