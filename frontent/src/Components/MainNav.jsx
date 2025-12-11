import React from "react";
import { RiArrowDownWideLine } from "react-icons/ri";

import { IoNotificationsOutline } from "react-icons/io5"; // Bell icon
import { IoHelpCircleOutline, IoPersonCircleOutline } from "react-icons/io5"; // Question mark / Help icon
import { IoSearchOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

import { WorkData } from "../data/WorkData";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const mainNav = () => {
  return (
    <>
      <div className="p-3  ">
        <div className="flex items-center justify-between ">
          <div className="flex flex-col gap-2 block md:hidden   ">
            <div className="w-[30px] *: h-[2px] bg-black"></div>
            <div className="w-[30px] *: h-[2px] bg-black"></div>
            <div className="w-[30px] *: h-[2px] bg-black"></div>
          </div>

          <div className="flex  items-center gap-6 ">
            <Link to={"/work"}>
              <img
                src="/public/svgs/logo.svg"
                className="sm:mx-auto md:mx-start block"
                width={100}
                height={100}
                alt=""
              />
            </Link>

            {/* three arrror  design  */}

            <ul className="md:flex w-[878]:hidden items-center gap-5  hidden">
              {WorkData?.map((item, index) => {
                return (
                  <li
                    className={` flex items-center whitespace-nowrap gap-2 relative  text-sm  group   font-semibold `}
                    key={index}
                  >
                    {item?.title && (
                      <>
                        <span className="hover:text-gray-600 transition-all duration-300">
                          {item?.title}
                        </span>

                        {/*item list is  present  and   select the  icons   */}

                        {item?.list && (
                          <IoIosArrowDown className="text-gray-600  group-hover:rotate-180 transition-all duration-300" />
                        )}

                        {/*---- item list  is prasent
                         */}
                        {item?.list && (
                          <>
                            <ul className="absolute  list_style my-3   left-0 bg-white shadow-xl p-2  rounded-md  gap-4  hidden group-hover:block hover:text-black  top-full w-58">
                              {item?.list?.map((item2, index2) => {
                                return (
                                  <li key={index2} className="mb-3">
                                    {item2?.title}
                                  </li>
                                );
                              })}
                            </ul>
                          </>
                        )}
                        <div className="hover:text-gray-500"></div>
                      </>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="flex items-center gap-3 ">
            <div className="border  items-center p-2 hidden lg:flex border-gray-500 rounded-md cursor-pointer w-full max-w-[300px]">
              {/* Search + Input */}
              <div className="flex items-center gap-2  flex-grow">
                <IoSearchOutline />
                <input
                  type="text"
                  placeholder="Search"
                  className="outline-0 w-full"
                />
              </div>

              {/* Divider + Jobs Dropdown */}
              <div className="flex items-center gap-2 ml-3">
                <span className="text-gray-400">|</span>
                <h5>Jobs</h5>
                <RiArrowDownWideLine />
              </div>
            </div>

            {/* ----  last section navbar  iconns  */}

            <IoSearchOutline className="text-2xl  block md:hidden  text-gray-600 hover:text-blue-600 transition-colors cursor-pointer" />

            <div className="md:flex items-center gap-6 hidden">
              {/* Search Icon */}
              <IoSearchOutline className="text-2xl lg:hidden block sm:me-auto md:start-0 text-gray-600 hover:text-blue-600 transition-colors cursor-pointer" />

              {/* Bell Icon (Notification) */}
              <div className="relative cursor-pointer">
                <IoNotificationsOutline className="text-2xl text-gray-600 hover:text-blue-600 transition-colors" />
                {/* Red notification dot */}
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></span>
              </div>

              {/* Help / Question Mark Icon */}
              <IoHelpCircleOutline className="text-2xl text-gray-600 hover:text-blue-600 transition-colors cursor-pointer" />
              <IoPersonCircleOutline className="text-4xl text-gray-700 hover:text-blue-600 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default mainNav;
