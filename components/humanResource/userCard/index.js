import React from "react";
import imageOne from "../../../assets/avatar/Ellipse 45 (1).png";
import imageTwo from "../../../assets/avatar/Ellipse 45 (2).png";
import imageThree from "../../../assets/avatar/Ellipse 45 (3).png";
import imageFour from "../../../assets/avatar/Ellipse 45 (4).png";
import imageFive from "../../../assets/avatar/Ellipse 45 (5).png";
import imageSix from "../../../assets/avatar/Ellipse 45 (6).png";
import { StyledUserCard } from "./style";

const usersCredentials = [
  {
    userImage: imageOne,
    name: "Okafor Awele",
    email: "okaforawele@kariba.com",
    status: "On-Leave",
    jobTitle: "HR Administrator",
  },
  {
    userImage: imageTwo,
    name: "James Deo",
    email: "jamesdoe@kariba.com",
    status: "Stand-In( Okafor Awele)",
    jobTitle: "HR Administrator",
  },
  {
    userImage: imageThree,
    name: "Susan Bage",
    email: "susanbage@kariba.com",
    status: "Active",
    jobTitle: "Staffing Co-ordinator",
  },
  {
    userImage: imageFour,
    name: "Okafor Awele",
    email: "okaforawele@kariba.com",
    status: "On-Leave",
    jobTitle: "HR Administrator",
  },
  {
    userImage: imageFive,
    name: "Okafor Awele",
    email: "okaforawele@kariba.com",
    status: "On-Leave",
    jobTitle: "HR Administrator",
  },
  {
    userImage: imageSix,
    name: "Okafor Awele",
    email: "okaforawele@kariba.com",
    status: "On-Leave",
    jobTitle: "HR Administrator",
  },
];
const UserCard = () => {
  return (
    <StyledUserCard>
      {usersCredentials.map((users, id) => (
        <div className="card" key={id}>
          <div className="image">
            <img src={users.userImage.src} alt="" />
          </div>
          <h3 className="name">{users.name}</h3>
          <p className="mail">{users.email}</p>
          <p className="status">{users.status}</p>
          <h4 className="jobTitle">{users.jobTitle}</h4>
        </div>
      ))}
    </StyledUserCard>
  );
};

export default UserCard;
