import { Line } from "react-chartjs-2";
import React from "react";
import "../Styles/Diagram.css";
import { data, options } from "../Components/Data";
import HeartBrokenIcon from "@mui/icons-material/HeartBroken";
import SickIcon from "@mui/icons-material/Sick";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import GroupsIcon from "@mui/icons-material/Groups";
import { simulationObjects } from "./Reducer";

const Diagram = () => {
  return (
    <div id="diagram">
      <div id="info">
        <div className="info-container">
          <div>
            <h4>Healthy</h4>
          </div>
          <GroupsIcon />
        </div>
        <div className="info-container">
          <div>
            <h4>Infected</h4>
          </div>
          <SickIcon />
        </div>
        <div className="info-container">
          <div>
            <h4>Recovered</h4>
          </div>
          <EmojiEmotionsIcon />
        </div>
        <div className="info-container">
          <div>
            <h4>Deaths</h4>
          </div>
          <HeartBrokenIcon />
        </div>
      </div>
      <Line options={options} data={data} />
    </div>
  );
};

export default Diagram;
