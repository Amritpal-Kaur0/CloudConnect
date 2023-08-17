import { Link } from "react-router-dom";
import "./login.scss";
import { useContext, useRef } from "react";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/authContext";

// Material -ui Import
import { CircularProgress } from "@mui/material";

export default function Login() {
  const email = useRef();
  const password = useRef();
  const { isFetching, dispatch } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit Button Clicked");
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };
  // console.log(user);
  return (
    <div className="loginContainer">
      <div className="card">
        <div className="left">
          <h1 className="loginLogo">Cloud Connect</h1>
          <p className="description">
            "Join the digital evolution with CloudConnect " - where connections
            transcend boundaries and social networking meets limitless
            possibilities! 🌐✨ #CloudConnectApp"
          </p>
          <span>Don't have a Account?</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <input type="email" required placeholder="Username" ref={email} />
            <input
              type="password"
              minLength={6}
              required
              placeholder="Password"
              ref={password}
            />{" "}
            <button disabled={isFetching}>{isFetching ? (<CircularProgress  />) :("Login")}</button>
            <span>Forgot Password ?</span>
          </form>
        </div>
      </div>
    </div>
  );
}
