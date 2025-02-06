import React from "react";
import Navbar from "../shared/Navbar/Navbar";
import Footer from "../shared/footer/Footer";
import { Outlet } from "react-router";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
