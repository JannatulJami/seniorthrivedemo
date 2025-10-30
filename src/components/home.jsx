import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <h2>🐰</h2>
      <h1 className="app-name">UniPath</h1>
      <p>By Jannatul Jami, Sarika Ibnat, Betsy Sumba, and Jerelyn Isles</p>
      <Link to="/login">
        <button className="login-btn">Get Started</button>
      </Link>
    </div>
  );
}

export default Home;