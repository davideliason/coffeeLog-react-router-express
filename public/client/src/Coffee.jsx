import React from 'react';

class Coffee extends React.Component {
	render(){
		return(
				<p>coffee: {this.props.type} </p>
			);
	}
}

export default Coffee;