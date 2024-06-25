"use client";
import { MenuContext } from "@/context/MenuContext";
import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";

function MainHeader() {
  const { toggle } = useContext(MenuContext);
  return (
    <div className="bg-white flex justify-between items-center px-4 h-12 mb-4">
      <div>Hunter Requisition Manager</div>
      <div onClick={toggle}className="lg-hidden">
        <FaBars className="cursor-pointer" />
      </div>

      <div>User</div>
    </div>
  );
}

export default MainHeader;
