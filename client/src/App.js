import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/authContext";

import Home from "./pages/home/Home";
import "./App.css";
import Profile from "./pages/Profile.jsx";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
// import { Switch } from "@mui/material";

export default function App() {
  const {user}=useContext(AuthContext)
  return (


    <Router>
      <>
      <Routes>
          <Route 
            path='/' 
            element={ user? <Home /> :<Register/>} 
          />
          <Route 
            path='/login' 
            element={ user? <Navigate replace to ="/"/> :<Login />} 
          />
          <Route 
            path='/register' 
            element={ user? <Navigate replace to ="/"/> :<Register />} 
          />
          <Route 
            path='/profile/:username' 
            element={<Profile />} 
          />
          <Route 
            path='*'
            element={<h1 className='display-2'>Wrong page!</h1>}
          />
        </Routes>
        </>
     </Router>
  );
}
