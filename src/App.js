import React, { Component } from "react";
import Movies from "./components/movies.component";
import Navbar from "./components/navbar.component";
import Rating from "./components/rating.component";
import Students from "./components/students.component";

class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <br/>
        <Movies />
      </>
    );
  }
}

export default App;
