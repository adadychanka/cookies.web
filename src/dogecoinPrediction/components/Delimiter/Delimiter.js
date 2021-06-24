import React from "react";
import classNames from "classnames";
import "./styles.css";

const Delimiter = ({ className }) => {
  return <div className={classNames("delimiter", className)} />;
};

export default Delimiter;
