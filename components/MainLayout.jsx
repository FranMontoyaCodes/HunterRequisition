"use client";
import React, { useContext } from "react";
import MainHeader from "./MainHeader";
import { AiOutlineHome } from "react-icons/ai";
import { GrProjects } from "react-icons/gr";
import { MdRequestQuote, MdOutlineUpdate } from "react-icons/md";
import { GrValidate } from "react-icons/gr";
import { GrInProgress } from "react-icons/gr";
import { FaRegMoneyBillAlt, FaAngleRight, FaUsers } from "react-icons/fa";
import { PiGitPullRequestDuotone } from "react-icons/pi";
import { BsDatabaseFillLock } from "react-icons/bs";

import Link from "next/link";
import { MenuContext } from "@/context/MenuContext";

const MainLayout = ({ children }) => {
  const { open } = useContext(MenuContext);
  return (
    <div className="bg-gray-100 w-screen min-h-screen">
      <MainHeader />

      <div className="flex justify-start itmes-start">
        <aside
          className={`bg-white rounded-lg overflow-hideen transition-all  ${
            open ? "w-60 p-4" : "w-0"
          }lg:w-60 lg:p-4`}
        >
          <ul>
            <li className="flex justify-start items-center hover:bg-blue-200 hover:text-blue-800-rounded-px5 p-2">
              <MdRequestQuote className="mr-2" />
              <Link href="/">Requests</Link>
            </li>

            <li className="flex justify-start items-center hover:bg-blue-200 hover:text-blue-800-rounded-px5 p-2">
              <PiGitPullRequestDuotone className="mr-2" />
              <Link href="/MakeRequest">Make Request</Link>
            </li>

            <li className="flex justify-start items-center hover:bg-blue-200 hover:text-blue-800-rounded-px5 p-2">
              <MdOutlineUpdate className="mr-2" />
              <Link href="/">Update Request</Link>
            </li>

            <li className="flex justify-start items-center hover:bg-blue-200 hover:text-blue-800-rounded-px2 p-2">
              <GrValidate className="mr-2" />
              <Link href="/">Request Validation</Link>
            </li>

            <li className="flex justify-start items-center hover:bg-blue-200 hover:text-blue-800-rounded-px2 p-2">
              <GrInProgress className="mr-2" />
              <Link href="/RequestP">Request Progress</Link>
            </li>

            <li className="flex justify-start items-center hover:bg-blue-200 hover:text-blue-800-rounded-px5 p-2">
              <FaRegMoneyBillAlt className="mr-2" />
              <Link href="/Budget">Budget</Link>
            </li>

            <li className="flex justify-start items-center hover:bg-blue-200 hover:text-blue-800-rounded-px5 p-2">
              <FaUsers className="mr-2" />
              <Link href="/Users">Users</Link>
            </li>

            <li className="flex justify-start items-center hover:bg-blue-200 hover:text-blue-800-rounded-px5 p-2">
              <BsDatabaseFillLock className="mr-2" />
              <Link href="/">DB</Link>
            </li>
          </ul>
        </aside>
       
      </div>
    </div>
  );
};

export default MainLayout;
