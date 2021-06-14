import React from "react";
import logoImage from "../../assets/logo.png";
import "./styles.css";

const Logo = () => {
  return (
    <div className="header-logo">
      <picture className="header-logo__icon">
        <source src={logoImage} />
        <img src={logoImage} alt="Dogecoin prediction ball" />
      </picture>

      <span className="header-logo__title">PREDICTIONBall’s</span>
    </div>
  );
};

export default Logo;
