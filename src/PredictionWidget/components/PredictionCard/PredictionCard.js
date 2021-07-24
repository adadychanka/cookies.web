import React from "react";
import classNames from "classnames";
import SimpleCard from "../../../components/SimpleCard";
import { downloadIcon } from "../../../dogecoinPrediction/assets";
import "./styles.css";

const PredictionCard = ({ prediction, className }) => {
  const { linkToVideo = null, linkToDownload = null } = prediction;

  return (
    <SimpleCard className={classNames("prediction-card", className)}>
      <div className="prediction-card__content">
        <video className="prediction-card__art" autoFocus autoPlay loop controls>
          <source src={linkToVideo} type="video/mp4" />
        </video>
        <div className="prediction-card__actions">
          <a href={linkToDownload} target="_blank" rel="noreferrer" className="prediction-card__download">
            <img src={downloadIcon} alt="Download icon" className="prediction-card__download-icon" />
          </a>
        </div>
      </div>
    </SimpleCard>
  );
};

export default PredictionCard;
