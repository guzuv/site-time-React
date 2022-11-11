import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Page from './views/page'
import October2022 from './views/october2022'
import Archive from './views/archive'
import Games from './views/games'
import Home from './views/home'
import November2022 from './views/november2022'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Page} exact path="/page" />
        <Route component={October2022} exact path="/oct22" />
        <Route component={Archive} exact path="/archive" />
        <Route component={Games} exact path="/games" />
        <Route component={Home} exact path="/" />
        <Route component={November2022} exact path="/november2022" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
