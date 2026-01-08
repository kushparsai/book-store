import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";


const MainLayout = ({ theme, setTheme }) => {
  return (
    <>
      <Navbar theme={theme} setTheme={setTheme} />
      <Outlet />
    </>
  );
};

export default MainLayout;
