import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import App from './App.js';

class Parent extends Component{
	render(){
		return(
				<Router>
					<div>
						<ul>
							<li><Link to="/">Drinks</Link></li>
						</ul>
						<Route exact path="/" component={App} />
					</div>
				</Router>
			);
	}
}

export default Parent
