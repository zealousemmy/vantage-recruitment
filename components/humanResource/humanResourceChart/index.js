import React from "react";
import PieChart from "../chartDoughnut";
import { StyledChartContainer } from "./style";

const datas = [
  {
    text: "TOTAL",
    value: "148",
  },
  {
    text: "IN-PROGRESS",
    value: "12",
  },
  {
    text: "COMPLETED",
    value: "15",
  },
  {
    text: "CANCELED",
    value: "2",
  },
];
const HumanResourceChart = () => {
  return (
    <StyledChartContainer>
      <div className="header">
        <p>Selected</p>
        <h2>Human Resource</h2>
      </div>
      <PieChart />
      <div className="project">
        <h3>Projects</h3>
        <div className="projectStatus">
          {datas.map((item, key) => (
            <div className="card" key={key}>
              <h4>{item.text}</h4>
              <p>{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </StyledChartContainer>
  );
};

export default HumanResourceChart;
