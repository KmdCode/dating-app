import React, { useState } from 'react';

const Filters = ({ onChange }) => {
  const [filters, setFilters] = useState({ location: '', date: '' });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFilters(prevState => ({ ...prevState, [name]: value }));
    onChange({ ...filters, [name]: value });
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6">
      <h2 className="text-xl font-semibold mb-4">SEARCH FOR YOUR PERFECT</h2>
      <div className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="location" className="text-gray-700 mb-1">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            placeholder="Location"
            value={filters.location}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="date" className="text-gray-700 mb-1">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={filters.date}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <button
          onClick={() => onChange(filters)}
          className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          SEARCH FOR DATE
        </button>
      </div>
    </div>
  );
};

export default Filters;
