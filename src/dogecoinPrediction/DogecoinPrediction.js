import React from "react";
import { Helmet } from "react-helmet";
import Header from "../components/Header";
import Background from "../components/Background";
import { ErrorNotification } from "../components/Notification";
import Delimiter from "./components/Delimiter";
import MerchCard from "./components/MerchCard";
import { DogecoinPredictionWidget } from "../PredictionWidget";

import { merchHologram, merchPrint } from "./assets";
import "react-toastify/dist/ReactToastify.min.css";
import "./styles.css";

const DogecoinPrediction = () => {
  return (
    <Background>
      <Helmet>
        <title>Dogecoin prediction ball</title>
        <meta name="description" content="Dogecoin prediction ball" />
      </Helmet>
      <div className="dogecoin-prediction">
        <div className="dogecoin-prediction__header">
          <Header />
        </div>
        <main className="dogecoin-prediction__content">
          <div className="dogecoin-prediction__prediction">
            <DogecoinPredictionWidget />
          </div>
          <Delimiter className="dogecoin-prediction__delimiter" />
          <section className="dogecoin-prediction__merch">
            <h4 className="dogecoin-prediction__merch-title">Merch</h4>
            <div className="dogecoin-prediction__merch-cards">
              <MerchCard
                src={merchPrint}
                title="30x50cm Dogecoin print"
                description="You can get a free high quality print with any message, just DM us in Twitter"
              />
              <MerchCard
                src={merchHologram}
                title="10x15cm 3D Hologram"
                description="You can get a free high quality print with any message, just DM us in Twitter"
              />
            </div>
          </section>
        </main>
        <footer className="dogecoin-prediction__footer"></footer>
        <ErrorNotification message={null} />
      </div>
    </Background>
  );
};

export default DogecoinPrediction;
