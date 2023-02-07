import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Oct2022 from './views/oct2022'
import Archive from './views/archive'
import Jan2023 from './views/jan2023'
import Dec2022 from './views/dec2022'
import Bounty from './views/bounty'
import Games from './views/games'
import Feb2023 from './views/feb2023'
import Home from './views/home'
import Nov2022 from './views/nov2022'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Oct2022} exact path="/oct22" />
        <Route component={Archive} exact path="/archive" />
        <Route component={Jan2023} exact path="/jan23" />
        <Route component={Dec2022} exact path="/dec22" />
        <Route component={Bounty} exact path="/bounty" />
        <Route component={Games} exact path="/games" />
        <Route component={Feb2023} exact path="/feb2023" />
        <Route component={Home} exact path="/" />
        <Route component={Nov2022} exact path="/nov22" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
