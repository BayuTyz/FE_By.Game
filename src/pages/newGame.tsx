import React, { useState } from "react";
import axios from "axios";

const NewGame = () => {
  const formRef = React.useRef(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isTrending, setIsTrending] = useState(false); // State untuk checkbox

  const handleTrendingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsTrending(event.target.checked); // Update status checkbox
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedFile(event.target.files ? event.target.files[0] : null);
  };
  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      title: { value: string };
      type: { value: string };
      trending: { value: string };
    };
    const title = target.title.value;
    const type = target.type.value;
    const formData = new FormData();
    formData.append("title", title);
    formData.append("type", type);
    formData.append("trending", isTrending.toString());

    if (selectedFile) {
      formData.append("image", selectedFile);
    }
    try {
      const response = await axios.post(
        "https://bg8tgnl0-3002.asse.devtunnels.ms/games/insert",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Game created:", response.data);
      alert("Game Created");
      if (formRef.current) {
        (formRef.current as HTMLFormElement).reset();
      }
      setSelectedFile(null);
      setIsTrending(false);
    } catch (error: any) {
      console.error("Error creating user:", error.response.data);
      alert(error.response.data.message);
    }
  };
  return (
    <div className="relative flex items-center justify-center h-screen">
      {/* Container utama */}
      {/* Suggested code may be subject to a license. Learn more: ~LicenseLog:4002704262. */}
      <div className="relative flex items-center justify-center w-[900px] h-[540px] rounded-[50px] border-2 border-black overflow-hidden">
        {/* Background NewGame */}

        {/* Form Sign Up */}
        <div className="w-[450px] bg-white flex justify-center items-center p-8">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="w-full max-w-[409px] space-y-4"
          >
            {/* Kolom title */}
            <div className="flex flex-col">
              <label htmlFor="title" className="text-[#2D2D2D85] text-[24px]">
                Title Game
              </label>
              <input
                id="title"
                type="text"
                name="title"
                className="w-full  border-2 border-black px-6"
              />
            </div>
            {/* Input Gambar */}
            <div className="flex flex-col">
              <label htmlFor="image" className="text-[#2D2D2D85] text-[24px]">
                Gambar
              </label>
              <input
                id="image"
                type="file"
                name="image"
                onChange={handleFileChange}
                className="w-full  border-2 border-black"
                accept="image/*" // Added to accept only image files
              />
            </div>

            {/* Kolom type */}
            <div className="flex flex-col">
              <label htmlFor="type" className="text-[#2D2D2D85] text-[24px]">
                Genre Game
              </label>
              <input
                id="type"
                type="text"
                name="type"
                className="w-full  border-2 border-black px-6"
              />
            </div>

            {/* Kolom trending */}
            <div className="flex flex-col">
              <label
                htmlFor="trending"
                className="text-[#2D2D2D85] text-[24px]"
              >
                Sedang Trending
              </label>
              <input
                id="trending"
                name="trending"
                type="checkbox"
                className="w-6 h-6"
                checked={isTrending}
                onChange={handleTrendingChange} // Tangkap perubahan checkbox
              />
            </div>

            {/* Tombol NewGame */}
            <button
              type="submit"
              className="w-full h-[51px] bg-blue-400 text-white rounded-full"
              value="Sign Up"
            >
              Make New Game
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewGame;
