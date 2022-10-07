import Slider from "rc-slider";
import { useState } from "react";
import "../Styles/Options.css";
import { indicatorR, days, simulationLength } from "./SlidersMarks";
import "rc-slider/assets/index.css";
import { reducer } from "../Components/Reducer";
import { simulationObjects } from "./Reducer";

const Options = () => {
  const [state, setState] = useState({
    virusName: "",
    populationSize: 0,
    infectedPeople: 0,
    indicatorR: 0,
    indicatorM: 0,
    toRecoveryDays: 0,
    toDeathDays: 0,
    simulationDays: 0,
  });

  const handleStart = () => {
    console.log(state);
  };
  return (
    <div id="options">
      <label>
        <h3>Simulation name</h3>
        <input
          type="text"
          onChange={(e) => setState({ ...state, virusName: e.target.value })}
        />
      </label>
      <label>
        <h3>Population size</h3>
        <input
          type="number"
          onChange={(e) =>
            setState({ ...state, populationSize: e.target.value })
          }
        />
      </label>
      <label>
        <h3>Initial number of people infected</h3>
        <input
          type="number"
          onChange={(e) =>
            setState({ ...state, infectedPeople: e.target.value })
          }
        />
      </label>
      <label>
        <h3>Contagiousness (R)</h3>
        <Slider
          defaultValue={0.5}
          min={0.5}
          max={3}
          step={0.1}
          marks={indicatorR}
          onChange={(e) => setState({ ...state, indicatorR: e })}
        />
      </label>
      <label>
        <h3>Mortality rate</h3>
        <Slider
          defaultValue={1}
          min={1}
          max={10}
          step={1}
          marks={days}
          onChange={(e) => setState({ ...state, indicatorM: e })}
        />
      </label>
      <label>
        <h3>Number of days until the sick person recovers</h3>
        <Slider
          defaultValue={1}
          min={1}
          max={10}
          step={1}
          marks={days}
          onChange={(e) => setState({ ...state, toRecoveryDays: e })}
        />
      </label>
      <label>
        <h3>Number of days until the patient's death</h3>
        <Slider
          defaultValue={1}
          min={1}
          max={10}
          step={1}
          marks={days}
          onChange={(e) => setState({ ...state, toDeathDays: e })}
        />
      </label>
      <label>
        <h3>Simulation length in days</h3>
        <Slider
          defaultValue={1}
          min={1}
          max={50}
          step={1}
          marks={simulationLength}
          onChange={(e) => setState({ ...state, simulationDays: e })}
        />
      </label>
      <button onClick={() => reducer(state)}>Start simulation</button>
      <button onClick={() => console.log(simulationObjects)}>Klik</button>
    </div>
  );
};

export default Options;
