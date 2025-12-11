import React from "react";
import "./globals.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FirstSignUp from "./Components/FirstSignUp";
import SecoundSignUp from "./Components/SecoundSignUp";
import Login from "./pages/Login";
import Work from "./pages/Work";
import { Toaster } from "react-hot-toast";
import Otp from "./pages/Otp";
import FirstJob from "./pages/postJob/FirstJob";
const App = () => {
  return (
    <>
      <Router>
        <Toaster />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signUp" element={<FirstSignUp />} />
          <Route path="/secoundSign" element={<SecoundSignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/work" element={<Work />} />
          <Route path="/otp" element={<Otp />} />
          <Route path="/first-job-section" element={<FirstJob />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
