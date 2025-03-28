import React, { useState, useEffect } from "react";
import axios from "axios";
import "./FeedPage.css";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  // Function to fetch posts dynamically
  const fetchPosts = async () => {
    try {
      const response = await axios.get("http://20.244.56.144/test/posts"); // Replace with actual API
      setPosts(response.data.posts.reverse()); // Show newest posts first
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  useEffect(() => {
    fetchPosts(); // Initial load

    // Set interval to fetch new posts every 10 seconds (adjust as needed)
    const interval = setInterval(() => {
      fetchPosts();
    }, 10000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="feed-container">
      <h2>📢 Live Social Media Feed</h2>
      <ul className="list-group">
        {posts.length > 0 ? (
          posts.map((post) => (
            <li key={post.id} className="list-group-item animated-fade">
              <h5>📝 {post.content}</h5>
              <small className="text-muted">User ID: {post.userid}</small>
            </li>
          ))
        ) : (
          <p className="text-center text-muted">No posts available...</p>
        )}
      </ul>
    </div>
  );
};

export default Feed;
