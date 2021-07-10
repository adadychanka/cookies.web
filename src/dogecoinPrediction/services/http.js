import axios from "axios";
import { environmentConfig } from "../../config";

const baseURL = "/";

const config = {
  baseURL,
  timeout: 10000,
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

    console.log("Config", config);

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default httpInstance;
