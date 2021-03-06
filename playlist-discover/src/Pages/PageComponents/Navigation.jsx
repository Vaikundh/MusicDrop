import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./Navigation.css"

function Navigation(props) {
  return (
    <div className="navigation">
      <nav class="navbar navbar-expand">
        <div class="container">
          <Link class="navbar-brand" to="/">
            Music Drop
          </Link>
          <div>
            <ul class="navbar-nav ml-auto">
              <li
                class={`nav-item  ${
                  props.location.pathname === "/" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/">
                  Home
                  <span class="sr-only">(current)</span>
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/SignUp" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/SignUp">
                  Sign Up
                  <span class="sr-only">(current)</span>
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/LogIn" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/LogIn">
                  Log In
                  <span class="sr-only">(current)</span>
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/Profile" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/Profile">
                  Profile
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/Map" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/Map">
                  Map
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/About" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/About">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Navigation);
