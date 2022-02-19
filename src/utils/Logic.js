import { useState, useEffect } from "react";

const PomodoroLogic = () => {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [displayMessage, setDisplayMessage] = useState(false);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      clearInterval(interval);

      if (seconds === 0) {
        if (minutes !== 0) {
          setSeconds(59);
          setMinutes(minutes - 1);
        } else {
          let minutes = displayMessage ? 24 : 4;
          let seconds = 59;
          setSeconds(seconds);
          setMinutes(minutes);
          setCounter(counter + 1);
          setDisplayMessage(!displayMessage);
        }
      } else {
        setSeconds(seconds - 1);
      }
    }, 1000);
  }, [displayMessage, minutes, seconds, counter]);

  const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

  let even = 0;
  let odd = 0;

  if (counter % 2 === 0 && counter !== 0) {
    even++;
  } else if (Math.abs(counter % 2) === 1 && counter !== 0) {
    odd++;
  }

  return { displayMessage, timerMinutes, timerSeconds, even, odd };
};
export default PomodoroLogic;
