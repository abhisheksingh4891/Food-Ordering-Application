import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';

const baseURL = "https://food-ordering-backend-jwmu.onrender.com";

const MyProfile = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Fetch current user data
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`${baseURL}/profile`); // Assuming this is your backend route to fetch user profile
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []); // Empty dependency array ensures this effect runs only once after component mount

  return (
    <div className="container-fluid py-2" style={{backgroundImage: "url('https://t3.ftcdn.net/jpg/05/40/57/24/360_F_540572408_RX2AsVFgiiLM1rZDAIJKMwsYpPn1VR6f.jpg')"}}>
      <Navbar />
      <div className="container-fluid py-5 text-white">
        <h1>My Profile</h1>
        {userData && (
          <div>
            <p>First Name: {userData.first}</p>
            <p>Last Name: {userData.last}</p>
            <p>Email: {userData.email}</p>
            {/* Add more fields as needed */}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
