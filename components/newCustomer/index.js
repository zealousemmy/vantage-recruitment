import React from "react";
import { ActivityContainer } from "./style";
import userOne from "../../assets/avatar/Oval.png";

const activities = [
  {
    image: userOne,
    name: "Alex Shatov",
    mail: "alexshatov@gmail.com",
  },
  {
    image: userOne,
    name: "Alex Shatov",
    mail: "alexshatov@gmail.com",
  },
  {
    image: userOne,
    name: "Alex Shatov",
    mail: "alexshatov@gmail.com",
  },
  {
    image: userOne,
    name: "Alex Shatov",
    mail: "alexshatov@gmail.com",
  },
];
const NewCustomer = ({ width }) => {
  return (
    <ActivityContainer width={width}>
      <div className="heading">
        <h3>New Customers</h3>
        <p>View</p>
      </div>

      <div className="activity">
        <div className="headerTitle">
          <h2>Name</h2>
          <h2>Email</h2>
        </div>
        {activities.map((item, id) => (
          <div className="activityLog" key={id}>
            <div className="user">
              <div className="image">
                <img src={item.image.src} />
              </div>
              <p className="userName">{item.name}</p>
            </div>
            <p className="mail">{item.mail} </p>
          </div>
        ))}
      </div>
    </ActivityContainer>
  );
};

export default NewCustomer;
