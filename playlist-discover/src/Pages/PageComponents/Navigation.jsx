import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navigation(props) {
  return (
    <div className="navigation">
      <nav class="navbar navbar-expand navbar-dark bg-dark">
        <div class="container">
          <Link class="navbar-brand" to="/">
            Playlist Discover
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
                  props.location.pathname === "/PersonalPage" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/PersonalPage">
                  Personal Page
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
