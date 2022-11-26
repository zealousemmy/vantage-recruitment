import React from "react";
import { StyledTable } from "./style";
import { BiEdit } from "react-icons/bi";
import Modal from "../../modal";
import imageOne from "../../../assets/avatar/Ellipse 45 (4).png";
import imageTwo from "../../../assets/avatar/Ellipse 45 (1).png";
import imageThree from "../../../assets/avatar/Ellipse 45 (3).png";
import imageFour from "../../../assets/avatar/Ellipse 45 (4).png";
import imageFive from "../../../assets/avatar/Ellipse 45 (5).png";
import imageSix from "../../../assets/avatar/Ellipse 45 (6).png";
import imageSeven from "../../../assets/avatar/Ellipse 45 (4).png";
const employeesDetails = [
  {
    profileImage: imageOne,
    name: "Mary Agbo",
    jobTitle: "Team Lead",
    department: "Sales&Marketing",
    startDate: "23/03/2020",
    status: ["active", "on-leave", "stand-in", "suspended", "onboarded"],
  },
  {
    profileImage: imageTwo,
    name: "Okafor Awele",
    jobTitle: "HR Admin",
    department: "Human Resource",
    startDate: "23/03/2020",
    status: ["active", "on-leave", "stand-in", "suspended", "onboarded"],
  },
  {
    profileImage: imageThree,
    name: "James Deo",
    jobTitle: "Asst.HR admin",
    department: "Human Resource",
    startDate: "23/03/2020",
    status: ["active", "on-leave", "stand-in", "suspended", "onboarded"],
  },
  {
    profileImage: imageFour,
    name: "Akin Luke",
    jobTitle: "Product Manger",
    department: "Customer Service",
    startDate: "23/03/2020",
    status: ["active", "on-leave", "stand-in", "suspended", "onboarded"],
  },
  {
    profileImage: imageFive,
    name: "Mary Agbo",
    jobTitle: "Team Lead",
    department: "Sales&Marketing",
    startDate: "23/03/2020",
    status: ["active", "on-leave", "stand-in", "suspended", "onboarded"],
  },
  {
    profileImage: imageSix,
    name: "Mary Agbo",
    jobTitle: "Team Lead",
    department: "Sales&Marketing",
    startDate: "23/03/2020",
    status: ["active", "on-leave", "stand-in", "suspended", "onboarded"],
  },
];
const DataTable = () => {
  return (
    <StyledTable>
      <div className="headingRole">
        <h2 className="fName">Full Name</h2>
        <h2>Job Tittle</h2>
        <h2>Department</h2>
        <h2>Start Date</h2>
        <h2>Status</h2>
      </div>
      {employeesDetails.map((details, id) => (
        <div className="dataRole" key={id}>
          <div className="profileImage">
            <img src={details.profileImage.src} alt="image" />
          </div>
          <p className="fulName">{details.name}</p>
          <p>{details.jobTitle}</p>
          <p>{details.department}</p>
          <p>{details.startDate}</p>
          <p>{details.status[0]}</p>
          <button className="">
            <BiEdit />
          </button>
        </div>
      ))}
      <button className="seeAll">See All</button>
    </StyledTable>
  );
};

export default DataTable;
