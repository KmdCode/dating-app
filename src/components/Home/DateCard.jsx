import React from 'react';
import { Link } from 'react-router-dom';

const DateCard = ({ date }) => {
  return (
    <div className="bg-blue-200 shadow-lg rounded-lg overflow-hidden p-4 flex flex-col mt-2">
      <h2 className="text-xl font-semibold mb-2">{date.title}</h2>
      <p className="text-gray-700 mb-2">{date.description}</p>
      <p className="text-gray-500 text-sm mb-1"><strong>Interests: </strong>{date.interests}</p>
      <p className="text-gray-500 text-sm mb-4"><strong>Preferres Courses: </strong>{date.courses.join(', ')}</p>
      <div className="mt-auto">
        <Link to={`/date/${date.id}`}>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            View Date
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DateCard;