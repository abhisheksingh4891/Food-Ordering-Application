import React, { useContext } from 'react';
import Navbar from './Navbar';
import { FoodContext } from '../../Context/FoodContext';

const MyProfile = () => {
  const { userData } = useContext(FoodContext);

  return (
    <div className="container-fluid py-2" style={{backgroundImage: "url('https://t3.ftcdn.net/jpg/05/40/57/24/360_F_540572408_RX2AsVFgiiLM1rZDAIJKMwsYpPn1VR6f.jpg')"}}>
      <Navbar />
      <div className="container-fluid py-5 text-white">
        <h1>My Profile</h1>
        {userData ? (
          <div>
            <p>Name: {userData.first} {userData.last}</p>
            <p>Email: {userData.email}</p>
            <p>Phone: {userData.phone}</p>
            {/* Display other user data as needed */}
          </div>
        ) : (
          <p>Loading user data...</p>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
