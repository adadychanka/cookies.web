import React, { Suspense, lazy } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
const MainPage = lazy(() => import("./main"));
const DogecoinPredictionPage = lazy(() => import("./dogecoinPrediction"));
const NotFoundPage = lazy(() => import("./notFound"));
import { DogecoinPredictionWidget } from "./PredictionWidget";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/dogecoin/prediction/widget">
              <DogecoinPredictionWidget />
            </Route>
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
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
