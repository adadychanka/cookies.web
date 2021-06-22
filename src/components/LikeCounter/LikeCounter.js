import React from "react";
import { likeIcon } from "../../main/assets";
import "./styles.css";

const LikeCounter = ({ amount = 0, width, height }) => {
  return (
    <div className="like-counter">
      <img height={height} width={width} src={likeIcon} className="like-counter__icon" />
      <div className="like-counter__amount">{amount}</div>
    </div>
  );
};

export default LikeCounter;
