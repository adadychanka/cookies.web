import React, { useState, useCallback } from "react";
import CardSpinner from "../../components/CardSpinner";
import GeneratePredictionCard from "./GeneratePredictionCard";
import { usePrediction } from "../../dogecoinPrediction/hooks/usePrediction";
import PredictionCard from "./PredictionCard";
import ErrorCard from "./ErrorCard";
import WidgetErrorBoundary from "./WidgetErrorBoundary";
import "../styles.css";

const PredictionWidget = ({ useArt }) => {
  const { art, isArtLoading, artError } = useArt();

  const [wallet, setWallet] = useState();
  const { prediction, generatePrediction, predictionError } = usePrediction(art?.id, wallet);

  const handleWalletChange = useCallback((e) => {
    const wallet = e.target.value;

    setWallet(wallet);
  }, []);

  const handleGeneratePrediction = useCallback(async () => {
    generatePrediction();
  }, [generatePrediction]);

  const displayPredictionForm = !artError && !prediction;
  const displayGeneratedPrediction = !artError && prediction;
  const displayError = !!artError;

  return (
    <>
      <CardSpinner isLoading={isArtLoading} />

      {displayPredictionForm && (
        <div className="prediction-widget__form">
          <GeneratePredictionCard
            title={"Dogecoin prediction ball"}
            className="u-height-full"
            onGenerateClick={handleGeneratePrediction}
            onWalletChange={handleWalletChange}
            supportText={`Congratulations! You are the proud owner of the limited collection "Dogecoin". It's time to find out
                which prediction from shiba inu you have got! Hurry up, woof woof!`}
            errorMessage={predictionError}
          />
        </div>
      )}
      {displayGeneratedPrediction && (
        <div className="prediction-widget__prediction">
          <PredictionCard prediction={prediction} />
        </div>
      )}
      {displayError && <ErrorCard mainText="Something went wrong" cardTitle="Woof... Woof... Woof..." />}
    </>
  );
};

const PredictionWidgetContainer = (props) => {
  return (
    <div className="prediction-widget">
      <WidgetErrorBoundary>
        <PredictionWidget {...props} />
      </WidgetErrorBoundary>
    </div>
  );
};

export default PredictionWidgetContainer;
