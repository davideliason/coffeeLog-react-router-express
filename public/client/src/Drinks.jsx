import React from 'react';
import Coffee from './Coffee.jsx';

class Drinks extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			drinks: ["coffee","espresso"]
		}
	}
	render(){
		return(
			 <div>
				<p>Drinks: {this.state.drinks[0]}</p>
				<Coffee colors={this.props.colors} type="caffeinated" />
			 </div>
			);
	}
}

export default Drinks