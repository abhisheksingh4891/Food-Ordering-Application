import axios from 'axios';
import {React, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import RegisterSuccessModal from './Modal/RegisterSuccessModal';
// import WrongModal from './WrongModal';

const baseURL = "https://food-ordering-backend-jwmu.onrender.com";

const Register = () => {

  const navigate = useNavigate();

  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [showSuccessModal, setShowSuccessModal] = useState(false); 
  // const [showWrongModal, setShowWrongModal] = useState(false);

  const Submit = (e)=> {
    e.preventDefault();
    axios.post(`${baseURL}/register`,{
      first, last, phone, email, password, confirmPassword
    })
    .then( 
      setShowSuccessModal(true),
      setTimeout(() => {
        setShowSuccessModal(false); 
        navigate('/login');
      }, 800)
    )
    .catch(err => console.log(err))
  }

  return (
    <div className="container-fluid py-2 mt-5" style={{"backgroundImage":"url('https://t3.ftcdn.net/jpg/05/40/57/24/360_F_540572408_RX2AsVFgiiLM1rZDAIJKMwsYpPn1VR6f.jpg')"}}>
    <div className="row d-flex justify-content-center align-items-center">
      <div className="col col-xl-7">
        <div className="card" style={{ borderRadius: "1rem", backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
          <div className="row g-0">
            <div className="col-md-6 col-lg-10 d-flex align-items-center">
              <div className="card-body p-4 p-lg-5 text-black">

                <form onSubmit={Submit}>

                  <div className="d-flex align-items-center mb-3 pb-1 text-black">
                    <i className="fas fa-cubes fa-2x me-3" style={{"color": "#ff6219"}}></i>
                    <span className="h1 fw-bold mb-0">Foobies</span>
                  </div>

                  <h5 className="fw-normal mb-3 pb-1" style={{"letterSpacing": "1px"}}><u>Sign Up into your account</u></h5>
                  
                  <div className="form-outline mb-4">
                    <label className="form-label text-black fw-bold" htmlFor="form2Example17">First Name</label>
                    <input required type="text" id="form2Example17" className="form-control form-control-lg" onChange={(e)=>{setFirst(e.target.value)}} name="first"/>
                  </div>

                  <div className="form-outline mb-4">
                    <label className="form-label text-black fw-bold" htmlFor="form2Example18">Last Name</label>
                    <input required type="text" id="form2Example18" className="form-control form-control-lg" onChange={(e)=>{setLast(e.target.value)}} name="last"/>
                  </div>

                  <div className="form-outline mb-4">
                    <label className="form-label text-black fw-bold" htmlFor="form2Example19">Phone Number</label>
                    <input required type="number" id="form2Example19" className="form-control form-control-lg"  onChange={(e)=>{setPhone(e.target.value)}} name="phone"/>
                  </div>

                  <div className="form-outline mb-4">
                    <label className="form-label text-black fw-bold" htmlFor="form2Example20">Email address</label>
                    <input required type="email" id="form2Example20" className="form-control form-control-lg" onChange={(e)=>{setEmail(e.target.value)}} name="email" />
                  </div>

                  <div className="form-outline mb-4">
                    <label className="form-label text-black fw-bold" htmlFor="form2Example21">Password</label>
                    <input required type="password" id="form2Example21" className="form-control form-control-lg" onChange={(e)=>{setPassword(e.target.value)}} name="password" />
                  </div>

                  <div className="form-outline mb-4">
                    <label className="form-label text-black fw-bold" htmlFor="form2Example22">Confirm Password</label>
                    <input required type="password" id="form2Example22" className="form-control form-control-lg" onChange={(e)=>{setConfirmPassword(e.target.value)}} name="confirmPassword" />
                  </div>

                  <div className="d-flex gap-2 mb-2">
                  <input required type="checkbox"/>
                  <a href="#!" className="small text-black text-decoration-none text-dark fw-bold">I agree for Terms and Conditions</a>
                  </div> 

                  <div className="pt-2 mb-4">
                    <button className="btn btn-dark btn-lg btn-block" type="submit">Sign Up</button>
                  </div>

                  {/* <a className="small text-black" href="#!">Forgot password?</a> */}
                  <p className="mb-2 text-black" style={{"color": "blue"}}>Already have an account? <Link to="/login"
                      className="" style={{"color": "blue"}}>Login here</Link></p>

                  <Link className="text-danger" to="/">Return to Home</Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <RegisterSuccessModal show={showSuccessModal} />
  </div>

  )
}

export default Register