import axios from 'axios';
import {React, useState} from 'react'
import { Link } from 'react-router-dom';
import RegisterSuccessModal from '../../User/Components/Modal/RegisterSuccessModal';
import bg1 from '../../Assets/bg1.jpg'
// import WrongModal from './WrongModal';

const baseURL = "https://food-ordering-backend-jwmu.onrender.com";

const RegisterMerchant = () => {

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
        window.location.href = "/loginmerchant";
      }, 800)
    )
    .catch(err => console.log(err))
  }

  return (
    <div className="container-fluid py-3 pb-5" style={{backgroundImage:`url(${bg1})`, backgroundSize: 'cover', backgroundPosition: 'center', filter:'brightness(80%)'}}>
    <div className="row d-flex justify-content-center align-items-center mt-5">
      <div className="col col-xl-7">
        <div className="" style={{ borderRadius: "1rem", backgroundColor: 'rgba(255, 255, 255, 0.5)'}}>
          <div className="row g-0">
            <div className="col-md-6 col-lg-10 d-flex align-items-center">
              <div className="card-body p-4 p-lg-5 text-black">

                <form onSubmit={Submit} style={{fontFamily:'Raleway'}}>

                  <div className="d-flex align-items-center mb-3 pb-1 text-black">
                    <i className="fas fa-cubes fa-2x me-3" style={{"color": "#ff6219"}}></i>
                    <span className="h1 fw-bold mb-0">Foobies</span>
                  </div>

                  <h5 className="fw-normal mb-3 pb-1 fw-bold" style={{"letterSpacing": "1px"}}><u>Create your business account</u></h5>
                  
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
                    <button className="btn btn-success btn-lg btn-block" type="submit">Sign Up</button>
                  </div>

                  {/* <a className="small text-black" href="#!">Forgot password?</a> */}
                  <p className="mb-2 text-black fw-bold" style={{"color": "blue"}}>Already have an account? <Link to="/loginmerchant"
                      className="" style={{"color": "blue"}}>Login here</Link></p>

                  <Link className="text-danger fw-bold" to="/">Return to Home</Link>
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

export default RegisterMerchant