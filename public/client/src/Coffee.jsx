import React from 'react';
import './Coffee.css';


class Coffee extends React.Component{
    constructor(props){
    	super(props);
    	this.state = {
    		drinks: "coffee"    	}
    }
	render(){
		var coffeeStyle = {
		   marginLeft: 50,
		   color: 'blue'
	    };

		return(
			<div style={coffeeStyle}>
				<p>hello </p>
				<Espresso name={this.state.drinks}/>
			</div>
			)
	}
};

class Espresso extends React.Component{
	render(){
		return(
			<div>
				<p>espresso {props.name} ></p>
			</div>
			);
	}
}

export default Coffee