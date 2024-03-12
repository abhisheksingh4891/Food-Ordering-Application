import React from 'react'
import Navbar from './Navbar'

const MyProfile = () => {
  return (
    <div className="container-fluid py-2" style={{"backgroundImage":"url('https://t3.ftcdn.net/jpg/05/40/57/24/360_F_540572408_RX2AsVFgiiLM1rZDAIJKMwsYpPn1VR6f.jpg')"}}>
      <Navbar />
      <div className="container-fluid py-5 text-white">
        <h1>My Profile</h1>
        
      </div>
    </div>
  )
}

export default MyProfile