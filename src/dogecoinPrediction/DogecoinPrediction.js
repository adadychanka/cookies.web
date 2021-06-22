import React from "react";
import { Helmet } from "react-helmet";
import Header from "../components/Header";
import Background from "../components/Background";
import Card from "../notFound/components/Card/Card";

import "./styles.css";
import { Button } from "../components/Button";

const DogecoinPrediction = () => {
  const handleGeneratePrediction = () => {};

  return (
    <Background>
      <Helmet>
        <title>Dogecoin prediction ball</title>
        <meta name="description" content="Dogecoin prediction ball" />
      </Helmet>
      <div className="dogecoin-prediction">
        <div className="dogecoin-prediction__header">
          <Header />
        </div>
        <main className="dogecoin-prediction__content">
          <Card title="Dogecoin prediction ball" className="dogecoin-prediction__card">
            <div className="dogecoin-prediction__card-content">
              <div className="dogecoin-prediction__title">Enter your wallet</div>
              <div className="dogecoin-prediction__wallet">
                <input className="dogecoin-prediction__wallet-input" type="text" autoFocus tabIndex={0} />
              </div>
              <div className="dogecoin-prediction__subtitle">
                Thank you for your purchase. We hope you will have fun!
              </div>
              <div className="dogecoin-prediction__action">
                <Button value="Generate prediction" onClick={handleGeneratePrediction} />
              </div>
              <div className="dogecoin-prediction__support-text">
                {`Congratulations! You are the proud owner of the limited collection "Dogecoin". It's time to find out
                which prediction from shiba inu you have got! Hurry up, woof woof!`}
              </div>
            </div>
          </Card>
        </main>
      </div>
    </Background>
  );
};

export default DogecoinPrediction;
