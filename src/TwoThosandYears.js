import React from "react";
import { Chart } from "chart.js/auto";
import { Line } from "react-chartjs-2";


export default function TwoThosandGraph(props) {
  //console.log(props.myData);
  const data = {
    datasets: [
      {
        label: "Temperature (degree)",
        //data: [...co2data].reverse(),
        data: props.yearData,
        borderColor: "#C22F29",
        backgroundColor: "#C22F29",
        yAxisID: "Temperature",
        parsing: {
          xAxisKey: "Time",
          yAxisKey: "Temperature",
        },
        pointRadius: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "2000 Year Temperatures",
      },
    },
    scales: {
      Tempareture: {
        type: "linear",
        display: true,
        position: "left",
      },
    },
  };

  return (
    <div style={{ width: "1000px" }}>
      <h1>2000 year Temperatures</h1>
      <Line options={options} data={data} />
    </div>
  );
}