import React from 'react'
import UserProfile from './UserProfile'
function OSAMA() {
  const users = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    bio: 'A web developer who loves React.',
  };
  return (
    <div>
      <h1>User Profile Page</h1>
      <UserProfile user={users} />
    </div>
  );
};


export default OSAMA
