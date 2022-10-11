import Slider from "rc-slider";
import { useState } from "react";
import "../Styles/Options.css";
import { indicatorR, days, simulationLength, mortality } from "./SlidersMarks";
import "rc-slider/assets/index.css";
import { reducer } from "./Data";

const Options = ({ props }) => {
  const { setSimulation, setName } = props;
  const [state, setState] = useState({
    N: "",
    P: 0,
    I: 0,
    R: 0,
    M: 0,
    Ti: 0,
    Tm: 0,
    Ts: 0,
  });

  return (
    <div id="options">
      <label>
        <h3>Simulation name</h3>
        <input
          type="text"
          onChange={(e) => setState({ ...state, N: e.target.value })}
        />
      </label>
      <label>
        <h3>Population size</h3>
        <input
          type="number"
          onChange={(e) => setState({ ...state, P: e.target.value })}
        />
      </label>
      <label>
        <h3>Initial number of people infected</h3>
        <input
          type="number"
          onChange={(e) => setState({ ...state, I: e.target.value })}
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
          onChange={(e) => setState({ ...state, R: e })}
        />
      </label>
      <label>
        <h3>Mortality rate</h3>
        <Slider
          defaultValue={1}
          min={0.1}
          max={5}
          step={0.1}
          marks={mortality}
          onChange={(e) => setState({ ...state, M: e })}
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
          onChange={(e) => setState({ ...state, Ti: e })}
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
          onChange={(e) => setState({ ...state, Tm: e })}
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
          onChange={(e) => setState({ ...state, Ts: e })}
        />
      </label>
      <button
        onClick={() => {
          if (
            state.P !== 0 &&
            state.I !== 0 &&
            state.R !== 0 &&
            state.M !== 0 &&
            state.Ti !== 0 &&
            state.Tm !== 0 &&
            state.Ts !== 0
          ) {
            setSimulation(() => reducer(state));
            setName(state.N);
          } else {
            console.log("ops");
          }
        }}
      >
        Start simulation
      </button>
    </div>
  );
};

export default Options;
