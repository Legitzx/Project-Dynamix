import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Rectangle from './views/rectangle'
import Registerstep1 from './views/registerstep1'
import Login from './views/login'
import Registerstep2 from './views/registerstep2'
import Search from './views/search'
import GymStatistics from './views/gym-statistics'
import MyInfections from './views/my-infections'
import Rectangle3 from './views/rectangle3'
import ScanResultsfail from './views/scan-resultsfail'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Rectangle} exact path="/" />
        <Route component={Registerstep1} exact path="/registerstep1" />
        <Route component={Login} exact path="/login" />
        <Route component={Registerstep2} exact path="/registerstep2" />
        <Route component={Search} exact path="/search" />
        <Route component={GymStatistics} exact path="/gym-statistics" />
        <Route component={MyInfections} exact path="/my-infections" />
        <Route component={Rectangle3} exact path="/rectangle3" />
        <Route component={ScanResultsfail} exact path="/scan-resultsfail" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
