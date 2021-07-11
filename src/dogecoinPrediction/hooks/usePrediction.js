import { useCallback, useState } from "react";
import { predictionService } from "../../services";

export function usePrediction(artId, wallet) {
  const [prediction, setPrediction] = useState(null);
  const [isPredictionLoading, setPredictionLoading] = useState(false);
  const [error, setError] = useState(null);

  const generatePrediction = useCallback(() => {
    if (!artId) {
      setError("Could not find art");

      return;
    }

    if (!wallet) {
      setError("Invalid wallet number");

      return;
    }

    (async () => {
      try {
        setPredictionLoading(true);
        setError(null);

        const prediction = await predictionService.getPrediction(artId, wallet);

        setPrediction(prediction);
      } catch (error) {
        const msg = error?.message;
        setError(msg);
      } finally {
        setPredictionLoading(false);
      }
    })();
  }, [artId, wallet]);

  return {
    predictionError: error,
    isPredictionLoading,
    prediction,

    generatePrediction,
  };
}
