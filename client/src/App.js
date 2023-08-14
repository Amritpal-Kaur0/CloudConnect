import React from "react";
 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Homepage from "./Components/Homepage";
import ProfilePage from "./Components/Profile/profile";
import SignupForm from "./Components/Signup";
import LoginForm from "./Components/Login";

// import Messages from "./Components/Messages";




function App() {
  return (
    
      <Router>
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
           
          </Routes>
          {/* <Footer/> */}
        </>
      </Router>
   
  );
}

export default App;
