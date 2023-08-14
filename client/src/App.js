import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Homepage from "./Components/Homepage";
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
           
          </Routes>
        </>
      </Router>
   
  );
}

export default App;
