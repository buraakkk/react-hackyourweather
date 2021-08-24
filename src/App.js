import React, { useState } from "react";
import Weather from "./Weather";
import Header from "./Header";
import InfoPage from "./InfoPage";
import CityForecast from "./CityForecast";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  const [cities, setCities] = useState([]);
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/info" component={InfoPage} />
        <Route
          path="/"
          exact
          component={(routeProps) => {
            return (
              <Weather {...routeProps} cities={cities} setCities={setCities} />
            );
          }}
        />
        <Route path="/:id" component={CityForecast} />
      </Switch>
    </Router>
  );
};

export default App;
