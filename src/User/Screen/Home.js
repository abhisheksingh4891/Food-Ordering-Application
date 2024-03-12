import React from 'react'
import Card from '../Components/Card'
import Carousel from '../Components/Carousel'
import Navbar from '../Components/Navbar'

const Home = () => {
  return (
    <div className="bg-dark">
      <Navbar/>
      <Carousel/>
      <Card/>
    </div>
  )
}

export default Home