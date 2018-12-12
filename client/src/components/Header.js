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
          <a
            href="/auth/google"
            className="nav-item nav-link active navbaroption"
          >
            Login With Google
          </a>
        );
      default:
        return (
          <div className="ml-auto">
            <Link
              to="/market-overview"
              className="navbar-brand font-weight-medium navbaroption"
            >
              Indices
            </Link>
            <Link
              to="/tech"
              className="navbar-brand font-weight-medium navbaroption"
            >
              Tech Stocks
            </Link>
            <Link
              to="/news"
              className="navbar-brand font-weight-medium navbaroption"
            >
              News
            </Link>
            <p
              style={{ display: "inline-block" }}
              className="text-white font-weight-light"
            >
              Welcome {this.props.auth.firstName}
            </p>{" "}
            <a
              style={{ display: "inline-block" }}
              href="/api/logout"
              className="nav-item nav-link text-muted logout"
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
          className="navbar-brand font-weight-bold navbaroption"
        >
          Stockify
        </Link>
        <div className="navbar-nav ml-auto">{this.renderContent()}</div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(mapStateToProps)(Header);
