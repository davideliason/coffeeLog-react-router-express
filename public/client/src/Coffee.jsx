import React from 'react';

class Coffee extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			drinks: [];
		}
		this.addDrink = this.addDrink.bind(this);
	}
	render(){
		return(
				<p>Coffee</p>
			);
	}
}

export default Coffee