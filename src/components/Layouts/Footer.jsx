import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-6">
      <div className="container mx-auto text-center">
        <p className="mb-4">&copy; 2024 Dating App. All rights reserved.</p>
        <nav>
          <ul className="flex justify-center space-x-6">
            <li>
              <Link to="/terms" className="hover:text-blue-400">Terms of Service</Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:text-blue-400">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-400">Contact Us</Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
