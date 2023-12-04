import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";
// To yaha pe ham iss function ke andar props paas kar rahe hai aur bata rahe hai ki hamne component bana dia aur uske andar specific details ham props se denge
// Props- Hamne ek component banaya aur ham uske andar apni marzi ki propeties paas karna chahte hai to use Props kehte hai
// Props ko ham apne function ke andar kabhi change nahi karenge
export default function Navbar(props) {

  const [modeText, setModeText] = useState('Enable Dark Mode')
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">{props.title}</a>
        {/* //ham ab title use karke apne component me apni marzi ki specs paas kar denge */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">{props.about}</Link>
            </li>
          </ul>
          <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{modeText}</label>
          </div>

        </div>
      </div>
    </nav>
  )
}

// Yaha pe ham define kar rahe hai ki ham jo bi property denge apne component ke andar vo konsi datatype ki hogi
Navbar.propTypes = {
  title: PropTypes.string,
  about: PropTypes.string
}
//Agar hame default value set karni ho props ki
Navbar.defaultProps = {
  title: 'Set Title Here',
  about: 'Write About'
}
