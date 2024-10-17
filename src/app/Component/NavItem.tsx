import React, { useState } from "react";
import Icons from "../Icons";
import { Tooltip, TooltipTrigger } from "@adobe/react-spectrum";

interface NavItemProps {
  title: string;
  subNavitmes?: { title: string; href: string }[];
}

const NavItem: React.FC<NavItemProps> = ({ title, subNavitmes }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    if (subNavitmes) {
      setIsDropdownOpen(!isDropdownOpen);
    }
  };

  return (
    <div className="relative">
      
      <button onClick={toggleDropdown} className="group relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br hover:text-white dark:text-white ">
      {title}
        {subNavitmes && (
          <>
            {isDropdownOpen ? (
              <Icons.FaCaretUp className="ml-2" />
            ) : (
              <Icons.FaCaretDown className="ml-2" />
            )}
          </>
        )}
       
        <div className="hidden group-hover:block">
          <div className="group absolute -top-12 left-1/2 z-50 flex -translate-x-1/2 flex-col items-center rounded-sm text-center text-sm text-slate-300 before:-top-2">
            <div className="rounded-sm bg-black py-1 px-2">
              <p className="whitespace-nowrap">  {subNavitmes && isDropdownOpen && (
        <div className="absolute bg-gray-700  rounded shadow-lg mt-0 p-2">
          {subNavitmes.map((subNavItem, index) => (
            <a key={index} href={subNavItem.href} className="block p-1">
              {subNavItem.title}
            </a>
          ))}
        </div>
      )}</p>
            </div>
            <div className="h-0 w-fit border-l-8 border-r-8 border-t-8 border-transparent border-t-black"></div>
          </div>
        </div>
      </button>

    
    </div>
  );
};

export default NavItem;
