import { Line } from "react-chartjs-2";
import React from "react";
import "../Styles/Diagram.css";
import HeartBrokenIcon from "@mui/icons-material/HeartBroken";
import SickIcon from "@mui/icons-material/Sick";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import GroupsIcon from "@mui/icons-material/Groups";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Diagram = ({ props }) => {
  const { simulation, name } = props;

  let healthy = [];
  let infected = [];
  let recovered = [];
  let deaths = [];
  let days = [];

  if (simulation) {
    let clone = new Array(...simulation);
    healthy = clone.map((obj) => obj.Pv);
    infected = clone.map((obj) => obj.Pi);
    recovered = clone.map((obj) => obj.Pr);
    deaths = clone.map((obj) => obj.Pm);
    days = clone.map((obj) => obj.D);
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: `Simulation ${name}`,
        font: {
          size: 34,
        },
        padding: {
          top: 10,
          bottom: 30,
        },
      },
    },
  };

  const data = {
    labels: [...days],
    datasets: [
      {
        label: "Healthy",
        data: [...healthy],
        borderColor: "rgb(0, 249, 255)",
        backgroundColor: "rgb(0, 249, 255)",
      },
      {
        label: "Infected",
        data: [...infected],
        borderColor: "rgb(255, 188, 0)",
        backgroundColor: "rgb(255, 188, 0)",
      },
      {
        label: "Recovery",
        data: [...recovered],
        borderColor: "rgb(105, 232, 62)",
        backgroundColor: "rgb(105, 232, 62)",
      },
      {
        label: "Deaths",
        data: [...deaths],
        borderColor: "rgb(250, 57, 57)",
        backgroundColor: "rgb(250, 57, 57)",
      },
    ],
  };
  return (
    <div id="diagram">
      <div id="info">
        <div className="info-container">
          <div>
            <h4>Healthy {healthy.pop()}</h4>
          </div>
          <GroupsIcon />
        </div>
        <div className="info-container">
          <div>
            <h4>Infected {infected.pop()}</h4>
          </div>
          <SickIcon />
        </div>
        <div className="info-container">
          <div>
            <h4>Recovered {recovered.pop()}</h4>
          </div>
          <EmojiEmotionsIcon />
        </div>
        <div className="info-container">
          <div>
            <h4>Deaths {deaths.pop()}</h4>
          </div>
          <HeartBrokenIcon />
        </div>
      </div>
      {simulation ? (
        <Line options={options} data={data} />
      ) : (
        <Line data={data} />
      )}
    </div>
  );
};

export default Diagram;
