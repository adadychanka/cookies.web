import React from "react";
import SimpleCard from "../SimpleCard";
import "./styles.css";

const MerchCard = ({ src, title, description }) => {
  return (
    <SimpleCard className="merch-card">
      <div className="merch-card__content">
        <img src={src} alt="" className="merch-card__image" />
        <div className="merch-card__title">{title}</div>
        <div className="merch-card__description">{description}</div>
      </div>
    </SimpleCard>
  );
};

export default MerchCard;
