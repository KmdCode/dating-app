import React, { useState } from 'react';
import { useNavigate, useLocation} from 'react-router-dom';
import axios from 'axios'
import InterestsInput from './InterestsInput';

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
    const [interests, setInterets] = useState('')
    const [level, setLevel] = useState('')
    const [role, setRole] = useState('')
    const [error, setError] = useState('')

    const res = [ 'Madeira Isles', 'Arebeng', 'Campus Res']
    const courses = ['BSc', 'CSIT', 'BOH']
    const roles = ['applicant', 'advertiser']

    const handleNameChange = (e) => {
        setName(e.target.value)
    }
    const handleAgeChange = (e) => {
        setAge(e.target.value)
    }
    const handleResidenceChange = (e) => {
        setResidence(e.target.value)
    }
    const handleCourseChange = (e) => {
        setCourse(e.target.value)
    }
    const handleBioChange = (e) => {
        setBio(e.target.value)
    }
    const handleGoalsChange = (e) => {
        setGoals(e.target.value)
    }
    const handleInterestsChange = (e) => {
        setInterets(e.target.value)
    }
    const handleLevelChange = (e) => {
        setLevel(e.target.value)
    }
    const handleRoleChange = (e) => {
        setRole(e.target.value)
    }

    const handleSubmit = async (e) =>{
        e.preventDefault()

        try{

            const res = await axios.post('http://127.0.0.1:8000/api/v1/user/create-profile', {
                email,
                name:name,
                age:age,
                residence: residence,
                course:course,
                level:level,
                role:role,
                bio: bio,
                goals: goals,
                interests: interests,
            })

            if(res.data.status === 'success'){
                navigate('/home')
            }else{
                setError(res.data.message)
                console.log(Error)
            }

        }catch(err){
            setError('An error occured while creating the profile')
        }
    }

    return(
        <div className="min-h-screen flex items-center justify-center bg-black">
            {error && <p className="text-red-600 text-center mb-4">{error}</p>} 
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-white mb-2" htmlFor="name">Name</label>
                    <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={handleNameChange}
                    className="w-full p-3 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    />
            </div>
            <div className="mb-4">
                    <label className="block text-white mb-2" htmlFor="name">Age</label>
                    <input
                    type="text"
                    id="age"
                    name="age"
                    value={age}
                    onChange={handleAgeChange}
                    className="w-full p-3 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    />
            </div>
            <div className="mb-4">
                    <label className="block text-white mb-2" htmlFor="name">Bio</label>
                    <input
                    type="text"
                    id="bio"
                    name="bio"
                    value={bio}
                    onChange={handleBioChange}
                    className="w-full p-3 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    />
            </div>
            <div className="mb-4">
                    <label className="block text-white mb-2" htmlFor="name">Residence</label>
                    <input
                    type="text"
                    id="residence"
                    name="residence"
                    value={residence}
                    onChange={handleResidenceChange}
                    className="w-full p-3 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    />
            </div>
            <div className="mb-4">
                    <label className="block text-white mb-2" htmlFor="name">Course</label>
                    <input
                    type="text"
                    id="course"
                    name="course"
                    value={course}
                    onChange={handleCourseChange}
                    className="w-full p-3 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    />
            </div>
            <div className="mb-4">
                    <label className="block text-white mb-2" htmlFor="name">Relationship Goals</label>
                    <input
                    type="text"
                    id="goals"
                    name="goals"
                    value={goals}
                    onChange={handleGoalsChange}
                    className="w-full p-3 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    />
            </div>
            <div className="mb-4">
                    <label className="block text-white mb-2" htmlFor="name">Interests</label>
                    <input
                    type="text"
                    id="interests"
                    name="interests"
                    value={interests}
                    onChange={handleInterestsChange}
                    className="w-full p-3 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    />
            </div>
            <div className="mb-4">
                    <label className="block text-white mb-2" htmlFor="name">Level of Study</label>
                    <input
                    type="text"
                    id="level"
                    name="level"
                    value={level}
                    onChange={handleLevelChange}
                    className="w-full p-3 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    />
            </div>
            <div className="mb-4">
                    <label className="block text-white mb-2" htmlFor="name">Role</label>
                    <input
                    type="text"
                    id="role"
                    name="role"
                    value={role}
                    onChange={handleRoleChange}
                    className="w-full p-3 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    />
            </div>
            <button type="submit" className="bg-red-600 text-white px-4 py-2 rounded-lg w-full hover:bg-white hover:text-black">Save Profile</button>
            </form>
        </div>
    )
}

export default CreatePro