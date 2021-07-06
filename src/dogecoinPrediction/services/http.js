import axios from "axios";

const httpInstance = axios.create({
  baseURL: `/`,
  timeout: 10000,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

export default httpInstance;
