import React from "react";
import classNames from "classnames";
import CardAvatars from "../CardAvatars/CardAvatars";
import { AVATARS } from "../../constants";
import LikeCounter from "../LikeCounter";

import "./styles.css";

const Card = ({ title, className, children, likeAmount = 33 }) => {
  return (
    <div className={classNames("card", className)}>
      <div className="card__header">
        <div className="card__header-info">
          <CardAvatars avatars={AVATARS} />
          <span className="card__header-title">{title}</span>
        </div>
        {likeAmount && <LikeCounter amount={likeAmount} />}
      </div>
      <div className="card__content">{children}</div>
      <div className="card__footer"></div>
    </div>
  );
};

export default Card;
