import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Oct22 from './views/oct22'
import Archive from './views/archive'
import Jan23 from './views/jan23'
import Dec22 from './views/dec22'
import Mar23 from './views/mar23'
import Bounty from './views/bounty'
import Games from './views/games'
import Feb23 from './views/feb23'
import Home from './views/home'
import Apr23 from './views/apr23'
import Nov22 from './views/nov22'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Oct22} exact path="/oct22" />
        <Route component={Archive} exact path="/archive" />
        <Route component={Jan23} exact path="/jan23" />
        <Route component={Dec22} exact path="/dec22" />
        <Route component={Mar23} exact path="/mar23" />
        <Route component={Bounty} exact path="/bounty" />
        <Route component={Games} exact path="/games" />
        <Route component={Feb23} exact path="/feb23" />
        <Route component={Home} exact path="/" />
        <Route component={Apr23} exact path="/apr23" />
        <Route component={Nov22} exact path="/nov22" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
