import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import MainNav from "../Components/mainNav";
import Button from "@mui/material/Button";
const Work = () => {
  const { user } = useSelector((state) => state.auth);
  const navagte = useNavigate();

  // ---- user not presnt  the  the user and navagte the signUp compomenet

  useEffect(() => {
    if (!user) {
      navagte("/signUp");
    }
  }, []);

  return (
    <>
      <div>
        <MainNav />
      </div>

      <div className=" flex container  w-[90%] mx-auto items-center justify-between ">
        <h2 className="text-3xl capitalize">salam Ao Ghlikum {user?.f_name}</h2>

        {/*  */}

        <Link to="/first-job-section">
          <Button variant="contained">+ Add Job</Button>
        </Link>
      </div>
    </>
  );
};

export default Work;
