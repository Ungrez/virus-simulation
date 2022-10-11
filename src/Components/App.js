import Diagram from "./Diagram";
import Options from "./Options";
import "../Styles/App.css";
import { useState } from "react";

function App() {
  const [simulation, setSimulation] = useState();
  const [name, setName] = useState();
  return (
    <div id="container">
      <Options props={{ setSimulation, setName }} />
      <Diagram props={{ simulation, name }} />
    </div>
  );
}

export default App;
