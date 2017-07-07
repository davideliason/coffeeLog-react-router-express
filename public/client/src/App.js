import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Drinks from './Drinks.jsx';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      drinks : [{
        drink: "coffee",
        calories: 0
      },
      {
        drink: "espresso",
        calories: 20
      }],
      colors : ["blue","green","red"]
    };

    this.addDrink = this.addDrink.bind(this);
    this.addColor = this.addColor.bind(this);

  }

   addDrink(e){
      e.preventDefault();

      var drinksArray = this.state.drinks;
      drinksArray.push(this._inputDrink.value);
      this.setState({
        drinks : drinksArray
        });

      this._inputDrink.value = "";
    }

    addColor(e){
      e.preventDefault();

      var colorsArray = this.state.colors;
      colorsArray.push(this._inputColor.value);
      this.setState({
        colors : colorsArray
        });

      this._inputColor.value = "";
    }

  render() {
    var appStyle = {
      backgroundColor: this.state.colors[this.state.colors.length-1],
      width: 200,
      marginLeft: 420,
      border: "1px solid white",
      padding: "0 20 20 20"
    };

    

    return (
      <div className="App">
        <div className="App-header">
          <h2 style={appStyle}>Welcome to Drinks </h2>
        </div>
        
        {/*(<p>{this.props.name}: i'm a prop</p>*/}
           <form onSubmit={this.addDrink}>
             <input ref={ (a) => this._inputDrink = a }placeholder="add drink"></input>
             <button type="submit">cheers!</button>
           </form>

           <form onSubmit={this.addColor}>
             <input ref={ (a) => this._inputColor = a }placeholder="update color"></input>
             <button type="submit">update</button>
           </form>
        <Drinks drinks = {this.state.drinks} />
      </div>
    );
  }
}

export default App;










