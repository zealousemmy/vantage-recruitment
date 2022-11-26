import React from "react";
import { StyledCard, StyledCardContainer } from "./style";
import { HiOutlineUser } from "react-icons/hi";

const Card = ({ cardWidth, containerWidth, employeesStatus }) => {
  return (
    <StyledCardContainer width={containerWidth}>
      {employeesStatus.map((item, id) => (
        <StyledCard key={id} width={cardWidth}>
          <h4>{item.title}</h4>
          <div className="employeesNum">
            <div className="iconContainer">
              <HiOutlineUser />
            </div>
            <h3>{item.number}</h3>
          </div>
        </StyledCard>
      ))}
    </StyledCardContainer>
  );
};

export default Card;
