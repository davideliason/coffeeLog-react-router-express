import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Coffee from './Coffee.jsx'

const App = () => (
  <Router>
    <div>
     
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/coffee">Coffee</Link></li>
        <li><Link to="/drinks">Drinks</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/coffee" component={Coffee}/>
      <Route path="/drinks" component={Drinks}/>
    </div>
  </Router>
)



const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)



const Drinks = ({match}) => (
  <div>
    <h3>tasty drinks</h3>
    <ul>
      <li>
          <Link to={`${match.url}/caffeinated`}>
          caffeinated
          </Link>
      </li>
      <li>
        <Link to={`${match.url}/decaf`}>
          decaf
        </Link>
      </li>
    </ul>
    <Route path={`${match.url}/:drinkId`} component={Drink}/>
  </div>
)

const Drink = ({ match }) => (
      <div>
         <h3>{match.params.drinkId}</h3>
      </div>
  )

export default App
