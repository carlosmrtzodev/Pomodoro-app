import "./styles/App.css";
import Pomodoro from "./components/Pomodoro";
import TitleMessage from "./components/TitleMessage";

function App() {
  return (
    <div className="App">
      <TitleMessage />
      <Pomodoro />
    </div>
  );
}
export default App;
