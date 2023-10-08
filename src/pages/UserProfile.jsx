import React, { useState } from 'react';

const UserProfile = ({ user }) => {
  const [editedUser, setEditedUser] = useState({ ...user });
  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUser({ ...editedUser, [name]: value });
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    // Here, you can update the user data on the server or dispatch it to Redux
    // For simplicity, we're just updating the state locally in this example.
    setUser(editedUser);
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <div>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            value={editedUser.name}
            onChange={handleInputChange}
          />
          <br />
          <label>Email: </label>
          <input
            type="email"
            name="email"
            value={editedUser.email}
            onChange={handleInputChange}
          />
          <br />
          <label>Bio: </label>
          <textarea
            name="bio"
            value={editedUser.bio}
            onChange={handleInputChange}
          />
          <br />
          <button onClick={handleSaveClick}>Save</button>
        </div>
      ) : (
        <div>
          <h2>User Profile</h2>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Bio: {user.bio}</p>
          <button onClick={handleEditClick}>Edit Profile</button>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
