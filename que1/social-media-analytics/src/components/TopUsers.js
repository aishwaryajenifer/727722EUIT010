import React, { useState, useEffect } from "react";

const TopUsers = () => {
  const [topUsers, setTopUsers] = useState([]);

  useEffect(() => {
    fetch("http://20.244.56.144/test/users")
      .then((res) => res.json())
      .then((data) => {
        const users = Object.entries(data.users || {}).map(([id, name]) => ({ id, name }));
        setTopUsers(users.slice(0, 5)); // Get top 5 users
      })
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  return (
    <div>
      <h2>Top 5 Users</h2>
      <ul>
        {topUsers.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default TopUsers;
