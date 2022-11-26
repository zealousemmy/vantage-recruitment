import React from "react";
import { StyledNav } from "./nav.style";
import { BsFillMoonStarsFill, BsSearch } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosNotificationsOutline } from "react-icons/io";
import userImage from "../../assets/avatar/Ellipse 45 (2).png";
const Nav = ({ changeMode, sidebarDisplay }) => {
  return (
    <StyledNav>
      <div className="leftContent">
        <h4>Dashboard</h4>
      </div>
      <div className="rightContent">
        <button onClick={changeMode} className="mode">
          <BsFillMoonStarsFill />
        </button>
        <div className="user">
          <button className="search">
            <BsSearch />
          </button>
          <button className="notification">
            <IoIosNotificationsOutline />
          </button>
          <div className="userImage">
            <img src={userImage.src} />
          </div>
          <p>Temi - HR Manager</p>
        </div>
        <button className="displayButton" onClick={sidebarDisplay}>
          <GiHamburgerMenu />
        </button>
      </div>
    </StyledNav>
  );
};

export default Nav;
