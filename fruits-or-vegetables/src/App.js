import React, { Component } from 'react';
import './App.css';
import Form from './Form';
import Fruit from './Fruits';
import Vegetable from './Vegetables';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Fruits or Vegetables</h1>
        <Form />
        <Fruit />
        <Vegetable />
      </div>
    );
  }
}

export default App;
