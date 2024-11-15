import React from "react";
import { Link } from "react-router-dom";

type Props = {
  data: {
    title: string;
    image: string;
    id: string;
    type: string;
    trending: boolean;
  }[];
};

export const CardGame = ({ data }: Props) => {
  const baseURL = "https://px973nrz-3002.asse.devtunnels.ms";
  return (
    <div>
      {/* Bagian FPS */}
      <div className="flex mt-10 text-[30px]">
        <p className="ml-5">Aksi (FPS)</p>
      </div>
      <hr
        style={{
          width: "calc(100% - 40px)", // Lebar layar minus 20px di kiri dan kanan
          margin: "0 10px", // Margin 20px di kiri dan kanan
          border: "1px solid ",
          opacity: 0.5,
        }}
      />
      <div className="flex mt-16 mb-20 ml-5">
        <ul className="flex flex-wrap ml-[45px]">
          {data
            .filter((item) => item.type === "fps")
            .map((item, index) => (
              <li key={index} className="m-4 bg-white rounded-lg shadow-md">
                <Link to={`/game-detail/${item.id}`} className="block">
                  <img
                    src={`${baseURL}/${item.image}`}
                    alt={item.title}
                    className="w-[200px] object-cover rounded-t-lg"
                  />
                  <div className="p-4 bg-[#F6490D] rounded-b-lg h-[80px]">
                    <h5 className="text-[24px] text-center font-bold">
                      {item.title}
                    </h5>
                  </div>
                </Link>
              </li>
            ))}
        </ul>
      </div>

      {/* Bagian MOBA */}
      <div className="flex mt-10 text-[30px]">
        <p className="ml-5">Moba</p>
      </div>
      <hr
        style={{
          width: "calc(100% - 40px)", // Lebar layar minus 20px di kiri dan kanan
          margin: "0 10px", // Margin 20px di kiri dan kanan
          border: "1px solid ",
          opacity: 0.5,
        }}
      />
      <div className="flex mt-16 mb-20 ml-5">
        <ul className="flex flex-wrap ml-[45px]">
          {data
            .filter((item) => item.type === "moba")
            .map((item, index) => (
              <li key={index} className="m-4 bg-white rounded-lg shadow-md">
                <Link to={`/game-detail/${item.id}`} className="block">
                  <img
                    src={`${baseURL}/${item.image}`}
                    alt={item.title}
                    className="w-[200px] object-cover rounded-t-lg"
                  />
                  <div className="p-4 bg-[#F6490D]">
                    <h5 className="text-lg text-center font-bold mb-2">
                      {item.title}
                    </h5>
                  </div>
                </Link>
              </li>
            ))}
        </ul>
      </div>

      {/* Bagian RPG */}
      <div className="flex mt-10 text-[30px]">
        <p className="ml-5">RPG</p>
      </div>
      <hr
        style={{
          width: "calc(100% - 40px)", // Lebar layar minus 20px di kiri dan kanan
          margin: "0 10px", // Margin 20px di kiri dan kanan
          border: "1px solid ",
          opacity: 0.5,
        }}
      />
      <div className="flex mt-16 mb-20 ml-5">
        <ul className="flex flex-wrap ml-[45px]">
          {data
            .filter((item) => item.type === "rpg")
            .map((item, index) => (
              <li key={index} className="m-4 bg-white rounded-lg shadow-md">
                <Link to={`/game-detail/${item.id}`} className="block">
                  <img
                    src={`${baseURL}/${item.image}`}
                    alt={item.title}
                    className="w-[200px] object-cover rounded-t-lg"
                  />
                  <div className="p-4 bg-[#F6490D]">
                    <h5 className="text-lg text-center font-bold mb-2">
                      {item.title}
                    </h5>
                  </div>
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export const TrendingGame = ({ data }: Props) => {
  const baseURL = "https://px973nrz-3000.asse.devtunnels.ms";
  return (
    //   {/* Bagian Trending */}
    <div className="flex justify-center items-center mt-20 mb-20">
      <ul className="flex flex-wrap justify-center">
        {data
          .filter((item) => item.trending) // Filter by trending: true
          .map((item, index) => (
            <li key={index} className="w-64 m-4 bg-white rounded-lg shadow-md">
              <Link to={`/game-detail/${item.id}`} className="block">
                <img
                  src={`${baseURL}/${item.image}`}
                  alt={item.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-4 bg-[#F6490D]">
                  <h5 className="text-lg  font-bold mb-2">{item.title}</h5>
                </div>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};
