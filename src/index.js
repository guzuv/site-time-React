import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import October2022 from './views/october2022'
import Archive from './views/archive'
import January2023 from './views/january2023'
import December2022 from './views/december2022'
import Bounty from './views/bounty'
import Games from './views/games'
import Home from './views/home'
import November2022 from './views/november2022'
import Page from './views/page'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={October2022} exact path="/oct22" />
        <Route component={Archive} exact path="/archive" />
        <Route component={January2023} exact path="/jan23" />
        <Route component={December2022} exact path="/dec22" />
        <Route component={Bounty} exact path="/bounty" />
        <Route component={Games} exact path="/games" />
        <Route component={Home} exact path="/" />
        <Route component={November2022} exact path="/nov22" />
        <Route component={Page} path="**" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
