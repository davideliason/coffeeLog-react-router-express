import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Coffee from './Coffee.jsx';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      colors : ["blue","red","yellow"]
    }
  }
  render() {
    var appStyle = {
      backgroundColor: this.state.colors[this.state.colors.length-1],
      width: 200,
      marginLeft: 200,
      border: "1px solid white",
      padding: "0 20 20 20"
    };

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2 style={appStyle}>Welcome to React </h2>
        </div>
        
        <p>{this.props.name}: i'm a prop</p>
        <Coffee />
      </div>
    );
  }
}

export default App;










