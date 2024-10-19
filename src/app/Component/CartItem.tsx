import React from 'react';
import Icons from '../Icons';
interface CartItemProps {
  item: {
    title: string;
    heading: string;
    content: string;
    imageUrl: string;
  };
}

const CartItem = ({item}:CartItemProps) => {
  return (
    <div className="p-3 group">
    <div className="relative w-[276px] h-[424px] overflow-hidden transition-all duration-300 border-2 border-transparent group-hover:border-purple-500 p-2">
      <div className="w-full h-full p-2 ">
        <div  
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out group-hover:scale-150 group-hover:blur-sm"
          style={{ backgroundImage: `url(${item.imageUrl})` }}
        ></div>

        <div className="relative w-full h-full p-4 z-10">
          <div className="absolute top-3  text-white font-bold z-20">
            {item.title}
          </div>

          <div className="absolute top-12 left-3 text-white font-bold text-xl z-20">
            {item.heading}
          </div>

          <div className="absolute top-24 left-3 right-3 text-white transform translate-x-full opacity-0 transition-all duration-500 ease-in-out group-hover:translate-x-0 group-hover:opacity-100 z-20">
            {item.content}
          </div>

          <div className="absolute bottom-3 right-3 transform translate-y-5 opacity-0 transition-all duration-500 ease-in-out group-hover:translate-y-0 group-hover:opacity-100 z-20">
            <button className="text-white px-4 py-2 flex items-center gap-3">
              Expand <Icons.MdKeyboardArrowRight/>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default CartItem
