import React from "react";
import car1 from '../Assets/car3.jpg'
import car2 from '../Assets/car6.jpg'
import car3 from '../Assets/car1.jpg'
import car4 from '../Assets/car2.jpg'

const Carousel = () => {
    const imgstyle = {
        maxHeight: '550px',
        objectPosition:'center',
        objectFit: 'cover',
        filter: 'brightness(30%)'
    }
  return (
    <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{ 'position': 'relative', 'zIndex': '1' }}>
      <div className="carousel-caption d-none d-md-block" style={{"z-index":"10"}}>
      <form className="d-flex w-100 pb-5">
          <input className="form-control me-2 text-black" type="search" placeholder="Search" aria-label="Search" style={{"filter":"brightness(80%)"}}/>
          <button className="btn btn-outline-success btn-success text-white" type="submit">Search</button>
        </form>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={car1} className="d-block w-100" alt="..." style={imgstyle}/>
        </div>
        <div className="carousel-item">
          <img src={car2} className="d-block w-100" alt="..." style={imgstyle}/>
        </div>
        <div className="carousel-item">
          <img src={car4} className="d-block w-100" alt="..." style={imgstyle}/>
        </div>
        <div className="carousel-item">
          <img src={car3} className="d-block w-100" alt="..." style={imgstyle}/>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
