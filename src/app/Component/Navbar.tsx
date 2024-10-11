'use client';
import React, { useState } from 'react';
import { FaBars, FaSearch, FaCaretDown, FaCaretUp, FaGlobe } from 'react-icons/fa'; // Make sure to install react-icons
import Icons from '../Icons';

const Navbar: React.FC = () => {
  const [dropdownWhatWeDo, setDropdownWhatWeDo] = useState(false);
  const [dropdownWhoWeAre, setDropdownWhoWeAre] = useState(false);
  const [dropdownCareers, setDropdownCareers] = useState(false);

  const toggleDropdown = (dropdownSetter: React.Dispatch<React.SetStateAction<boolean>>) => {
    dropdownSetter((prev) => !prev);
  };

  return (
    <div className='text-white'>
      <div className='flex flex-col justify-center'>
        <div className="hidden md:flex justify-around p-4 bg-black text-white">
          <div className="text-4xl relative group flex flex-col items-center hover:text-sm">
            <Icons.FaArrowRight
              className="text-purple-900 transform translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0 group-hover:opacity-100 z-20"
            />
            <div className="text-xl transform translate-y-5 opacity-0 transition-all duration-500 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
              Accenture
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="relative">
              <button onClick={() => toggleDropdown(setDropdownWhatWeDo)} className="flex items-center">
                What We Do {dropdownWhatWeDo ? <FaCaretUp /> : <FaCaretDown />}
              </button>
              {dropdownWhatWeDo && (
                <div className="absolute bg-gray-700 rounded shadow-lg mt-2 p-2">
                  <a href="#" className="block p-1">Service 1</a>
                  <a href="#" className="block p-1">Service 2</a>
                  <a href="#" className="block p-1">Service 3</a>
                </div>
              )}
            </div>
            <div>What We Think</div>
            <div className="relative">
              <button onClick={() => toggleDropdown(setDropdownWhoWeAre)} className="flex items-center">
                Who We Are {dropdownWhoWeAre ? <FaCaretUp /> : <FaCaretDown />}
              </button>
              {dropdownWhoWeAre && (
                <div className="absolute bg-gray-700 rounded shadow-lg mt-2 p-2">
                  <a href="#" className="block p-1">Team</a>
                  <a href="#" className="block p-1">Mission</a>
                  <a href="#" className="block p-1">History</a>
                </div>
              )}
            </div>
            <div className="relative">
              <button onClick={() => toggleDropdown(setDropdownCareers)} className="flex items-center">
                Careers {dropdownCareers ? <FaCaretUp /> : <FaCaretDown />}
              </button>
              {dropdownCareers && (
                <div className="absolute bg-gray-700 rounded shadow-lg mt-2 p-2">
                  <a href="#" className="block p-1">Job Openings</a>
                  <a href="#" className="block p-1">Internships</a>
                </div>
              )}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center">
              <FaSearch />
            </div>
            <div className="flex items-center">
              <FaGlobe />
              <span className="ml-1">USA</span>
              <FaCaretDown />
            </div>
          </div>
        </div>

       
        <div className="flex md:hidden justify-between items-center p-4 bg-black">
          <FaBars className="text-xl" />

        
          <div className="text-xl">Accenture</div>

         
          <FaSearch className="text-xl" />
        </div>
      </div>

      <div className="relative w-full h-96 opacity-20 bg-cover bg-center  p-20" style={{ backgroundImage: "url('/my.jpeg')" }}>
        <div className='sm:text-sm md:text-8xl text-white font-bold'>
          Get to know deepfakes before they know you
        </div>
        <div className="flex gap-3 items-center mt-5 ">
          <p className="font-bold text-sm">Access Accenture's First Ai-iD Kit</p>
          <button className="bg-purple-600 hover:bg-purple-800 p-1 flex items-center transition-transform duration-300 ease-in-out hover:animate-forward-icon">
            <Icons.MdKeyboardArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
