import React from 'react';
import Coffee from './Coffee.jsx';

class Drinks extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			drinks: this.props.drinks,
			colors: this.props.colors
		};
	}
	render(){
		let lastDrink = this.state.drinks[this.state.drinks.length-1];

		return(
			 <div>
				<p>Drink: {lastDrink.drink}</p>
				<p>Calories: {lastDrink.calories}</p>
				<Coffee colors={this.state.colors} />
			 </div>
			);
	}
}

export default Drinks