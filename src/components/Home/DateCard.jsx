import React from 'react';

const DateCard = ({ date }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden p-4 flex flex-col">
      <h2 className="text-xl font-semibold mb-2">{date.title}</h2>
      <p className="text-gray-700 mb-2">{date.description}</p>
      <p className="text-gray-500 text-sm mb-1">{date.date}</p>
      <p className="text-gray-500 text-sm mb-4">{date.location}</p>
      <button className="self-start bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
        Apply
      </button>
    </div>
  );
};

export default DateCard;