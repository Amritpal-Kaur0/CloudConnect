import React from "react";
import { NavLink } from "react-router-dom";
import { AppBar, Toolbar, styled, Box } from "@mui/material";
import Logo from "../img/clouds.png";

const Header = styled(AppBar)`
  background: #161616;
`;

const LogoImage = styled("img")`
  width: 100%;
max-width: 80px;
  margin-right: 3rem;
`;



const Tabs = styled(NavLink)`
  font-size: 20px;
  margin-right: 3rem;
  color: white;
  text-decoration: none;

  &:hover {
    color: rgb(255, 0, 140); 

    
  }
`;

const LogoutLink = styled(NavLink)`
  color: white;
  background-color: navy;
  border: none;
  padding: 8px 16px;
  position: absolute;
  top: 15px;
  right: 0;
  margin-top: 8px;
  margin-right: 8px;
  textDecoration: none;

  &:hover {
    background-color: rgb(255, 0, 140); 
  }
`;


const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Header position="static">
      <Toolbar>
        <NavLink to="/">
          <LogoImage src={Logo} alt="Logo" />
        </NavLink>
        <Tabs to="/add">Post</Tabs>
        <Tabs to="/search">Find</Tabs>
        <Tabs to="/profile">Profile</Tabs>
  
        
        <Box flexGrow={1} />
        <LogoutLink
      className="nav-link fs-5"
      to="/"
      onClick={handleLogout}
      >

  
      LogOut
    </LogoutLink>
      </Toolbar>
    </Header>
  );
};

export default Navbar;
