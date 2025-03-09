import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import ForgotPassword from "./ForgotPassword";

const Signin = () => {
  return (
    <div className="relative flex">
      <div className="flex-1 flex flex-col bg-gradient-to-br from-black to-[#e76f51]">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/forget-password" element={<ForgotPassword />} />
        </Routes>
      </div>
    </div>
  );
};

export default Signin;
