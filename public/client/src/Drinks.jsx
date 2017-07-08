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
	      colors : ["yellow"]
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
    let drinkStyle = {
      backgroundColor: this.state.colors[this.state.colors.length-1],
      width: 300,
      border: "1px solid white",
      padding: "5px 0px 5px 30px"
    };

	  let lastDrink = this.state.drinks[this.state.drinks.length-1];

	return(

			 <div>
         {/* input values for color and add drink */}
             

            
             <div style={drinkStyle}>
				        <p>Drink: {lastDrink.drink}</p>
			        	<p>Calories: {lastDrink.calories}</p>
               

                <form onSubmit={this.addDrink}>
                  <input ref={ (a) => this._inputDrink = a }placeholder="add drink"></input>
                  <input ref={ (b) => this._inputDrinkK = b }placeholder="add drink calories"></input>
                  <button type="submit">cheers!</button>
                </form>
             </div>

				     <Coffee colors={this.state.colors} />
             <form onSubmit={this.addColor}>
                <input ref={ (a) => this._inputColor = a }placeholder="update color"></input>
                <button className="colorButton" type="submit">update</button>
             </form>
			 </div>
		   )
          }
      }

export default Drinks