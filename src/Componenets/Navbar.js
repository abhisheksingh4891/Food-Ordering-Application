import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-danger p-0" style={{"filter":"brightness(50%)",'position': 'relative', 'zIndex': '999'}} >
      <div className="container-fluid">
        <Link className="navbar-brand fs-3 fw-bold fst-italic" to="/">Foobies</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active fw-bold" aria-current="page" to="/">Home</Link>
            </li>
            <li className='nav-item dropdown'>
              <Link className="nav-link active fw-bold dropdown-toggle" aria-current="page" to="/login" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Category</Link>
              <ul className="dropdown-menu bg-danger mt-1" aria-labelledby="navbarDropdown">
                <li><Link className='nav-link active fw-bold dropdown-item bg-danger text-white' to="/">Pizza</Link></li>
                <li><Link className='nav-link active fw-bold dropdown-item bg-danger text-white' to="/">Burger</Link></li>
                <li><Link className='nav-link active fw-bold dropdown-item bg-danger text-white' to="/">Cake</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link active fw-bold" to="/login">Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar