import React from "react";
import { StyledMessageCard, StyledMessageContainer } from "./style";
import userOne from "../../assets/avatar/Ellipse1.png";

const messages = [
  {
    userImage: userOne,
    userName: "James Henry",
    time: "08:43 AM",
    message: "Goodmorning, i have sent.....",
  },
  {
    userImage: userOne,
    userName: "James Henry",
    time: "08:43 AM",
    message: "Goodmorning, i have sent.....",
  },
  {
    userImage: userOne,
    userName: "James Henry",
    time: "08:43 AM",
    message: "Goodmorning, i have sent.....",
  },
  {
    userImage: userOne,
    userName: "James Henry",
    time: "08:43 AM",
    message: "Goodmorning, i have sent.....",
  },
  {
    userImage: userOne,
    userName: "James Henry",
    time: "08:43 AM",
    message: "Goodmorning, i have sent.....",
  },
];

const Messages = () => {
  return (
    <StyledMessageContainer>
      <h3 className="headerText">Messages</h3>
      {messages.map((message, id) => (
        <StyledMessageCard key={id}>
          <div className="profileImage">
            <img src={message.userImage.src} alt="" />
          </div>
          <div className="width-80">
            <div className="nameTimeContainer">
              <h5>{message.userName}</h5>
              <p>{message.time}</p>
            </div>
            <p className="message">{message.message}</p>
          </div>
        </StyledMessageCard>
      ))}
    </StyledMessageContainer>
  );
};

export default Messages;
