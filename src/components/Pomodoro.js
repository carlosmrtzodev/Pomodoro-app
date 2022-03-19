import Logic from "../utils/Logic";
import {
  faCheck,
  faCoffee,
  faStopwatch,
} from "@fortawesome/free-solid-svg-icons";
import { Content, Flex } from "../styles/Containers";
import { Icons, Text, Timer, Title } from "../styles/Fonts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

        <Timer>
          <Flex>
            {timerMinutes}:{timerSeconds}{" "}
            <Icons>
              <FontAwesomeIcon icon={faStopwatch} />
            </Icons>
          </Flex>
        </Timer>

        <Text>
          <Flex>
            Completed: {completed}
            <Icons>
              <FontAwesomeIcon icon={faCheck} />
            </Icons>
          </Flex>
        </Text>

        <Text>
          <Flex>
            Breaks: {breaks}
            <Icons>
              <FontAwesomeIcon icon={faCoffee} />
            </Icons>
          </Flex>
        </Text>
      </Content>
    </>
  );
}
