import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import TopUsers from "./components/TopUsers";
import TrendingPosts from "./components/TrendingPosts";
import Feed from "./components/Feed";

function App() {
  return (
    <Router>
      <div className="container mt-4">
        <h1 className="text-center">Social Media Analytics</h1>
        <nav className="nav justify-content-center">
          <Link className="nav-link" to="/">Top Users</Link>
          <Link className="nav-link" to="/trending">Trending Posts</Link>
          <Link className="nav-link" to="/feed">Live Feed</Link>
        </nav>
        <Routes>
          <Route path="/" element={<TopUsers />} />
          <Route path="/trending" element={<TrendingPosts />} />
          <Route path="/feed" element={<Feed />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
