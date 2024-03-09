import axios from 'axios';
import {React, useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
const baseURL = "https://food-ordering-backend-jwmu.onrender.com";

const Login = () => {

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const Submit = (e)=> {
    e.preventDefault();
    axios.post(`${baseURL}/login`,{email, password})
    .then(result => {
      console.log(result)
      if(result.data === "Login Succesfull..."){
        navigate('/')
      }
    })
    .catch(err => console.log(err))
  }

  return (

    <div className="container-fluid py-2" style={{"backgroundImage":"url('https://t3.ftcdn.net/jpg/05/40/57/24/360_F_540572408_RX2AsVFgiiLM1rZDAIJKMwsYpPn1VR6f.jpg')"}}>
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col col-xl-5">
          <div className="card" style={{ borderRadius: "1rem", backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
            <div className="row g-0">
              <div className="col-md-6 col-lg-10 d-flex align-items-center">
                <div className="card-body p-4 p-lg-5 text-black">

                  <form onSubmit={Submit}>

                    <div className="d-flex align-items-center mb-3 pb-1 text-black">
                      <i className="fas fa-cubes fa-2x me-3" style={{"color": "#ff6219"}}></i>
                      <span className="h1 fw-bold mb-0">Foobies</span>
                    </div>

                    <h5 className="fw-normal mb-3 pb-1" style={{"letterSpacing": "1px"}}>Log into your account</h5>

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
                      <button className="btn btn-dark btn-lg btn-block" type="submit">Login</button>
                    </div>

                    <p className="text-black" style={{"color": "blue"}}>Forgot password?</p>
                    <p className="mb-2 text-black" style={{"color": "blue"}}>Don't have an account? <Link to="/register"
                        className="" style={{"color": "blue"}}>Register here</Link></p>

                    <Link className="text-danger" to="/">Return to Home</Link>
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
