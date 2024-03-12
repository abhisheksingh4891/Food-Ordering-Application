import React from 'react'
// import Card from '../Components/Card'
import Carousel from '../Components/Carousel'
import NavbarAdmin from '../Components/NavbarAdmin'

const HomeAdmin = () => {
  return (
    <div className="bg-dark">
      <NavbarAdmin/>
      <Carousel/>
      {/* <Card/> */}
    </div>
  )
}

export default HomeAdmin