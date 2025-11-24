import React from "react";
import "./globals.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FirstSignUp from "./Components/FirstSignUp";
import SecoundSignUp from "./Components/SecoundSignUp";
import Login from "./pages/Login";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signUp" element={<FirstSignUp />} />
          <Route path="/secoundSign" element={<SecoundSignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
