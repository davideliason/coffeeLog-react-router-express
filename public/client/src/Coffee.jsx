import React from 'react';

class Coffee extends React.Component {
	render(){
			let coffeeStyle = {
				border: "1px solid yellow",
				width: 200
			};

		return(
				<div style={coffeeStyle}>
					<p>Coffee Bg-color: {this.props.colors[0]}</p>
				</div>
			  )
	         }
           }

export default Coffee;