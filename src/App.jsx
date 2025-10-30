import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Login from "./components/Login";
import HomePage from "./components/HomePage";
import CollegeEssay from "./components/CollegeEssay";
import EssayForum from "./components/EssayForum";
import APPage from "./components/APPage";
import "./App.css";
import ScholarshipPage from "./components/ScholarshipPage";
import CollegeEssayVideos from "./components/CollegeEssayVideos";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/HomePage" element={<HomePage />} /> 
        <Route path="/college-essay" element={<CollegeEssay />} />
        <Route path="/essay-forum" element={<EssayForum />} />
        <Route path="/APPage" element={<APPage />} />
        <Route path="/ScholarshipPage" element={<ScholarshipPage />} />
        <Route path="/college-essay-videos" element={<CollegeEssayVideos />} />
      </Routes>
    </Router>
  );
}

export default App;

