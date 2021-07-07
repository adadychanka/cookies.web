import axios from "axios";

const baseURL = "/";

const config = {
  baseURL,
  timeout: 10000,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
};

const httpInstance = axios.create(config);

export default httpInstance;
