import React from "react";
import { StyledTable } from "./style";
import { BiEdit } from "react-icons/bi";
import Modal from "../../modal";
const employeesDetails = [
  {
    profileImage: "",
    taskTitle: "Client Review",
    assignedTo: "David Okeke& 2 others",
    department: "Sales&Marketing",
    deadLine: "23/03/2020",
    prioty: "High",
    status: "Completed",
  },
  {
    profileImage: "",
    taskTitle: "Client Review",
    assignedTo: "David Okeke& 2 others",
    department: "Sales&Marketing",
    deadLine: "23/03/2020",
    prioty: "High",
    status: "Completed",
  },
  {
    profileImage: "",
    taskTitle: "Client Review",
    assignedTo: "David Okeke& 2 others",
    department: "Sales&Marketing",
    deadLine: "23/03/2020",
    prioty: "High",
    status: "Completed",
  },
  {
    profileImage: "",
    taskTitle: "Client Review",
    assignedTo: "David Okeke& 2 others",
    department: "Sales&Marketing",
    deadLine: "23/03/2020",
    prioty: "High",
    status: "Completed",
  },
  {
    profileImage: "",
    taskTitle: "Client Review",
    assignedTo: "David Okeke& 2 others",
    department: "Sales&Marketing",
    deadLine: "23/03/2020",
    prioty: "High",
    status: "Completed",
  },
  {
    profileImage: "",
    taskTitle: "Client Review",
    assignedTo: "David Okeke& 2 others",
    department: "Sales&Marketing",
    deadLine: "23/03/2020",
    prioty: "High",
    status: "Completed",
  },
  {
    profileImage: "",
    taskTitle: "Client Review",
    assignedTo: "David Okeke& 2 others",
    department: "Sales&Marketing",
    deadLine: "23/03/2020",
    prioty: "High",
    status: "Completed",
  },
  {
    profileImage: "",
    taskTitle: "Client Review",
    assignedTo: "David Okeke& 2 others",
    department: "Sales&Marketing",
    deadLine: "23/03/2020",
    prioty: "High",
    status: "Completed",
  },
];
const CorparateDataTable = () => {
  return (
    <StyledTable>
      <div className="headingRole">
        <h4>Task Tittle</h4>
        <h4>Assigned To</h4>
        <h4>Department</h4>
        <h4>Deadline</h4>
        <h4>Priority</h4>
        <h4>Status</h4>
      </div>
      {employeesDetails.map((details, id) => (
        <div className="dataRole" key={id}>
          <input type="checkbox" />
          <p>{details.taskTitle}</p>
          <p>{details.assignedTo}</p>
          <p>{details.department}</p>
          <p>{details.deadLine}</p>
          <p>{details.prioty}</p>
          <p>{details.status}</p>
        </div>
      ))}
      <button className="seeAll">See All</button>
    </StyledTable>
  );
};

export default CorparateDataTable;
