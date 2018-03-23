import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => (
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
);

export default Nav;
