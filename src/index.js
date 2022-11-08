import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import October2022 from './views/october2022'
import Archive from './views/archive'
import Games from './views/games'
import Home from './views/home'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={October2022} exact path="/oct22" />
        <Route component={Archive} exact path="/archive" />
        <Route component={Games} exact path="/games" />
        <Route component={Home} exact path="/" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
