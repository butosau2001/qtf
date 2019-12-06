import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import MainPage from "./pages/MainPage";
import GoalPage from "./pages/GoalPage";

export default function Routes() {
  const [currentLocation, setCurrentLocation] = useState("/");

  function handlePageChange(path) {
    setCurrentLocation(path);
  }

  return (
    <Router>
      <Redirect to={currentLocation} />
      <Route
        render={({ location }) => (
          <div>
            <Switch location={location}>
              <Route exact path="/">
                <MainPage handlePageChange={handlePageChange} />
              </Route>
              <Route path="/goal">
                <GoalPage handlePageChange={handlePageChange} />
              </Route>
            </Switch>
          </div>
        )}
      />
    </Router>
  );
}
