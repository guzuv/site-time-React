import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Games from './views/games'
import Home from './views/home'

const App = () => {
  return (
    <Router>
      <div>
    <!-- Ezoic Code -->
<script src="//www.ezojs.com/basicads.js?d=guzuv.ml" type="text/javascript"></script>
<!-- Ezoic Code -->
        <Route component={Games} exact path="/games" />
        <Route component={Home} exact path="/" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
