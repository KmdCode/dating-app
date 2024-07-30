import React, { useState, useEffect } from 'react';
import DateListings from './DateListings';
import Filters from './Filters';
import datesData from '../../data/dates.json';

const HomePage = () => {
  const [dates, setDates] = useState([]);

  useEffect(() => {
    setDates(datesData);
  }, []);

  const handleFilterChange = (filters) => {
    // Apply filters to the date list
    // This is a simple example, adjust logic as needed
    const filteredDates = datesData.filter(date => {
      return (
        (!filters.location || date.location.includes(filters.location)) &&
        (!filters.date || date.date === filters.date)
      );
    });
    setDates(filteredDates);
  };

  return (
    <div>
      {/* <h1>Find Your Perfect Date</h1> */}
      <Filters onChange={handleFilterChange} />
      <DateListings  dates={dates} />
    </div>
  );
};

export default HomePage;
