import React from 'react';
import Coffee from './Coffee.jsx';

class Drinks extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			drinks: this.props.drinks
		}
	}
	render(){
		return(
			 <div>
				<p>Drinks: {this.state.drinks.drink}</p>
				<Coffee colors={this.props.colors} />
			 </div>
			);
	}
}

export default Drinks