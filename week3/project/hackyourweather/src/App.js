import React from "react";
import Weather from "./Weather";
import CItyForecast from "./CItyForecast";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const  App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Weather} />
        <Route path="/:cityId"  component={CItyForecast} />
      </Switch>
    </Router>
  );
}

export default App;
