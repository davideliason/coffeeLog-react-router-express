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
		return(
				<Router>
					<div>
						<ul>
							<li><Link to="/">Drinks</Link></li>
							<li><Link to="/about">About</Link></li>
						</ul>
						<Route exact path="/" component={App} />
						<Route exact path="/about" component={About} />
					</div>
				</Router>
			);
	}
}

export default Parent
