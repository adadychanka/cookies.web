import React from "react";
import { predictionBall } from "../../assets";
import "./styles.css";

const Logo = () => {
  return (
    <div className="header-logo">
      <picture className="header-logo__icon">
        <source src={predictionBall} />
        <img src={predictionBall} alt="Dogecoin prediction ball" />
      </picture>

      <span className="header-logo__title">PREDICTIONBall’s</span>
    </div>
  );
};

export default Logo;
