import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <a href="/auth/google" className="nav-item nav-link active">
            Login With Google
          </a>
        );
      default:
        return (
          <div>
            <p style={{ display: "inline-block" }} className="text-white">
              Welcome {this.props.auth.firstName}
            </p>{" "}
            <a
              style={{ display: "inline-block" }}
              href="/api/logout"
              className="nav-item nav-link text-muted"
            >
              Logout
            </a>
          </div>
        );
    }
  }

  render() {
    // console.log(this.props);
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link
          to={this.props.auth ? "/market-overview" : "/"}
          className="navbar-brand"
          href="#"
        >
          Stockify
        </Link>
        <div className="navbar-nav">{this.renderContent()}</div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(mapStateToProps)(Header);
