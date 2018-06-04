import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: ""
    }
  }

  callThisFunction = (e) => {
    this.setState({display: e.target.value})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <input onChange={this.callThisFunction}></input>
        <h1>{this.state.display}</h1>
      </div>
    );
  }
}

export default App;
