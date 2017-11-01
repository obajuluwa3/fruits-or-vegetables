import React, { Component } from 'react';
import './App.css';
import Form from './Form';
import Fruit from './Fruits';
import Vegetable from './Vegetables';

class App extends Component {

  constructor() {
    super()
    this.state = {
      fruits: [],
      vegetables: []
    }
  }

  addItem = (item, itemName) => {
    const state = this.state;
    state[item].push(itemName);
    this.setState(state)
  }

  removeItem = (index, itemName) => {
    console.log(itemName)
    const state = this.state
    state[itemName].splice(index, 1)
    this.setState(state)

  }

  render() {
    return (
      <div className="App">
        <h1>Fruits or Vegetables</h1>
        <Form addItem={this.addItem} />
        <Fruit fruits={this.state.fruits} removeItem={this.removeItem} />
        <Vegetable vegetables={this.state.vegetables} removeItem={this.removeItem} />
      </div>
    );
  }
}

export default App;
