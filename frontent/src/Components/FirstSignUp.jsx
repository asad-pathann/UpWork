import React, { useState } from "react";
import { TbUserCancel } from "react-icons/tb";
import Radio from "@mui/material/Radio";
import { BsPersonWorkspace } from "react-icons/bs";
import { FaBriefcase } from "react-icons/fa";
import Link from "@mui/material/Link";
import { TbUserCheck } from "react-icons/tb";
import SecoundSignUp from "./SecoundSignUp";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const FirstSignUp = () => {

const {user} = useSelector((state)=>state.auth)
  const [role, setRole] = useState(false);
  const [secoundScreen, setSecoundScreen] = useState(false);


  const navagte = useNavigate()


  useEffect(()=>{

    if(user){
      navagte("/work")

    }
  },[user])
  return (
    <>
      {secoundScreen ? (
        <SecoundSignUp role={role} />
      ) : (
        <>
          <div className="flex py-5 px-6">
            <img src="/svgs/logo.svg" width={80} height={80} alt="" />
          </div>

          <div className="flex flex-col p-3 items-center justify-center ">
            <h1 className="text-[32px] my-5 ">
              Join as a client or freelancer
            </h1>
            <br />
            <div className="flex gap-5  items-center justify-center mx-auto  xl:w-[38%] lg:w-[40%] md:w-[50%] sm:w-[90%]  ">
              <div
                onClick={() => setRole("client")}
                className={`border border-gray-400 p-5 hover:bg-[#F9F9F9]  rounded-md  ${
                  role == "client" && "bg-[#F9F9F9]"
                }`}
              >
                <div className="flex  items-center justify-between">
                  <div>
                    <TbUserCheck size={20} />
                  </div>
                  <div>
                    <Radio
                      value={role}
                      checked={role == "client"}
                      onChange={() => setRole("client")}
                      sx={{
                        "& .MuiSvgIcon-root": {
                          fontSize: 25,
                          padding: 0,
                          color: "gray[200]",
                        },
                      }}
                    />
                  </div>
                </div>
                <h2 className="text-2xl text-start">
                  I'm a client, hiring for a project
                </h2>
              </div>
              <div
                onClick={() => setRole("freelancing")}
                className={`  border border-gray-400 p-5 mx-auto hover:bg-[#F9F9F9]   ${
                  role == "freelancing" && "bg-[#F9F9F9]"
                } rounded-md `}
              >
                <div className="flex  items-center justify-between">
                  <div>
                    <BsPersonWorkspace size={20} />
                  </div>
                  <div>
                    <Radio
                      value={role}
                      onChange={() => setRole("freelancing")}
                      checked={role == "freelancing"}
                      sx={{
                        "& .MuiSvgIcon-root": {
                          fontSize: 25,
                        },
                      }}
                    />
                  </div>
                </div>
                <h2 className="text-2xl text-start">
                  I'm a client, hiring for a project
                </h2>
              </div>
            </div>
            <br />

            <button
              onClick={() => setSecoundScreen(true)}
              disabled={!role}
              className={` active:scale-95  cursor-pointer  ${
                role
                  ? "bg-green-500 text-white font-semibold"
                  : "bg-gray-200 text-gray-400"
              } rounded-md py-2 px-7`}
            >
              {role == ""
                ? "Create Accoount"
                : role == "client"
                ? "Join as a Client"
                : "Applay as a  freelancing"}
            </button>
            <p className="mt-3 ">
              {" "}
              Already have an account?{" "}
              <Link
                className=" cursor-pointer "
                style={{
                  color: "green",
                  textDecoration: "underline",
                }}
                to={"/login"}
              >
                Log In
              </Link>
            </p>
          </div>
        </>
      )}
    </>
  );
};

export default FirstSignUp;
