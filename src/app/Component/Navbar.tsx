"use client";
import React, { useState } from "react";
import Icons from "../Icons";
import { NAV_ITEMS } from "@/constants";
import NavItem from "./NavItem";
const Navbar: React.FC = () => {
  return (
    <div className="text-white relative bg-black">
      <div className="flex flex-col justify-center">
        <div className="hidden md:flex justify-around p-4 text-white">
          {/* Logo */}
          <div className="text-4xl relative group flex flex-col items-center hover:text-sm">
            <Icons.FaArrowRight className="text-purple-900 transform translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0 group-hover:opacity-100 z-20" />
            <div className="text-xl transform translate-y-5 opacity-0 transition-all duration-500 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
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
          <Icons.FaBars className="text-xl" />
          <div className="text-xl">Accenture</div>
          <Icons.FaSearch className="text-xl" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
