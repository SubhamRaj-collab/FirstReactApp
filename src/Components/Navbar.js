import React from 'react'
import PropTypes from 'prop-types'
// import {
//   Link
// } from "react-router-dom";

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string
};

export default function Navbar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          {/* <Link className="navbar-brand" to="/">{props.title}</Link> */}
          <a className="navbar-brand" href="#">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link> */}
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              {/*<li className="nav-item">
                // <Link className="nav-link" to="/about">{props.aboutText}</Link> 
                <a className="nav-link" href="/about">{props.aboutText}</a>
              </li>
              */}
            </ul>
            {/* <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-primary" type="submit">Search</button>
            </form> */}

            <div className={`form-check form-switch mx-2 text-${props.mode==='light'?'dark':'light'}`}>
              {/* We can write Javascript between { } curly braces */}
              <input className="form-check-input" type="checkbox" onClick={props.blueToggleMode} role="switch" id="flexSwitchCheckDefault1"/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault1">Enable Blue DarkMode</label>
            </div>
            <div className={`form-check form-switch mx-2 text-${props.mode==='light'?'dark':'light'}`}>
              {/* We can write Javascript between { } curly braces */}
              <input className="form-check-input" type="checkbox" onClick={props.greenToggleMode} role="switch" id="flexSwitchCheckDefault2"/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault2">Enable Green DarkMode</label>
            </div>
            <div className={`form-check form-switch mx-2 text-${props.mode==='light'?'dark':'light'}`}>
              {/* We can write Javascript between { } curly braces */}
              <input className="form-check-input" type="checkbox" onClick={props.redToggleMode} role="switch" id="flexSwitchCheckDefault3"/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault3">Enable Red DarkMode</label>
            </div>

          </div>
        </div>
      </nav>
    </>
  )
}




