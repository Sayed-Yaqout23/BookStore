import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/LeftSidebar.css";

const LeftSidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src="/Group 47728.png" alt="Book World" />
      </div>
      <nav className="nav-links">
        <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
          <i className="icon-home"></i> Shop
        </NavLink>
        <NavLink to="/stores" className={({ isActive }) => (isActive ? "active" : "")}>
          <i className="icon-stores"></i> Stores
        </NavLink>
        <NavLink to="/authors" className={({ isActive }) => (isActive ? "active" : "")}>
          <i className="icon-books"></i> Authors
        </NavLink>
        <NavLink to="/books" className={({ isActive }) => (isActive ? "active" : "")}>
          <i className="icon-inventory"></i> Books
        </NavLink>
      </nav>
    </div>
  );
};

export default LeftSidebar;
