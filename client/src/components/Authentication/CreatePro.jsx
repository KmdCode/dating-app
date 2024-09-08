import React, { useState } from 'react';
import { useNavigate, useLocation} from 'react-router-dom';
import axios from 'axios'

const CreatePro = () => {
    const location = useLocation()
    const navigate = useNavigate()

    const {email} = location.state || {}
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [residence, setResidence] = useState('')
    const [course, setCourse] = useState('')
    const [bio, setBio] = useState('')
    const [goals, setGoals] = useState('')
    const [interests, setInterests] = useState('')
    const [level, setLevel] = useState('')
    const [role, setRole] = useState('')
    const [profilePicture, setProfilePicture] = useState(null);
    const [error, setError] = useState('')

    const res = [ 'Madeira Isles', 'Arebeng', 'Campus Res']
    const courses = ['BSc', 'CSIT', 'BOH']
    const roles = ['applicant', 'advertiser']
    const levels = ['1st Year', '2nd Year', '3rd Year', '4th Year', '5th Year', '6th Year']

    const handleProfilePictureChange = (e) => {
        setProfilePicture(e.target.files[0]); 
      };

     
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        const formData = new FormData(); // Create a FormData object
        formData.append('email', email);
        formData.append('name', name);
        formData.append('age', age);
        formData.append('residence', residence);
        formData.append('course', course);
        formData.append('bio', bio);
        formData.append('goals', goals);
        formData.append('interests', interests);
        formData.append('level', level);
        formData.append('role', role);
    
        if (profilePicture) {
          formData.append('profilePicture', profilePicture); // Append the profile picture if available
        }
    
        try {
          const res = await axios.post('http://127.0.0.1:8000/api/v1/user/create-profile', formData, {
            headers: {
              'Content-Type': 'multipart/form-data', // Ensure the content type is set to multipart/form-data
            },
          });
    
          if (res.data.status === 'success') {
            navigate('/sign-in');
          } else {
            setError(res.data.message);
            console.log(error);
          }
        } catch (err) {
          setError('An error occurred while creating the profile');
        }
      };

    return(
        <div className="min-h-screen flex items-center justify-center bg-black">
      {error && <p className="text-red-600 text-center mb-4">{error}</p>}
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="mb-4">
          <label className="block text-white mb-2" htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-white mb-2" htmlFor="age">Age</label>
          <input
            type="text"
            id="age"
            name="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="w-full p-3 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-white mb-2" htmlFor="bio">Bio</label>
          <input
            type="text"
            id="bio"
            name="bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            className="w-full p-3 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-white mb-2" htmlFor="residence">Residence</label>
          <input
            type="text"
            id="residence"
            name="residence"
            value={residence}
            onChange={(e) => setResidence(e.target.value)}
            className="w-full p-3 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-white mb-2" htmlFor="course">Course</label>
          <input
            type="text"
            id="course"
            name="course"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            className="w-full p-3 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-white mb-2" htmlFor="goals">Relationship Goals</label>
          <input
            type="text"
            id="goals"
            name="goals"
            value={goals}
            onChange={(e) => setGoals(e.target.value)}
            className="w-full p-3 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-white mb-2" htmlFor="interests">Interests</label>
          <input
            type="text"
            id="interests"
            name="interests"
            value={interests}
            onChange={(e) => setInterests(e.target.value)}
            className="w-full p-3 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-white mb-2" htmlFor="level">Level of Study</label>
          <input
            type="text"
            id="level"
            name="level"
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            className="w-full p-3 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-white mb-2" htmlFor="role">Role</label>
          <input
            type="text"
            id="role"
            name="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full p-3 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-white mb-2" htmlFor="profilePicture">Profile Picture</label>
          <input
            type="file"
            id="profilePicture"
            name="profilePicture"
            accept="image/*"
            onChange={handleProfilePictureChange}
            className="w-full p-3 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
          />
        </div>
        <button type="submit" className="bg-red-600 text-white px-4 py-2 rounded-lg w-full hover:bg-white hover:text-black">
          Save Profile
        </button>
      </form>
    </div>
    )
}

export default CreatePro
