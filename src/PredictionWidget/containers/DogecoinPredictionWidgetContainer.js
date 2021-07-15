import React from "react";
import { useDogecoinPredictionBallArt } from "../../dogecoinPrediction/hooks/useArt";
import PredictionWidget from "../components/PredictionWidget";

const DogecoinPredictionWidgetContainer = () => {
  const useArt = useDogecoinPredictionBallArt;

  return <PredictionWidget useArt={useArt} />;
};

export default DogecoinPredictionWidgetContainer;
