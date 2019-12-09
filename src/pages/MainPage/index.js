import React, { useState, useEffect } from "react";

import { Container } from "./styles";

import GoalContainer from "../../components/GoalContainer";
import Header from "../../components/Header";

export default function MainPage({ handlePageChange, setCurrentGoal }) {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    setGoals(JSON.parse(localStorage.getItem("goals")) || []);
  }, []);

  console.log(goals);
  return (
    <Container>
      <Header />
      <div className="goals">
        {goals.map(e => (
          <GoalContainer
            key={e.id}
            goal={e}
            handlePageChange={handlePageChange}
            setCurrentGoal={setCurrentGoal}
          />
        ))}
      </div>
    </Container>
  );
}
