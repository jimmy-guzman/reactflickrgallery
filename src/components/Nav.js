import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Route } from "react-router-dom";
import Results from "./Results";

class Nav extends Component {
  render() {
    return (
      <nav className="main-nav">
        <ul>
          <li>
            <NavLink to="/search/">Search</NavLink>
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
        <Route exact path="/search/:query" component={Results} />
      </nav>
    );
  }
}

export default Nav;
