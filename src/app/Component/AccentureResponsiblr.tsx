"use client";

import React, { useState, useEffect, useRef } from "react";
import AccentureItems from "./AccentureItems";
import Icons from "../Icons";

const AccItems = [
  {
    heading: "PPC makes the switch from commodity supplier to diversified digital powertech enterprise.",
    title: "Powering the future through reinvention",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    imageUrl: "/my.jpeg",
  },
  {
    title: "Title 2",
    heading: "Heading 2",
    content: "Consectetur possimus perspiciatis voluptates similique voluptas deleniti debitis.",
    imageUrl: "/my.jpeg",
  },
  {
    title: "Title 3",
    heading: "Heading 3",
    content: "Id rem blanditiis quasi rerum at ab, consectetur eos.",
    imageUrl: "/my.jpeg",
  },
  {
    title: "Title 4",
    heading: "Heading 4",
    content: "Id rem blanditiis quasi rerum at ab, consectetur eos.",
    imageUrl: "/my.jpeg",
  },
  {
    title: "Title 5",
    heading: "Heading 5",
    content: "Id rem blanditiis quasi rerum at ab, consectetur eos.",
    imageUrl: "/my.jpeg",
  },
  {
    title: "Title 6",
    heading: "Heading 6",
    content: "Id rem blanditiis quasi rerum at ab, consectetur eos.",
    imageUrl: "/my.jpeg",
  },
  {
    title: "Title 7",
    heading: "Heading 7",
    content: "Id rem blanditiis quasi rerum at ab, consectetur eos.",
    imageUrl: "/my.jpeg",
  },
];
const AccentureResponsiblr = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState("");
  const prevIndexRef = useRef(currentIndex);
  const [isPlaying, setIsPlaying] = useState(false); 

  const handleNext = () => {
    if (currentIndex < AccItems.length - 1) {
      setAnimationClass("slide-in-right");
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setAnimationClass("slide-in-left");
      setCurrentIndex(currentIndex - 1);
    }
  };

  useEffect(() => {
    prevIndexRef.current = currentIndex;
    const timer = setTimeout(() => {
      setAnimationClass("");
    }, 500); 

    return () => clearTimeout(timer);
  }, [currentIndex]);
  const handlePlayPause = () => {
    setIsPlaying((prev) => !prev); 
  };

  return (
    <div className="mt-20">
      <div className={`relative ${animationClass}`}>
        <AccentureItems item={AccItems[currentIndex]} />
      </div>
      <div className="text-white flex items-center justify-between p-3">
      <div className="bg-gray-700 p-4 flex items-center justify-center text-xs" onClick={handlePlayPause}>
          {isPlaying ? <Icons.RxResume className="text-sm md:text-xl"/> : <Icons.FaPlay />}
        </div>
          <div className="p-3 flex gap-3">
            <button
              onClick={handlePrevious}
              disabled={currentIndex === 0}
             className="bg-gray-700 p-4 flex items-center justify-center text-xs"
            >
              <Icons.FaArrowLeft />
            </button>
            <div className="p-4 flex items-center justify-center text-xs">
              {currentIndex + 1} / {AccItems.length}
            </div>
            <button
              onClick={handleNext}
              disabled={currentIndex === AccItems.length - 1}
              className="bg-gray-700 p-4 flex items-center justify-center text-xs"
            >
              <Icons.FaArrowRight />
            </button>
          </div>
        </div>
    </div>
  );
};

export default AccentureResponsiblr;
