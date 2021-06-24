import axios from "axios";

const httpInstance = axios.create({
  baseURL: process.env.REACT_APP_URL_API,
  timeout: 10000,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

export default httpInstance;
