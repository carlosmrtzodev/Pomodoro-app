import React from "react";
import { Content, Timer } from "../styles/Pomodoro/PomodoroStyles";
import PomodoroLogic from "../utils/PomodoroLogic";
export default function Pomodoro() {
  const { timerSeconds, timerMinutes } = PomodoroLogic();

  return (
    <Content>
      <Timer>
        {timerMinutes}:{timerSeconds}
      </Timer>
    </Content>
  );
}
