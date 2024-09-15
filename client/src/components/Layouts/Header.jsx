import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from './logo.png'; // Adjust the path to your logo image
import axios from 'axios';

const Header = () => {
  const [role, setRole] = useState(null);
  const [hasCreatedDate, setHasCreatedDate] = useState(false);
  const navigate = useNavigate();

  // Fetch user's role from local storage or API
  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      axios.get('http://127.0.0.1:8000/api/v1/user/profile', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
          const userRole = res.data.data.user.role;
          setRole(userRole);
          console.log(`user role is ${userRole}`)

          // If the user is an advertiser, check if they have already created a date
          if (userRole === 'advertiser') {
            checkDateStatus();
          }
        })
        .catch((err) => {
          console.error('Error fetching user profile:', err);
        });
    }
  }, []);

  // Check if the advertiser has already created a date
  const checkDateStatus = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/v1/user/profile', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      if (response.data.data.hasCreatedDate === true) {
        setHasCreatedDate(true); // Advertiser already created a date
      }
    } catch (err) {
      console.error('Error checking date status:', err);
    }
  };

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <header className="bg-black text-white shadow-md">
      <nav className="container mx-auto p-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-16 w-16" />
          <div className="text-xl font-bold">
            <Link to={role === 'applicant' ? '/home' : '/profile'} className="font-edu-hand hover:text-red-600">
              Unimate
            </Link>
          </div>
        </div>
        <ul className="flex space-x-4">  
            <li>
              <Link to="/home" className="hover:text-red-600">Home</Link>
            </li>        
          <li>
            <Link to="/profile" className="hover:text-red-600">Profile</Link>
          </li>
          {role === 'applicant' ? (
            <li>
              <Link to="/applied-dates" className="hover:text-red-600">View Applied Dates</Link>
            </li>
          ) : (
            <li>
              {!hasCreatedDate ? (
                <Link to="/date-setup" className="hover:text-red-600">Create Date</Link>
              ) : (
                <Link to="/my-dates" className="hover:text-red-600">View My Dates</Link>
              )}
            </li>
          )}
          <li>
            <button
              onClick={handleLogout}
              className="self-start bg-red-600 text-white py-1 px-4 ml-2 rounded-lg hover:bg-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
