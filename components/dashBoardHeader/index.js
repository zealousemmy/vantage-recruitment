import React from "react";
import { StyledDashBoard } from "./style";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
const DashBoardHeader = () => {
  return (
    <StyledDashBoard>
      <div className="left">
        <h4>Overview</h4>
        <p>Monday,14th November, 2022.</p>
      </div>
      <div className="right">
        <button className="bar">
          <BiMenuAltRight />
        </button>

        <button className="view">
          <AiOutlinePlus /> Add View
        </button>
      </div>
    </StyledDashBoard>
  );
};

export default DashBoardHeader;
