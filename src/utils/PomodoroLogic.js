import { useState, useEffect } from "react";

const PomodoroLogic = (props) => {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [displayMessage, setDisplayMessage] = useState(false);
  const value = props;
  useEffect(() => {
    let interval = setInterval(() => {
      clearInterval(interval);
      if (value.timerMinutes === 25) {
        if (seconds === 0) {
          if (minutes !== 0) {
            setSeconds(59);
            setMinutes(minutes - 1);
          } else {
            let minutes = displayMessage ? 24 : 4;
            let seconds = 59;

            setSeconds(seconds);
            setMinutes(minutes);
            setDisplayMessage(!displayMessage);
          }
        } else {
          setSeconds(seconds - 1);
        }
      }
    }, 1000);
  }, [displayMessage, minutes, seconds, props]);

  const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

  return { displayMessage, timerMinutes, timerSeconds };
};

export default PomodoroLogic;
