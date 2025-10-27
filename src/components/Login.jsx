
import React, { useState } from "react";
import "./LoginPage.css";

export default function LoginPage({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (username && password) {
      onLogin(); // move to home page
    } else {
      alert("Please enter both fields!");
    }
  };

  return (
    <div className="mobile-container login-page">
      <div className="bunny">
        🐰
      </div>

      <h1 className="title">UniPath</h1>

      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" className="login-btn">Login</button>
      </form>

      <p className="create-account">Create Account</p>
    </div>
  );
}
