import React from "react";
import { mainBackground } from "../../assets";
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
