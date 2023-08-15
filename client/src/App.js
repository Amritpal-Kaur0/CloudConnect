import React from "react";
 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Homepage from "./Components/Homepage";
import ProfilePage from "./Components/Profile/profile";
import SignupForm from "./Components/Signup";
import LoginForm from "./Components/Login";

// import Messages from "./Components/Messages";
import Home from "./Components/Home/Home";



function App() {
  return (
    
      <Router>
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/login" element={<LoginForm/>} />
            <Route path="/signup" element={<SignupForm />} />
          </Routes>
        </>
      </Router>
   
  );
}

export default App;
