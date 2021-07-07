/* eslint-disable */

const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  const env = process.env.NODE_ENV;
  console.log("Node");
  console.log(process.env);

  let target = null;
  if (env === "development") {
    target = "http://localhost:4000";
  } else {
    target = process.env.REACT_APP_API_ENDPOINT;
  }

  app.use(
    "/api",
    createProxyMiddleware({
      target: target,
      changeOrigin: true,
    })
  );
};

/* eslint-enable */
