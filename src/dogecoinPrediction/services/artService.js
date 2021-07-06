import http from "./http";

export const getDogecoinPredictionBallArt = async () => {
  const uri = `api/arts/dogecoinPredictionBall`;

  try {
    const response = await http.get(uri);

    return response?.data?.data;
  } catch (error) {
    const message = error?.response?.data?.error;

    throw new Error(message);
  }
};
