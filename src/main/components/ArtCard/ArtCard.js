import React from "react";
import Avatar from "../Avatar";
import { likeIcon, meatballsMenu, mikitaAvatar, raribleLogo, dogePredictionBallArt, raribleAvatar } from "../../assets";
import "./styles.css";

const ArtCard = () => {
  return (
    <div className="art-card">
      <div className="art-card__header">
        <div className="art-card__avatars">
          <div className="art-card__avatar">
            <Avatar width={39} height={39} src={raribleAvatar} />
          </div>
          <div className="art-card__avatar">
            <Avatar width={39} height={39} src={mikitaAvatar} />
          </div>
        </div>
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
        <div className="art-card__like">
          <img src={likeIcon} className="art-card__like-icon" />
          <div className="art-card__like-amount">123</div>
        </div>
      </div>
    </div>
  );
};

export default ArtCard;
