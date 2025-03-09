import React from "react";
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

const MusicChart = ({labels}) => {
  const streamingData = [100000, 45000, 50000, 25000, 10000];

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: "white",
          font: {
            size: 14,
          },
        },
      },
      title: {
        display: true,
        text: "Top Trending Streamline Data",
        color: "white",
        font: {
          size: 18,
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: "white",
          font: {
            size: 12,
          },
        }
      },
      y: {
        ticks: {
          color: "white",
          font: {
            family: "sans-serif",
            size: 12,
          },
        }
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: "Top Plays",
        data: streamingData,
        borderColor: "grey",
        backgroundColor: "white",
      },
    ],
  };
  return (

      <Line options={options} data={data} className="w-full md:w-3/4"/>


  );
};

export default MusicChart;
