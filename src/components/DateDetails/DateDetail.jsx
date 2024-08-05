import React from 'react';

import ApplyButton from './ApplyButton';

const DateDetail = ({ dateSetup }) => {
  return (
    <div className="date-detail">
      <h2 className="text-white text-3xl font-bold mb-4">{dateSetup.title}</h2>
      <p className='text-white'><strong>Date Post By: </strong> {dateSetup.creator}</p>
      <p className='text-white'><strong>Description: </strong> {dateSetup.description}</p>
      <p className='text-white'><strong>Preferred Age: </strong> {dateSetup.preferredAge}</p>
      <p className='text-white'><strong>Preferred Residence: </strong> {dateSetup.preferredResidence.join(', ')}</p>
      <p className='text-white'><strong>Preferred Level Of Study: </strong> {dateSetup.preferredLevel}</p>
      <p className='text-white'><strong>Interests:</strong> {dateSetup.interests}</p>
      <p className='text-white'><strong>Preferred outcome of the date: </strong> {dateSetup.goal}</p>
      <p className='text-white'><strong>Special Requirements: </strong> {dateSetup.specialRequirements}</p>
      <p className='text-white'><strong>Contact Information: </strong> {dateSetup.contactInfo}</p>
      <p className='text-white'><strong>Preferred Courses of Study:</strong> {dateSetup.courses.join(', ')}</p>
      <ApplyButton dateId={dateSetup.id} />
    </div>
  );
};

export default DateDetail;
