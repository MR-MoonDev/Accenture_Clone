"use client";
import React, { useState } from "react";
import Icons from "../Icons";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
const quotes = [
  {
    date: "December 17,2001",
    description: "32nd U.S. President",
  },
  {
    date: "December 17,2002",
    description: "Former Prime Minister of the UK",
  },
  {
    date: "December 17,2003",
    description: "Musician and Singer",
  },
  {
    date: "December 17,2004",
    description: "Theoretical Physicist",
  },
];

const Infinitmovingcart = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const handlePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  return (
    <div className="bg-black text-white flex flex-col md:flex-row  relative z-10 p-2">
      <div className="lg:m-20 justify-center  text-2xl h-[40rem] w-full dark:bg-grid-white/[0.2] relative flex flex-col  overflow-hidden">
        Accenture news
        <div className="flex justify-center text-xl  w-full overflow-hidden px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-6xl ">
            <InfiniteMovingCards
              items={quotes}
              direction="right"
              speed="slow"
            />
          </div>
        </div>
      
          <div className=" text-white flex  justify-between ">
            <div
              className="bg-gray-700 p-4 flex items-center justify-center text-xs"
              onClick={handlePlayPause}
            >
              {isPlaying ? <Icons.RxResume /> : <Icons.FaPlay />}
            </div>
            <div className=" flex gap-3 justify-around">
              <button className="bg-gray-700 p-4 flex items-center justify-center text-xs">
                <Icons.FaArrowLeft />
              </button>

              <button className="bg-gray-700 p-4 flex items-center justify-center text-xs">
                <Icons.FaArrowRight />
              </button>
            </div>
          </div>
       
      </div>
    </div>
  );
};

export default Infinitmovingcart;
