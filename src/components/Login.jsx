import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (email.trim() === "" || password.trim() === "") {
      setError("Please enter both email and password.");
      return;
    }

    // Allow any email/password to log in
    localStorage.setItem("loggedInUser", email);
    navigate("/HomePage");
  };

  return (
    <div className="mobile-container login-page">
      <div className="bunny">🐰</div>
      <h2 className="title">Welcome Back!</h2>

      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="login-btn" type="submit">
          Log In
        </button>
      </form>

      {error && <p className="error">{error}</p>}

      <p className="create-account">Don’t have an account? Sign up</p>
    </div>
  );
}

export default Login;
