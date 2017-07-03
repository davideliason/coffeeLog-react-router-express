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
    this.addColor = this.addColor.bind(this);
  }
  render() {
    var appStyle = {
      backgroundColor: this.state.colors[this.state.colors.length-1],
      width: 200,
      marginLeft: 200,
      border: "1px solid white",
      padding: "0 20 20 20"
    };

    function addColor(e){
      e.preventDefault();


    }

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2 style={appStyle}>Welcome to React </h2>
        </div>
        
        <p>{this.props.name}: i'm a prop</p>
           <form onSubmit={this.addColor}>
             <input placeholder="update color"></input>
             <button type="submit">update</button>
           </form>
        <Coffee />
      </div>
    );
  }
}

export default App;










