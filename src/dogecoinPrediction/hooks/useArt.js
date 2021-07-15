import { useEffect, useState } from "react";
import { artService } from "../../services";

function useArt(load) {
  const [art, setArt] = useState(null);
  const [isArtLoading, setArtLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        setArtLoading(true);

        const art = await load();
        setArt(art);
      } catch (error) {
        setError(error);
      } finally {
        setArtLoading(false);
      }
    })();
  }, [load]);

  return {
    art,
    isArtLoading,
    artError: error,
  };
}

export const useDogecoinPredictionBallArt = () => useArt(artService.getDogecoinPredictionBallArt);
