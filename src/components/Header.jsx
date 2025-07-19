import React from 'react'
import { useState } from 'react';
import { NavLink, Link } from "react-router-dom";
import { FaSearch } from 'react-icons/fa';
import RegistrationPopup from './RegistrationPopup';

function Header() {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <div className="bg-[#0A192F] relative z-40">
    <div className="container mx-auto">
      <nav className="flex justify-between items-center h-16 py-5">
        <div className="hidden md:block">
          <ul className="flex space-x-8">
            
          <button
                onClick={() => setShowPopup(true)}
                className="font-semibold bg-[#00B4D8] p-2 rounded-md text-white"
              >
                Join Us
              </button>
            {/* Popup component */}
      {showPopup && <RegistrationPopup onClose={() => setShowPopup(false)} />}
            
            
            {/* <li className="relative group">
              <span className="flex items-center gap-x-1  font-semibold">
                Categories
                <svg className="w-4 h-4 text-gray-400 group-hover:text-black" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd"/>
                </svg>
              </span>
              
              <ul className="absolute hidden group-hover:flex flex-col left-0 top-full mt-1 w-40 bg-white shadow-md rounded-md">
                <li><NavLink to="/categories" className="block px-4 py-2 hover:bg-gray-100">Category 1</NavLink></li>
              </ul>
            </li> */}

            {/* <li className="relative group">
              <span className="flex items-center gap-x-1  font-semibold">
                Pages
                <svg className="w-4 h-4 group-hover:text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd"/>
                </svg>
              </span>              
              <ul className="absolute hidden group-hover:flex flex-col left-0 top-full mt-1 w-40 bg-white shadow-md rounded-md">
                <li><NavLink to="/faqs" className="block px-4 py-2 hover:bg-gray-100">Faqs</NavLink></li>
                
              </ul>
            </li> */}
          </ul>
        </div>

        
        <div className="text-lg font-bold">
        <div className='flex items-center'><h1 className='text-white'><NavLink to="/">TechVerse</NavLink></h1></div>
        </div>

        
        <div>
          <ul className="flex items-center space-x-8">
          <div className="">
            <div className="relative">
              <input type="text"placeholder="Search" className="h-10 w-72 bg-[#DFF1F0] rounded-md px-4 pr-10 outline-none border-none"
              />
              <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>
          </div>
              
          </ul>
        </div>

      </nav>
    </div>
  </div>
)
}

export default Header;
