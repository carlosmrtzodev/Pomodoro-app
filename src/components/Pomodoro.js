import Logic from "../utils/Logic";
import {
  faCheck,
  faCoffee,
  faStopwatch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Content, Flex, Icons, Text, Timer, Title } from "../styles/Styles";

export default function Pomodoro() {
  const { timerSeconds, timerMinutes, displayMessage, breaks, completed } =
    Logic();

  return (
    <>
      <Content>
        <Title>Pomodoro App</Title>

        {displayMessage && (
          <Text>
            ¡Break time! <br /> New session starts in:
          </Text>
        )}

        <Flex>
          <Timer>
            {timerMinutes}:{timerSeconds}{" "}
          </Timer>

          <Icons>
            <FontAwesomeIcon icon={faStopwatch} />
          </Icons>
        </Flex>

        <Flex>
          <Text>Completed: {completed}</Text>

          <Icons>
            <FontAwesomeIcon icon={faCheck} />
          </Icons>
        </Flex>

        <Flex>
          <Text>Breaks: {breaks}</Text>

          <Icons>
            <FontAwesomeIcon icon={faCoffee} />
          </Icons>
        </Flex>
      </Content>
    </>
  );
}
