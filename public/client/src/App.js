import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Drinks from './Drinks.jsx';


class App extends Component {
    render(){
      return   (
        <div className="App">
        
          <div className="App-header">
            <h2>Welcome to Drinks </h2>
            <p className="App-intro">Find your favorite drink info</p>
          </div>
         
          <Drinks />
        </div>
        );
       }
      }


export default App;










