import React, { Component } from 'react';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';


const nav = (
  <div>
    <Navbar dark color="primary">
      <div className="container">
        <NavbarBrand href="/">Ristorant Con Fusion Camara</NavbarBrand>
      </div>
    </Navbar>
    <Menu />
  </div>
);

class App extends Component {
 render() {
  return (nav);
 }
}

export default App;
