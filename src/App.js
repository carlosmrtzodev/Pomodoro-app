import "./styles/App.css";
import Pomodoro from "./components/Pomodoro";
import TitleMessage from "./components/TitleMessage";
import ButtonsContent from "./components/ButtonsContent";

function App() {
  return (
    <div className="App">
      <TitleMessage />
      <Pomodoro />
      <ButtonsContent />
    </div>
  );
}
export default App;
