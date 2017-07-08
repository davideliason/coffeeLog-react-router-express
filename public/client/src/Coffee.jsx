import React from 'react';

class Coffee extends React.Component {
	render(){
		return(
				<div>
					<p>Coffee color: {this.props.colors[0]}</p>
				</div>
			  )
	         }
           }

export default Coffee;