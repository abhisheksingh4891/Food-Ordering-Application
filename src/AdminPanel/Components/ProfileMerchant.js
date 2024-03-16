import React, { useContext } from 'react';
import Navbar from './NavbarAdmin';
import { FoodContext } from '../../Context/FoodContext';

const ProfileMerchant = () => {
  const { merchantData } = useContext(FoodContext);

  return (
    <div className="container-fluid py-2" style={{backgroundImage: "url('https://t3.ftcdn.net/jpg/05/40/57/24/360_F_540572408_RX2AsVFgiiLM1rZDAIJKMwsYpPn1VR6f.jpg')"}}>
      <Navbar />
      <div className="container-fluid py-5 text-white">
        <h1>My Profile</h1>
        {merchantData ? (
          <div>
            <p>First Name: {merchantData.first}</p>
            <p>Last Name: {merchantData.last}</p>
            <p>Email: {merchantData.email}</p>
            {/* <p>Phone: {merchantData.phone}</p> */}
            {/* Display other user data as needed */}
          </div>
        ) : (
          <p>Loading user data...</p>
        )}
      </div>
    </div>
  );
};

export default ProfileMerchant;
