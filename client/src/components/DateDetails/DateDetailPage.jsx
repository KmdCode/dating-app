import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import DateDetail from './DateDetail';

const DateDetailPage = () => {
  const { dateId } = useParams(); 
  const [dateSetup, setDateSetup] = useState(null); 
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchDateSetup = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/v1/user/date/${dateId}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`, 
          },
        });

        setDateSetup(response.data.data.date); 
      } catch (error) {
        console.error('Error fetching date setup:', error);
      } finally {
        setLoading(false); 
      }
    };

    fetchDateSetup(); 
  }, [dateId]);

  if (loading) {
    return <div>Loading...</div>; 
  }

  if (!dateSetup) {
    return <div>Date setup not found</div>; 
  }

  return (
    <div className="date-detail-page mx-auto p-4 bg-red-600 shadow-md mt-0 pb-96 pt-20">
      <DateDetail dateSetup={dateSetup} /> 
    </div>
  );
};

export default DateDetailPage;
