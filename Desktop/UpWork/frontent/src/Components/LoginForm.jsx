import React from "react";
import { FaGoogle } from "react-icons/fa";
import { IoLogoApple } from "react-icons/io";
import { TbUser } from "react-icons/tb";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <>
      <div className="w-full p-10   mt-10 mx-auto   xl:w-[40%] lg:w-[45%] md:w-[75%] md:shadow-xl  rounded-md ">
        <h2 className="text-center text-2xl font-semibold">Log in to Upwork</h2>
        <div className=" w-full  md:w-[70%] bg-gray- mx-auto">
          <div className="flex  p-1  mt-5  border rounded-md  border-gray-600 items-center">
            <TbUser size={20} />
            <input type="text" className="w-full outline-0 " />
          </div>
          <button className="w-full text-white py-2 mt-3 rounded-md mx-auto block bg-[#108A00]">
            Continue
          </button>
          <div className="flex items-center mt-5 text-gray-400 gap-2 overflow-hidden w-full  mx-auto">
            <hr className=" border h-[1px] w-[90%] " />
            <span className="text-black">or</span>
            <hr className=" border w-full" />
          </div>
          <div className="w-full flex items-center  gap-3  p-1  text-white  mt-3 rounded-md mx-auto block bg-[#4285F4]">
            <div className="z-10 p-1  w-[30px] h-[30px] bg-white flex items-center justify-center rounded-lg ">
              <img
                className="z-30"
                src="/svgs/googleLogo.webp"
                width={30}
                height={30}
                alt=""
              />
            </div>
            <span>Continue with Google</span>
          </div>
          <div className="w-full border  p-1  mt-3 rounded-md mx-auto block flex gap-3 items-center">
            <div className="flex items-center gap-2  mx-auto  ">
              <IoLogoApple />
              <span className="text-nowrap sm:w-[50%]">
                Continue with apple
              </span>
            </div>
          </div>
          <div className="text-center h-[200px]"></div>
          <h4 className="text-center ">Don't have an Upwork account?</h4>
          <button className="border border-[#14A800] bg-transparent py-2 mx-auto block px-15  text-[#14A800] border-2 mt-3 cursor-pointer hover:border-green-500   rounded-md ">
            <Link to={"/secoundSign"}>Sign Up</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
