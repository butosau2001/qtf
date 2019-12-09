import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import MainPage from "./pages/MainPage";
import GoalPage from "./pages/GoalPage";

import { Container } from "./styles";

export default function Routes({ handlePageChange, activePage }) {
  const [currentGoal, setCurrentGoal] = useState(0);

  return (
    <Container>
      <Router className="router">
        <Redirect to={activePage} />
        <Route
          render={({ location }) => (
            <div>
              <Switch location={location}>
                <Route exact path="/">
                  <MainPage
                    handlePageChange={handlePageChange}
                    setCurrentGoal={setCurrentGoal}
                  />
                </Route>
                <Route path="/goal">
                  <GoalPage
                    handlePageChange={handlePageChange}
                    currentGoal={currentGoal}
                  />
                </Route>
              </Switch>
            </div>
          )}
        />
      </Router>
    </Container>
  );
}
