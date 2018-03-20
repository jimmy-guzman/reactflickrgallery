import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import SearchForm from "./SearchForm";

class Nav extends Component {
  newRoute = query => {
    window.location.assign(`/search/${query}`);
  };
  render() {
    return (
      <div>
        <SearchForm onSubmit={this.newRoute} />

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
