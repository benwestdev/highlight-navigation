import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "../pages/Home";
import AboutPage from "../pages/About";
import FeaturePage from "../pages/Feature";

export default function Routes() {
  return (
    <Switch>
      <Route path="/about">
        <AboutPage />
      </Route>
      <Route path="/feature">
        <FeaturePage />
      </Route>
      <Route path="/">
        <HomePage />
      </Route>
    </Switch>
  );
}
