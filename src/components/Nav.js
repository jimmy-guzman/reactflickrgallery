import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <div>
        <nav className="main-nav">
          <ul>
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
      </div>
    );
  }
}

export default Nav;
