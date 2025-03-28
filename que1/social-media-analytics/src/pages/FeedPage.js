import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../context/DataContext";
import "./FeedPage.css";

const FeedPage = () => {
  const { posts } = useContext(DataContext);
  const [feed, setFeed] = useState(posts);

  useEffect(() => {
    const interval = setInterval(() => {
      setFeed([...posts]);
    }, 5000);
    return () => clearInterval(interval);
  }, [posts]);

  return (
    <div className="feed-container animated-fade">
      <h2>📡 Live Feed</h2>
      <div className="list-group">
        {feed.map((post) => (
          <div key={post.id} className="list-group-item">
            <h5>{post.content}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedPage;
