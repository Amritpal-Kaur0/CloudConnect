import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Homepage from "./Components/Homepage";
// import Messages from "./Components/Messages";




function App() {
  return (
    
      <Router>
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
           
          </Routes>
        </>
      </Router>
   
  );
}

export default App;
