"use client";
import React from "react";
import Icons from "../Icons";
import AnimatedBackground from "./AnimatedBackground ";
const Herosection = () => {
  return (
    <div className="text-white relative w-full lg:h-80 p-10">
      <div className="relative w-full   ">
       
        <div>
          <AnimatedBackground />
        </div>
          <div className="relative text-2xl z-10 sm:text-sm md:text-8xl text-white font-semibold ">
            Get to know deepfakes before they know you
          </div>
          <div className="text-xs relative z-10 flex gap-3 items-center mt-5">
            <p className="font-bold text-sm">
              Access Accenture&apos;s First Ai-iD Kit
            </p>
            <button className="bg-purple-600 hover:bg-purple-800 p-1 flex items-center transition-transform duration-300 ease-in-out hover:animate-forward-icon">
              <Icons.MdKeyboardArrowRight />
            </button>
          </div>
      </div>
    </div>
  );
};

export default Herosection;
