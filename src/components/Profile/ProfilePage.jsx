import React from 'react';
import ProfileHeader from './ProfileHeader';
import ProfileDetails from './ProfileDetails';
import PastDates from './PastDates';
import ProfileEditForm from './ProfileEditForm';

const ProfilePage = () => {
  return (
    <div className="profile-page container mx-auto p-4">
      <ProfileHeader />
      <ProfileDetails />
      <PastDates />
      <ProfileEditForm />
    </div>
  );
};

export default ProfilePage;
