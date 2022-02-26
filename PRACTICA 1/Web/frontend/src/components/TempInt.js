import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function TempInt({ chartData }) {
  return <Line data={chartData[2]} />;
}

export default TempInt;