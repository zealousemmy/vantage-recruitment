import React, { useState, useEffect } from "react";
import {
  Dropdown,
  IconDisplay,
  IconDown,
  StyledSideBar,
} from "./sidebar.style";
import logoImage from "../../assets/KARIBA.png";
import { FcDoughnutChart } from "react-icons/fc";
import { BsCalendar2CheckFill } from "react-icons/bs";
import { FaSquare, FaUserFriends } from "react-icons/fa";
import { BiDoughnutChart } from "react-icons/bi";
import { AiFillSetting } from "react-icons/ai";
import { GrTemplate } from "react-icons/gr";
import { HiTemplate } from "react-icons/hi";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { SlArrowDown, SlArrowLeft, SlArrowRight } from "react-icons/sl";
import Link from "next/link";
const SideBar = ({ displayItem, close, sideDisplay }) => {
  const [display, setDisplay] = useState(false);
  const [displayTwo, setDisplayTwo] = useState(false);
  const [displayThree, setDisplayThree] = useState(false);
  const [displayFour, setDisplayFour] = useState(false);

  const handleDisplay = (e) => {
    display === false ? setDisplay(true) : setDisplay(false);
  };
  const handleDisplayTwo = () => {
    displayTwo === false ? setDisplayTwo(true) : setDisplayTwo(false);
  };
  const handleDisplayThree = () => {
    displayThree === false ? setDisplayThree(true) : setDisplayThree(false);
  };
  const handleDisplayFour = () => {
    displayFour === false ? setDisplayFour(true) : setDisplayFour(false);
  };
  const options = ["one", "two", "three"];
  const defaultOption = options[0];
  return (
    <StyledSideBar displayItem={displayItem} close={close}>
      <div className="logo">
        <img src={logoImage.src} />
      </div>
      <div className="sideBarContainer">
        <Link href={"/"} className="dashBoardHeading">
          <FcDoughnutChart className="icon" />
          <h2>Dashboard</h2>
        </Link>
        <button className="cancelBtn" onClick={sideDisplay}>
          X
        </button>
      </div>
      <div className="navLinks">
        <ul>
          <li>
            <button
              className="navText"
              onClick={handleDisplay}
              value="humanResource"
            >
              <div className="iconText">
                <BsCalendar2CheckFill />
                <p>Human Resource</p>
              </div>
              <IconDisplay show={display}>
                <SlArrowRight />
              </IconDisplay>
              <IconDown show={display}>
                <SlArrowDown />
              </IconDown>
            </button>
            <Dropdown show={display}>
              <Link href={"/humanresource/organization"}>
                Organisation Structure
              </Link>
              <Link href="#">Leave Request</Link>
            </Dropdown>
          </li>
          <li>
            <button className="navText" onClick={handleDisplayTwo}>
              <div className="iconText">
                <FaSquare /> <p>Corporate</p>
              </div>
              <IconDisplay show={displayTwo}>
                <SlArrowRight />
              </IconDisplay>
              <IconDown show={displayTwo}>
                <SlArrowDown />
              </IconDown>
            </button>
            <Dropdown show={displayTwo}>
              <Link href="/corporate/bussiness">Business Process</Link>
            </Dropdown>
          </li>
          <li>
            <button className="navText" onClick={handleDisplayThree}>
              <div className="iconText">
                <BiDoughnutChart /> <p>Fianance</p>
              </div>
              <IconDisplay show={displayThree}>
                <SlArrowRight />
              </IconDisplay>
              <IconDown show={displayThree}>
                <SlArrowDown />
              </IconDown>
            </button>
            <Dropdown show={displayThree}>
              <Link href="#">Cash Request</Link>
              <Link href="#">Funds Retirement</Link>
            </Dropdown>
          </li>
          <li>
            <button className="navText" onClick={handleDisplayFour}>
              <div className="iconText">
                <FaUserFriends /> <p>Customers</p>
              </div>
              <IconDisplay show={displayFour}>
                <SlArrowRight />
              </IconDisplay>
              <IconDown show={displayFour}>
                <SlArrowDown />
              </IconDown>
            </button>
            <Dropdown show={displayFour}>
              <Link href="#">Customer List</Link>
              <Link href="#">Customer Lead</Link>
            </Dropdown>
          </li>
          <li>
            <Link href="#" className="link">
              <AiFillSetting className="linkIcon" /> <p>Settings</p>
            </Link>
          </li>
          <li>
            <Link href="/templates" className="link">
              <HiTemplate className="linkIcon" /> <p>Templates</p>
            </Link>
          </li>
        </ul>
      </div>
      <div className="logOutContainer">
        <button className="logOut">Logout</button>
      </div>
    </StyledSideBar>
  );
};

export default SideBar;
