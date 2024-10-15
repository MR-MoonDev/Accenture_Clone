import React from "react";
import Icons from "../Icons";

const Careers = () => {
  return (
    <div className="text-white flex flex-col md:flex-row justify-around  gap-5 items-center mt-20 relative z-10">
      <div
        className="flex just w-96 h-96 bg-cover bg-center  p-20"
        style={{ backgroundImage: "url('/my.jpeg')" }}
      >
      </div>
      <div className="flex flex-col gap-3 bg-red-500 ">
        <div className="font-bold">CARRES</div>
        <div className="text-4xl font-semibold  ">
          Grow your career at the heart of change
        </div>
        <div className="text-2xl font-serif">
          It&apos;s your time to shine. Bring your ingenuity, curiosity and big
          ideas.
        </div>
        <div className="flex gap-3  items-center">
          <p className="font-bold">Join us</p>
          <button className="bg-purple-600  hover:bg-purple-800 p-1  flex items-center transition-transform duration-300 ease-in-out  hover:animate-forward-icon">
            <Icons.MdKeyboardArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Careers;
