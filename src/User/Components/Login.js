import axios from 'axios';
import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FoodContext } from '../../Context/FoodContext';
import SuccessModal from './Modal/SuccessModal';
import WrongModal from './Modal/WrongModal';
import bg1 from '../../Assets/bg5.jpg';

const baseURL = "https://food-ordering-backend-jwmu.onrender.com";

const Login = () => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showSuccessModal, setShowSuccessModal] = useState(false); 
  const [showWrongModal, setShowWrongModal] = useState(false);
  const { setIsLogin, isLogin } = useContext(FoodContext);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`${baseURL}/login`, { email, password })
      .then(result => {
        console.log(result);
        if(result.data === "Password is incorrect...") {
          setShowWrongModal(true); 
          setTimeout(() => {
            setShowWrongModal(false); 
          }, 800)
        }
        else{
          setIsLogin(true);
          window.localStorage.setItem("isLoggedIn", true);
          setShowSuccessModal(true); 
          setTimeout(() => {
            setShowSuccessModal(false); 
            window.location.href = "/";
          }, 800)
        } 
      })
      .catch(err => console.log(err));
  };


  return (

    <div className="container-fluid py-3 pb-5" style={{backgroundImage:`url(${bg1})`, backgroundSize: 'cover', backgroundPosition: 'center', filter:'brightness(80%)'}}>
      <div className="row d-flex justify-content-center align-items-center mt-5">
      <div className="col col-xl-5">
        <div className="" style={{ borderRadius: "1rem", backgroundColor: 'rgba(255, 255, 255, 0.5)'}}>
          <div className="row g-0">
            <div className="col-md-6 col-lg-10 d-flex align-items-center">
              <div className="card-body p-4 p-lg-5 text-black">
                  <form onSubmit={handleSubmit} style={{fontFamily:'Raleway'}}>

                    <div className="d-flex align-items-center mb-3 pb-1 text-black">
                      <i className="fas fa-cubes fa-2x me-3" style={{"color": "#ff6219"}}></i>
                      <span className="h1 fw-bold mb-0">Foobies</span>
                    </div>

                    <h5 className="fw-bold mb-3 pb-1" style={{"letterSpacing": "1px"}}>Log into your account</h5>

                    <div className="form-outline mb-4">
                      <label className="form-label text-black fw-bold" htmlFor="form2Example17">Email address</label>
                      <input required type="email" id="form2Example17" className="form-control form-control-lg" onChange={(e)=>{setEmail(e.target.value)}} name="email"/>
                    </div>

                    <div className="form-outline mb-4">
                      <label className="form-label text-black fw-bold" htmlFor="form2Example27">Password</label>
                      <input required type="password" id="form2Example27" className="form-control form-control-lg" onChange={(e)=>{setPassword(e.target.value)}} name="password" />
                    </div>
                    <div className="d-flex gap-2 mb-2">
                    <input required type="checkbox" />
                    <a href="#!" className="small text-black text-decoration-none text-dark fw-bold">I agree for Terms and Conditions</a>
                    </div> 

                    <div className="pt-2 mb-4">
                      <button className="btn btn-success btn-lg btn-block" type="submit">Login</button>
                    </div>

                    {/* <p className="text-black" style={{"color": "blue"}}>Forgot password?</p> */}
                    <p className="mb-2 text-black fw-bold" style={{"color": "blue"}}>Don't have an account? <Link to="/register"
                        className="" style={{"color": "blue"}}>Register here</Link></p>

                    <p className="text-black fw-bold" style={{"color": "blue"}}>If you are a Merchant? <Link to="/loginmerchant"
                        className="" style={{"color": "blue"}}>Login here</Link></p>

                    <Link className="text-danger fw-bold" to="/">Return to Home</Link>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {
        isLogin ? (<SuccessModal show={showSuccessModal} />):(<WrongModal show={showWrongModal} />)
      }
      
      
    </div>

  );
};

export default Login;
