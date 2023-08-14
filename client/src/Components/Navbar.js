import React from "react";
import { NavLink } from "react-router-dom";
import { AppBar, Toolbar, styled, Box } from "@mui/material";
import Logo from "../img/clouds.png";

const Header = styled(AppBar)`
  background: #161616;
`;

const LogoImage = styled("img")`
  width: 80px;
  height: 80px;
  margin-right: 10px;
`;



const Tabs = styled(NavLink)`
  font-size: 20px;
  margin-right: 20px;
  color: white;
  text-decoration: none;

  &:hover {
    color: #ffffff80; 
  }
`;


const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Header position="static">
      <Toolbar>
      <Tabs to="/search">Component 1</Tabs>
        <Tabs to="/add">Component 2</Tabs>
        <Tabs to="/all">Component 3</Tabs>
        <Tabs to="/search">Component 4</Tabs>
        <Tabs to="/search">Component 5</Tabs>
  
        
        <Box flexGrow={1} />
        <NavLink
      className="nav-link fs-5"
      to="/"
      onClick={handleLogout}
      style={{
        color: 'white',
        backgroundColor: 'blue',
        border: 'none',
        padding: '8px 16px',
        position: 'absolute',
        top: 15,
        right: 0,
        marginTop: '8px',
        marginRight: '8px',
        textDecoration: 'none',
        padding: '10px'
      }}
    >
      LogOut
    </NavLink>
      </Toolbar>
    </Header>
  );
};

export default Navbar;
