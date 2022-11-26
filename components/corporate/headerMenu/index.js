import React, { useState } from "react";
import { StyledDashBoard, ViewOne, ViewTwo } from "./style";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import Modal from "../../modal";
import AddEmployeeForm from "../../addEmployeeForm";
import AddTaskForm from "../addTaskForm";
const CorporateHeaderMenu = ({ contentOne, contentTwo }) => {
  const [dispay, setDisplay] = useState(false);
  const [modalDispay, setModalDisplay] = useState(false);
  const [isShown, setIsShown] = useState(true);
  const handleClick = (event) => {
    // 👇️ toggle visibility
    setIsShown((current) => !current);
  };
  const handleShowOne = () => {
    setDisplay(false);
  };
  const handleClose = () => {
    modalDispay === false ? setModalDisplay(true) : setModalDisplay(false);
  };
  const handleShowTwo = () => {
    setDisplay(true);
  };
  return (
    <StyledDashBoard>
      <div className="heading">
        <div className="left">
          <input placeholder="Search in task" type="text" />
        </div>
        <div className="right">
          <button className="bar">
            <BiMenuAltRight />
          </button>
          <button className="view" onClick={handleClose}>
            <AiOutlinePlus /> Add New Task
          </button>
        </div>
      </div>
      <div className="views">
        <ViewOne show={dispay}>{contentOne}</ViewOne>
        <ViewTwo show={dispay}>{contentTwo}</ViewTwo>
      </div>
      <Modal
        content={<AddTaskForm close={handleClose} />}
        display={modalDispay}
      />
    </StyledDashBoard>
  );
};

export default CorporateHeaderMenu;
