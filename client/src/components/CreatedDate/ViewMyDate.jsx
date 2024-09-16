import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ViewMyDate = () => {
  const [dateInfo, setDateInfo] = useState(null); 
  const [loading, setLoading] = useState(true);  
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchDateInfo = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/v1/user/dates', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,  
          },
        });
        
        console.log(response.data.data.date)
        if (response.data && response.data.data && response.data.data.date) {
          setDateInfo(response.data.data.date);
          console.log(dateInfo)
        } else {
          setError('No date found for the user.');
        }
      } catch (err) {
        console.error('Error fetching date info:', err);
        setError('Error fetching date info');
      } finally {
        setLoading(false); 
      }
    };

    fetchDateInfo();
  }, []); // Empty dependency array to fetch only once on component mount

  if (loading) {
    return <div>Loading...</div>; 
  }

  if (error) {
    return <div>{error}</div>; 
  }

  return (
    <div className="my-date-container">
      {dateInfo ? (
       <div className="date-detail bg-white shadow-md rounded-lg p-4 mb-6">
            <h2 className="text-black text-3xl font-bold mb-4">{dateInfo[0].title}</h2>            
            <p className='text-black'><strong>Description: </strong> {dateInfo[0].description}</p>
            <p className='text-black'><strong>Preferred Age: </strong> {dateInfo[0].age}</p>
            <p className='text-black'><strong>Preferred Residence: </strong> {dateInfo[0].residence.join(', ')}</p>
            <p className='text-black'><strong>Preferred Level Of Study: </strong> {dateInfo[0].level} year</p>
            <p className='text-black'><strong>Interests:</strong> {dateInfo[0].interests}</p>
            <p className='text-black'><strong>Preferred outcome of the date: </strong> {dateInfo[0].goal}</p>
            <p className='text-black'><strong>Preferred Courses of Study:</strong> {dateInfo[0].courses.join(', ')}</p>
            <button className="self-start bg-red-600 text-white py-2 px-4 ml-2 mt-2 rounded-lg hover:bg-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                Delete Date
            </button>
        </div>
      ) : (
        <div>No date created.</div>
      )}

      <div>
         <h2 className="p-4 text-black text-3xl font-bold mb-4">Applicants</h2>            
      </div>
    </div>
  );
};

export default ViewMyDate;
