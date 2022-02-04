import React from "react";
import { TitleContainer, Title, SubTitle } from "../styles/Styles";
import PomodoroLogic from "../utils/PomodoroLogic";
export default function titleMessage() {
  const { displayMessage } = PomodoroLogic();

  return (
    <TitleContainer>
      <Title>Pomodoro App</Title>
      {displayMessage && (
        <SubTitle>
          ¡Break time! <br /> New session starts in:
        </SubTitle>
      )}
    </TitleContainer>
  );
}
