import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          Stockify
        </a>
        <div className="navbar-nav">
          <a className="nav-item nav-link active" href="#">
            Login With Google
          </a>
        </div>
      </nav>
    );
  }
}

export default Header;
