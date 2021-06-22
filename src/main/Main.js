import React from "react";
import { Helmet } from "react-helmet";
import Header from "../components/Header";
import RecentArt from "./components/RecentArt";
import "./styles.css";
import Background from "../components/Background";

const Main = () => {
  return (
    <Background>
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
        <footer className="main__footer"></footer>
      </div>
    </Background>
  );
};

export default Main;
