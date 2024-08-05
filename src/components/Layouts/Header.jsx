import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png'; // Adjust the path to your logo image

const Header = () => {
  return (
    <header className="bg-red-600 text-white shadow-md">
      <nav className="container mx-auto p-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-16 w-16" />
          <div className="text-xl font-bold">
            <Link to="/home" className="font-edu-hand hover:text-black">Unimate</Link>
          </div>
        </div>
        <ul className="flex space-x-4">
          <li>
<<<<<<< HEAD
            <Link to="/home" className="hover:text-gray-400">Home</Link>
=======
            <Link to="/home" className="hover:text-black">Home</Link>
>>>>>>> dateSetupPage
          </li>
          <li>
            <Link to="/profile" className="hover:text-black">Profile</Link>
          </li>
          <li>
            <Link to="/date-setup" className="hover:text-black">Create Date</Link>
          </li>
          {/*More links to be added */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
