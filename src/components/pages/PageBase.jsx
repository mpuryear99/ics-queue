import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";

const contentStyle = {
  position: 'relative',
  width: '100%',
  maxWidth: '90rem',
  margin: '0 auto',
};

const PageBase = () => {
  return(
    <>
    <Header />
    <div style={contentStyle}>
      <Outlet />
    </div>
    <Footer />
    </>
  )
}

export default PageBase;