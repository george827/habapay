import React from "react";
import "./session.css";
import LoginImg from "../../assets/group84.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="welcome-container">
        <div className="haba">
          <h3>HabaPay</h3>
        </div>
        <div className="welcome-inner">
          <h1>Welcome back</h1>
          <p>Sign in to proceed into your account</p>
          <div className="login-container">
            <img src={LoginImg} alt="login" className="login-img" />
          </div>
          <Link to="/signin" className="Sign-in">
            <p>Sign in</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
