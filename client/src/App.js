import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Homepage from "./Components/Homepage";
import LoginForm from "./Components/Login";
import SignupForm from "./Components/Signup";
import Footer from "./Components/FooterContainer";
// import Messages from "./Components/Messages";




function App() {
  return (
    
      <Router>
        <>
          <Navbar />
          <Routes>
            {/* <Route path="/" element={<Homepage />} /> */}
            <Route path="/login" element={<LoginForm />} />
            <Route path="/signup" element={<SignupForm />} />
           
          </Routes>
          <Footer/>
        </>
      </Router>
   
  );
}

export default App;
