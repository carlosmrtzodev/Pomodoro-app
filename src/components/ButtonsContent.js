import React from "react";
import {
  Content,
  Button,
  Counter,
  Label,
  HoverEffect,
  LabelText,
} from "../styles/Buttons/ButtonsStyles";
import PomodoroLogic from "../utils/PomodoroLogic";
export default function ButtonsContent() {
  const value = PomodoroLogic(25);
  console.log(value);

  return (
    <Content>
      <Counter />
      <Button onClick={() => value}>
        <Label>
          <HoverEffect className="hover-effect"></HoverEffect>
          <LabelText className="label-text">Start!</LabelText>
        </Label>
      </Button>
    </Content>
  );
}
