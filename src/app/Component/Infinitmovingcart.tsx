'use client'
import React, { useState } from "react";
import Icons from "../Icons";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
const quotes= [
    {
      date: "December 17,2001",
      description: "32nd U.S. President"
    },
    {
      date: "December 17,2002",
      description: "Former Prime Minister of the UK"
    },
    {
      date: "December 17,2003",
      description: "Musician and Singer"
    },
    {
      date: "December 17,2004",
      description: "Theoretical Physicist"
    }
  ];

  
const Infinitmovingcart = () => {
  const [isPlaying, setIsPlaying] = useState(false); 
  const handlePlayPause = () => {
    setIsPlaying((prev) => !prev); 
  };
  
  return (
    <div className='text-white text-2xl font-bold mt-20'>
        <div className='mx-7'>
        Accenture news
        </div>
        <div className=' justify-center  h-[40rem] w-full dark:bg-grid-white/[0.2] relative flex flex-col  overflow-hidden'>
      <div className='flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8'>
        <div className='w-full max-w-6xl '>
        <InfiniteMovingCards
        items={quotes}
        direction="right"
        speed="slow"
      />      
        </div>
      </div>
  <div className="mx-12">
  <div className="text-white flex justify-between ">
      <div className="bg-gray-700 p-4 flex items-center justify-center text-xs" onClick={handlePlayPause}>
          {isPlaying ? <Icons.RxResume /> : <Icons.FaPlay />}
        </div>
          <div className=" flex gap-3 justify-around">
            <button
             
             className="bg-gray-700 p-4 flex items-center justify-center text-xs"
            >
              <Icons.FaArrowLeft />
            </button>
            
            <button
              className="bg-gray-700 p-4 flex items-center justify-center text-xs"
            >
              <Icons.FaArrowRight />
            </button>
          </div>
        </div>
  </div>
      </div>
    </div>
  )
}

export default Infinitmovingcart