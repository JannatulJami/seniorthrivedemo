// components/CollegeEssay.jsx
import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaBookOpen, FaLightbulb } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./CollegeEssay.css";

const SAMPLE_ESSAYS = [
  {
    id: 1,
    title: "Sample College Admissions Essays (College Visions PDF)",
    tags: ["pdf", "examples", "variety"],
    url: "https://collegevisions.org/wp-content/uploads/2020/07/Sample-College-Admissions-Essays.pdf",
    description: "A PDF collection of student essays on different prompts."
  },
  {
    id: 2,
    title: "50 Successful Ivy League Application Essays (PDF)",
    tags: ["ivy", "pdf", "examples"],
    url: "https://www.bths.edu/ourpages/auto/2017/11/13/58858886/50%20Successful%20Ivy%20League%20App%20Essays%20PART%201.pdf",
    description: "A compilation of essays and commentary from successful applicants."
  },
  {
    id: 3,
    title: "CollegeVine — Common App Essay Examples",
    tags: ["common app", "examples", "analysis"],
    url: "https://blog.collegevine.com/common-app-essay-examples/",
    description: "Multiple essay examples and why they worked (web article)."
  },
  {
    id: 4,
    title: "Johns Hopkins: Essays That Worked",
    tags: ["examples", "university"],
    url: "https://apply.jhu.edu/college-planning-guide/essays-that-worked/",
    description: "Selected essays nominated by admissions committees."
  },
  {
    id: 5,
    title: "Common App Prompts & Tips",
    tags: ["prompts", "common app", "guide"],
    url: "https://www.commonapp.org/",
    description: "Official Common App site for prompts and resources."
  }
];

function CollegeEssay() {
  const navigate = useNavigate();
  const [draft, setDraft] = useState(() => localStorage.getItem("collegeEssayDraft") || "");
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState(SAMPLE_ESSAYS);

  useEffect(() => {
    const q = search.trim().toLowerCase();
    if (!q) {
      setFiltered(SAMPLE_ESSAYS);
      return;
    }
    setFiltered(
      SAMPLE_ESSAYS.filter(
        (e) =>
          e.title.toLowerCase().includes(q) ||
          e.description.toLowerCase().includes(q) ||
          e.tags.join(" ").toLowerCase().includes(q)
      )
    );
  }, [search]);

  const saveDraft = () => {
    localStorage.setItem("collegeEssayDraft", draft);
    alert("Draft saved locally.");
  };

  const generateIdea = () => {
    const prompts = [
      "A challenge that changed how you see leadership.",
      "A time you failed and what you learned.",
      "A cultural moment or tradition that shaped your identity.",
      "An idea you defended that others disagreed with."
    ];
    const pick = prompts[Math.floor(Math.random() * prompts.length)];
    setDraft((d) => (d ? d + "\n\nIdea: " + pick : "Idea: " + pick));
  };

  return (
    <div className="essay-phone-frame">
      <div className="essay-header">
        <FaArrowLeft className="back-icon" onClick={() => navigate("/HomePage")} />
        <h2>College Essay Toolkit</h2>
      </div>

      <div className="essay-content">
        <div className="left-column">
          <section className="card">
            <h3><FaBookOpen /> Quick Tips</h3>
            <ul>
              <li>Hook the reader with a scene or line.</li>
              <li>Show growth — explain what you learned.</li>
              <li>Use specific details and sensory language.</li>
              <li>Keep your voice — write like you speak (polished).</li>
            </ul>
            <button className="btn" onClick={generateIdea}>Generate Topic Idea</button>
          </section>

          <section className="card">
            <h3><FaLightbulb /> Structure Guide</h3>
            <ol>
              <li>Hook / short scene</li>
              <li>What happened — challenge/conflict</li>
              <li>Reflection: what you learned</li>
              <li>Conclusion: growth / future plans</li>
            </ol>
          </section>

          <section className="card">
            <h3>Write & Save Draft</h3>
            <textarea
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              placeholder="Start your draft here..."
            />
            <button className="btn" onClick={saveDraft}>Save Draft</button>
          </section>
        </div>

        <div className="right-column">
          <section className="card resources">
            <h3>Search Example Essays</h3>
            <input
              type="text"
              placeholder="Search examples by topic, tag, or title..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <div className="results">
              {filtered.map((e) => (
                <div key={e.id} className="result-card">
                  <h4>{e.title}</h4>
                  <p className="desc">{e.description}</p>
                  <p className="tags">Tags: {e.tags.join(", ")}</p>
                  <button
                    className="link-btn"
                    onClick={() => window.open(e.url, "_blank", "noopener")}
                  >
                    Open
                  </button>
                </div>
              ))}
              {filtered.length === 0 && <p>No examples found for "{search}"</p>}
            </div>
          </section>

          <section className="card">
            <h3>More Guides</h3>
            <ul>
              <li><a href="https://www.collegeessayguy.com/blog/how-to-write-a-college-essay" target="_blank" rel="noreferrer">College Essay Guy — Step-by-step guide</a></li>
              <li><a href="https://bigfuture.collegeboard.org/plan-for-college/apply-to-college/application-process/ultimate-college-essay-guide" target="_blank" rel="noreferrer">College Board — Ultimate Guide</a></li>
              <li><a href="https://summer.harvard.edu/blog/12-strategies-to-writing-the-perfect-college-essay/" target="_blank" rel="noreferrer">Harvard Summer — Strategies</a></li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export default CollegeEssay;
