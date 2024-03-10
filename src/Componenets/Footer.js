import React from 'react';

const Footer = () => {
  return (
    <div className="footer text-white" style={{ backgroundColor: '#2a3b40', paddingBottom: '40px' }}>
      <div className="container">
        {/* <h1 className="text-center pt-5 mt-0">“</h1> */}
        <p className="text-center pt-5 fs-4 fw-normal">If more of us valued food and cheer and song above hoarded gold, it would be a merrier world.</p>
        <h2 className="text-center fs-5 pt-5">Copyright @ 2024. Created by ABHISHEK SINGH</h2>
        <div className="row justify-content-center fs-3 mt-4">
          <div className="col-auto">
            <a href="/" className="social-icon"><i className="fa fa-facebook" aria-hidden="true"></i></a>
          </div>
          <div className="col-auto">
            <a href="/" className="social-icon"><i className="fa fa-twitter" aria-hidden="true"></i></a>
          </div>
          <div className="col-auto">
            <a href="/" className="social-icon"><i className="fa fa-instagram" aria-hidden="true"></i></a>
          </div>
          <div className="col-auto">
            <a href="/" className="social-icon"><i className="fa fa-pinterest-p" aria-hidden="true"></i></a>
          </div>
          <div className="col-auto">
            <a href="/" className="social-icon"><i className="fa fa-google" aria-hidden="true"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
