import React from 'react';
import { Link } from 'react-router-dom';

const ApplyButton = ({ dateId }) => {
  return (
    <Link to={`/apply/${dateId}`}>
      <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
        Apply for Date
      </button>
    </Link>
  );
};

export default ApplyButton;
