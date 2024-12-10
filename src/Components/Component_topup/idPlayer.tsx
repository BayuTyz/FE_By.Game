import React from "react";

type Props = {
  title: string;
  placeholder: string;
  value: string; // Bind input value to state
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const ImputIdCard = ({ title, placeholder, value, onChange }: Props) => {
  return (
    <div className="flex flex-col mx-auto bg-[#0D0D37] p-6 rounded-lg">
      <div className="flex items-center justify-center h-[45px] w-[45px] rounded-full bg-[#0D0D37] -mt-10">
        <div className="h-[35px] w-[35px] bg-[#737388] rounded-full flex items-center justify-center">
          <div className="text-[31px] font-alkatra">1</div>
        </div>
      </div>
      <h1 className="text-[20px] font-alegreya Sans font-bold mb-4">{title}</h1>
      <div className="h-[40px] w-full rounded-lg">
        <input
          type="text"
          className="h-[40px] w-full text-black text-[20px] placeholder:text-center rounded-lg"
          placeholder={placeholder}
          value={value} 
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default ImputIdCard;
