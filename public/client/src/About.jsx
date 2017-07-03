import React from 'react';

class About extends React.Component {
	

	render(){
		var aboutStyle = {
			backgroundColor : "blue",
			width: 400,
			height: 400,
			marginLeft: 200,
			textAlign: "center",
			paddingTop: 50
	    };

		return(
				<div style={aboutStyle}>
					<h2>About</h2>
					<p>Lots of drinks to choose from</p>
				</div>
			);
	}
}

export default About