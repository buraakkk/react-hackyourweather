import React, { useState } from "react";
import Weather from "./Weather";
import Navbar from "./Navbar";
import InfoPage from "./InfoPage";
import CovidPage from "./CovidPage";
import CityForecast from "./CityForecast";
import ContactUsPage from "./ContactUsPage";
import Footer from "./Footer";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
const App = () => {
  const [cities, setCities] = useState([]);
  return (
    <>
      <Router>
        <Navbar
          links={[
            {
              to: "/",
              text: "Home",
            },
            {
              to: "/info",
              text: "About",
              isRoute: true,
            },
            {
              to: "/covid",
              text: "Covid 19",
              isRoute: true,
            },
          ]}
        />
        <Switch>
          <Route exact path="/info" component={InfoPage} />
          <Route exact path="/covid" component={CovidPage} />
          <Route exact path="/ContactUsPage" component={ContactUsPage} />
          <Route
            path="/"
            exact
            component={(routeProps) => {
              return (
                <Weather
                  {...routeProps}
                  cities={cities}
                  setCities={setCities}
                />
              );
            }}
          />
          <Route path="/:id" component={CityForecast} />
        </Switch>
      </Router>
      <Footer />
    </>
  );
};

export default App;
