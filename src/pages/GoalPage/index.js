import React, { useState, useEffect } from "react";

import Input from "../../components/Input";

import { Button } from "@material-ui/core";
import { Clear } from "@material-ui/icons";

import { Container } from "./styles";

import Subcontainer from "../../components/Subcontainer";

export default function GoalPage({ handlePageChange }) {
  const [goalId, setGoalId] = useState(
    localStorage.getItem("currentGoal") || 0
  );

  const [goal, setGoal] = useState(null);
  const [goalText, setGoalText] = useState("");

  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  useEffect(() => {
    getGoal(goalId);
  }, [goalId]);

  useEffect(() => {
    var goals = JSON.parse(localStorage.getItem("goals")) || [];
    var goalIdx = goals.findIndex(v => v.id === goalId);
    if (goalIdx >= 0 && goal) goals[goalIdx] = goal;
    localStorage.setItem("goals", JSON.stringify(goals));
  }, [goalId, goal]);

  function getGoal(gid) {
    // localStorage.removeItem("goals");
    var goals = JSON.parse(localStorage.getItem("goals")) || [];
    var goalIdx = goals.findIndex(v => v.id === gid);
    if (goalIdx >= 0) setGoal(goals[goalIdx]);
    else setGoal(null);
  }

  function createGoal(time) {
    console.log(time);
    console.log(toHour(time));
    var now = new Date();
    const id = `${now.getFullYear()}-${now.getMonth()}-${now.getDate()}-${now.getHours()}-${now.getMinutes()}-${Math.random() *
      1284081623}`;
    const newGoal = {
      id,
      initialTime: time,
      remainingTime: time,
      createdAt: now
    };
    var goals = JSON.parse(localStorage.getItem("goals")) || [];
    goals = [...goals, newGoal];

    localStorage.setItem("goals", JSON.stringify(goals));
    localStorage.setItem("currentGoal", id);

    setGoalId(id);
    setGoal(newGoal);
  }

  function deleteGoal() {
    localStorage.removeItem("currentGoal");
    handlePageChange("/");
  }

  function parseDate(text) {
    const [hour, minute] = text.split(":");
    return new Date(2019, 12, 2, hour, minute);
  }

  function parseTime(text) {
    const [hour, minute] = text.split(":");
    if (hour.length !== 2 || minute.length !== 2) return -1;
    if (parseInt(hour) < 0 || parseInt(minute) < 0 || parseInt(minute) >= 60)
      return -1;
    return hour * 60 * 60 * 1000 + minute * 60 * 1000;
  }

  function submitInterval(start, end) {
    var startAux = parseDate(start);
    var endAux = parseDate(end);
    if (endAux < startAux) {
      alert("Horário inválido (Final menor que início)");
      return;
    }
    var aux = goal.remainingTime - (endAux - startAux);
    console.log(goal, startAux, start, endAux, end);
    setGoal({
      ...goal,
      remainingTime: Math.max(aux, 0)
    });
  }

  function toHour(miliseconds) {
    let hours = Math.floor(miliseconds / (1000 * 60 * 60));
    let minutes = Math.floor(miliseconds / (1000 * 60)) % 60;

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;

    return hours + ":" + minutes;
  }

  function handleGoalSubmit(event) {
    event.preventDefault();
    if (parseTime(goalText) > 0) createGoal(parseTime(goalText));
    else alert("Meta inválida");
    setGoalText("");
  }

  function handleDurationSubmit(event) {
    event.preventDefault();
    submitInterval(start, end);
    setStart("");
    setEnd("");
  }

  return (
    <Container>
      <Subcontainer animate={!goal}>
        <h2>Definir Meta</h2>
        <Input
          id="goalInput"
          label="Meta"
          value={goalText}
          onChange={text => setGoalText(text.target.value)}
        />
        <Button className="submit" onClick={handleGoalSubmit}>
          Salvar
        </Button>
      </Subcontainer>
      <Subcontainer animate={goal}>
        <h2>Registrar Período</h2>
        <Input
          id="startInput"
          label="Início"
          value={start}
          onChange={text => setStart(text.target.value)}
        />
        <Input
          id="endInput"
          label="Fim"
          value={end}
          onChange={text => setEnd(text.target.value)}
        />
        <Button className="submit" onClick={handleDurationSubmit}>
          Calcular
        </Button>
        <h1>
          {goal
            ? goal.remainingTime === 0
              ? "Meta Finalizada"
              : toHour(goal.remainingTime)
            : ""}
        </h1>
        <Clear className="clearGoal" onClick={() => deleteGoal()} />
      </Subcontainer>
    </Container>
  );
}
