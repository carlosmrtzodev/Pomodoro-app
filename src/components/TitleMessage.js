import React from "react";
import { Title, Message } from "../styles/Pomodoro/PomodoroStyles";
import PomodoroLogic from "../utils/PomodoroLogic";
export default function titleMessage() {
  const { displayMessage } = PomodoroLogic();

  return (
    <Title>
      <Message>
        {displayMessage && (
          <div>
            ¡Break time! <br /> New session starts in:
          </div>
        )}
      </Message>
    </Title>
  );
}
