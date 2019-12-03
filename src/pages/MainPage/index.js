import React, { useState, useEffect } from "react";

import Input from "../../components/Input";

import { Button } from "@material-ui/core";
import { Clear } from "@material-ui/icons";

import { Container, Subcontainer } from "./styles";

export default function MainPage() {
    const [goal, setGoal] = useState(localStorage.getItem("goal") || -1);
    console.log(goal);

    const [goalText, setGoalText] = useState("");

    const [start, setStart] = useState("");
    const [end, setEnd] = useState("");

    const [showGoal, setShowGoal] = useState(true);
    const [showDuration, setShowDuration] = useState(true);

    useEffect(() => {
        localStorage.setItem("goal", goal);
    }, [goal]);

    function parseDate(text) {
        const [hour, minute] = text.split(":");
        return new Date(2019, 12, 2, hour, minute);
    }

    function parseTime(text) {
        const [hour, minute] = text.split(":");
        if (hour.length !== 2 || minute.length !== 2) return -1;
        if (
            parseInt(hour) < 0 ||
            parseInt(minute) < 0 ||
            parseInt(minute) >= 60
        )
            return -1;
        return 60 * 10 * (hour * 60 + minute);
    }

    function toHour(miliseconds) {
        let minutes = Math.floor((miliseconds / (1000 * 60)) % 60);
        let hours = Math.floor(miliseconds / (1000 * 60 * 60));

        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;

        return hours + ":" + minutes;
    }

    function handleGoalSubmit(event) {
        event.preventDefault();
        if (parseTime(goalText) > 0) setGoal(parseTime(goalText));
        else alert("Meta inválida");
        setGoalText("");
    }

    function handleDurationSubmit(event) {
        event.preventDefault();
        var startAux = parseDate(start);
        var endAux = parseDate(end);
        if (endAux < startAux) {
            alert("Horário inválido (Final menor que início)");
            return;
        }
        setStart("");
        setEnd("");
        if (goal - (endAux - startAux) > 0) {
            setGoal(goal - (endAux - startAux));
        } else {
            setGoal(0);
        }
    }

    return (
        <Container>
            <Subcontainer
                show={showGoal}
                animate={goal < 0}
                onAnimationStart={() => setShowGoal(true)}
                onAnimationEnd={() => setShowGoal(goal < 0)}
            >
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
            {goal >= 0 && (
                <>
                    <Subcontainer
                        show={showDuration}
                        animate={goal >= 0}
                        onAnimationStart={() => setShowDuration(true)}
                        onAnimationEnd={() => setShowDuration(goal >= 0)}
                    >
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
                        <Button
                            className="submit"
                            onClick={handleDurationSubmit}
                        >
                            Calcular
                        </Button>

                        <h1>
                            {goal === "0" ? "Meta Finalizada" : toHour(goal)}
                            <Button onClick={() => setGoal(-1)}>
                                <Clear />
                            </Button>
                        </h1>
                    </Subcontainer>
                </>
            )}
        </Container>
    );
}
