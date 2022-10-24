import "./App.css";
import Scoreboard from "./components/Scoreboard";
import { Route, Routes } from "react-router-dom";
import ScoreContextProvider from "./Contexts/ScoreContext";
import InfoBoard from "./components/InfoBoard";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Scoreboard />}></Route>
      <Route path="/infoboard" element={<InfoBoard />}></Route>
    </Routes>
  );
}

export default App;
