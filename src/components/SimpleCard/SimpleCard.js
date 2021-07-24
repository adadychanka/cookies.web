import React from "react";
import "./styles.css";
import classNames from "classnames";

const SimpleCard = ({ children, className }) => {
  return <div className={classNames("simple-card", className)}>{children}</div>;
};

export default SimpleCard;
