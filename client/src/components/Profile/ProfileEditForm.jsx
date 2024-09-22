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

  const [loading, setLoading] = useState(true); // Add a loading state
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
        const { data } = await axios.get('http://127.0.0.1:8000/api/v1/user/profile', config); 
        
        // Ensure the returned data matches the structure of the form fields
        setUserData({
          name: data.name || '',
          bio: data.bio || '',
          age: data.age || '',
          residence: data.residence || '',
          courseOfStudy: data.courseOfStudy || '',
          levelOfStudy: data.levelOfStudy || '',
          interests: data.interests || '',
          relationshipGoals: data.relationshipGoals || '',
        });
        
        setLoading(false); // Set loading to false once the data is fetched
      } catch (error) {
        console.error('Error fetching user data', error);
        setLoading(false); // Even on error, stop the loading state
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

  // Render a loading message or spinner if data is still being fetched
  if (loading) {
    return <div className="text-white">Loading...</div>;
  }

  return (
    <div className="profile-edit-form bg-red-600 shadow-md p-4 mb-0">
      <h3 className="text-lg text-white font-semibold mb-2">Edit Profile</h3>
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
          <label className="block text-white mb-2" htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            name="age"
            value={userData.age}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-white mb-2" htmlFor="residence">Residence</label>
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
          <label className="block text-white mb-2" htmlFor="courseOfStudy">Course</label>
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
          <label className="block text-white mb-2" htmlFor="levelOfStudy">Level of Study</label>
          <input
            type="text"
            id="levelOfStudy"
            name="levelOfStudy"
            value={userData.levelOfStudy}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-white mb-2" htmlFor="interests">Interests</label>
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
          <label className="block text-white mb-2" htmlFor="relationshipGoals">Relationship Goals</label>
          <input
            type="text"
            id="relationshipGoals"
            name="relationshipGoals"
            value={userData.relationshipGoals}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        {message && <p className="text-white">{message}</p>}
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
