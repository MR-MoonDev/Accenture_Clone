import React from "react";
import Icons from "../Icons";
interface AccentureitemProps {
  item: {
    title: string;
    heading: string;
    content: string;
    imageUrl: string;
  };
}

const AccentureItems = ({ item }: AccentureitemProps) => {
  return (
    <div className=" text-white ">
    <div className="flex  flex-col md:flex-row gap-4">
    <div style={{ width: "100%", maxWidth: "555.59px", height: "auto", aspectRatio: "555.59 / 370" }}>
  <img
    src={item.imageUrl}
    alt={item.title}
    style={{ width: "100%", height: "100%", objectFit: "cover" }}
  />
</div>

<div className="flex flex-col gap-3 mt-20 w-full max-w-[555.59px] h-auto md:h-[370px] p-4">
  <h2 className="text-lg md:text-xl">{item.heading}</h2>
  <h2 className="text-lg md:text-xl">{item.title}</h2>
  <div className="flex gap-3 items-center">
    <p className="text-sm md:text-base">Read more</p>
    <button className="bg-purple-600 p-2 flex items-center transition-transform duration-300 ease-in-out hover:bg-purple-800 hover:animate-forward-icon">
      <Icons.MdKeyboardArrowRight />
    </button>
  </div>
</div>

     
    </div>
    
   </div>
  );
};

export default AccentureItems;
