import React from "react";
import { mainBackground } from "../../main/assets";
import "./styles.css";

const Background = ({ children }) => {
  return (
    <>
      <img className="background" src={mainBackground} alt="" />
      {children}
    </>
  );
};

export default Background;
