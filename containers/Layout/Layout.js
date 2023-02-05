import React from "react";
import {useSelector } from "react-redux";
import Footer from "./Footer";
import Header from "./Header";

function Layout({ children }) {
  const darkMode = useSelector((state) => state.carReducer.darkMode);

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
