import React from 'react';

function Profile() {
  return (
    <div className="profile">
      <h1 className="title">Your Profile</h1>
      <div className="profile-info">
        <p>Username: Deeqa</p>
        <p>Subscription: Premium</p>
      </div>
      <button className="logout-button">Logout</button>
    </div>
  );
}

export default Profile;
