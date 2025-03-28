import React, { useState, useEffect } from "react";

const TrendingPosts = () => {
  const [trendingPosts, setTrendingPosts] = useState([]);

  useEffect(() => {
    fetch("http://20.244.56.144/test/posts/1/comments") // Example API
      .then((res) => res.json())
      .then((data) => {
        setTrendingPosts(data.comments || []);
      })
      .catch((error) => console.error("Error fetching trending posts:", error));
  }, []);

  return (
    <div>
      <h2>Trending Posts</h2>
      {trendingPosts.length > 0 ? (
        <ul>
          {trendingPosts.map((post) => (
            <li key={post.id}>{post.content}</li>
          ))}
        </ul>
      ) : (
        <p>No trending posts found.</p>
      )}
    </div>
  );
};

export default TrendingPosts;
