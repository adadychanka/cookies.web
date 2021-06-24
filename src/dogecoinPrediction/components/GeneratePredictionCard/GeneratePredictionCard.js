import React from "react";
import { Button } from "../../../components/Button";
import Card from "../../../notFound/components/Card/Card";

const GeneratePredictionCard = ({ className, onWalletChange, onGenerateClick }) => {
  return (
    <Card title="Dogecoin prediction ball" className={className}>
      <div className="dogecoin-prediction__card-content">
        <div className="dogecoin-prediction__title">Enter your wallet</div>
        <div className="dogecoin-prediction__wallet">
          <input
            className="dogecoin-prediction__wallet-input"
            type="text"
            autoFocus
            tabIndex={0}
            onChange={onWalletChange}
          />
        </div>
        <div className="dogecoin-prediction__subtitle">Thank you for your purchase. We hope you will have fun!</div>
        <div className="dogecoin-prediction__action">
          <Button value="Generate prediction" onClick={onGenerateClick} />
        </div>
        <div className="dogecoin-prediction__support-text">
          {`Congratulations! You are the proud owner of the limited collection "Dogecoin". It's time to find out
                which prediction from shiba inu you have got! Hurry up, woof woof!`}
        </div>
      </div>
    </Card>
  );
};

export default React.memo(GeneratePredictionCard);
