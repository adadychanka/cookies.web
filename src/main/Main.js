import React from "react";
import { Helmet } from "react-helmet";
import Header from "./components/Header";
import RecentArt from "./components/RecentArt";
import "./styles.css";

const Main = () => {
  return (
    <div className="main">
      <Helmet>
        <title>Doge Prediction Ball</title>
        <meta name="description" content="Doge Prediction Ball" />
      </Helmet>

      <div className="main__header">
        <Header />
      </div>
      <main className="main__content">
        <div className="main__recent-art">
          <RecentArt />
        </div>
      </main>
    </div>
  );
};

export default Main;
