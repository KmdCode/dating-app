import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Filters from './Filters';
import DateCard from './DateCard';
import '@fortawesome/fontawesome-free/css/all.min.css';

const HomePage = () => {
  const [dates, setDates] = useState([]); // State to hold the list of dates
  const [filter, setFilter] = useState(''); // State to handle filtering

  useEffect(() => {
    // Function to fetch dates from the backend API
    const fetchDates = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/v1/user/all-dates', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`, // Optional if your API is protected
          },
        });

        setDates(response.data.data.dates); // Assuming the dates are in response.data.data.dates
      } catch (error) {
        console.error('Error fetching dates:', error);
      }
    };

    fetchDates(); // Trigger the fetch on component mount
  }, []);

  // Function to filter dates based on the user's filter input
  const filteredDates = dates.filter((date) =>
    date.interests.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="bg-red-600 mx-auto p-4">
      <Filters filter={filter} onFilterChange={setFilter} />
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4">
        {filteredDates.map((date) => (
          <DateCard key={date._id} date={date} /> 
        ))}
      </div>
    </div>
  );
};

export default HomePage;
