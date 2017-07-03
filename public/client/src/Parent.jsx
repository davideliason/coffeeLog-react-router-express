import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import App from './App.js';
import About from './About.jsx';

class Parent extends Component{

	render(){
		var parentStyleUL = {
		  listStyleType: "none",
		  marginLeft: 200
	     };
	    var parentStyleLi = {
	    	display: "inline",
	    	marginLeft: 20,
	    	fontSize: "1.5em"
	    };
		return(
				<Router>
					<div >
						<ul style={parentStyleUL}>
							<li style={parentStyleLi}><Link to="/">Drinks</Link></li>
							<li style={parentStyleLi}><Link to="/about">About</Link></li>
						</ul>
						<Route exact path="/" component={App} />
						<Route exact path="/about" component={About} />
					</div>
				</Router>
			);
	}
}

export default Parent
