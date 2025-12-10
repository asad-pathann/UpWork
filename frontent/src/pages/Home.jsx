import React from "react";
import Navbar from "../Components/Navbar";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Home = () => {

// redux user -----
  const {user}  = useSelector((state)=>state.auth)


  // ---- navagte ---
  const navagte = useNavigate()

// ---- useEffect ---- 

  useEffect(()=>{
    if(user){
      navagte("/work")
        }
  },[])
  return (
    <>
      <Navbar />
    </>
  );
};

export default Home;
