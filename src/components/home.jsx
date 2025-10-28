import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <img
        src="/bunny.png"
        alt="Bunny Logo"
        className="bunny-logo"
      />
      <h1 className="app-name">Unipatnpx</h1>
      <Link to="/login">
        <button className="login-btn">Get Started</button>
      </Link>
    </div>
  );
}

export default Home;