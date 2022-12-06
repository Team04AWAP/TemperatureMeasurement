import React ,{useState, useEffect}from "react";
import Chart from 'react-apexcharts';
import { Doughnut } from "react-chartjs-2";

export default function DoughnutChartGraph (props) {
    
    const data = {
            labels: [
              'Red',
              'Blue',
              'Yellow'
            ],
            datasets: [{
              label: 'Co2 Measurements',
              data: [...props.v9data1],
              backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)'
              ],
              hoverOffset: 4
            }]
          };
          const options = {
            responsive: true,
            plugins: {
              legend: {
                position: "top",
              },
              title: {
                display: true,
                text: "Co2 Measurements by Sectors",
              },
            },
            scales: {},
            };


         

    return (
        <div style={{ width: "80%" }}>
          <h1>Visualization 9 </h1>
          <Doughnut options = {options} data={data} />
        </div>
      );
    }
