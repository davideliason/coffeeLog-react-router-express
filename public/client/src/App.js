import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Drinks from './Drinks.jsx';


class App extends Component {
    render(){
      return   (
        <div className="App">
          
          <header className="App-header">
            <h2>Welcome to Drinks </h2>
            <p className="App-intro">Find your favorite drink info</p>
          </header>

          <main className="Main">
            <Drinks />
          </main>
        </div>
        );
       }
      }


export default App;










