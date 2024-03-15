import React, { useContext, useState, useEffect } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import { FoodContext } from '../../Context/FoodContext';
import LogoutModal from './Modal/LogoutModal';


const Navbar = () => {
  const { isLogin, setIsLogin } = useContext(FoodContext);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  
  useEffect(() => {
    // Check if the user is logged in upon component mount
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn) {
      setIsLogin(true);
    }
  });

  const navigate = useNavigate(); 
  const handleLogout = () => {
    window.localStorage.removeItem("isLoggedIn");
    setIsLogin(false);
    setShowLogoutModal(true); 
    setTimeout(() => {
      setShowLogoutModal(false); 
      navigate('/login');
      // window.location.href = "/login";
    }, 800);
  };

  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-1 fixed-top" style={{ opacity:'0.9'}}>
      <div className="container-fluid"  style={{fontFamily:'Raleway'}}>
        <Link className="navbar-brand fs-3 fw-bold fst-italic" to="/">Foobies</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav fs-6 d-flex gap-3 mx-3">
            {/* <li className="nav-item">
              <Link className="nav-link active fw-bold" aria-current="page" to="/">Home</Link>
            </li> */}
            {/* <li className='nav-item dropdown'>
              <Link className="nav-link active fw-bold dropdown-toggle" aria-current="page" to="/login" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Category</Link>
              <ul className="dropdown-menu bg-dark mt-1 border-0 mx-3" aria-labelledby="navbarDropdown">
                <li><Link className='nav-link active fw-bold dropdown-item bg-dark text-white' to="#">Pizza</Link></li>
                <li><Link className='nav-link active fw-bold dropdown-item bg-dark text-white' to="#">Burger</Link></li>
                <li><Link className='nav-link active fw-bold dropdown-item bg-dark text-white' to="#">Cake</Link></li>
              </ul>
            </li> */}
            <li className="nav-item">
              {isLogin ? (
                <li className='nav-item dropdown'>
                  <Link className="nav-link active fw-bold dropdown-toggle" aria-current="page" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">My Account</Link>
                  <ul className="dropdown-menu bg-dark mt-1 border-0 mx-3" aria-labelledby="navbarDropdown">
                    <li><Link className="nav-link active fw-bold dropdown-item bg-dark text-white" to='/profile'>My Profile</Link></li>
                    <li className="nav-item"><Link className="nav-link active fw-bold dropdown-item bg-dark text-white" to="/orders">My Orders</Link></li>
                    <li><Link className="nav-link active fw-bold dropdown-item bg-dark text-white" onClick={handleLogout}>Logout</Link></li>
                  </ul>
                </li>
              ) : (
                <Link className="nav-link active fw-bold" to="/login">Login</Link>
              )}
            </li>
            <li className="nav-item"><Link className="nav-link active fw-bold " to="/cart"><i className="fa fa-shopping-cart fs-3" aria-hidden="true"></i></Link></li>
          </ul>
        </div>
      </div>
    </nav>
    <LogoutModal show={showLogoutModal} /> 
    </>
  );
};

export default Navbar;
