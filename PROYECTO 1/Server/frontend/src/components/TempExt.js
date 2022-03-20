import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function TempExt({ chartData }) {
  return <Line data={chartData[1]} />;
}

export default TempExt;