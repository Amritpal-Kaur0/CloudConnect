import React, { useState } from 'react';
import "./profile.css"

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [username, setUsername] = useState ('JohnDoe');
  const [email, setEmail] = useState('johndoe@example.com');
  const [address, setAddress] = useState('123 Main St');

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    // Here you can implement the logic to save the updated data to the backend
    setIsEditing(false);
  };

  const handleDeleteClick = () => {
    // Here you can implement the logic to delete the user's profile
  };

  return (
    <div className="profile">
        <img src="/images/Profile Image.jpg" alt="Profile Image" className="profile-image" />
 
    
      <h2 className=' text-center mx-3 p-3 text-3xl box'>Profile Page</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem labore sed amet id eaque impedit, architecto tempora ratione reiciendis natus.
      </p>
      
            <button className=' mx-2 p-2 text-2xl box' >Update</button>
            <button className=' mx-2 p-2 text-2xl box'>Delete</button>
            <button className=' mx-2 p-2 text-2xl box'>Save</button>
      
      <div className="profile-form">
       
          <form>
            <div>
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                value={username}
                
              />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                
              />
            </div>
            <div>
              <label htmlFor="address">Address:</label>
              <input
                type="text"
                id="address"
                value={address}
                
              />
            </div>
          </form>
        
      </div>
    </div>
  
  )
};
export default ProfilePage;
