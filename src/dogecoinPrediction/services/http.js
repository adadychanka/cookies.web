import axios from "axios";

const baseURL = "/"; //process.env.REACT_APP_API_ENDPOINT ?? "/";

const config = {
  baseURL,
  timeout: 10000,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
};

const httpInstance = axios.create(config);

export default httpInstance;
