import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "components/Footer"
import Header from "components/Header";

const contentStyle = {
  boxSizing: 'border-box',
  position: 'relative',
  width: '100%',
  maxWidth: '90rem',
  margin: '0 auto',
  padding: '20px'
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