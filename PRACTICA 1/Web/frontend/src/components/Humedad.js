import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function Humedad({ chartData }) {
  return <Line data={chartData[0]} />;
}

export default Humedad;
