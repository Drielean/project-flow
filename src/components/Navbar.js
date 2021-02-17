import React from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <nav className="navbar is-light">
      <div className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item">Home</a>
        </div>
      </div>
      <div className="navbar-end">
        <div className="navbar-item">
          {props.isLogedIn ? (
            ""
          ) : (
            <div className="field is-grouped">
              <p className="control">
                <Link to="/login" className="bd-tw-button button is-info">
                  <span>Login</span>
                </Link>
              </p>
              <p className="control">
                <Link to="/signup" className="button is-primary">
                  <span>Signup</span>
                </Link>
              </p>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
