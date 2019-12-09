import React from "react";

import { Container } from "./styles";

export default function GoalContainer({
  goal,
  handlePageChange,
  setCurrentGoal
}) {
  const { id, initialTime, remainingTime, createdAt } = goal;

  function toHour(miliseconds) {
    let hours = Math.floor(miliseconds / (1000 * 60 * 60));
    let minutes = Math.floor(miliseconds / (1000 * 60)) % 60;

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;

    return hours + ":" + minutes;
  }

  function handleClick() {
    setCurrentGoal(id);
    handlePageChange("/goal");
  }

  return (
    <Container onClick={handleClick}>
      <span>{id}</span>
      <br />
      <span>
        Criado em: {""}
        {new Date(createdAt).toLocaleString("en-GB", {
          timeZone: "America/Sao_Paulo"
        })}
      </span>
      <h3>{toHour(initialTime)}</h3>
      <h3>{toHour(remainingTime)}</h3>
    </Container>
  );
}
