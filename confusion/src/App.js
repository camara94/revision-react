import React, { Component } from 'react';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import Camara from './Camara';

const nav = (
  <div className="App">
    <Navbar dark color="primary">
      <div className="container">
        <NavbarBrand href="/">Ristorant Con Fusion Camara</NavbarBrand>
      </div>
    </Navbar>
    <Camara />
  </div>
);

class App extends Component {
 render() {
  return (nav);
 }
}

export default App;
