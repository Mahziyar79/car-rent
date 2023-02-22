import React from "react";
import { useSelector } from "react-redux";
import Footer from "./Footer";
import Header from "./Header";

function Layout({ children }) {
  const darkMode = useSelector((state) => state.carReducer.darkMode);

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="bg-[#f6f7f9] dark:bg-[#212121]">
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
