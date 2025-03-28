import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./postsPage.css";

const PostPage = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchPostDetails = async () => {
      try {
        const postResponse = await axios.get(`http://20.244.56.144/test/posts/${postId}`);
        setPost(postResponse.data);

        const commentsResponse = await axios.get(`http://20.244.56.144/test/posts/${postId}/comments`);
        setComments(commentsResponse.data.comments);
      } catch (error) {
        console.error("Error fetching post details:", error);
      }
    };

    fetchPostDetails();
  }, [postId]);

  return (
    <div className="post-container">
      {post ? (
        <div className="post-details">
          <h2>📌 {post.content}</h2>
          <p className="post-meta">Post ID: {post.id}</p>
          <h3>💬 Comments</h3>
          {comments.length > 0 ? (
            <ul className="comment-list">
              {comments.map((comment) => (
                <li key={comment.id} className="comment-item">
                  {comment.content}
                </li>
              ))}
            </ul>
          ) : (
            <p className="no-comments">No comments yet...</p>
          )}
        </div>
      ) : (
        <p>Loading post details...</p>
      )}
    </div>
  );
};

export default PostPage;
