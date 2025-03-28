import axios from "axios";

const BASE_URL = "http://20.244.56.144/test";

export const fetchUsers = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/users`);
    return response.data.users;
  } catch (error) {
    console.error("Error fetching users", error);
    return {};
  }
};

export const fetchUserPosts = async (userId) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${userId}/posts`);
    return response.data.posts || [];
  } catch (error) {
    console.error(`Error fetching posts for user ${userId}`, error);
    return [];
  }
};

export const fetchPostComments = async (postId) => {
  try {
    const response = await axios.get(`${BASE_URL}/posts/${postId}/comments`);
    return response.data.comments || [];
  } catch (error) {
    console.error(`Error fetching comments for post ${postId}`, error);
    return [];
  }
};
