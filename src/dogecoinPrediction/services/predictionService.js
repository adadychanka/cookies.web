import http from "./http";

export const getPrediction = async (artId, wallet) => {
  const uri = `/predictions/${wallet}/${artId}`;

  try {
    const { data } = await http.get(uri);

    return data;
  } catch (error) {
    const message = error?.response?.data?.error;

    throw new Error(message);
  }
};
