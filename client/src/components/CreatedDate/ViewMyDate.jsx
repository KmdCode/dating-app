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

        if (response.data && response.data.data && response.data.data.date) {
          setDateInfo(response.data.data.date);
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
            <h2 className="text-black text-3xl font-bold mb-4">{dateInfo.title}</h2>            
            <p className='text-black'><strong>Description: </strong> {dateInfo.description}</p>
            <p className='text-black'><strong>Preferred Age: </strong> {dateInfo.age}</p>
            <p className='text-black'><strong>Preferred Residence: </strong> {dateInfo.residence.join(', ')}</p>
            <p className='text-black'><strong>Preferred Level Of Study: </strong> {dateInfo.level} year</p>
            <p className='text-black'><strong>Interests:</strong> {dateInfo.interests}</p>
            <p className='text-black'><strong>Preferred outcome of the date: </strong> {dateInfo.goal}</p>
            <p className='text-black'><strong>Preferred Courses of Study:</strong> {dateInfo.courses.join(', ')}</p>
            <button className="self-start bg-red-600 text-white py-2 px-4 ml-2 mt-2 rounded-lg hover:bg-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                Delete Date
            </button>
        </div>
      ) : (
        <div>No date created.</div>
      )}

      <div>
         <h2 className="p-4 text-black text-3xl font-bold mb-4">Applicants</h2>            
         {dateInfo && dateInfo.applicants.length > 0 ? (
            <ul>
              {dateInfo.applicants.map((applicant) => (
                <li key={applicant._id} className="bg-gray-100 shadow-md rounded-lg p-4 mb-4">
                  <p><strong>Name: </strong>{applicant.name}</p>
                  <p><strong>Email: </strong>{applicant.email}</p>
                  <p><strong>Residence: </strong>{applicant.residence}</p>
                  <p><strong>Bio: </strong>{applicant.bio}</p>
                  <p><strong>Age: </strong>{applicant.age}</p>
                  <p><strong>Goal: </strong>{applicant.relationshipGoals}</p>
                  <p><strong>Course: </strong>{applicant.courseOfStudy}</p>
                  <p><strong>Residence: </strong>{applicant.residence}</p>
                </li>
              ))}
            </ul>
         ) : (
           <p>No applicants yet.</p>
         )}
      </div>
    </div>
  );
};

export default ViewMyDate;
