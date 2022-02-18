import React, { Fragment } from "react";
import Chart from './components/Chart'
import { useState, useEffect } from "react"
function App() {
  const [chartData, setChartData]=useState([0,1,2,3,4])
  const data = {
    labels: ['Red', 'Orange', 'Blue'],
    // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
    datasets: [
        {
          label: 'Popularity of colours',
          data: [55, 23, 96],
          // you can set indiviual colors for each bar
          backgroundColor: [
            'rgba(255, 255, 255, 0.6)',
            'rgba(255, 255, 255, 0.6)',
            'rgba(255, 255, 255, 0.6)'
          ],
          borderWidth: 1,
        }
    ]
}
  return (
    <Fragment>
     
     <div>
      <Chart/>
      </div>
      
    </Fragment>
  );
}

export default App;
