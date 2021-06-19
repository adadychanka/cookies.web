import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MainPage from "./main";
import DogecoinPredictionPage from "./dogecoinPrediction";
import NotFoundPage from "./notFound";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/dogecoin/prediction">
            <DogecoinPredictionPage />
          </Route>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
