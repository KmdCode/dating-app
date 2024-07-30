import React from 'react';

const ProfileDetails = () => {
  const userDetails = {
    age: 23,
    location: "Pretoria, South Africa",
    course: "BSc Hons Computer Sciences",
    level: "4th year",
    hobbies: ["Reading", "Traveling", "Cooking"],
    bio: "A passionate software engineer who loves to explore new technologies and meet new people. Always up for an adventure!",
    relationshipGoals: "Looking for a serious relationship.",
    socialMedia: {
      facebook: "https://facebook.com/",
      twitter: "https://twitter.com/",
      instagram: "https://instagram.com/"
    }
  };

  return (
    <div className="profile-details bg-white shadow-md rounded-lg p-4 mb-4">
      <h3 className="text-lg font-semibold mb-2">Profile Details</h3>
      <div className="flex items-center mb-4">
        <div>
          <p className="text-gray-600">{userDetails.age} years old</p>
          <p className="text-gray-600">{userDetails.location}</p>
        </div>
      </div>
      <div className="mb-4">
        <h4 className="text-md font-semibold">Course</h4>
        <p>{userDetails.course}</p>
      </div>
      <div className="mb-4">
        <h4 className="text-md font-semibold">Level Of Study</h4>
        <p>{userDetails.level}</p>
      </div>
      <div className="mb-4">
        <h4 className="text-md font-semibold">Hobbies and Interests</h4>
        <ul className="list-disc pl-5">
          {userDetails.hobbies.map((hobby, index) => (
            <li key={index}>{hobby}</li>
          ))}
        </ul>
      </div>
      <div className="mb-4">
        <h4 className="text-md font-semibold">Relationship Goals</h4>
        <p>{userDetails.relationshipGoals}</p>
      </div>
      <div className="mb-4">
        <h4 className="text-md font-semibold">Social Media</h4>
        <ul>
          <li><a href={userDetails.socialMedia.facebook} className="text-blue-500 hover:underline">Facebook</a></li>
          <li><a href={userDetails.socialMedia.twitter} className="text-blue-500 hover:underline">Twitter</a></li>
          <li><a href={userDetails.socialMedia.instagram} className="text-blue-500 hover:underline">Instagram</a></li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileDetails;
