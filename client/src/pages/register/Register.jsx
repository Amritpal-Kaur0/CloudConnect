import { Link, useNavigate } from "react-router-dom";
import { createBrowserHistory } from "history";
import "./register.scss";
import { useRef } from "react";
import axios from "axios";

export default function Register() {
  const email = useRef();
  const username = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const history = createBrowserHistory()

  const handleSubmit = async (e) => {
    // e.preventDefault();
    console.log(" Signup Submit Button Clicked");
    if (passwordAgain.current.value !== password.current.value) {
      password.current.setCustomValidity("Password Does NOT Match !");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post("/auth/register", user);
        history.push("/login");
      } catch (err) {
        console.log(err);
      }
    }
  
  };

  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Cloud Connect</h1>
          <p className="description">
            "Join the digital evolution with CloudConnect " - where connections
            transcend boundaries and social networking meets limitless
            possibilities! 🌐✨ #CloudConnectApp"
          </p>
          <span>Do you have an Account?</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Sign up</h1>
          <form onSubmit={handleSubmit}>
            <input type="text" required ref={username} placeholder="Username" />
            <input type="email" required ref={email} placeholder="Email" />
            <input
              type="password"
              required
              ref={password}
              minLength={6}
              placeholder="Password"
            />
            <input
              type="password"
              required
              minLength={6}
              ref={passwordAgain}
              placeholder="Password Again"
            />{" "}
            <button type="submit">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
}
