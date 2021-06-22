import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Background from "../main/components/Background";
import Header from "../main/components/Header";
import Card from "./components/Card/Card";
import { Button } from "../components/Button";

import "./styles.css";

const NotFound = () => {
  return (
    <Background>
      <Helmet>
        <title>Page Not Found</title>
        <meta name="description" content="Page Not Found" />
      </Helmet>
      <div className="not-found">
        <div className="not-found__header">
          <Header />
        </div>
        <main className="not-found__content">
          <Card className="not-found__card">
            <div className="not-found__error">
              <span className="not-found__error-title">404</span>
              <span className="not-found__error-subtitle">Woof... Woof... Woof...</span>
            </div>
            <div className="not-found__home-redirect">
              <Link to="/">
                <Button value="HomePage" />
              </Link>
            </div>
          </Card>
        </main>
      </div>
    </Background>
  );
};

export default NotFound;
