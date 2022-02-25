import React, { Fragment } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function BarChart({ chartData }) {
  return(
    <Fragment>
      <Line data={chartData[3]} />;
      <Line data={chartData[0]}/>;
      <Line data={chartData[1]}/>;
      <Line data={chartData[2]}/>;
      <Line data={chartData[4]}/>;
    </Fragment>

   
   );
}

export default BarChart;