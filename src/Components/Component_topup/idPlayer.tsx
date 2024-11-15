import React from "react";

type Props = {
  title: string;
  placeholder: string;
};

const ImputIdCard = ({ title, placeholder }: Props) => {
  if (title === "Masukkan Id Player dan Pilih Server") {
    return (
      <div className="flex flex-col mx-auto bg-[#0D0D37] p-6 rounded-lg">
        <div className="flex items-center justify-center h-[45px] w-[45px] rounded-full bg-[#0D0D37] -mt-10">
          <div className="h-[35px] w-[35px] bg-[#737388] rounded-full flex items-center justify-center">
            <div className="text-[31px] font-alkatra">1</div>
          </div>
        </div>
        <h1 className="text-[20px] font-alegreya Sans font-bold mb-4">
          {title}
        </h1>
        <div className="h-[40px] w-full flex">
          <div className="h-[40px] w-full rounded-lg mr-2">
            <input
              type="text"
              className="h-[40px] w-[100%] text-black text-[20px] placeholder:text-center rounded-lg"
              placeholder={placeholder}
            />
          </div>
          <div className="h-[40px] w-[50%] rounded-lg">
            <select className="h-[40px] w-[100%] text-black text-[20px] rounded-lg">
              <option value="">Plih Server</option>
              <option value="id1">Amerika</option>
              <option value="id2">Eropa</option>
              <option value="id3">Asia</option>
              <option value="id4">TW,HK,MO</option>
            </select>
          </div>
        </div>
      </div>
    );
  } else if (title === "Masukkan Id Player dan Id Zone") {
    return (
      <div className="flex flex-col mx-auto bg-[#0D0D37] p-6 rounded-lg">
        <div className="flex items-center justify-center h-[45px] w-[45px] rounded-full bg-[#0D0D37] -mt-10">
          <div className="h-[35px] w-[35px] bg-[#737388] rounded-full flex items-center justify-center">
            <div className="text-[31px] font-alkatra">1</div>
          </div>
        </div>
        <h1 className="text-[20px] font-alegreya Sans font-bold mb-4">
          {title}
        </h1>
        <div className="h-[40px] w-full flex">
          <div className="h-[40px] w-full rounded-lg mr-2">
            <input
              type="text"
              className="h-[40px] w-[100%] text-black text-[20px] placeholder:text-center rounded-lg"
              placeholder={placeholder}
            />
          </div>
          <div className="h-[40px] w-[50%] rounded-lg">
            <input
              type="text"
              className="h-[40px] w-[100%] text-black text-[20px] placeholder:text-center rounded-lg"
              placeholder="Id Zone"
            />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col mx-auto bg-[#0D0D37] p-6 rounded-lg">
        <div className="flex items-center justify-center h-[45px] w-[45px] rounded-full bg-[#0D0D37] -mt-10">
          <div className="h-[35px] w-[35px] bg-[#737388] rounded-full flex items-center justify-center">
            <div className="text-[31px] font-alkatra">1</div>
          </div>
        </div>
        <h1 className="text-[20px] font-alegreya Sans font-bold mb-4">
          {title}
        </h1>
        <div className="h-[40px] w-full rounded-lg">
          <input
            type="text"
            className="h-[40px] w-full text-black text-[20px] placeholder:text-center rounded-lg"
            placeholder={placeholder}
            value="08234"
          />
        </div>
      </div>
    );
  }
};

export default ImputIdCard;
