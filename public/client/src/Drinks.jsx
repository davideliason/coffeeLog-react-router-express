import React from 'react';
import Coffee from './Coffee.jsx';

class Drinks extends React.Component{

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
	      colors : ["mocha","tan","brown"]
	    };

	    this.addDrink = this.addDrink.bind(this);
	    this.addColor = this.addColor.bind(this);
    }

   addDrink(e){
      e.preventDefault();

      var drinksArray = this.state.drinks;
      drinksArray.push({
        drink: this._inputDrink.value,
        calories: this._inputDrinkK.value});
      this.setState({
        drinks : drinksArray
        });

      this._inputDrink.value = "";
      this._inputDrinkK.value = "";
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

	let lastDrink = this.state.drinks[this.state.drinks.length-1];

	return(
			 <div>
				<p>Drink: {lastDrink.drink}</p>
				<p>Calories: {lastDrink.calories}</p>
				<Coffee colors={this.state.colors} />
			 </div>
		   )
          }
      }

export default Drinks