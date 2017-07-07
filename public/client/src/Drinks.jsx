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
		return(
			 <div>
				<p>Drinks: {this.state.drinks[1].drink}</p>
				<Coffee colors={this.state.colors} />
			 </div>
			);
	}
}

export default Drinks