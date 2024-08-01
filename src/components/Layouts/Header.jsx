import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white shadow-md">
      <nav className="container mx-auto p-4 flex justify-between items-center">
        <div className="text-xl font-bold">
          <Link to="/" className="hover:text-gray-400">SMU Dating App</Link>
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="hover:text-gray-400">Home</Link>
          </li>
          <li>
            <Link to="/profile" className="hover:text-gray-400">Profile</Link>
          </li>
          <li>
            <Link to="/date-setup" className="hover:text-gray-400">Create Date</Link>
          </li>
          {/* Add more links as needed */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
