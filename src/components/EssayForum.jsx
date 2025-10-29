import React, { useState } from "react";
import "./EssayForum.css";
import { FaPlus, FaSearch } from "react-icons/fa";

function EssayForum() {
  const [essays, setEssays] = useState([]);
  const [newEssay, setNewEssay] = useState({ title: "", author: "", content: "" });
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newEssay.title && newEssay.author && newEssay.content) {
      setEssays([...essays, { ...newEssay, id: Date.now() }]);
      setNewEssay({ title: "", author: "", content: "" });
    }
  };

  const filteredEssays = essays.filter((essay) =>
    essay.title.toLowerCase().includes(search.toLowerCase()) ||
    essay.content.toLowerCase().includes(search.toLowerCase()) ||
    essay.author.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="forum-page">
      <div className="forum-header">
        <div className="bunny-logo">🐰</div>
        <h1>College Essay Forum</h1>
        <p className="intro-text">
          Welcome! Share your college essays and read others for inspiration.
          Check out tips below to write your best essay!
        </p>
      </div>

      <div className="advice-section">
        <h3>Quick Tips:</h3>
        <ul>
          <li>Be authentic — tell your unique story.</li>
          <li>Focus on reflection, not just achievements.</li>
          <li>Show growth and lessons learned.</li>
          <li>Keep it clear, concise, and engaging.</li>
        </ul>
      </div>

      <div className="search-bar">
        <FaSearch className="search-icon" />
        <input
          type="text"
          placeholder="Search essays..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <form className="forum-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Essay title"
          value={newEssay.title}
          onChange={(e) => setNewEssay({ ...newEssay, title: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Your name"
          value={newEssay.author}
          onChange={(e) => setNewEssay({ ...newEssay, author: e.target.value })}
          required
        />
        <textarea
          placeholder="Paste your essay here..."
          value={newEssay.content}
          onChange={(e) => setNewEssay({ ...newEssay, content: e.target.value })}
          required
        />
        <button type="submit">
          <FaPlus /> Post Essay
        </button>
      </form>

      <div className="essay-list">
        {filteredEssays.map((essay) => (
          <div key={essay.id} className="essay-card">
            <h3>{essay.title}</h3>
            <p className="author">By {essay.author}</p>
            <p>{essay.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EssayForum;
