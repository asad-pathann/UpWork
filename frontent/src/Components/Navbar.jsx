import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Sidebar show={show} setShow={setShow} />

      <nav className="flex  relative items-center justify-between p-5">
        <div className="flex gap-5 items-center">
          {/* ====== Animated Hamburger (Turns into X) ====== */}
          <button
            onClick={() => setShow(!show)}
            className="relative w-10 h-10 focus:outline-none lg:hidden"
            aria-label="Toggle menu"
          >
            <div className="flex flex-col justify-center items-center w-full h-full gap-1.5">
              {/* Top Line */}
              <span
                className={`block w-7 h-0.5 bg-black transition-all duration-300 ease-out origin-center ${
                  show ? "rotate-45 translate-y-2" : "rotate-0 translate-y-0"
                }`}
              />

              {/* Middle Line → Disappears */}
              <span
                className={`block w-7 h-0.5 bg-black transition-all duration-300 ease-out ${
                  show ? "opacity-0 scale-0" : "opacity-100 scale-100"
                }`}
              />

              {/* Bottom Line */}
              <span
                className={`block w-7 h-0.5 bg-black transition-all duration-300 ease-out origin-center ${
                  show ? "-rotate-45 -translate-y-2" : "rotate-0 translate-y-0"
                }`}
              />
            </div>
          </button>

          <img src="/svgs/logo.svg" height={100} width={100} alt="Logo" />

          <ul className="hidden lg:flex unstyled gap-6 font-semibold text-sm">
            <li className="cursor-pointer hover:text-green-600 transition">
              Hire Freelancing
            </li>
            <li className="cursor-pointer hover:text-green-600 transition">
              Find work
            </li>
            <li className="cursor-pointer hover:text-green-600 transition">
              Why Upworks
            </li>
            <li className="cursor-pointer hover:text-green-600 transition">
              What`s new
            </li>
            <li className="cursor-pointer hover:text-green-600 transition">
              Pricing
            </li>
            <li className="cursor-pointer hover:text-green-600 transition">
              For enterprise
            </li>
          </ul>
        </div>

        <div className={`flex items-center gap-5`}>
          <button
            className={`text-sm font-medium hover:text-green-600 transition hidden lg:block`}
          >
            <Link to={"login"}>Log In</Link>
          </button>

          {show ? (
            <CiSearch size={25} className="cursor-pointer" />
          ) : (
            <Link to={"/signUp"}>
              <button className="px-5 py-2 font-semibold text-sm bg-green-600 rounded-xl text-white hover:bg-green-700 transition">
                Sign Up
              </button>
            </Link>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
