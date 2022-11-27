import React from "react";
import { Chart } from "chart.js/auto";
import { Line } from "react-chartjs-2";


export default function AnnualNorthGraph(props) {
  //console.log(props.myData);
  const data = {
    datasets: [
      {
        label: "Temperature (degree)",
        //data: [...co2data].reverse(),
        data: props.defineData,
        borderColor: "#825FFA",
        backgroundColor: "#825FFA",
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
        text: "Yearly Temperature",
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
      <h1>AnnualNorthLineGraph</h1>
      <Line options={options} data={data} />
    </div>
  );
}