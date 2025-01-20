import React, { useState } from "react";
import axios from "axios";

const NewProduct = () => {
  const formRef = React.useRef(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedFile(event.target.files ? event.target.files[0] : null);
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      name_product: { value: string };
      items_price: { value: string };
      gameId: { value: string };
    };
    const name_product = target.name_product.value;
    const items_price = target.items_price.value;
    const gameId = target.gameId.value;
    const formData = new FormData();
    formData.append("name_product", name_product);
    formData.append("items_price", items_price);
    formData.append("gameId", gameId);

    if (selectedFile) {
      formData.append("image", selectedFile);
    }

    try {
      const response = await axios.post(
        "https://bg8tgnl0-3002.asse.devtunnels.ms/products/insert",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Product created:", response.data);
      // Suggested code may be subject to a license. Learn more: ~LicenseLog:2454048535.
      alert("Product created");
      if (formRef.current) {
        (formRef.current as HTMLFormElement).reset();
      }
      setSelectedFile(null);
    } catch (error: any) {
      console.error("Error creating user:", error.response.data);
      alert(error.response.data.message);
    }
  };

  return (
    <div className="relative flex items-center justify-center h-screen">
      {/* Container utama */}
      <div className="relative flex items-center justify-center w-[900px] h-[540px] rounded-[50px] border-2 border-black overflow-hidden">
        <div className="w-[450px] justify-center items-center p-8">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="w-full max-w-[409px] space-y-4"
          >
            <h2>Create New Product</h2>
            {/* Kolom name_product */}
            <div className="flex flex-col">
              <label
                htmlFor="name_product"
                className="text-base font-medium mb-2"
              >
                Product Name
              </label>
              <input
                id="name_product"
                type="text"
                name="name_product"
                className="w-full border rounded px-4 py-2 focus:outline-blue-500 focus:ring-1 focus:ring-blue-500"
              />
            </div>

            {/* Kolom items_image */}
            <div className="flex flex-col">
              <label htmlFor="image" className="text-base font-medium mb-2">
                Product Image
              </label>
              <input
                id="image"
                type="file"
                name="image"
                onChange={handleFileChange}
                className="w-full border rounded px-4 py-2 focus:outline-blue-500 focus:ring-1 focus:ring-blue-500"
                accept="image/*"
              />
            </div>

            {/* Kolom items_price */}
            <div className="flex flex-col">
              <label
                htmlFor="items_price"
                className="text-base font-medium mb-2"
              >
                Price
              </label>
              <input
                id="items_price"
                type="text"
                name="items_price"
                className="w-full border rounded px-4 py-2 focus:outline-blue-500 focus:ring-1 focus:ring-blue-500"
              />
            </div>

            {/* Kolom gameId */}
            <div className="flex flex-col">
              <label htmlFor="gameId" className="text-base font-medium mb-2">
                Game ID
              </label>
              <input
                id="gameId"
                type="text"
                name="gameId"
                className="w-full border rounded px-4 py-2 focus:outline-blue-500 focus:ring-1 focus:ring-blue-500"
                required
              />
            </div>

            {/* Tombol NewProduct */}
            <button
              type="submit"
              className={"w-full h-[51px] bg-blue-400 text-white rounded-full"}
            >
              Create New Product
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewProduct;
