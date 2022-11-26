import React from "react";
import { ActivityContainer } from "./style";
import userOne from "../../assets/avatar/Ellipse1.png";

const activities = [
  {
    day: "today",
    activityDetail: [
      {
        image: userOne,
        text: "James Doe Approved Completed task",
      },
      {
        image: userOne,
        text: "James Doe Approved Completed task",
      },
    ],
  },
  {
    day: "yesterday",
    activityDetail: [
      {
        image: userOne,
        text: "James Doe Approved Completed task",
      },
      {
        image: userOne,
        text: "James Doe Approved Completed task",
      },
    ],
  },
];
const RecentActivity = ({ width }) => {
  return (
    <ActivityContainer width={width}>
      <h3>Recent Activity</h3>
      {activities.map((activity, id) => (
        <div className="activity" key={id}>
          <h2 className="headerTitle">{activity.day}</h2>
          {activity.activityDetail.map((item, id) => (
            <div className="activityLog" key={id}>
              <div className="user">
                <div className="image">
                  <img src={item.image.src} />
                </div>
                <p className="userMessage">{item.text}</p>
              </div>
              <p>View </p>
            </div>
          ))}
        </div>
      ))}
    </ActivityContainer>
  );
};

export default RecentActivity;
