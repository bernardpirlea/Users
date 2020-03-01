import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

class Navbar extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    return (
      <div className="navbar-fixed">
        <nav className="z-depth-0">
          <div className="nav-wrapper white">
            <Link
              to="/dashboard"
              style={{
                fontFamily: "monospace",
                marginLeft: "1rem"
              }}
              className="col s5 brand-logo left black-text"
            >
              <i class="large material-icons">card_giftcard</i>
              Gift List
            </Link>
            <button
              style={{
                width: "120px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem",
                marginRight: "1rem",
                float: "right"
              }}
              onClick={this.onLogoutClick}
              className="btn waves-effect waves-light hoverable green"
            >
              Logout
            </button>
          </div>
        </nav>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logoutUser })(Navbar);
