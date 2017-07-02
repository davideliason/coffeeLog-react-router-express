import React from 'react';
import './Coffee.css';


class Coffee extends React.Component{
    constructor(props){
    	super(props);
    	this.setState = {
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
			</div>
			)
	}
};

class Espresso extends React.Component{
	render(){
		return(
			<div>
				<p>espresso ></p>
			</div>
			);
	}
}

export default Coffee