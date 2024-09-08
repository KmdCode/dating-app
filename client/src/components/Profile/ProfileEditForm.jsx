import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProfileEditForm = () => {
  const [userData, setUserData] = useState({
    name: '',
    age: '',
    residence: '',
    courseOfStudy: '',
    levelOfStudy: '',
    interests: '',
    relationshipGoals: '',
  });

  const [message, setMessage] = useState('');

  
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const token = localStorage.getItem('token'); 
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        const { data } = await axios.get('/api/users/profile', config); 
        setUserData(data); 
      } catch (error) {
        console.error('Error fetching user data', error);
      }
    };

    fetchUserProfile();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem('token');
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };

      const { data } = await axios.put('http://127.0.0.1:8000/api/v1/user/update-profile', userData, config);

      setMessage('Profile updated successfully');
    } catch (error) {
      setMessage('Error updating profile');
      console.error(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <h2>Edit Profile</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={userData.name} onChange={handleChange} placeholder="Name" />
        <input type="number" name="age" value={userData.age} onChange={handleChange} placeholder="Age" />
        <input type="text" name="residence" value={userData.residence} onChange={handleChange} placeholder="Residence" />
        <input type="text" name="courseOfStudy" value={userData.courseOfStudy} onChange={handleChange} placeholder="Course of Study" />
        <input type="text" name="levelOfStudy" value={userData.levelOfStudy} onChange={handleChange} placeholder="Level of Study" />
        <input type="text" name="interests" value={userData.interests} onChange={handleChange} placeholder="Interests" />
        <input type="text" name="relationshipGoals" value={userData.relationshipGoals} onChange={handleChange} placeholder="Relationship Goals" />
        {/* <input type="file" name="profilePicture" onChange={handleChange} placeholder="Profile Picture" /> */}
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
};

export default ProfileEditForm;
