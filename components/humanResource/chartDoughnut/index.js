import React from "react";
import Chart from "chart.js/auto";
import { Pie, Doughnut } from "react-chartjs-2";
import { ChartContainer } from "./style";
const labels = ["January", "February", "March", "April", "May", "June"];
const data = {
  //   labels: ["Mon", "Tue", "Wed", "Thurs", "Fri"],
  datasets: [
    {
      label: "Attendance for Week 1",
      data: [25, 24, 25, 25, 3],
      borderColor: ["rgba(255,206,86,0.2)"],
      backgroundColor: [
        "rgba(232,99,132,1)",
        "rgba(232,211,6,1)",
        "rgba(54,162,235,1)",
        "rgba(255,159,64,1)",
        "rgba(153,102,255,1)",
      ],
      pointBackgroundColor: "rgba(255,206,86,0.2)",
    },
  ],
};
const options = {
  plugins: {
    title: {
      //   display: tr  ue,
      //   text: "Doughnut Chart",
      color: "blue",
      font: {
        size: 34,
      },
      padding: {
        top: 30,
        bottom: 30,
      },
      responsive: true,
      animation: {
        animateScale: true,
      },
    },
  },
};

const PieChart = () => {
  return (
    <ChartContainer>
      <Doughnut data={data} options={options} />
    </ChartContainer>
  );
};
export default PieChart;
