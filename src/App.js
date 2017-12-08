import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from "./menu"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to the forkit menu</h1>
        </header>
      <Menu reviewedItems={["pizza","cheeseBurger","salad"]}/>
      </div>
    );
  }
}

export default App;
