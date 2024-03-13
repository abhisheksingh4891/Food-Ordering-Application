import React from 'react';
import Card from '../Components/Card';
import Carousel from '../Components/Carousel';
import Navbar from '../Components/Navbar';
import NavbarAdmin from '../../AdminPanel/Components/NavbarAdmin';
import CarouselAdmin from '../../AdminPanel/Components/Carousel';
import Select from '../../Select';
import { Link } from 'react-router-dom';

const loggedIn = window.localStorage.getItem("isLoggedIn");
const merchantLoggedIn = window.localStorage.getItem("merchantLogin");

console.log(loggedIn ? "User logged in" : "User not logged in");
console.log(merchantLoggedIn ? "Merchant logged in" : "Merchant not logged in");

const Home = () => {
  return (
    <>
      {loggedIn && (
        <div className="bg-dark">
          <Navbar />
          <Carousel />
          <Card />
        </div>
      )}
      {merchantLoggedIn && (
        <div className="bg-dark">
          <NavbarAdmin />
          <CarouselAdmin />
        </div>
      )}
      {!loggedIn && !merchantLoggedIn && (
        <>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-1 fixed-top" style={{ opacity:'0.8'}}>
            <div className="container-fluid"  style={{fontFamily:'Raleway'}}>
              <Link className="navbar-brand fs-3 fw-bold fst-italic" to="/">Foobies</Link>
            </div>
          </nav>
          <Select />
        </>
        )}
    </>
  );
};

export default Home;
