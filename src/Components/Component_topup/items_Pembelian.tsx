import React from "react";

type Props = {
  data: {
    img: string;
    name_items: string;
    harga: string;
  }[];
  title: string;
  onSelect: (item: { img: string; name_items: string; harga: string }) => void;
};

type PropsChild = {
  img: string;
  name_items: string;
  harga: string;
  onClick: () => void;
};

const ItemPembelianCard = ({ data, title, onSelect }: Props) => {
  return (
    <div className="flex flex-col mx-auto bg-[#0D0D37] p-6 rounded-lg">
      <div className="flex items-center justify-center h-[45px] w-[45px] rounded-full bg-[#0D0D37] -mt-10">
        <div className="h-[35px] w-[35px] bg-[#737388] rounded-full flex items-center justify-center">
          <div className="text-[31px] font-alkatra">2</div>
        </div>
      </div>
      <h1 className="text-[20px] font-alegreya Sans font-bold mb-4">{title}</h1>
      <div className="flex flex-wrap rounded-lg flex-cols-5 gap-2">
        {data.map((item, index) => (
          <SubCard
            key={index}
            img={item.img}
            name_items={item.name_items}
            harga={item.harga}
            onClick={() => onSelect(item)}
          />
        ))}
      </div>
    </div>
  );
};

const SubCard = ({ img, name_items, harga, onClick }: PropsChild) => {
  const [isClicked, setIsClicked] = React.useState(false);
  const handleClick = () => {
    setIsClicked(true);
    onClick(); // Trigger parent callback
  };

  return (
    <div
      className={`justify-center items-center p-4 rounded-lg h-auto w-[120px] ${
        isClicked ? "bg-[#F6490D]" : "bg-white"
      }`}
      onClick={handleClick}
      // onClick={() => setIsClicked(!isClicked)}
    >
      <img src={img} alt="" className="w-[60px] h-[60px] mb-2" />
      <div className="">
        <p className="font-bold text-[13px] text-black">{name_items}</p>
        <p className="text-black text-[14px] font-light">{harga}</p>
      </div>
    </div>
  );
};

export default ItemPembelianCard;
