import React, {useContext} from 'react';
import Card from '../Components/Card';
import Carousel from '../Components/Carousel';
import Navbar from '../Components/Navbar';
import NavbarAdmin from '../../AdminPanel/Components/NavbarAdmin';
import CarouselAdmin from '../../AdminPanel/Components/Carousel';
import Select from '../../Select';
import { Link } from 'react-router-dom';
import { FoodContext } from '../../Context/FoodContext';

// const loggedIn = window.localStorage.getItem("isLoggedIn");
// const merchantLoggedIn = window.localStorage.getItem("merchantLogin");


const Home = () => {
  
  const { isLogin, mLogin } = useContext(FoodContext);
  console.log(isLogin && "User logged in");
  console.log(mLogin && "Merchant logged in");

  return (
    <>
      {isLogin && (
        <div className="bg-dark">
          <Navbar />
          <Carousel />
          <Card />
        </div>
      )}
      {mLogin && (
        <div className="bg-dark">
          <NavbarAdmin />
          <CarouselAdmin />
        </div>
      )}
      {!isLogin && !mLogin && (
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
