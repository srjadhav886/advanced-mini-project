import React from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css';
// import resume from "./images/resume.jpg";
import { Container, NavDropdown, Nav, Dropdown } from "react-bootstrap";


function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark container-fluid py-3">
    <div className="container-fluid">
        <NavLink className="navbar-brand ml-lg-5 ml-sm-2" to="/" style={{color: "white"}}>Build your<sub id="resume" className="ml-1">Resume</sub></NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button> */}
        {/* <div className="pos-f-t">
  <div className="collapse" id="navbarToggleExternalContent">
    <div className="bg-dark p-4">
      <h4 className="text-white">Collapsed content</h4>
      <span className="text-muted">Toggleable via the navbar brand.</span>
    </div>
  </div>
  <nav className="navbar navbar-dark bg-dark">
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  </nav>
</div> */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-lg-auto mt-3">
                <li className="nav-item">
                    <NavLink className="nav-link ml-4" to="/" >Home</NavLink>
                </li>
                    
                <li className="nav-item">
                    <NavLink className="nav-link ml-4" to="./login">Login</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link ml-4" to="./contactus">Contact Us</NavLink>
                </li>

            </ul>
        </div>
    </div>
    
</nav>
    </>
  );
}

export default Navbar;
