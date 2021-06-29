import React, { useCallback, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Header from "../components/Header";
import Background from "../components/Background";
import { ErrorNotification } from "../components/Notification";
import PredictionCard from "./components/PredictionCard";
import GeneratePredictionCard from "./components/GeneratePredictionCard";
import CardSpinner from "./components/CardSpinner";
import Delimiter from "./components/Delimiter";
import MerchCard from "./components/MerchCard";
import { useDogecoinPredictionBallArt } from "./hooks/useArt";
import { usePrediction } from "./hooks/usePrediction";
import { merchHologram, merchPrint } from "./assets";
import "react-toastify/dist/ReactToastify.min.css";
import "./styles.css";

const DogecoinPrediction = () => {
  const { art, isArtLoading } = useDogecoinPredictionBallArt();
  const [wallet, setWallet] = useState();
  const { prediction, generatePrediction, predictionError } = usePrediction(art?.id, wallet);

  const handleWalletChange = useCallback((e) => {
    const wallet = e.target.value;

    setWallet(wallet);
  }, []);

  const handleGeneratePrediction = useCallback(async () => {
    generatePrediction();
  }, [generatePrediction]);

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
          <CardSpinner isLoading={isArtLoading} />
          {!prediction && (
            <div className="dogecoin-prediction__card">
              <GeneratePredictionCard
                className="u-height-full"
                onGenerateClick={handleGeneratePrediction}
                onWalletChange={handleWalletChange}
              />
            </div>
          )}
          {prediction && (
            <div className="dogecoin-prediction__prediction">
              <PredictionCard prediction={prediction} />
              <Delimiter className="dogecoin-prediction__delimiter" />
              <section className="dogecoin-prediction__merch">
                <h4 className="dogecoin-prediction__merch-title">Merch</h4>
                <div className="dogecoin-prediction__merch-cards">
                  <MerchCard
                    src={merchPrint}
                    title="30x50cm Dogecoin print"
                    description="You can get a free high quality print with any message, just DM us in Twitter"
                  />
                  <MerchCard
                    src={merchHologram}
                    title="10x15cm 3D Hologram"
                    description="You can get a free high quality print with any message, just DM us in Twitter"
                  />
                </div>
              </section>
            </div>
          )}
        </main>
        <footer className="dogecoin-prediction__footer"></footer>
        <ErrorNotification message={predictionError} />
      </div>
    </Background>
  );
};

export default DogecoinPrediction;
