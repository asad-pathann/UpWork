import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";

import { sidebarData } from "../data/sidebarData";

const Sidebar = ({ show, setShow }) => {
  return (
    <>
      <div
        className={`min-h-screen fixed top-20 ${
          show ? "translate-x-0" : "-translate-x-full "
        } w-full bg-white z-200`}
      >
        <ul className="unstyled flex flex-col ">
          {sidebarData?.map((item, index) => {
            return (
              <li
                className={`px-5 py-7 flex justify-between items-center`}
                key={index}
              >
                {item?.name}
                <IoMdArrowDropdown />
              </li>
            );
          })}
        </ul>

        <button className="w-[99%] rounded-md mx-auto block text-white bg-green-700 py-3">
          Sign Up
        </button>
      </div>
    </>
  );
};

export default Sidebar;
