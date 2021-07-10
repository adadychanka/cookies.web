import http from "./http";

export const getPrediction = async (artId, wallet) => {
  const uri = `/api/predictions/${wallet}/${artId}`;

  try {
    const response = await http.get(uri);

    return response?.data?.data;
  } catch (error) {
    const message = error?.response?.data?.error;

    throw new Error(message);
  }
};
