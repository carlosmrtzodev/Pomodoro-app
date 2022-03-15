import { useState, useEffect } from "react";

const PomodoroLogic = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(25);

  const [displayMessage, setDisplayMessage] = useState(false);

  const [breaks, setBreaks] = useState(0);
  const [completed, setCompleted] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      clearInterval(interval);

      if (seconds === 0) {
        if (minutes !== 0) {
          setSeconds(59);
          setMinutes(minutes - 1);
        } else {
          let minutesp = displayMessage ? 24 : 4;
          let secondsp = 59;
          setSeconds(secondsp);
          setMinutes(minutesp);
          setDisplayMessage(!displayMessage);
          if (displayMessage) {
            setBreaks(breaks + 1);
          } else {
            setCompleted(completed + 1);
          }
        }
      } else {
        setSeconds(seconds - 1);
      }
    }, 1000);
  }, [displayMessage, minutes, seconds, breaks, completed]);

  const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

  return {
    displayMessage,
    timerMinutes,
    timerSeconds,
    breaks,
    completed,
  };
};
export default PomodoroLogic;
