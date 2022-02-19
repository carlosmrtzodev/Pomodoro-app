import React from "react";
import Logic from "../utils/Logic";
import { PomodoroContainer } from "../styles/Styles";

export default function Pomodoro() {
  const { timerSeconds, timerMinutes } = Logic();

  return (
    <PomodoroContainer>
      {timerMinutes}:{timerSeconds}
    </PomodoroContainer>
  );
}
