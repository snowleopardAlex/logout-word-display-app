import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super() 
    this.state = {
      isLoggedIn: false
    }
  }


  render() {
    let wordDisplay 
    if (this.state.isLoggedIn) {
      wordDisplay = "in"
    } else {
      wordDisplay = "out"
    }
    return (
      <div className="App">
        <h1>You are logged {wordDisplay} </h1>
      </div>
    );
  }
}

export default App;


