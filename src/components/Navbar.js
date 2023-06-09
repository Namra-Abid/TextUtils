
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <Link className="navbar-brand" to="/">{props.title}</Link>
      {/* <a className="navbar-brand" href="#">{props.title}</a> */}
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            {/* <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a> */}
            <Link className="navbar-brand" to="/">{props.title}</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to="/about">{props.aboutText}</Link>
            {/* <a className="nav-link" href="#">{props.aboutText}</a> */}
          </li>
        </ul>
        {/* <form className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form> */}
        {/* <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}> */}

        {/* <div className={`form-check form-switch text-${props.mode}`}>
          <input className="form-check-input"  onClick={props.togglemodefunc} type="checkbox" id="switch" />
          <label className="form-check-label" htmlFor="switch">Toggle Switch</label>
        </div> */}
        <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
          <input className="form-check-input" onClick={props.togglemodefunc} type="checkbox" id="flexSwitchCheckDefault" />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {props.mode === 'light' ? 'dark' : 'light'} Mode</label>
        </div>

      </div>
    </nav>

  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
  togglemodefunc: PropTypes.func.isRequired,
  mode: PropTypes.oneOf(['light', 'dark']).isRequired,
};


Navbar.defaultProps = {
  title: 'Title Here',
  aboutText: 'About text here',
  mode: PropTypes.oneOf(['light', 'dark']).isRequired,

}