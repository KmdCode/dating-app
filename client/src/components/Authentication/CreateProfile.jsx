import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const CreateProfile = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    residence: '',
    courses: '',
    bio: '',
    interests: '',
    relationship: '',
    level: '',
    picture: '',
    role: '',
  });

  const role = ['Applicant', 'Advertiser']

  const residence = [
    'Madeira Isles',
    'Arebeng',
    'Drie Lilies',
    'Campus Res',
  ]

  const courses = [
    'BSc Life Sciences',
    'BSc Mathematical Sciences',
    'CSIT',
    'MBChB',
    'BOH',
    'BDT',
    'BDS'
  ]

  const level = [
    '1st Year',
    '2nd Year',
    '3rd Year',
    '4th Year',
    '5th Year',
    '6th Year',
  ]

  const handleRoleChange = (e) =>{
    setFormData({...formData, role: e.target.value})
  }

  const handleResidenceChange = (e) => {
    setFormData({ ...formData, residence: e.target.value })
  }

  const handleCoursesChange = (e) => {
    setFormData({ ...formData, courses: e.target.value })
  }

  const handleLevelChange = (e) => {
    setFormData({...formData, level: e.target.value})
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value, });
  };



  /*   const handleFileChange = (e) => {
      const file = e.target.files[0];
      setFormData({
        ...formData,
        picture: file
      });
  
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreview(reader.result);
        };
        reader.readAsDataURL(file);
      } else {
        setPreview(null);
      }
    }; */


  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="sign-up-form bg-black shadow-md p-8 rounded-lg max-w-md w-full">
        <div className="text-center mb-6">
          <img src="logo.png" alt="Logo" className="mx-auto mb-4 w-24 h-24" />
          <h1 className="font-edu-hand  text-white text-5xl font-bold mb-4">Unimate</h1>
          <h3 className="text-lg text-white font-semibold mb-2">Create Profile</h3>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-white mb-2" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white mb-2" htmlFor="age">Age</label>
            <input
              type="text"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="w-full p-3 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white mb-2" htmlFor="age">Role</label>
            <div className='w-full p-3 text-lg border bg-white border-gray-300 rounded-lg'>
              {role.map((rol) => (
                <div key={rol} className="flex items-center mb-2">
                  <input
                    type="radio"
                    id={rol}
                    name="role"
                    value={rol}
                    checked={formData.role === rol}
                    onChange={handleRoleChange}
                    className="form-radio h-5 w-5 text-red-600"
                  />
                  <label htmlFor={rol} className="ml-2 text-gray-700">
                    {rol}
                  </label>
                </div>
              ))}
            </div>
            
          </div>

          <div className="mb-4">
            <label className="block text-white mb-2" htmlFor="age">Residence</label>
            <div w-full className = "p-3 text-lg border bg-white border-gray-300 rounded-lg">
              {residence.map((res) => (
                <div key={res} className="flex items-center mb-2">
                  <input
                    type="radio"
                    id={res}
                    name="residence"
                    value={res}
                    checked={formData.residence === res}
                    onChange={handleResidenceChange}
                    className="form-radio h-5 w-5 text-red-600"
                  />
                  <label htmlFor={res} className="ml-2 text-gray-700">
                    {res}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-white mb-2" htmlFor="age">Course of Study</label>
            <div className='w-full p-3 text-lg border bg-white border-gray-300 rounded-lg'>
              {courses.map((course) => (
                <div key={course} className="flex items-center mb-2">
                  <input
                    type="radio"
                    id={course}
                    name="courses"
                    value={course}
                    checked={formData.courses === course}
                    onChange={handleCoursesChange}
                    className="form-radio h-5 w-5 text-red-600"
                  />
                  <label htmlFor={course} className="ml-2 text-gray-700">
                    {course}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-white mb-2" htmlFor="age">Level Of Study</label>
            <div className='w-full p-3 text-lg border bg-white border-gray-300 rounded-lg'>
              {level.map((lev) => (
                <div key={lev} className="flex items-center mb-2">
                  <input
                    type="radio"
                    id={lev}
                    name="level"
                    value={lev}
                    checked={formData.level === lev}
                    onChange={handleLevelChange}
                    className="form-radio h-5 w-5 text-red-600"
                  />
                  <label htmlFor={lev} className="ml-2 text-gray-700">
                    {lev}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-white mb-2" htmlFor="age">Interests</label>
            <input
              type="text"
              id="interests"
              name="interests"
              value={formData.interests}
              onChange={handleChange}
              className="w-full p-3 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white mb-2" htmlFor="age">Relationship Goals</label>
            <input
              type="text"
              id="relationship"
              name="relationship"
              value={formData.relationship}
              onChange={handleChange}
              className="w-full p-3 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
            />
          </div>
          {/* <div className="mb-4">
            <label className="block text-white mb-2" htmlFor="picture">Upload Picture</label>
            <input
              type="file"
              id="picture"
              name="picture"
              onChange={handleFileChange}
              className="w-full p-3 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          {preview && (
            <div className="mb-4">
              <img src={preview} alt="Preview" className="mx-auto w-24 h-24 rounded-lg" />
            </div>
          )} */}
          <Link to="/home"><button type="submit" className="bg-red-600 text-white px-4 py-2 rounded-lg w-full hover:bg-white hover:text-black">Save Profile</button></Link>
        </form>
      </div>
    </div>
  );
};

export default CreateProfile;
