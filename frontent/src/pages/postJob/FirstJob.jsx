import React, { useContext, useState } from "react";

import MainNav from "../../Components/mainNav";
import { JobContext } from "../../context/JobContext";
import { RiShoppingBag3Fill } from "react-icons/ri";
import Radio from "@mui/material/Radio";

const FirstJob = () => {
  const [scopeType, setScopeType] = useState("");
  return (
    <>
      <MainNav />

      <div className="flex md:flex-row flex-col gap-5 mt-5 justify-center  w-[90%] md:justify-between xl:w-[75%] lg:w-[80%] mx-auto">
        <h1 className="text-2xl font-semibold w-full md:w-[30%]">
          How can we help you get started ?
        </h1>
        {/*  */}
        <div className="flex flex-col w-full md:w-[70%]">
          <ul className="unstyled  flex flex">
            <li>
              i want to create n new job post
              <div className="flex gap-2 mt-6 ">
                <label
                  onClick={() => setScopeType("long-term")}
                  htmlFor="type"
                  className={` ${
                    scopeType == "long-term" ? "outline-1" : "border-gray-500"
                  } border border-2 py-6    rounded-md px-2 `}
                >
                  <div className="flex items-center justify-between">
                    <RiShoppingBag3Fill size={25} />
                    <Radio
                      checked={scopeType == "long-term"}
                      value={"long-term"}
                      onChange={() => setScopeType(e.target.value)}
                      name="type"
                      id="type"
                      sx={{
                        "& .MuiSvgIcon-root": {
                          fontSize: 25,
                        },
                      }}
                    />{" "}
                  </div>

                  <h4 className="text-lg font-semibold ">Long term Project</h4>
                  <p className="text-sm mt-1 ">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. At
                    blanditiis earum in. Explicabo, aliquid nemo?
                  </p>
                </label>
                <label
                  onClick={() => setScopeType("short-term")}
                  htmlFor="type2"
                  className={` ${
                    scopeType == "short-term" ? "outline-1 " : "border-gray-500"
                  } border border-2 rounded-md p-2`}
                >
                  <div className="flex items-center justify-between">
                    <RiShoppingBag3Fill />
                    <Radio
                      checked={scopeType == "short-term"}
                      value={"short-term"}
                      onChange={() => setScopeType(e.target.value)}
                      name="type"
                      id="type2"
                      sx={{
                        "& .MuiSvgIcon-root": {
                          fontSize: 25,
                        },
                      }}
                    />{" "}
                  </div>

                  <h4 className="text-lg font-semibold mt-2 ">
                    Short term Project
                  </h4>
                  <p className="text-sm mt-1 ">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. At
                    blanditiis earum in. Explicabo, aliquid nemo?
                  </p>
                </label>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default FirstJob;
