import React, { useContext } from "react";
import { UserContext } from "../App"; // Ensure correct import

const UsersPage = () => {
  const context = useContext(UserContext);

  if (!context || !context.users) {
    return <p>Loading users...</p>; // Handle undefined case
  }

  const { users } = context;

  return (
    <div>
      <h2>Users List</h2>
      <ul>
        {users.map(([id, name]) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UsersPage;
