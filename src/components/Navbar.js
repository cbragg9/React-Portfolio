import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar(props) {
  let location = useLocation();

  function updateHistory() {
    props.setPrevPageHistory(location.pathname)
  }

  function highlightCurrent(param) {
    if (location.pathname === param) {
      return {color: "#FF9C23"}
    } else {
      return {}
    } 
  }

  return (
    <div className="container-fluid">
      <div className="row nav-row">
        <div className="col-12 d-flex justify-content-center mt-lg-4">
          <ul className="nav">
            <li className="nav-item">
              <Link to="/about" className="nav-link" id="home-link" onClick={updateHistory} style={highlightCurrent("/about")}>About</Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link" id="home-link" onClick={updateHistory} style={highlightCurrent("/")}>Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/portfolio" className="nav-link" id="home-link" onClick={updateHistory} style={highlightCurrent("/portfolio")}>Portfolio</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar;