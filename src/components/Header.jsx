import React, { useContext, memo } from "react";
import { Outlet } from "react-router-dom";
import "../assets/scss/header.scss";
import { RiMoonFill, RiSunFill } from "react-icons/ri";
import { ThemeContext } from "../contexts/ThemeContext";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
 
  return (
    <>
      <header className={`header ${theme} elements-color text-color`}>
        <p className="header-title">Where in the world?</p>
        <div className="theme-container" onClick={toggleTheme}>
          <span className="theme-icon">
            {theme === "dark" ? <RiMoonFill /> : <RiSunFill />}
          </span>
          <p className="theme-title">
            {theme === "dark" ? "Dark Mode" : "Light Mode"}
          </p>
        </div>
      </header>
      <main className={`main ${theme} background-color`}>
        <Outlet />
      </main>
    </>
  );
};

export default memo(Header);
