import React from "react";
import Logic from "../utils/Logic";
import { CounterContainer, Text } from "../styles/Styles";

export default function Counter() {
  const { even, odd } = Logic();

  return (
    <CounterContainer>
      <Text>Completed: {odd}</Text>
      <Text>Breaks: {even}</Text>
    </CounterContainer>
  );
}
