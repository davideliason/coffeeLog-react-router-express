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
          
          {/* input values for color and add drink */}
             <form onSubmit={this.addDrink}>
               <input ref={ (a) => this._inputDrink = a }placeholder="add drink"></input>
               <input ref={ (b) => this._inputDrinkK = b }placeholder="add drink calories"></input>
               <button type="submit">cheers!</button>
             </form>

             <form onSubmit={this.addColor}>
               <input ref={ (a) => this._inputColor = a }placeholder="update color"></input>
               <button className="colorButton" type="submit">update</button>
             </form>
          <Drinks />
        </div>
        );
       }
      }


export default App;










