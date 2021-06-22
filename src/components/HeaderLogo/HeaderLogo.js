import React from "react";
import { predictionBall } from "../../main/assets";
import "./styles.css";

const Logo = () => {
  return (
    <div className="header-logo">
      <img className="header-logo__icon" src={predictionBall} alt="Dogecoin prediction ball" />

      <span className="header-logo__title">PREDICTIONBall’s</span>
    </div>
  );
};

export default Logo;
