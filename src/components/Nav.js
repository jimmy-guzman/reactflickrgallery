import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <nav className="main-nav">
        <ul>
          <li>
            <Link to="/search/">Search</Link>
          </li>
          <li>
            <NavLink to="/search/penguins">Penguins</NavLink>
          </li>
          <li>
            <NavLink to="/search/skateboarding">Skateboarding</NavLink>
          </li>
          <li>
            <NavLink to="/search/axolotl">Axolotl</NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
