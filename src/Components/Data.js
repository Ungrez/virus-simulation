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
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Healthy",
      data: [100000, 80000, 75000, 75000, 80000, 79000],
      borderColor: "rgb(0, 249, 255)",
      backgroundColor: "rgb(0, 249, 255)",
    },
    {
      label: "Infected",
      data: [50, 1200, 2400, 3100, 5800],
      borderColor: "rgb(255, 188, 0)",
      backgroundColor: "rgb(255, 188, 0)",
    },
    {
      label: "Recovery",
      data: [0, 18800, 15000, 14000, 2000],
      borderColor: "rgb(105, 232, 62)",
      backgroundColor: "rgb(105, 232, 62)",
    },
    {
      label: "Deaths",
      data: [10, 50, 3000, 500, 1000],
      borderColor: "rgb(250, 57, 57)",
      backgroundColor: "rgb(250, 57, 57)",
    },
  ],
};
