import axios from "axios";
import { environmentConfig } from "../config";

const baseURL = "/";
const timeout = 60 * 1000;

const config = {
  baseURL,
  timeout: timeout,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
};

const httpInstance = axios.create(config);

httpInstance.interceptors.request.use(
  function (config) {
    if (environmentConfig.IsStaging) {
      config.url = config.url.replace("api", "api-stage");
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default httpInstance;
