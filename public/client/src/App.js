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
      <div>
        <Coffee />
      </div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/coffee">Coffee</Link></li>
        <li><Link to="/topics">Topics</Link></li>
        <li><Link to="/drinks">Drinks</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/coffee" component={Coffee}/>
      <Route path="/topics" component={Topics}/>
      <Route path="/drinks" component={Drinks}/>
    </div>
  </Router>
)



const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const Drinks = ({match}) => (
  <div>
    <h3>hello drinnks</h3>
    <ul>
      <li>
          <p>coffee</p>
          <Link to={`${match.url}/caffeinated`}>
          caffeinated
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

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

export default App
