
            
import React from "react";
import "./ScholarshipPage.css";
import { FaLink } from "react-icons/fa";

function ScholarshipPage() {
  const resources = [
    { name: "Fastweb", url: "https://www.fastweb.com/" },
    { name: "Scholarships.com", url: "https://www.scholarships.com/" },
    { name: "College Board Scholarship Search", url: "https://bigfuture.collegeboard.org/scholarship-search" },
    { name: "Cappex", url: "https://www.cappex.com/scholarships" },
    { name: "Chegg Scholarships", url: "https://www.chegg.com/scholarships" },
  ];

  const tips = [
    "Start early: Many scholarships have deadlines months in advance.",
    "Tailor your essay: Customize for each scholarship, don’t reuse the same essay.",
    "Don’t ignore small scholarships: Smaller awards add up quickly.",
    "Check eligibility carefully: Only apply to scholarships you qualify for.",
    "Use local resources: Schools, community organizations, and local businesses often have unadvertised scholarships.",
    "Avoid scams: Never pay to apply for a scholarship.",
  ];

  return (
    <div className="scholarship-page">
      <div className="scholarship-header">
        <div className="bunny-logo">🐰</div>
        <h1 className="scholarship-title">Scholarship Advice</h1>
        <p className="scholarship-intro">
          Scholarships can greatly reduce college costs and open doors to opportunities.
          This page gives tips, common pitfalls, and resources to help you find the best scholarships.
        </p>
      </div>

      <div className="scholarship-resources">
        <h3>Top Scholarship Resources</h3>
        <ul>
          {resources.map((res, index) => (
            <li key={index}>
              <a href={res.url} target="_blank" rel="noopener noreferrer">
                <FaLink /> {res.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="scholarship-tips">
        <h3>Scholarship Tips</h3>
        <ul>
          {tips.map((tip, index) => (
            <li key={index}>{tip}</li>
          ))}
        </ul>
      </div>

      <div className="scholarship-faq">
        <h3>Common Questions</h3>
        <p><strong>Q:</strong> Can I apply to multiple scholarships at once?</p>
        <p><strong>A:</strong> Yes! Apply to as many as you qualify for to maximize opportunities.</p>
        <p><strong>Q:</strong> Do I need perfect grades?</p>
        <p><strong>A:</strong> No, many scholarships consider essays, extracurriculars, or community service.</p>
      </div>
    </div>
  );
}

export default ScholarshipPage;
