import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ViewAppliedDates = () => {
  const [appliedDates, setAppliedDates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchAppliedDates = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/v1/user/applied-dates', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        setAppliedDates(response.data.data);
        setLoading(false);
      } catch (error) {
        setError(`You haven't applied for any dates yet`);
        setLoading(false);
      }
    };

    fetchAppliedDates();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (appliedDates.length === 0) {
    return <div>You haven't applied for any dates yet.</div>;
  }

  return (
    <div className="applied-dates mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Applied Dates</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {appliedDates.map((date) => (
          <div key={date.dateId} className="bg-white shadow-lg rounded-lg p-4">
            <h2 className="text-black text-3xl font-bold mb-4">{date.title}</h2> 
            <p className='text-black'><strong>Description: </strong> {date.description}</p>
            <p className='text-black'><strong>Status: </strong> {date.status}</p> {/* Show the status */}
            <p className='text-black'><strong>Created By: </strong> {date.createdBy}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewAppliedDates;
