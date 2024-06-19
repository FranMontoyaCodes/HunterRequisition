"use client";
import { MenuContext } from "@/context/MenuContext";
import React, { useContext, useState } from "react";
import { FaBars, FaUserAstronaut } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";

function MainHeader() {
  const { toggle } = useContext(MenuContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleProfileClick = () => {
    // Add profile click handling logic here
    console.log("Profile clicked");
  };

  const handleLogoutClick = () => {
    // Add logout click handling logic here
    console.log("Logout clicked");
  };

  return (
    <div className="bg-white flex justify-between items-center px-4 h-12 mb-4 relative">
      <div className="flex items-center">
        <div onClick={toggle} className="cursor-pointer">
          <FaBars />
        </div>
        <div className="ml-4">Hunter Requisition Manager</div>
      </div>
      <div className="relative">
        <div onClick={toggleDropdown} className="cursor-pointer">
          <FaUserAstronaut />
        </div>
        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded shadow-lg z-10">
            <ul className="py-1">
              <li
                onClick={handleProfileClick}
                className="px-4 py-2 cursor-pointer hover:bg-gray-100"
              >
                Account
              </li>
              <li
                onClick={handleLogoutClick}
                className="px-4 py-2 cursor-pointer hover:bg-gray-100"
              >
                <IoIosLogOut /> 
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default MainHeader;
