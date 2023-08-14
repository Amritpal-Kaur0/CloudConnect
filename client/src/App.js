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
<<<<<<< HEAD
            <Route path="/home" element={<Home />} />
           
=======
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/login" element={<LoginForm/>} />
            <Route path="/signup" element={<SignupForm />} />
>>>>>>> f85ea6fce733c71790bf002fe7eb197fc76f793d
          </Routes>
        </>
      </Router>
   
  );
}

export default App;
