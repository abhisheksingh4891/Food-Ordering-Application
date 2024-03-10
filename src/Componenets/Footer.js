import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer text-white" style={{ backgroundColor: '#333333', paddingBottom: '25px', filter:'brightness(100%)'}}>
      <div className="container">
        {/* <h1 className="text-center pt-5 mt-0">“</h1> */}
        <p className="text-center pt-5 fs-4 fw-normal">If more of us valued food and cheer and song above hoarded gold, it would be a merrier world.</p>
        <div className="row justify-content-center fs-3 mt-4">
          <div className="col-auto">
            <Link to="/" className="social-icon"><i className="fa fa-facebook" aria-hidden="true"></i></Link>
          </div>
          <div className="col-auto">
            <Link to="/" className="social-icon"><i className="fa fa-twitter" aria-hidden="true"></i></Link>
          </div>
          <div className="col-auto">
            <Link to="/" className="social-icon"><i className="fa fa-instagram" aria-hidden="true"></i></Link>
          </div>
          <div className="col-auto">
            <Link to="/" className="social-icon"><i className="fa fa-pinterest-p" aria-hidden="true"></i></Link>
          </div>
          <div className="col-auto">
            <Link to="/" className="social-icon"><i className="fa fa-google" aria-hidden="true"></i></Link>
          </div>
        </div>
        <h2 className="text-center fs-5 pt-4">Copyright @ 2024. Created by ABHISHEK SINGH</h2>
      </div>
    </div>
  );
}

export default Footer;
