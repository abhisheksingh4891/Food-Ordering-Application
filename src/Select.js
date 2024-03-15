import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Select.css'; 

const Select = () => {
  const [isParaDisplayed, setIsParaDisplayed] = useState(false);
  const [areCardsVisible, setAreCardsVisible] = useState(false);

  useEffect(() => {
    setIsParaDisplayed(true);
    const timer = setTimeout(() => {
      setAreCardsVisible(true);
    }, 1000); // Delay the display for 500 milliseconds
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="container-fluid py-5 text-white" style={{fontFamily:'Raleway', backgroundImage: "url('https://t3.ftcdn.net/jpg/05/40/57/24/360_F_540572408_RX2AsVFgiiLM1rZDAIJKMwsYpPn1VR6f.jpg')"}}>
          {isParaDisplayed && (
            <div className={`text-center fs-1 mt-5 py-1 ${isParaDisplayed ? 'fade-in' : ''}`}>
              <p>Welcome to Foobies!</p>
              <p className="mt-4">Indulge in Culinary Delights: Where Every Bite Tells a Story!</p>
            </div>
          )}
          {areCardsVisible && (
            <div className={`row justify-content-center align-items-center m-5 pb-3 fs-3 ${areCardsVisible ? 'fade-in' : ''}`}>
              <div className="col-lg-3 col-md-6 col-sm-12 mt-4 pt-1 mb-4 rounded">
                <Link to="/loginmerchant" className="text-white text-decoration-none">
                  <div className="card bg-danger">
                    <div className="card-body d-flex flex-column justify-content-center align-items-center">
                      Merchant Login
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 mt-4 pt-1 mb-4 rounded">
                <Link to="/login" className="text-white text-decoration-none mb-3">
                  <div className="card bg-primary">
                    <div className="card-body d-flex flex-column justify-content-center align-items-center">
                      User Login
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          )}
        </div>
      </>
  );
};

export default Select;
