import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-danger p-0" style={{"filter":"brightness(50%)",'position': 'relative', 'zIndex': '999'}} >
  <div className="container-fluid"  style={{"filter":"brightness(100%"}}>
    <Link className="navbar-brand fs-3 fw-bold fst-italic mx-5" to="/">Foobies</Link>
    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon">home</span>
    </button> */}
    <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active fw-bold" aria-current="page" to="/">Home</Link>
        </li>
        <div className='dropdown' style={{'position': 'relative',"z-index":"10"}}>
          <Link className="nav-link active fw-bold dropdown-toggle" aria-current="page" to="/login" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">Category</Link>
          <ul className="dropdown-menu bg-danger mt-1" aria-labelledby="dropdownMenuLink">
            <li><Link className='nav-link active fw-bold dropdown-item bg-danger text-white' to="/">Pizza</Link></li>
            <li><Link className='nav-link active fw-bold dropdown-item bg-danger text-white' to="/">Burger</Link></li>
            <li><Link className='nav-link active fw-bold dropdown-item bg-danger text-white' to="/">Cake</Link></li>
          </ul>
        </div>
      </ul>
        <ul className="navbar-nav">
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