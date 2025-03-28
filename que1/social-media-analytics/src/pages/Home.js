import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <h1>📊 Social Media Analytics Dashboard</h1>
      <p>Get real-time insights on social media trends, top users, and engagement!</p>

      <div className="nav-buttons">
        <Link to="/top-users" className="nav-btn">🏆 Top Users</Link>
        <Link to="/trending-posts" className="nav-btn">🔥 Trending Posts</Link>
        <Link to="/feed" className="nav-btn">📢 Live Feed</Link>
      </div>
    </div>
  );
};

export default Home;
