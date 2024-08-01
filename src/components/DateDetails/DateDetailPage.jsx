import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DateDetail from './DateDetail';

const DateDetailPage = () => {
  const { dateId } = useParams();
  const [dateSetup, setDateSetup] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchDateSetups = async () => {
      try {
        const response = await fetch('/date.json');
        const data = await response.json();
        const date = data.find((item) => item.id === dateId);
        setDateSetup(date);
      } catch (error) {
        console.error('Error fetching date setups:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDateSetups();
  }, [dateId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!dateSetup) {
    return <div>Date setup not found</div>;
  }

  return (
    <div className="date-detail-page container mx-auto p-4 bg-blue-100 shadow-md rounded-lg mt-3">
      <DateDetail dateSetup={dateSetup} />
    </div>
  );
};

export default DateDetailPage;
