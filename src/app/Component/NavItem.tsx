import React, { useState } from "react";
import Icons from "../Icons";
// import { Tooltip, TooltipTrigger } from "@adobe/react-spectrum";

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
    <div className="relative group">
      <button
        onClick={toggleDropdown}
        className="inline-flex items-center justify-center p-0.5 mb-2 mr-2 text-sm font-medium text-gray-900 rounded-lg bg-gradient-to-br hover:text-white dark:text-white"
      >
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
      </button>

      {subNavitmes && isDropdownOpen && (
        <div className="hidden group-hover:block absolute top-full left-1/2 z-50 transform -translate-x-1/2  flex flex-col items-center">
          <div className="rounded-sm bg-black py-1 px-2">
            <div className="bg-gray-700 rounded shadow-lg mt-0 p-2">
              {subNavitmes.map((subNavItem, index) => (
                <a
                  key={index}
                  href={subNavItem.href}
                  className="block p-1 text-white"
                >
                  {subNavItem.title}
                </a>
              ))}
            </div>
          </div>

          {/* Tooltip arrow */}
          <div className="h-0 w-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-black"></div>
        </div>
      )}
    </div>
  );
};

export default NavItem;
