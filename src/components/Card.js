import React from "react";
import Title from "./Title";
import Pomodoro from "./Pomodoro";
import Counter from "./Counter";
import { Container } from "../styles/Styles";

function Card() {
  return (
    <Container>
      <Title />
      <Pomodoro />
      <Counter />
    </Container>
  );
}

export default Card;
