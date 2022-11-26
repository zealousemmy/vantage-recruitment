import React from "react";
import HumanResourceChart from "../humanResourceChart";
import UserCard from "../userCard";
import { StyledOrganogram } from "./style";

const Organogram = () => {
  return (
    <StyledOrganogram>
      <button>Human Resources</button>
      <div className="flex">
        <UserCard />
        <HumanResourceChart />
      </div>
    </StyledOrganogram>
  );
};

export default Organogram;
