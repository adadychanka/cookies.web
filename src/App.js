import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MainPage from "./main";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <MainPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
