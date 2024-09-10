import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProfileEditForm = () => {
  const [userData, setUserData] = useState({
    name: '',
    bio: '',
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
    <div className="profile-edit-form bg-red-600 shadow-md  p-4 mb-0">
      <h3 className="text-lg text-white font-semibold mb-2">Edit Profile</h3>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-white mb-2" htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={userData.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-white mb-2" htmlFor="name">Age</label>
          <input
            type="text"
            id="age"
            name="age"
            value={userData.age}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-white mb-2" htmlFor="name">Residence</label>
          <input
            type="text"
            id="residence"
            name="residence"
            value={userData.residence}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-white mb-2" htmlFor="bio">Bio</label>
          <input
            type="text"
            id="bio"
            name="bio"
            value={userData.bio}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-white mb-2" htmlFor="course">Course</label>
          <input
            type="text"
            id="courseOfStudy"
            name="courseOfStudy"
            value={userData.courseOfStudy}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-white mb-2" htmlFor="course">Interests</label>
          <input
            type="text"
            id="interests"
            name="interests"
            value={userData.interests}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-white mb-2" htmlFor="course">Relationship Goals</label>
          <input
            type="text"
            id="relationshipGoals"
            name="relationshipGoals"
            value={userData.relationshipGoals}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="bg-black text-white py-2 px-4 rounded-lg hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default ProfileEditForm;
