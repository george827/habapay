import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "./session.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [longin, setLogin] = useState("Login");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email || !password) {
      setError("Email and password are required");
      return;
    }
    
    setLogin("Processing...");
    setTimeout(() => {
        setLogin("Login");
        navigate("/dashboard");
    }, 2000);
  };

  return (
    <>
      <div className="login-container">
        <div className="haba">
          <h3>HabaPay</h3>
        </div>
        <div className="login-inner">
          {error && <p className="error">{error}</p>}
          <h3>Log in to Account</h3>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="Email">Email</label>
              <input
                type="email"
                id="Email"
                name="Email"
                className="form-control"
                placeholder="Enter your Email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                className="form-control"
                placeholder="Enter your password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <div className="btn-session">
              <button type="submit" className="Sign-in login-btn">
                <p>{longin}</p>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;