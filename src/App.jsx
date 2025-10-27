

import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login";

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to Unipatnpx</h1>
      <p>Your path to SAT & AP success.</p>
      <Link to="/login">
        <button>Go to Login</button>
      </Link>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;