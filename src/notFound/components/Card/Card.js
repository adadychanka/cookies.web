import React from "react";
import classNames from "classnames";
import CardAvatars from "../../../components/CardAvatars/CardAvatars";
import { AVATARS } from "../../../constants";
import LikeCounter from "../../../components/LikeCounter";

import "./styles.css";

const Card = ({ title, className, children }) => {
  return (
    <div className={classNames("card", className)}>
      <div className="card__header">
        <div className="card__header-info">
          <CardAvatars avatars={AVATARS} />
          <span className="card__header-title">{title}</span>
        </div>
        <LikeCounter amount={33} />
      </div>
      <div className="card__content">{children}</div>
      <div className="card__footer"></div>
    </div>
  );
};

export default Card;
