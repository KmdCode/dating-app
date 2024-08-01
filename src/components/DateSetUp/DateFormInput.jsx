import React from 'react';

const DateFormInput = ({ label, type, name, value, onChange }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 mb-2" htmlFor={name}>
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
  );
};

export default DateFormInput;
