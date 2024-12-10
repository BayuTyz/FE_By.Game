import React from "react";

type Props = {
  data: {
    img: string;
    name_items: string;
  }[];
  title: string;
  onSelect: (item: { img: string; name_items: string }) => void;
};

type PropsChild = {
  img: string;
  name_items: string;
  onClick: () => void;
};

const PembayaranCard = ({ data, title, onSelect }: Props) => {
  return (
    <div className="flex flex-col mx-auto bg-[#0D0D37] p-6 rounded-lg">
      <div className="flex items-center justify-center h-[45px] w-[45px] rounded-full bg-[#0D0D37] -mt-10">
        <div className="h-[35px] w-[35px] bg-[#737388] rounded-full flex items-center justify-center">
          <div className="text-[31px] font-alkatra">3</div>
        </div>
      </div>
      <h1 className="text-[20px] font-alegreya Sans font-bold mb-4">{title}</h1>
      <div className="flex flex-wrap rounded-lg flex-cols-2 gap-2">
        {data.map((item, index) => (
          <SubCard 
          key={index} 
          img={item.img} 
          name_items={item.name_items}
          onClick={() => onSelect(item)} />
        ))}
      </div>
    </div>
  );
};

const SubCard = ({ img, name_items, onClick }: PropsChild) => {
  return (
    <div className="bg-white p-4 rounded-lg" onClick={onClick}>
      <img src={img} alt="" className="w-[300px] h-[110px] mb-2" />
      <div className="">
        <p className="font-bold text-[14px] text-black">{name_items}</p>
      </div>
    </div>
  );
};

export default PembayaranCard;
