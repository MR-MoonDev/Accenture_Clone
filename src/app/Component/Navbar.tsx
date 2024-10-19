"use client";
import React, { useState } from "react"; // Import useState
import Icons from "../Icons";
import { NAV_ITEMS } from "@/constants";
import NavItem from "./NavItem";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage side menu visibility

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu state
  };

  return (
    <div className="text-white relative bg-black">
      <div className="flex flex-col justify-center">
        <div className="hidden md:flex justify-around p-4 text-white">
          {/* Logo */}
          <div className="text-4xl relative group flex flex-col  hover:text-sm">
            <Icons.FaArrowRight className="text-purple-900 transform translate-x-full  transition-all duration-500 ease-in-out group-hover:translate-x-0 group-hover:opacity-100 z-20" />
            <div className="text-xl font-bold  transform translate-y-5 hidden group-hover:block transition-all duration-500 ease-in-out group-hover:translate-y-0 ">
              Accenture
            </div>
          </div>

          <div className="flex items-center justify-center gap-8">
            {/* Navigation Items */}
            {NAV_ITEMS.map((navItem, index) => (
              <NavItem
                key={index}
                title={navItem.title}
                subNavitmes={navItem.subNavitmes}
              />
            ))}
          </div>

          {/* Search and Language */}
          <div className="flex items-center gap-4">
            <div className="flex items-center">
              <Icons.FaSearch />
            </div>
            <div className="flex items-center">
              <Icons.FaGlobe />
              <span className="ml-1">USA</span>
              <Icons.FaCaretDown />
            </div>
          </div>
        </div>

        {/* Mobile Navbar */}
        <div className="flex md:hidden justify-between items-center p-4 bg-black">
          <Icons.FaBars
            className="text-xl cursor-pointer"
            onClick={toggleMenu}
          />
          {/* Menu icon */}
          <div className="text-xl">Accenture</div>
          <Icons.FaSearch className="text-xl" />
        </div>
      </div>

      {/* Side Menu */}
      {isMenuOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-black shadow-lg z-50">
          <div>
            <button className="p-4 text-white" onClick={toggleMenu}>
              <Icons.ImCross />
            </button>
          </div>
          <div className="flex flex-col justify-between p-4">
            {NAV_ITEMS.map((navItem, index) => (
              <div key={index} className="flex  items-center justify-between">
                <NavItem title={navItem.title} />
                <Icons.FaArrowRight className="ml-2" />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
