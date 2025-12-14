import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { IoLogoApple } from "react-icons/io";
import Checkbox from "@mui/material/Checkbox";
import { Link, useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import ReactFlagsSelect from "react-flags-select";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { RegisterUser } from "../feature/auth/userSlice";
import { useEffect } from "react";
import toast from "react-hot-toast";
const SecoundSignUp = ({ role }) => {
  const [country, setcountry] = useState("");
  const [formFeilds, setFormFeilds] = useState({
    f_name: "",
    l_name: "",
    email: "",
    password: "",
    terms: "",
    mails: "",
  });
  const { f_name, l_name, password, email, terms, mails } = formFeilds;
  const handleChange = (e) => {
    setFormFeilds({
      ...formFeilds,
      [e.target.name]:
        e.target.type == "checkbox" ? e.target.checked : e.target.value,
    });
  };

  const { user, userLoading, userSuccess, userMessage, userError } =
    useSelector((state) => state.auth);

  let dispacth = useDispatch();
  let navagate = useNavigate();

  const handleRegister = async () => {
    let userData = {
      f_name,
      l_name,
      role,
      email,
      country,
      password,
      terms,
      mails,
    };

    dispacth(RegisterUser(userData));
  };

  useEffect(() => {
    if (userError) {
      toast.error(userMessage);
    }
    if (userSuccess) {
      toast.success("congraturltion 💕💕");
      navagate("/otp");
    }
  }, [userSuccess, userError]);
  return (
    <>
      <div>
        <div className="flex items-center bg-white  sticky top-0 shadow z-10   py-3 md:mb-0 mb-10  px-7 justify-between ">
          <img src="/svgs/logo.svg" width={100} height={100} alt="" />

          <div className="md:flex hidden   items-center  gap-5  ">
            <button className="text-lg">Here to hire talent?</button>
            <button className="text-green-600 text-lg underline cursor-pointer">
              Join as a client
            </button>
          </div>
        </div>

        <div className="flex  z-0  mt-10 flex-col xl:w-[40%] lg:w-[45%] md:w-[80%] w-[90%] mx-auto items-center justify-center">
          {/* apple and google logo div */}
          <h2 className="text-3xl text-black">Sign up to find work you love</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 w-full  gap-4 items-center mt-5 ">
            <div className="border border-gray-500  py-1 px-6    md:px-10 rounded-full">
              <div className="flex items-center gap-2 ">
                <IoLogoApple />
                <span className="text-nowrap">Continue with apple</span>
              </div>
            </div>
            <div className="border border-gray-500  py-1   px-6 md:px-10 rounded-full">
              <div className="flex items-center gap-2 ">
                <FaGoogle />
                <span className="text-nowrap sm:w-[50%]">
                  Continue with apple
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center mt-5 text-gray-300 gap-2 overflow-hidden w-full mx-auto">
            <hr className=" border h-[1px] w-[90%] " />
            <span className="text-black">or</span>
            <hr className=" border w-full" />
          </div>

          <form className="w-full mt-5">
            {/* fisrt name and last name  div  */}
            <div className="flex  gap-3 ">
              <div className="w-full flex flex-col">
                <TextField
                  name="f_name"
                  value={f_name}
                  onChange={handleChange}
                  id="outlined-basic"
                  label="fist name"
                  variant="outlined"
                />
              </div>
              <div className="w-full flex flex-col">
                <TextField
                  name="l_name"
                  value={l_name}
                  onChange={handleChange}
                  id="outlined-basic"
                  label="last name"
                  variant="outlined"
                />
              </div>
            </div>
            {/*  */}
            <div className="mt-3 ">
              <TextField
                className="w-full"
                name="email"
                value={email}
                onChange={handleChange}
                id="outlined-basic"
                label="Email"
                variant="outlined"
              />
            </div>
            {/*  */}
            <div className="mt-3 ">
              <TextField
                name="password"
                value={password}
                onChange={handleChange}
                id="outlined-basic"
                label="Password"
                variant="outlined"
                className="w-full"
              />
            </div>
            {/*  */}
            <div className="mt-3 ">
              <ReactFlagsSelect
                selected={country}
                onSelect={(code) => setcountry(code)}
              />
              ;
            </div>

            <div className="flex mt-5   w-full items-center  gap-2">
              <Checkbox
                name="mails"
                value={mails}
                onChange={handleChange}
                style={{
                  padding: 0,
                }}
                className=""
                slotProps={{
                  input: { "aria-label": "controlled" },
                }}
              />
              <p className="text-sm">
                Send me helpful emails to find rewarding work and job leads.
              </p>
            </div>
            <div className="flex mt-5  w-full items-start  gap-2">
              <Checkbox
                onChange={handleChange}
                value={terms}
                name="terms"
                style={{
                  padding: 0,
                }}
                className=""
                slotProps={{
                  input: { "aria-label": "controlled" },
                }}
              />
              <p className="text-sm">
                Yes, I understand and agree to the{" "}
                <span className="text-[#108A00]">
                  Upwork Terms of Service,{" "}
                </span>
                including
                <span className="text-[#108A00]">User Agreement</span>and{" "}
                <span className="text-[#108A00]">Privacy Policy.</span>
              </p>
            </div>

            <button
              onClick={handleRegister}
              type="button"
              className="bg-[#108A00] active:scale-95 py-2 px-5  mx-auto  block  mt-10 rounded-md text-white font-semibold "
            >
              Create my acccount
            </button>
            <p className="text-center mt-3 ">
              Already have an account?{" "}
              <Link className="text-[#108A00] underline" to={"/login"}>
                {" "}
                Log In{" "}
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default SecoundSignUp;
