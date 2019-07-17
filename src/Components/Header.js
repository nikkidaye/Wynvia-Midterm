import React from "react";
import "../index.css";

class Header extends React.Component {
  render() {
    return (
      <div>
        <div className="header">
          <img
            src="logo-dark.png"
            alt="wynVIA logo"
            width="400px"
            className="large-logo"
          />
          <h4>Easy Level</h4>
        </div>
      </div>
    );
  }
}

export default Header;
