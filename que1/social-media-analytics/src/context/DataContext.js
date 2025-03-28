import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  
  useEffect(() => {
    axios.get("http://20.244.56.144/test/users")
      .then(response => setUsers(response.data.users))
      .catch(error => console.error("Error fetching users:", error));

    axios.get("http://20.244.56.144/test/posts")
      .then(response => setPosts(response.data.posts))
      .catch(error => console.error("Error fetching posts:", error));
  }, []);

  return (
    <DataContext.Provider value={{ users, posts, comments }}>
      {children}
    </DataContext.Provider>
  );
};
