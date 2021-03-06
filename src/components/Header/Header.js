import React from "react";
import { Link } from "react-router-dom";
import Logo from "../HeaderLogo";
import Nav from "../Navigation";

import "./styles.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <div className="header__nav">
        <Nav />
      </div>
    </header>
  );
};

export default React.memo(Header);
