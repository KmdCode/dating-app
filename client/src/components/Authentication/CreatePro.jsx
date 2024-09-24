import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

const CreatePro = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { email } = location.state || {};
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [residence, setResidence] = useState('');
  const [course, setCourse] = useState('');
  const [bio, setBio] = useState('');
  const [goals, setGoals] = useState('');
  const [interests, setInterests] = useState('');
  const [level, setLevel] = useState('');
  const [role, setRole] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);
  const [error, setError] = useState('');

  const handleProfilePictureChange = (e) => {
    setProfilePicture(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
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
      formData.append('profilePicture', profilePicture);
    }

    try {
      const res = await axios.post('http://127.0.0.1:8000/api/v1/user/create-profile', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (res.data.status === 'success') {
        navigate('/sign-in');
      } else {
        setError(res.data.message);
      }
    } catch (err) {
      setError('An error occurred while creating the profile');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      {error && <p className="text-red-600 text-center mb-4">{error}</p>}
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="mb-4">
        <h1 className="block text-white mb-2 text-3xl" htmlFor="bio">Create profile</h1>

          <label className="block text-white mb-2 text-2xl" htmlFor="name">Name</label>
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
          <label className="block text-white mb-2 text-2xl" htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            name="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="w-full p-3 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-white text-2xl mb-2" htmlFor="residence">Residence</label>
          <div className="flex flex-col space-y-2">
            {['Madeira Isles', 'Arebeng', 'Res1A', 'Res1B', 'Res1C', 'Res2A', 'Res2B', 'Res5A', 'Res5B'].map((res) => (
              <label key={res} className="text-white">
                <input
                  type="radio"
                  name="residence"
                  value={res}
                  checked={residence === res}
                  onChange={(e) => setResidence(e.target.value)}
                  className="mr-2"
                />
                {res}
              </label>
            ))}
          </div>
        </div>


        <div className="mb-4">
          <label className="block text-white mb-2 text-2xl" htmlFor="course">Course</label>
          <div className="flex flex-col space-y-2">
            {['BSc Mathematical Sciences', 'BSc Life Sciences', 'BOH', 'BDT', 'BDS', 'BPharm', 'MBChB'].map((courseOption) => (
              <label key={courseOption} className="mr-4 text-white">
                <input
                  type="radio"
                  name="course"
                  value={courseOption}
                  checked={course === courseOption}
                  onChange={(e) => setCourse(e.target.value)}
                  className="mr-2"
                />
                {courseOption}
              </label>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-white mb-2 text-2xl" htmlFor="level">Level of Study</label>
          <div className="flex flex-col space-y-2">
            {['1st Year', '2nd Year', '3rd Year', 'Honours', 'Masters', 'PhD'].map((lvl) => (
              <label key={lvl} className="mr-4 text-white">
                <input
                  type="radio"
                  name="level"
                  value={lvl}
                  checked={level === lvl}
                  onChange={(e) => setLevel(e.target.value)}
                  className="mr-2"
                />
                {lvl}
              </label>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-white mb-2 text-2xl" htmlFor="bio">Bio</label>
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
          <label className="block text-white mb-2 text-2xl" htmlFor="goals">Relationship Goals</label>
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
          <label className="block text-white mb-2 text-2xl" htmlFor="interests">Interests</label>
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
          <label className="block text-white mb-2 text-2xl">Role</label>
          <div className="flex">
            <label className="mr-4 text-white">
              <input
                type="radio"
                name="role"
                value="applicant"
                checked={role === 'applicant'}
                onChange={(e) => setRole(e.target.value)}
                className="mr-2"
              />
              Applicant
            </label>
            <label className=" text-white">
              <input
                type="radio"
                name="role"
                value="advertiser"
                checked={role === 'advertiser'}
                onChange={(e) => setRole(e.target.value)}
                className="mr-2"
              />
              Advertiser
            </label>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-white mb-2 text-2xl" htmlFor="profilePicture">Profile Picture</label>
          <input
            type="file"
            id="profilePicture"
            name="profilePicture"
            accept="image/*"
            onChange={handleProfilePictureChange}
            className="w-full p-3 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
          />
        </div>

        <button type="submit" className="bg-red-600 text-white px-4 py-2 rounded-lg w-full mb-4 hover:bg-white hover:text-black">
          Save Profile
        </button>
      </form>
    </div>
  );
};

export default CreatePro;
