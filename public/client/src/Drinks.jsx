import React from 'react';

class Drinks extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			drinks: ["coffee","espresso"]
		}
	}
	render(){
		return(
				<p>Drinks: {this.state.drinks[0]}</p>
			);
	}
}

export default Drinks