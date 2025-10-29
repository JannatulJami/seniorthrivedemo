import React from "react";
import "./CollegeEssayVideos.css";

function CollegeEssayVideos() {
  const videos = [
    {
      title: "How I Got Into Harvard (My Essay + Stats)",
      channel: "Ivy Bound",
      thumbnail: "https://img.youtube.com/vi/3vO5xGZgUqA/maxresdefault.jpg",
      url: "https://www.youtube.com/watch?v=3vO5xGZgUqA",
      desc: "Breakdown of a real Harvard admit’s Common App essay, stats, and advice."
    },
    {
      title: "How to Write a College Essay That Stands Out",
      channel: "Crimson Education",
      thumbnail: "https://img.youtube.com/vi/Xxv5p3CGr84/maxresdefault.jpg",
      url: "https://www.youtube.com/watch?v=Xxv5p3CGr84",
      desc: "Tips from college consultants on writing authentic and powerful essays."
    },
    {
      title: "Reading My Real Stanford Essays (Accepted)",
      channel: "Studyquill",
      thumbnail: "https://img.youtube.com/vi/8XdlYp4sJ3g/maxresdefault.jpg",
      url: "https://www.youtube.com/watch?v=8XdlYp4sJ3g",
      desc: "Studyquill shares her accepted Stanford and Ivy League essays."
    },
    {
      title: "My 1580 SAT and Harvard Essay Revealed",
      channel: "Kaiti Yoo",
      thumbnail: "https://img.youtube.com/vi/9QK7XwXg8Eg/maxresdefault.jpg",
      url: "https://www.youtube.com/watch?v=9QK7XwXg8Eg",
      desc: "A real Harvard admit shares how she approached her application and essays."
    },
    {
      title: "Common App Essay Mistakes to Avoid",
      channel: "College Essay Guy",
      thumbnail: "https://img.youtube.com/vi/v9CwK74j0gQ/maxresdefault.jpg",
      url: "https://www.youtube.com/watch?v=v9CwK74j0gQ",
      desc: "Essay coach explains the biggest red flags and how to fix them."
    },
  ];

  return (
    <div className="college-videos-page">
      <div className="videos-header">
        <div className="bunny-logo">🐰</div>
        <h1>College Essay Videos</h1>
        <p>
          Watch real students share their accepted essays, stats, and strategies.
          These videos give honest insights into what made their essays stand out.
        </p>
      </div>

      <div className="videos-grid">
        {videos.map((video, index) => (
          <div
            key={index}
            className="video-card"
            onClick={() => window.open(video.url, "_blank")}
          >
            <img
              src={video.thumbnail}
              alt={video.title}
              className="video-thumbnail"
            />
            <div className="video-info">
              <h3>{video.title}</h3>
              <p className="channel-name">{video.channel}</p>
              <p className="video-desc">{video.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CollegeEssayVideos;