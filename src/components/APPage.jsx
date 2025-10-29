import React, { useState } from "react";
import "./APPage.css";
import { FaChevronDown, FaChevronUp, FaSearch } from "react-icons/fa";

function APPage() {
  const courses = [
    {
      name: "AP Biology",
      description: "Covers cellular biology, genetics, evolution, and ecology.",
      exams: "Multiple-choice + Free-response questions on lab and theoretical concepts."
    },
    {
      name: "AP Calculus AB",
      description: "Focuses on differential and integral calculus of single-variable functions.",
      exams: "Multiple-choice and free-response questions covering limits, derivatives, integrals, and applications."
    },
    {
      name: "AP English Literature",
      description: "Analyzes poetry, prose, and plays, emphasizing critical reading and essay writing.",
      exams: "Multiple-choice questions and three analytical essays."
    },
    {
      name: "AP US History",
      description: "Covers American history from pre-Columbian to modern times.",
      exams: "Multiple-choice, short answer, document-based question, and essay questions."
    },
    {
      name: "AP Physics 1",
      description: "Introductory college-level physics covering mechanics, waves, and circuits.",
      exams: "Multiple-choice and free-response questions on conceptual and experimental understanding."
    },
  ];

  const [expanded, setExpanded] = useState({});
  const [search, setSearch] = useState("");

  const toggleCard = (index) => setExpanded({ ...expanded, [index]: !expanded[index] });

  const filteredCourses = courses.filter((course) =>
    course.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="ap-page">
      {/* Top Section */}
      <div className="ap-header">
        <div className="bunny-logo">🐰</div>
        <h1 className="ap-title">AP Courses</h1>
        <p className="ap-intro">
          Advanced Placement (AP) courses let you experience college-level academics
          while in high school. They can strengthen your college applications, 
          help you earn college credit, and explore subjects in depth. Choose AP courses 
          that match your interests, strengths, and future goals.
        </p>
      </div>

      {/* Search Bar */}
      <div className="ap-search">
        <FaSearch className="search-icon" />
        <input
          type="text"
          placeholder="Search AP courses..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* AP Cards */}
      <div className="ap-card-container">
        {filteredCourses.map((course, index) => (
          <div key={index} className="ap-card">
            <div className="ap-card-header" onClick={() => toggleCard(index)}>
              <h3>{course.name}</h3>
              {expanded[index] ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            {expanded[index] && (
              <div className="ap-card-body">
                <p><strong>Description:</strong> {course.description}</p>
                <p><strong>Exam:</strong> {course.exams}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default APPage;
