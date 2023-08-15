import React from "react";
import { Global } from "@emotion/react";
// import pic from '../../pic.png';
// import centerPic from '../../Capture.png';
import "./Home.css";

const scrollbarStyles = `
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #000000;
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #333333;
  }
`;

export default function Home() {
  return (
    <div
      style={{
        height: "100vh",
        fontSize: "24px",
        fontWeight: "bold",
        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
        overflowY: "auto",
        scrollbarWidth: "thin",
        scrollbarColor: "#000000 transparent",
      }}
    >
      <Global styles={scrollbarStyles} />

      <div style={{ display: "flex", justifyContent: "left", textAlign: "left", marginTop: "1rem", marginLeft: "2rem" }}>
        {/* <div style={{ flex: 6 }}>
          <h1>PROJECT NAME</h1>
          <p>
            Hello from MY APP
          </p>
          <p>The application is developed by: Tutorial . pk </p>

          <button
            style={{
              backgroundColor: "blue",
              color: "white",
              border: "none",
              borderRadius: "4px",
              padding: "12px 24px",
              alignSelf: "center",
              marginTop: "16px",
              fontSize: "18px",
              fontWeight: "bold",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#0044cc";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "blue";
            }}
          >
            Click Me
          </button>
        </div> */}

        <div style={{ flex: 4, display: "flex", justifyContent: "right", textAlign: "right", marginTop: "4rem", marginRight: "2rem" }}>
          {/* <img
            src={pic}
            alt="Your Image"
            style={{ maxWidth: "400px", height: "auto" }}
          /> */}
        </div>
      </div>

      <div id="new-post-box" style={{ display: "flex", flexDirection:"column", flexWrap:"wrap", justifyContent: "center", marginTop: "3rem", width:"40%" }}>
        <div id="username">
          <img src={require("./pfp1.png")} style={{width: "40px", height:"40px",float:"left"}}></img>
          <p>
            username
          </p>
          <span className="bg-slate-500 text-white text-lg">
            5 minutes ago
          </span>
          <br/>
          <div style={{ margin: "10px" }}>
            <p>Enter post text here:</p>
            <input type="text"></input>
          </div>
          <div style={{ margin: "10px" }}>
            <p>Upload image here:</p>
            <img className="upl-img-btn" src={require("./upload-img.png")} style={{width: "10%", margin: "10px"}}></img>
          </div>
        </div>
        
      </div>

      <div id="post-box" style={{ display: "flex", flexDirection:"column", flexWrap:"wrap", justifyContent: "center", marginTop: "3rem", width:"40%" }}>
        <div id="username">
          <img src={require("./pfp1.png")} style={{width: "40px", height:"40px",float:"left"}}></img>
          <p>
            username
          </p>
          <span className="bg-slate-500 text-white text-lg">
            5 minutes ago
          </span>
          <br/>
          <p>
            Text content
          </p>
        </div>
        <div id="img-content">
          <img
            src={require("./img1.jpg")}
            alt="Your Image"
            style={{ height: "auto" , width:"100%", padding:"3%"}}
          />
        </div>
        <div className="flex justify-evenly">
          <div id="likeBtn">
            <img className="like-btn" src={require("./like.png")}
            style={{width:"10%"}} />
          </div>
          <div id="comment" className="flex column-reverse">
              <input type="text" className="w-50 input"></input>
              <button style={{background:"blue",color:"#ffF", marginTop:"2%"}}>Post Comment</button>
          </div>
        </div>
        
      </div>
    </div>
  );
}
