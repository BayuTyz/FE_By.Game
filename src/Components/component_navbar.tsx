import React from "react";
import { Link, useLocation } from "react-router-dom";

type Props = {
  data: {
    title: string;
    path: string;
  }[];
  data2: {
    image: string;
    path: string;
  }[];
};

export const IsiNavbar = ({ data }: Props) => {
  const location = useLocation();

  console.log(location.pathname);
  return (
    <div className="flex justify-between items-center space-x-4">
      {/* Section for Home and Game */}
      <ul className="box-border flex gap-4">
        {data.map((item, index) => (
          <li
            key={index.toString()}
            className="w-[75px] h-[28px] rounded-[10px] flex items-center justify-center"
          >
            <Link
              to={item.path}
              className={`flex items-center justify-center ${
                location.pathname === item.path ? "text-blue-500" : ""
              }`}
              style={{
                fontFamily: "'Alegreya Sans'",
                fontWeight: "700",
                fontSize: "20px",
                lineHeight: "27px",
                color: "#000000",
              }}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const Akun = ({ data2 }: Props) => {
  return (
    <div className="">
      <ul className="box-border flex gap-4">
        {data2.map((item, index) => (
          <li
            key={index.toString()}
            className="w-[35px] h-[30px]  flex items-center rounded-full justify-center hover:bg-gray-100"
          >
            <Link
              to={item.path}
              className={`flex items-center justify-center${
                location.pathname === item.path ? "text-blue-500" : ""
              }`}
            >
              <img
                className={
                  "w-[35px] h-[35px] flex items-center justify-center border-[1px] border-gray-300 rounded-full"
                }
                src={item.image}
                alt=""
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
