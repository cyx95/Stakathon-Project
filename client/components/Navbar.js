import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../store";
import { Home } from "./Home";

const Navbar = ({ handleClick, isLoggedIn, username }) => (
  <div>
    <nav>
      <div>
        <img
          className="logo"
          src="https://static.vecteezy.com/system/resources/thumbnails/000/565/119/small/vector61-287-01.jpg"
        />
        <div className="home-div">
          <Home username={username} />
        </div>
        <Link to="/">Home</Link>
        <Link to="/parks">All Parks</Link>
      </div>

      {isLoggedIn ? (
        <div>
          {/* The navbar will show these links after you log in */}
          <a href="#" onClick={handleClick}>
            Logout
          </a>
        </div>
      ) : (
        <div className="login-signup">
          {/* The navbar will show these links before you log in */}
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
        </div>
      )}
    </nav>
    <hr />
  </div>
);

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    isLoggedIn: !!state.auth.id,
    username: state.auth.username,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleClick() {
      dispatch(logout());
    },
  };
};

export default connect(mapState, mapDispatch)(Navbar);
