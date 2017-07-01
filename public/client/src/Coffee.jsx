import React from 'react';
import './Coffee.css';


class Coffee extends React.Component{

	render(){
		var coffeeStyle = {
		   marginLeft: 50,
		   color: 'red'
	    };

		return(
			<div style={coffeeStyle}>
				<p>hello coffee</p>
			</div>
			)
	}
};

export default Coffee