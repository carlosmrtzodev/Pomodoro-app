import React from "react";
import {
  ButtonContainer,
  Button,
  Label,
  HoverEffect,
  LabelText,
} from "../styles/Styles";
import PomodoroLogic from "../utils/PomodoroLogic";
export default function Pomodoro() {
  const { timerSeconds, timerMinutes } = PomodoroLogic();

  return (
    <ButtonContainer>
      <Button>
        <Label>
          <HoverEffect className="hover-effect"></HoverEffect>
          <LabelText className="label-text">
            {timerMinutes}:{timerSeconds}
          </LabelText>
        </Label>
      </Button>
    </ButtonContainer>
  );
}
