import React from "react";
import Icons from "../Icons";

const Values = () => {
  return (
    <div className="text-white flex flex-col gap-4 justify-center items-center">
      <div className="text-4xl sm:text-6xl font-bold">
        360<sup className="align-super ml-[-2px] font-serif">o</sup> VALUE
      </div>
      <div className="text-xl text-center">
        <p>
          Every day, we embrace change and create value for all our
          stakeholders,
        </p>
        <p> in every part of the world.</p>
      </div>
      <div className="flex gap-3  items-center">
        <p className="font-bold">See the report</p>
        <button className="bg-purple-600  hover:bg-purple-800 p-1  flex items-center transition-transform duration-300 ease-in-out  hover:animate-forward-icon">
          <Icons.MdKeyboardArrowRight  />
        </button>
      </div>
    </div>
  );
};

export default Values;
