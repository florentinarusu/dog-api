import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <ul className="navbar-nav mr-auto">
        <Link className="nav-link" to="my-images">
          My images
        </Link>
        <Link className="nav-link" to="upload">
          Upload
        </Link>
        <Link className="nav-link" to="infinite-scroll">
          Infinite Scroll
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
