import React, { useCallback, useState } from "react";
import { Helmet } from "react-helmet";
import Header from "../components/Header";
import Background from "../components/Background";
import { predictionService } from "./services";
import { ErrorNotification } from "../components/Notification";
import PredictionCard from "./components/PredictionCard";
import GeneratePredictionCard from "./components/GeneratePredictionCard";
import CardSpinner from "./components/CardSpinner";
import "react-toastify/dist/ReactToastify.min.css";
import "./styles.css";
import Delimiter from "./components/Delimiter";
import SimpleCard from "./components/SimpleCard";
import { merchPrint, merchHologram } from "./assets";
import MerchCard from "./components/MerchCard";

const DogecoinPrediction = () => {
  const [wallet, setWallet] = useState();
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [generatedPrediction, setGeneratedPrediction] = useState(null);

  const handleWalletChange = useCallback((e) => {
    const wallet = e.target.value;

    setWallet(wallet);
  }, []);

  const handleGeneratePrediction = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const prediction = await predictionService.getPrediction(1, wallet);
      setGeneratedPrediction(prediction);
    } catch (error) {
      const msg = error?.message;
      setError(msg);
    } finally {
      setLoading(false);
    }
  }, [wallet]);

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
          <CardSpinner isLoading={isLoading} />
          {false && (
            <div className="dogecoin-prediction__card">
              <GeneratePredictionCard
                className="u-height-full"
                onGenerateClick={handleGeneratePrediction}
                onWalletChange={handleWalletChange}
              />
            </div>
          )}
          {true && (
            <div className="dogecoin-prediction__prediction">
              <PredictionCard prediction={generatedPrediction} />
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
        <ErrorNotification message={error} />
      </div>
    </Background>
  );
};

export default DogecoinPrediction;
