import React from "react";
import { Content, Message, Timer } from "../styles/Pomodoro/PomodoroStyles";
import PomodoroLogic from "../utils/PomodoroLogic";
export default function Pomodoro() {
  const { displayMessage, timerSeconds, timerMinutes } = PomodoroLogic();

  return (
    <Content>
      <Message>
        {displayMessage && <div>Break time! New session starts in:</div>}
      </Message>

      <Timer>
        {timerMinutes}:{timerSeconds}
      </Timer>
    </Content>
  );
}
