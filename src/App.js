import "./styles/App.css";
import Info from "./components/Info";
import { Container } from "./styles/Styles";
import Pomodoro from "./components/Pomodoro";

function App() {
  return (
    <Container>
      <Pomodoro />
      <Info />
    </Container>
  );
}
export default App;
