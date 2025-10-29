import React from "react";
import { useNavigate } from "react-router-dom"; 
import "./HomePage.css";
import { FaHome, FaSearch, FaUser, FaArrowRight, FaCog } from "react-icons/fa";

function HomePage() {
  const navigate = useNavigate(); 

  const buttons = [
    { name: "College Finder" },
    { name: "College Apply" },
    { name: "FAFSA" },
    { name: "Scholarship", path:"/ScholarshipPage" },
    { name: "SAT Support" },
    { name: "College Essay Videos", path: "/college-essay-videos" },
    { name: "Recommendation Requests" },
    { name: "College Essay", path: "/college-essay" },
    { name: "College Essay Forum", path: "/essay-forum" },
    { name: "APs", path: "/APPage"},
    { name: "Extracurriculars" },
  ];

  const handleButtonClick = (btn) => {
    if (btn.path) {
      navigate(btn.path); 
    } else {
      alert(`Coming soon: ${btn.name}`);
    }
  };

  return (
    <div className="phone-frame home-bg">
      <div className="home-container">
        <h1 className="home-title">Home</h1>

        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <FaSearch className="search-icon" />
        </div>

        <div className="button-grid">
          {buttons.map((btn, index) => (
            <button
              key={index}
              className="home-btn"
              onClick={() => handleButtonClick(btn)}
            >
              {btn.name}
            </button>
          ))}
        </div>
      </div>

      <div className="footer">
        <FaCog />
        <FaArrowRight />
        <FaHome />
        <FaUser />
      </div>
    </div>
  );
}

export default HomePage;

