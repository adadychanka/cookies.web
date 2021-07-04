import React from "react";
import classNames from "classnames";
import SimpleCard from "../SimpleCard";
import { twitterIcon, downloadIcon } from "../../assets";
import "./styles.css";

const PredictionCard = ({ className }) => {
  return (
    <SimpleCard className={classNames("prediction-card", className)}>
      <div className="prediction-card__content">
        <video className="prediction-card__art" autoFocus autoPlay loop controls>
          <source src="https://drive.google.com/uc?export=download&id=_" type="video/mp4" />
        </video>
        <div className="prediction-card__actions">
          <a className="prediction-card__share" href="#shareOnTwitter">
            <span>Share</span>
            <img src={twitterIcon} className="prediction-card__share-icon" />
          </a>
          <a
            href="https://drive.google.com/file/d/_/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="prediction-card__download"
          >
            <img src={downloadIcon} alt="" className="prediction-card__download-icon" />
          </a>
        </div>
      </div>
    </SimpleCard>
  );
};

export default PredictionCard;
