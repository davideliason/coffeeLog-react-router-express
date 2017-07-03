import React from 'react';

class Coffee extends React.Component {
	render(){
		return(
				<div>
					<p>coffee: {this.props.type} </p>
					<p>{this.props.colors}</p>
				</div>
			);
	}
}

export default Coffee;