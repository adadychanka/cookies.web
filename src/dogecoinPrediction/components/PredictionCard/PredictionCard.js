import React from "react";
import classNames from "classnames";
import SimpleCard from "../SimpleCard";
import { dogecoinPredictionArt, twitterIcon, downloadIcon } from "../../assets";
import "./styles.css";

const PredictionCard = ({ prediction, className }) => {
  return (
    <SimpleCard className={classNames("prediction-card", className)}>
      <div className="prediction-card__content">
        <img className="prediction-card__art" src={dogecoinPredictionArt} alt="" />
        <div className="prediction-card__actions">
          <div className="prediction-card__share">
            <span>Share</span>
            <a className="prediction-card__share-link" href="#shareOnTwitter">
              <img src={twitterIcon} className="prediction-card__share-icon" />
            </a>
          </div>
          <div className="prediction-card__download">
            <a href="#download" className="prediction-card__download-link" target="_blank" rel="noreferrer">
              <img src={downloadIcon} alt="" className="prediction-card__download-icon" />
            </a>
          </div>
        </div>
      </div>
    </SimpleCard>
  );
};

export default PredictionCard;
