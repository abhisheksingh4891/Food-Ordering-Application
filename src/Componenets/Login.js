import React from 'react';
import login from '../Assets/login.jpg'
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    
  <div className="container-fluid py-2" style={{"background-image":"url('https://t3.ftcdn.net/jpg/05/40/57/24/360_F_540572408_RX2AsVFgiiLM1rZDAIJKMwsYpPn1VR6f.jpg')"}}>
    <div className="row d-flex justify-content-center align-items-center">
      <div className="col col-xl-5">
        <div className="card" style={{ borderRadius: "1rem", backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
          <div className="row g-0">
            {/* <div className="col-md-6 col-lg-5 d-none d-md-block">
              <img src={login}
                alt="login form" className="img-fluid" style={{"border-radius": "1rem 0 0 1rem;"}} />
            </div> */}
            <div className="col-md-6 col-lg-10 d-flex align-items-center">
              <div className="card-body p-4 p-lg-5 text-black">

                <form>

                  <div className="d-flex align-items-center mb-3 pb-1 text-black">
                    <i className="fas fa-cubes fa-2x me-3" style={{"color": "#ff6219;"}}></i>
                    <span className="h1 fw-bold mb-0">Foobies</span>
                  </div>

                  <h5 className="fw-normal mb-3 pb-1" style={{"letter-spacing": "1px;"}}>Log into your account</h5>

                  <div className="form-outline mb-4">
                    <label className="form-label text-black fw-bold" for="form2Example17">Email address</label>
                    <input type="email" id="form2Example17" className="form-control form-control-lg" />
                  </div>

                  <div className="form-outline mb-4">
                    <label className="form-label text-black fw-bold" for="form2Example27">Password</label>
                    <input type="password" id="form2Example27" className="form-control form-control-lg" />
                  </div>

                  <div className="pt-2 mb-4">
                    <button className="btn btn-dark btn-lg btn-block" type="button">Login</button>
                  </div>

                  <a className="small text-black" href="#!">Forgot password?</a>
                  <p className="mb-5 pb-lg-2 text-black" style={{"color": "#393f81;"}}>Don't have an account? <Link to="/register"
                      className="" style={{"color": "#393f81;"}}>Register here</Link></p>
                  <a href="#!" className="small text-black">Terms of use.</a>
                  <a href="#!" className="small text-black">Privacy policy</a>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  );
};

export default Login;
