import React, { useContext } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";

// material-ui imports
import ScreenSearchDesktopIcon from "@mui/icons-material/ScreenSearchDesktop";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import MarkUnreadChatAltRoundedIcon from "@mui/icons-material/MarkUnreadChatAltRounded";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";



export default function Navbar() {
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="navbarContainer flex items-center sticky top-0">
      <div className="navbarLeft">
        <Link to="/">
         
          <span className="logo text-xl font-extrabold ml-10 mr-2 ">
            <span className="text-3xl">C</span>loudConnect{" "}
          </span>
        </Link>
      </div>
      {/* <div className="navbarCenter">
        <div className="searchbar bg-white rounded-lg flex items-center">
          <ScreenSearchDesktopIcon className="searchIcon" />
          <input
            type="search"
            className="searchInput"
            placeholder="Search for friends"
          />
        </div>
      </div> */}
      <div className="navbarRight flex items-center justify-around text-white">
        <div className="navbarLinks">
          <Link to="/">
          <span className="navbarLink">HomePage</span></Link>
          <span className="navbarLink">Timeline</span>
        </div>
        <div className="navbarIcons flex">
          <div className="navbarIconItem relative">
            <NotificationsActiveIcon />
            <span className="navbarIconBadge ">1</span>
          </div>

          <div className="navbarIconItem relative">
            <MarkUnreadChatAltRoundedIcon />
            <span className="navbarIconBadge">2</span>
          </div>

          <div className="navbarIconItem relative">
            <PersonPinIcon />
            <span className="navbarIconBadge ">1</span>
          </div>
        </div>
        <Link to={`/profile/${user.username}`}>
          <img
            className="ProfilePicture rounded-2xl cursor-pointer"
            src={
              user.profilePicture ? PF + user.profilePicture : PF + "nopic.jpg"
            }
            alt=""
          />
        </Link>
      </div>
    </div>
  );
}
