import React from "react";
import { dogePredictionBallArt, meatballsMenu, raribleLogo } from "../../assets";
import CardAvatars from "../../../components/CardAvatars/CardAvatars";
import LikeCounter from "../../../components/LikeCounter";
import { AVATARS } from "../../../constants";
import "./styles.css";

const ArtCard = () => {
  return (
    <div className="art-card">
      <div className="art-card__header">
        <CardAvatars avatars={AVATARS} />
        <div>
          <img width={30} height={30} src={meatballsMenu} />
        </div>
      </div>
      <div className="art-card__body">
        <img className="art-card__art" src={dogePredictionBallArt} alt="Dogecoin prediction ball art" />
        <div className="art-card__name">Dogecoin Prediction Ball</div>
        <div className="art-card__price">
          <span>
            From <span className="u-color-white">0.6 ETH</span>
          </span>{" "}
          <span>8/10</span>
        </div>
      </div>
      <div className="art-card__footer">
        <div className="art-card__action">
          <img className="art-card__action-icon" src={raribleLogo} />
          <span className="art-card__action-text">Place a bid</span>
        </div>
        <LikeCounter amount={123} />
      </div>
    </div>
  );
};

export default ArtCard;
