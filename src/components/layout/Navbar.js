import React from 'react';
import {Link, NavLink, exact} from "react-router-dom";

const Navbar = () => {
    return (
        <div>
  <nav className="navbar navbar-expand-lg navbar-light nav_color border_style">
  <div className='container'>
    <a className="navbar-brand" href="/">Blog Post</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/">Home</NavLink>
        </li>
        {/* <li className="nav-item">
          <NavLink className="nav-link" exact to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/contact">Contact</NavLink>
        </li> */}
      </ul>      
    </div>
  </div>
</nav>
        </div>
    );
}

export default Navbar;
