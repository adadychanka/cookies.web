import React, { useCallback } from "react";
import cn from "classnames";
import { Button } from "../../../components/Button";
import Card from "../../../components/Card";
import "./styles.css";

const GeneratePredictionCard = ({ title, className, onWalletChange, onGenerateClick, supportText, errorMessage }) => {
  const handleGeneratePrediction = useCallback(
    (event) => {
      event.preventDefault();

      onGenerateClick();
    },
    [onGenerateClick]
  );

  const hasError = !!errorMessage;

  return (
    <Card title={title} className={cn("generate-prediction-card", className)}>
      <form className="generate-prediction-card__content" onSubmit={handleGeneratePrediction}>
        <div className="generate-prediction-card__title">Enter your wallet</div>
        <div className="generate-prediction-card__wallet">
          <input
            className={cn("generate-prediction-card__wallet-input", {
              "generate-prediction-card__wallet-input_error": hasError,
            })}
            type="text"
            autoFocus
            required
            tabIndex={0}
            onChange={onWalletChange}
          />
        </div>
        <div className="generate-prediction-card__error">{errorMessage}</div>
        <div
          className={cn("generate-prediction-card__subtitle", {
            "generate-prediction-card__subtitle_error": !hasError,
          })}
        >
          Thank you for your purchase. We hope you will have fun!
        </div>
        <div className="generate-prediction-card__action">
          <Button value="Generate prediction" onClick={handleGeneratePrediction} />
        </div>
        <div className="generate-prediction-card__support-text">{supportText}</div>
      </form>
    </Card>
  );
};

export default React.memo(GeneratePredictionCard);
