import React from "react";
import Logo from "../HeaderLogo";
import Nav from "../Navigation";
import "./styles.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <Logo />
      </div>
      <div className="header__nav">
        <Nav />
      </div>
    </header>
  );
};

export default Header;
