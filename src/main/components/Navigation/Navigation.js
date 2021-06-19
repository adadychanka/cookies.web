import React from "react";

import { raribleLogo, twitterLogo } from "../../assets";
import "./styles.css";

const Nav = () => {
  return (
    <nav className="nav">
      <a className="nav__item" href="#1">
        Cookies
      </a>
      <a className="nav__item" href="#2">
        Recent
      </a>
      <a className="nav__item nav__item_icon" href="https://rarible.com/grivitsky" target="_blank" rel="noreferrer">
        <picture>
          <source src={raribleLogo} />
          <img src={raribleLogo} alt="Rarible link" />
        </picture>
      </a>
      <a className="nav__item nav__item_icon" href="https://twitter.com/grivitsky" target="_blank" rel="noreferrer">
        <picture>
          <source src={twitterLogo} />
          <img src={twitterLogo} alt="Twitter link" />
        </picture>
      </a>
    </nav>
  );
};

export default Nav;
