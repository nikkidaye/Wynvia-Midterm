import React from "react";
import '../index.css';

class Navbar extends React.Component {
  render() {
    <div>

      <nav className="navbar navbar-expand-md fixed-top navbar-dark">
        <a href="index.html">
          <div className="nav-logo">
            <img src="wynVIA-logo.png" alt="wynVIA Logo" height="35px">
          </div>
        </a>
        <div id="navbarTogglerDemo02" className="idlinks">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="easy-trivia.html">EASY</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="medium-trivia.html">MEDIUM</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="hard-trivia.html">HARD</a>
            </li>
          </ul>
        </div>
      </nav>

    </div>;
  }
}

export default Navbar;
