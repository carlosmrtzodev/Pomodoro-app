import React from "react";
import Logic from "../utils/Logic";
import { TitleContainer, Title, Text } from "../styles/Styles";

export default function titleMessage() {
  const { displayMessage } = Logic();

  return (
    <TitleContainer>
      <Title>Pomodoro App</Title>
      {displayMessage && (
        <Text>
          ¡Break time! <br /> New session starts in:
        </Text>
      )}
    </TitleContainer>
  );
}
