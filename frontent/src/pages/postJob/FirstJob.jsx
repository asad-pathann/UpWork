import React, { useContext, useState } from "react";

import MainNav from "../../Components/mainNav";
import { MdOutlineErrorOutline } from "react-icons/md";
import TextField from "@mui/material/TextField";

import { JobContext } from "../../context/JobContext";
import { RiShoppingBag3Fill } from "react-icons/ri";
import Radio from "@mui/material/Radio";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";

const FirstJob = () => {
  const [scopeType, setScopeType] = useState("");

  const [open, setOpen] = useState(false);

  const handleOpen = (id) => {
    setOpen(open === id ? null : id);
  };

  const navigate = useNavigate();
  return (
    <>
      <MainNav />

      <div className="flex md:flex-row flex-col gap-5 mt-5 justify-center  w-[90%] md:justify-between xl:w-[75%] lg:w-[80%] mx-auto">
        <h1 className="text-2xl font-semibold w-full md:w-[30%]">
          How can we help you get started ?
        </h1>
        {/*  */}
        <div className="flex flex-col w-full md:w-[70%]">
          <ul className="unstyled  flex flex-col gap-3 ">
            <li
              className="text-lg cursor-pointer selection:bg-transparent overflow-hidden"
              onClick={(e) => {
                {
                  handleOpen(1), e.stopPropagation();
                }
              }}
            >
              i want to create n new job post
              <div
                className={`flex gap-2 transition-all duration-200   h-0 opacity-0  ${
                  open == 1 ? "h-[170px] opacity-100 " : "invisible"
                }`}
              >
                <label
                  onClick={() => setScopeType("long-term")}
                  htmlFor="type"
                  className={` ${
                    scopeType == "long-term" ? "outline-1" : "border-gray-500"
                  } border border-2 py-3    rounded-md px-2 `}
                >
                  <div
                    className="flex
                  
                   items-center justify-between"
                  >
                    <RiShoppingBag3Fill size={25} />
                    <Radio
                      style={{
                        color: "text-green-500",
                      }}
                      className="accent-green-600"
                      checked={scopeType == "long-term"}
                      value={"long-term"}
                      onChange={() => setScopeType(e.target.value)}
                      name="type"
                      id="type"
                      sx={{
                        "& .MuiSvgIcon-root": {
                          fontSize: 30,
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
                  } border border-2 rounded-md px-2 py-3`}
                >
                  <div className="flex items-center justify-between">
                    <MdOutlineErrorOutline size={25} />
                    <Radio
                      style={{
                        color: "green",
                      }}
                      checked={scopeType == "short-term"}
                      value={"short-term"}
                      onChange={() => setScopeType(e.target.value)}
                      name="type"
                      id="type2"
                      sx={{
                        "& .MuiSvgIcon-root": {
                          fontSize: 30,
                        },
                      }}
                    />{" "}
                  </div>

                  <h4 className="text-lg font-semibold">Short term Project</h4>
                  <p className="text-sm ">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. At
                    blanditiis earum in. Explicabo, aliquid nemo?
                  </p>
                </label>
              </div>
            </li>

            <li
              onClick={(e) => {
                handleOpen(2);
              }}
              className=" text-lg cursor-pointer selection:bg-transparent"
            >
              i want to continue editing a draf
              <div
                onClick={(e) => {
                  e.stopPropagation();
                }}
                className={`w-full  duration-300 transition-all ${
                  open == 2 ? "visible h-[50px]" : "invisible h-[0]"
                }`}
              >
                <TextField select fullWidth>
                  <MenuItem>testting</MenuItem>
                </TextField>
              </div>
            </li>
            <li
              onClick={(e) => {
                handleOpen(3), e.stopPropagation();
              }}
              className=" cursor-pointer selection:bg-transparent text-lg"
            >
              i want to rework on a perivoes job
              <div
                className={`w-full duration-200  transition-all  ${
                  open == 3 ? "visible h-[50px] " : "invisible "
                }  h-0`}
              >
                <TextField select fullWidth>
                  <MenuItem>testting</MenuItem>
                </TextField>
              </div>
            </li>
            <li
              onClick={(e) => {
                handleOpen(4), e.stopPropagation();
              }}
              className=" cursor-pointer selection:bg-transparent text-lg"
            >
              app works
              <div
                className={`w-full  duration-200  transition-all ${
                  open == 4 ? "visible h-[50px] " : "invisible "
                } invisible h-0`}
              >
                <TextField select fullWidth>
                  <MenuItem>testting</MenuItem>
                </TextField>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto flex gap-10 mt-10     w-[90%] md:justify-end xl:w-[75%] lg:w-[80%]">
        <Button
          style={{
            color: " oklch(62.7% 0.194 149.214)",
          }}
        >
          cencel
        </Button>

        <Link to={"/secound-job-section"}>
          <Button
            style={{
              background: " oklch(62.7% 0.194 149.214)",
            }}
            className="bg-green-600"
            dis
            variant="contained"
          >
            continue
          </Button>
        </Link>
      </div>
    </>
  );
};

export default FirstJob;
