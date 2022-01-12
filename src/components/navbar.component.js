import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class Navbar extends React.Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            IMDb
          </a>
        </nav>
      </>
    );
  }
}

export default Navbar;
