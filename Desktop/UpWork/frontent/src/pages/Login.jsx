import React from "react";
import LoginForm from "../Components/LoginForm";

const Login = () => {
  return (
    <>
      <div className="py-5 px-5 ">
        <img
          src="/svgs/logo.svg"
          className=" mx-auto block md:mx-0 "
          width={100}
          height={100}
          alt=""
        />
      </div>
      <LoginForm />
    </>
  );
};

export default Login;
